import TagCell from 'src/components/Tag/TagCell'

type TagPageProps = {
  uuidTag: string
}

const TagPage = ({ uuidTag }: TagPageProps) => {
  return <TagCell uuidTag={uuidTag} />
}

export default TagPage
