import ImageCell from 'src/components/Image/ImageCell'

type ImagePageProps = {
  uuidImage: string
}

const ImagePage = ({ uuidImage }: ImagePageProps) => {
  return <ImageCell uuidImage={uuidImage} />
}

export default ImagePage
