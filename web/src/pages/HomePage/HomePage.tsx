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
        templateAreas={{
          lg: `"nav nav"
                  "main feed"`,
          base: `"nav"
                  "main"
                  "feed"`,
        }}
        gridTemplateRows={{
          lg: '7em calc(100vh - 7em)',
          base: '7em 0.1fr 0.9fr',
        }}
        gridTemplateColumns={{ lg: '1.3fr 0.7fr', base: '1fr' }}
        rowGap="0"
        columnGap="0"
      >
        <GridItem
          bg="primary.black"
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
