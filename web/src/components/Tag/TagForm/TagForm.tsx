import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTagByUuidTag, UpdateTagInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTag = NonNullable<EditTagByUuidTag['tag']>

interface TagFormProps {
  tag?: EditTagByUuidTag['tag']
  onSave: (data: UpdateTagInput, uuidTag?: FormTag['uuidTag']) => void
  error: RWGqlError
  loading: boolean
}

const TagForm = (props: TagFormProps) => {
  const onSubmit = (data: FormTag) => {
    props.onSave(data, props?.tag?.uuidTag)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTag> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="tagTitleNormalized"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag title normalized
        </Label>

        <TextField
          name="tagTitleNormalized"
          defaultValue={props.tag?.tagTitleNormalized}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tagTitleNormalized" className="rw-field-error" />

        <Label
          name="tagTitleWithDiacritics"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag title with diacritics
        </Label>

        <TextField
          name="tagTitleWithDiacritics"
          defaultValue={props.tag?.tagTitleWithDiacritics}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="tagTitleWithDiacritics" className="rw-field-error" />

        <Label
          name="tagDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag description
        </Label>

        <TextField
          name="tagDescription"
          defaultValue={props.tag?.tagDescription}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="tagDescription" className="rw-field-error" />

        <Label
          name="tagWeight"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag weight
        </Label>

        <NumberField
          name="tagWeight"
          defaultValue={props.tag?.tagWeight}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tagWeight" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TagForm
