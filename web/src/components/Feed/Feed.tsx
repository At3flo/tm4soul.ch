import { Box, Heading, Link, Stack } from '@chakra-ui/react'

import image_post_1 from './image_post_1.jpg'

const Feed = () => {
  const rows = []
  rows.push(
    <div key="1551616516">
      <img
        src={image_post_1}
        alt="Test number 1"
        width="80%"
        style={{ display: 'block', margin: 'auto', paddingBottom: '2em' }}
      />
      <Heading color="primary.white">Meditation trifft Kunst 2.9.2023</Heading>
      <Box color="primary.white">
        Sehnst du dich nach Verbundenheit mit allem was ist? Sehnst du dich
        danach deine Horizonte zu erweitern? Dann bist du an unserem
        Meditationsabend herzlich willkommen. Lasse dich durch Kunst inspirieren
        und durch Meditation in die Verbundenheit mit allem gehen, sogar in die
        Verbundenheit mit der geistigen Welt. Melde dich schnell für diesen
        besonderen Meditationsabend an, die Plätze sind beschränkt.&nbsp;
        <Link color="primary.link">https://www.nathalie-ruffieux.ch/seminar/meditation</Link>
      </Box>
    </div>
  )
  // for (let i = 0; i < 3; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(
  //     <div key={i}>
  //       <Heading color="primary.white">April 11 at 9:13 PM</Heading>
  //       <Box color="primary.white">
  //         Wenn man sich, wie in einem Käfig fühlt... manchmal ist der Schlüssel
  //         zum Frei sein, näher als man `&quot;`Denkt`&quot;` 🍀™️
  //       </Box>
  //     </div>
  //   )
  // }
  return (
    <Stack spacing="3em" p="10">
      {rows}
    </Stack>
  )
}

export default Feed
