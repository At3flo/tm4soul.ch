import { Center, Divider, Grid, GridItem, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Feed/Feed'
import GridContainer from 'src/components/GridContainer/GridContainer'
import Navbar from 'src/components/Navbar/Navbar'
import NavigationLogo from 'src/components/NavigationLogo/NavigationLogo'

const HomePage = () => {
  return (

    <>
      <MetaTags title="Home" description="Home page" />

      <GridContainer mainComponent={<NavigationLogo />} sideComponent={<Feed />} />

    </>
  )
}

export default HomePage
