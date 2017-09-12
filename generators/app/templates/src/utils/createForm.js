import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { style } from 'typestyle'
import { FIELD_NAME, FIELD_TYPE, FIELD_COMPONENTS } from './form'
import Button from 'react-md/lib/Buttons/Button'

/**
 * Create a form the following way: createForm(options)
 * Options should have the followgin format:
 * {
 *   fields: [{
 *     name: 'string',
 *     label: 'string',
 *     field: <field type from FIELD_TYPE enum>,
 *     validate: <validation object list>
 *     ...
 *   }],
 *   formName: 'string',
 *   submitButton: {
 *     text: 'Submit',
 *     props: {
 *       raised: true
 *     }
 *   }, // Look for react-md docs for props
 * }
 */

const getRenderField = () => {
  return function ({
    input,
    label,
    fieldType,
    type,
    meta: { touched, error },
    extra,
    ...other
  }) {
    let otherProps = Object.assign(
      {},
      {
        type: fieldType
      },
      other
    )
    if (label) {
      otherProps.label = label
    }
    if (touched && error) {
      otherProps.errorText = error
      otherProps.error = true
    }
    return (
      <div>
        {FIELD_COMPONENTS[fieldType](input, otherProps)}
        {extra}
      </div>
    )
  }
}

const createForm = ({
  fields,
  styles,
  formName,
  submitButton: { text: submitText, props: submitProps },
  beforeSubmit,
  afterSubmit
}) => {
  class CustomForm extends Component {
    constructor () {
      super()
      this.styles = styles || {}
      this.renderField = getRenderField().bind(this)
      this.fields = fields
      this.beforeSubmit = beforeSubmit
      this.afterSubmit = afterSubmit
    }

    submit () {
      this.beforeSubmit && this.beforeSubmit()
      this.props.handleSubmit(...arguments)
      this.afterSubmit && this.afterSubmit()
    }

    render () {
      const { styles } = this.props
      return (
        <form onSubmit={this.submit.bind(this)} className={style(styles.form)}>
          {this.fields.map(({ name, validate, ...others }) => {
            const { fieldType = FIELD_NAME.TEXT } = others
            others.fieldType = fieldType
            others.id = name
            return (
              <div key={name} className={style(this.styles.field)}>
                <Field
                  name={name}
                  type={FIELD_TYPE[fieldType]}
                  component={this.renderField}
                  validate={validate}
                  {...others}
                  props={others}
                />
              </div>
            )
          })}
          <Button {...submitProps} type='submit'>
            {submitText}
          </Button>
        </form>
      )
    }
  }

  CustomForm.defaultProps = {
    styles: {}
  }

  return reduxForm({
    form: formName
  })(CustomForm)
}

export default createForm
