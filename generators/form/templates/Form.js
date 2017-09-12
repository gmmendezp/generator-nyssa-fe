import createForm from 'utils/createForm'
import { FIELD_NAME } from 'utils/form'
import { checkEmail, required } from 'utils/validators'

let fields = [
  {
    name: 'first_name',
    label: 'First Name',
    placeholder: 'First Name',
    fieldType: FIELD_NAME.TEXT,
    rows: 2,
    required: true,
    validate: [required()],
    helpText: 'This is some extra info'
  },
  {
    name: 'birthday',
    fieldType: FIELD_NAME.DATE,
    label: 'Birthday',
    placeholder: 'mm/dd/yyyy',
    required: true,
    validate: [required()]
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    fieldType: FIELD_NAME.TEXT,
    validate: [checkEmail()]
  }
]

let <%= name %> = createForm({
  fields,
  formName: '<%= name %>',
  submitButton: {
    text: 'Submit',
    props: {
      primary: true,
      raised: true
    }
  }
})

export default <%= name %>
