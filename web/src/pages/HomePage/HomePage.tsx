import { Divider, Grid, GridItem, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Feed/Feed'
import Navbar from 'src/components/Navbar/Navbar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Grid
        templateAreas={`"nav nav"
                  "main feed"`}
        gridTemplateRows={'7em calc(100vh - 7em)'}
        gridTemplateColumns={'70vw'}
        rowGap="0"
        columnGap="0"
      >
        <GridItem
          p="2"
          bg="orange.300"
          area={'nav'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Navbar />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={'main'}>
          Nav
        </GridItem>
        <GridItem py="8em" bg="green.200" area={'feed'}>
          <Stack direction="row" h="calc(100vh - 24em)">
            <Divider
              orientation="vertical"
              borderWidth="2px"
              borderColor="white"
            />
            <Feed />
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
