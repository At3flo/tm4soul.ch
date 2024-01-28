import { useQuery, gql } from '@apollo/client'
import { Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import { useInterfaceStateStore } from 'src/hooks/useInterfaceStateStore'

const QUERY = gql`
  query FindTagsFromWordCloud {
    tags {
      tagTitleNormalized
      tagWeight
    }
  }
`

const WordCloud = () => {
  const { updateTags } = useInterfaceStateStore()

  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const tags = data.tags

  const shuffledItems = [...tags].sort(() => Math.random() - 0.5)

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
          key={item.tagTitleNormalized}
          style={{ textDecoration: 'none' }}
          onClick={() => updateTags(item.tagTitleNormalized)}
        >
          <Text
            fontSize={`${4 - parseInt(item.tagWeight) * 0.5}em`}
            fontWeight={700 - parseInt(item.tagWeight) * 100}
            color="primary.gray"
            style={{ margin: '0', padding: '5px' }}
            _hover={{ color: 'primary.accent' }}
          >
            {item.tagTitleNormalized}
          </Text>
        </Link>
      ))}
    </div>
  )
}

export default WordCloud
