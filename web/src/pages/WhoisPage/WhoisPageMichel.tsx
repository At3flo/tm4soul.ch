import { Image, Box, Heading, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import GridContainer from 'src/components/GridContainer/GridContainer'

import ImageMichel from './Michel-1.jpg'

const WhoisPageMichel = () => {
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
              <Heading color="primary.white">Michel</Heading>
              <Box fontSize="1.3em" color="primary.white">
                Aufgewachsen bin im Seeland, und seit meinen diversen
                Ausbildungen beruflich bis vor Kurzem in der Innenarchitektur
                tätig. Doch manchmal läuft alles anders als geplant, und nun bin
                ich Leiter einer grösseren Brockenstube und beschäftige mit
                unserer Wegwerfgesellschaft und das Thema Nachhaltigkeit, was
                mir nicht immer einfach fällt. Ein wunderbarer Ausgleich bietet
                mir meine Liebe und Passion zur Kunst und Fotografie, welche ich
                bereits in jungen Jahren entdeckt und stetig weiterentwickelt
                habe. Egal ob mit Fotografien oder Kunstgegenständen, mein Motto
                ist es, bei den Menschen Gefühle und Fantasien zu erwecken, sie
                zum Träumen einzuladen und in eine andere Dimension eintauchen
                zu lassen.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Die Fotografie ermöglicht mir, den Zauber gewisser Momente
                einzufangen, den Menschen zu zeigen was ich mit meinen Augen und
                Herzen sehe. Sei dies die Schönheit der Natur oder meine
                Leidenschaft für alte Fahrzeuge. Ich liebe es, Inszenierungen zu
                erschaffen, dabei kann ich meinen Ideen freien Lauf lassen. Das
                Ergebnis sind spannende Projekte, wie zum Beispiel ein
                brennendes Klavier in der Natur, oder unzählige Taschenuhren,
                die von der Fotostudiodecke herunterhängen und den Uhrmacher
                verrückt machen.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Ebenso fasziniert mich die Sinnlichkeit der Frau, erotische
                Darstellungen von Mann und Frau, Liebe und Sexualität in Bildern
                und Formen. Grenzen ausloten – oder neu definieren. Alles liegt
                im Auge des Betrachters. Manche meiner Arbeiten mögen provokativ
                und frech sein, für mich steht dabei aber Schönheit und
                Sinnlichkeit an oberster Stelle. Sex und Erotik ist etwas
                Wundervolles, sich dabei, zum Beispiel in edlen Bildern
                anzusehen kann neue Türen oder Wege öffnen. Dazu berate ich auch
                Pärchen zu etwas ausgefallener Einrichtungen im Schlafzimmer und
                stelle manche Gegenstände selbst her. Ein spezieller Couchtisch
                oder eine ausgefallene Leuchte, ein hölzernes Andreaskreuz oder
                lederbezogene Spielfläche für Erwachsene…. Es ist wunderbar mit
                Holz, Metall, Leder, Samt in Berührung zu kommen – beim
                Erschaffen der Werke oder später mit nackter Haut – die
                Fantasien sind frei.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Vor etlichen Jahren entdeckte ich die Kunstbewegung Steampunk
                und war auf Anhieb davon begeistert. Kindheitserinnerungen und
                Fantasien wurden wach, beim Gedanken an die Geschichten von
                Jules Verne oder die fantastischen Erfindungen und Zeichnungen
                von Leonardo da Vinci. Ausserdem erinnerte ich mich an meine
                Urgrossväter, die mir als Uhrenmacher das Flair und zahlreiche
                alte Uhren vermachten, die zwar seit langer Zeit nicht mehr
                funktionstüchtig waren, die ich aber wie ein Schatz all die
                Jahre hütete. Ich begann, meine eigenen Skulpturen zu kreieren.
                Uhrwerke und Zahnräder wurden zu einer Art Motor für meine
                Arbeiten und sind seither auf all meinen Werken zu finden.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Was mir ausserdem am Steampunk gefällt ist die Handhabung, alte,
                schöne und edle Gegenstände in etwas Neues umzuwandeln, sie zu
                neuem Leben erwecken. Nachhaltigkeit in Objekten die Geschichten
                erzählen, Menschen zum Denken und Schmunzeln anregen - der
                Zauber einer längst vergangenen Zukunft.
              </Box>
            </Stack>
          </Box>
        }
        sideComponent={
          <Box
            key={1}
            width="100%"
            height="90%"
            overflow="hidden"
            borderRadius="md"
            marginTop="3em"
            marginLeft="3em"
            marginRight="3em"
          >
            <Image
              src={ImageMichel}
              alt={`Michel`}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        }
      />
    </>
  )
}

export default WhoisPageMichel
