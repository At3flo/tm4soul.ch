import { Image, Box, Heading, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import GridContainer from 'src/components/GridContainer/GridContainer'

import ImageTania from './Tania-1.jpg'

const WhoisPageTania = () => {
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
              <Heading color="primary.white">Tania</Heading>
              <Box fontSize="1.3em" color="primary.white">
                Einfühlungsvermögen und Empathie sind meine Eigenschaften, ich
                bin sehr bestrebt nach Harmonie und versuche stets, die
                Schönheit in jedem Menschen zu sehen. Am liebsten fotografiere
                ich Personen, wobei ich gerne den Blickwinkel und die
                Lichtführung so anpasse, um die verschiedenen Facetten einer
                Persönlichkeit darzustellen. Die meisten Menschen kennen sich
                nur durch den Blick in den Spiegel – doch da ist noch viel mehr,
                nicht selten staunen die Klienten nach einem Shooting über ihre
                fertigen Bilder und beginnen, sich mit anderen Augen zu sehen.
                So entstand die ursprüngliche Idee der Fototherapie. Mit den
                Jahren konnte ich meine Technik verfeinern und verschiedene
                Therapieformen mit einfliessen lassen.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Da ich sehr vielseitige Interessen habe, bin ich beruflich in
                verschieden Branchen gelandet - von der Erstausbildung,
                Detailhandel Parfumerie, kam ich zur Kosmetik im Aussendienst
                und nach diversen Gelegenheitsjobs in verschiedenen Bereichen
                bin ich schliesslich im Gesundheitswesen hängen geblieben und
                habe die Ausbildung als MTRA in der Radiologie absolviert. Nach
                fast 20 Jahren im Spital habe ich nach einer neuen
                Herausforderung gesucht und fand diese im Kraftwerk, wo ich drei
                Jahre als Strahlenschutz-Fachkraft im Rückbau in Mühleberg
                arbeitete. Eine Welt, in der ich mich nie so richtig einfinden
                konnte, und so zog es mich doch wieder zurück zur Medizin. Zur
                Zeit bin ich Hauptberuflich in der Nuklearmedizin tätig.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Auf der Suche nach dem Sinn des Lebens und um schliesslich den
                Weg zu mir selbst zu finden, habe ich auch in meiner Freizeit
                regelmässig verschiedene Seminare und Weiterbildungen besucht,
                vor allem zu spirituellen und medialen Themen, Coaching und
                Meditationen. Denn auch privat hatte ich stets ein sehr bewegtes
                Leben mit vielen Höhen und Tiefen, die ich bis heute nicht
                missen wollte. All das Erlebte machte mich zu der Person die ich
                heute bin, und erleichtert mir oft, meine Mitmenschen in
                schwierigen Zeiten beraten und zu begleiten zu können, und ich
                gebe mein erlebtes Wissen gerne weiter.
              </Box>
              <Box fontSize="1.3em" color="primary.white">
                Meinen Ausgleich finde ich beim Meditieren, in der Natur und in
                der Musik. Auch Sport und Bewegung haben einen hohen
                Stellenwert. Denn ein gesunder Geist braucht einen gesunden
                Körper.
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
              src={ImageTania}
              alt={`Tania`}
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

export default WhoisPageTania
