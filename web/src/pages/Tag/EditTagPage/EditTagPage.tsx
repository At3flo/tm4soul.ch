import EditTagCell from 'src/components/Tag/EditTagCell'

type TagPageProps = {
  uuidTag: string
}

const EditTagPage = ({ uuidTag }: TagPageProps) => {
  return <EditTagCell uuidTag={uuidTag} />
}

export default EditTagPage
