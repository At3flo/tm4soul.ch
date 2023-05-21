import { Box, Heading, Stack } from '@chakra-ui/react'

const Feed = () => {
  const rows = []
  rows.push(
    <div key="1551616516">
      <Heading color="primary.white">May 21 at 15:53 PM</Heading>
      <Box color="primary.white">New post from Facebook</Box>
    </div>
  )
  for (let i = 0; i < 3; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <div key={i}>
        <Heading color="primary.white">April 11 at 9:13 PM</Heading>
        <Box color="primary.white">
          Wenn man sich, wie in einem Käfig fühlt... manchmal ist der Schlüssel
          zum Frei sein, näher als man `&quot;`Denkt`&quot;` 🍀™️
        </Box>
      </div>
    )
  }
  return (
    <Stack spacing="3em" p="10">
      {rows}
    </Stack>
  )
}

export default Feed
