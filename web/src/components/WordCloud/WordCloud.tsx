import { Text } from '@chakra-ui/react';
import { Link, routes } from '@redwoodjs/router';

const WordCloud = () => {

  const wordCloudItems = [
    { Tag: "AKT UND EROTIK", Weight: "1" },
    { Tag: "FOTOTHERAPIE", Weight: "1" },
    { Tag: "NATURPROJEKT", Weight: "1" },
    { Tag: "SHIBARI", Weight: "1" },
    { Tag: "PORTRAIT", Weight: "2" },
    { Tag: "STUDIO", Weight: "2" },
    { Tag: "PROJEKTE", Weight: "2" },
    { Tag: "FRAUENBILDER", Weight: "2" },
    { Tag: "MÄNNERPORTRAIT", Weight: "2" },
    { Tag: "NATUR UND TIER", Weight: "3" },
    { Tag: "OLDTIMER UND BIKES", Weight: "3" },
    { Tag: "FAMILIEN UND PAARE", Weight: "3" },
    { Tag: "STEAMPUNK", Weight: "3" },
    { Tag: "KINKY", Weight: "4" },
    { Tag: "MUSIK UND TANZ", Weight: "4" },
    { Tag: "PRODUKTE UND INSEZNIERUNGEN", Weight: "4" },
    { Tag: "TATTOO", Weight: "4" },
    { Tag: "BOUDOIR UND GLAMOUR", Weight: "5" },
    { Tag: "ANLÄSSE", Weight: "5" },
    { Tag: "BEWERBUNG", Weight: "5" },
    { Tag: "KIDS", Weight: "5" },
    { Tag: "FANTASIE UND COSPLAY", Weight: "6" },
    { Tag: "BABYBAUCH UND NEWBORN", Weight: "6" },
    { Tag: "ESSEN UND GETRÄNKE", Weight: "6" },
    { Tag: "DROHNE", Weight: "6" },
  ];

  const shuffledItems = wordCloudItems.sort(() => Math.random() - 0.5);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
      {shuffledItems.map((item) => (
        <Link
        to={routes.gallery()}
        key={item.Tag}
        style={{ textDecoration: 'none' }}
      >
        <Text
          fontSize={`${4 - (parseInt(item.Weight) * 0.5)}em`}
          fontWeight={700 - parseInt(item.Weight) * 100}
          style={{ margin: '0', padding: '5px' }}
          _hover={{ color: 'white' }}
        >
          {item.Tag}
        </Text>
      </Link>
      ))}
    </div>
  )
}

export default WordCloud
