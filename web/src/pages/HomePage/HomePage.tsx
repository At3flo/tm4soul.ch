import { Center, Divider, Grid, GridItem, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Feed/Feed'
import Navbar from 'src/components/Navbar/Navbar'
import NavigationLogo from 'src/components/NavigationLogo/NavigationLogo'

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
          bg="primary.gray"
          area={'nav'}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Navbar />
        </GridItem>
        <GridItem bg="primary.black" area={'main'}>
          <Center>
            <NavigationLogo />
          </Center>
        </GridItem>
        <GridItem py="8em" bg="primary.black" area={'feed'}>
          <Stack direction="row" h="calc(100vh - 24em)">
            <Divider
              orientation="vertical"
              borderWidth="2px"
              borderColor="primary.white"
            />
            <Feed />
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
