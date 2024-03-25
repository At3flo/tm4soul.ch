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

type FormImage = NonNullable<EditImageByUuidImage['image']>

interface ImageFormProps {
  image?: EditImageByUuidImage['image']
  onSave: (
    data: string,
    originalFile?: File,
    uuidImage?: FormImage['uuidImage']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ImageForm = (props: ImageFormProps) => {
  const onSubmit = (data: FormImage) => {
    props.onSave(data.file[0].name, data.file[0], props?.image?.uuidImage)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormImage> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.image?.file}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="file" className="rw-field-error" />

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
