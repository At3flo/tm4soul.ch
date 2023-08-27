import { Center, Divider, Grid, GridItem, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Feed/Feed'
import Navbar from 'src/components/Navbar/Navbar'
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import WordCloud from 'src/components/WordCloud/WordCloud';
import CategoryDescription from 'src/components/CategoryDescription/CategoryDescription';
import GridContainer from 'src/components/GridContainer/GridContainer';


const PhotographyPage = () => {
  return (
    <>
      <MetaTags title="Photography" description="Photography page" />

      <GridContainer mainComponent={<WordCloud />} sideComponent={<CategoryDescription />} />

    </>
  )
}

export default PhotographyPage
