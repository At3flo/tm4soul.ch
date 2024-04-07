import { useState } from 'react'

import type { EditImageByUuidImage } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  Submit,
  FileField,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'

interface ImageFormProps {
  image?: EditImageByUuidImage['image']
  onSave: (data: string, originalFile?: File, selectedTags?: string[]) => void
  error: RWGqlError
  loading: boolean
}

export const GET_TAGS_QUERY = gql`
  query GetTags {
    tags {
      tagTitleNormalized
    }
  }
`

const ImageForm = (props: ImageFormProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { data: tagsData } = useQuery(GET_TAGS_QUERY)

  const onSubmit = async (data: { file: FileList }) => {
    props.onSave(data.file[0].name, data.file[0], selectedTags)
  }

  // Handle changes in the multi-select field
  const handleTagSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )
    setSelectedTags(selectedOptions)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<{ file: FileList }> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="file"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          File
        </Label>

        <FileField
          name="file"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="file" className="rw-field-error" />

        <Label
          name="tags"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tags
        </Label>

        <select
          multiple
          name="tags"
          value={selectedTags}
          onChange={handleTagSelectionChange}
          className="rw-input"
        >
          {tagsData?.tags.map((tag) => (
            <option key={tag.tagTitleNormalized} value={tag.tagTitleNormalized}>
              {tag.tagTitleNormalized}
            </option>
          ))}
        </select>

        <FieldError name="tags" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
