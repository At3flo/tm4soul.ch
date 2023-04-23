import { Heading, Stack } from '@chakra-ui/react'

const Feed = () => {
  const rows = []
  for (let i = 0; i < 3; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <div key={i}>
        <Heading>April 11 at 9:13 PM</Heading>
        <p>
          Wenn man sich, wie in einem Käfig fühlt... manchmal ist der Schlüssel
          zum Frei sein, näher als man `&quot;`Denkt`&quot;` 🍀™️
        </p>
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
