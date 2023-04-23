import { Grid, GridItem } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

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
        columnGap="6"
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
        <GridItem pl="2" bg="green.300" area={'feed'}>
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
