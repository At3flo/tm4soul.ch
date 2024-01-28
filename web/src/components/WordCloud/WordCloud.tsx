import { Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import { useInterfaceStateStore } from 'src/hooks/useInterfaceStateStore'

import GalleryTags from '../GalleryTags/GalleryTags'

const WordCloud = () => {
  const shuffledItems = GalleryTags.sort(() => Math.random() - 0.5)

  const { updateTags } = useInterfaceStateStore()

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      {shuffledItems.map((item) => (
        <Link
          to={routes.gallery()}
          key={item.Tag}
          style={{ textDecoration: 'none' }}
          onClick={() => updateTags(item.Tag)}
        >
          <Text
            fontSize={`${4 - parseInt(item.Weight) * 0.5}em`}
            fontWeight={700 - parseInt(item.Weight) * 100}
            color="primary.gray"
            style={{ margin: '0', padding: '5px' }}
            _hover={{ color: 'primary.accent' }}
          >
            {item.Tag}
          </Text>
        </Link>
      ))}
    </div>
  )
}

export default WordCloud
