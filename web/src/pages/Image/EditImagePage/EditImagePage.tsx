import EditImageCell from 'src/components/Image/EditImageCell'

type ImagePageProps = {
  uuidImage: string
}

const EditImagePage = ({ uuidImage }: ImagePageProps) => {
  return <EditImageCell uuidImage={uuidImage} />
}

export default EditImagePage
