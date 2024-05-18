import { Image, Box, Heading, Stack, VStack } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GridContainer from 'src/components/GridContainer/GridContainer'

import ImageMichel from './Michel-1.jpg'
import ImageTania from './Tania-1.jpg'

const WhoisPage = () => {
  return (
    <>
      <MetaTags title="Über Uns" description="Über Uns" />

      <GridContainer
        mainComponent={
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            height="100%"
          >
            <Stack spacing="3em" p="10">
              <Heading color="primary.white">Über Uns</Heading>
              <Box fontSize="1.3em" color="primary.white">
                Kreativität mit und für Herz, Seele und Körper. Fotografie,
                Kunst und Spiritualität sind die Leidenschaften, die uns
                verbinden, die Grundsteine unseres Schaffens. Gemeinsam puschen
                wir uns gegenseitig zu immer neuen Ideen, und schleifen an den
                Details bis hin zur Perfektion.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                So ist schliesslich TM 4Soul entstanden, das Kleeblatt für die
                Seele. Jedes Kleeblatt steht für sein eigenes Thema, wobei bei
                Nummer 1 und 4 die Energien von uns beiden zu gleichen Teilen
                enthält. Kleeblatt Nummer 2, Meditation und Therapie wird vor
                allem von Tania betreut und der Handwerkliche Teil vom Kleeblatt
                Nummer 3, wo Michel im Atelier seine Kreativität voll und ganz
                ausleben kann.
              </Box>
            </Stack>
          </Box>
        }
        sideComponent={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="90%"
          >
            <Link to={routes.whoisTania()}>
              <Box
                key={1}
                width="12em"
                height="12em"
                overflow="hidden"
                borderRadius="md"
                marginTop="3em"
              >
                <Image
                  src={ImageTania}
                  alt={`Tania`}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Heading color="primary.white"> Tania Villard</Heading>
            </Link>
            <VStack spacing="3em" align="center" marginTop="3em"></VStack>
            <Link to={routes.whoisMichel()}>
              <Box
                key={2}
                width="12em"
                height="12em"
                overflow="hidden"
                borderRadius="md"
                marginTop="3em"
              >
                <Image
                  src={ImageMichel}
                  alt={`Michel`}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Heading color="primary.white"> Michel Villard</Heading>
            </Link>
          </Box>
        }
      />
    </>
  )
}

export default WhoisPage
