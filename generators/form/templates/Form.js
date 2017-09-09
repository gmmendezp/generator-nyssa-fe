import createForm, { FIELD_TYPE } from 'utils/createForm'

let <%= name %> = createForm(
  [
    {
      name: 'first_name',
      label: 'First Name',
      type: FIELD_TYPE.TEXTAREA,
      validate: [value => (value ? undefined : 'Required')]
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: FIELD_TYPE.TEXT
    },
    {
      name: 'email',
      label: 'Email',
      type: FIELD_TYPE.EMAIL
    }
  ],
  {
    formName: '<%= name %>',
    showPlaceholders: false,
    showLabels: true
  }
)

export default <%= name %>
