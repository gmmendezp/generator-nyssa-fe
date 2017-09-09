import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { style } from 'typestyle'
import { CSS } from './constants'
import { FIELD_NAME, FIELD_TYPE, FIELD_COMPONENTS } from './form'
import Button from 'material-ui/Button'

/**
 * Create a form the following way: createForm(fields, options)
 * Fields should have the following format:
 * {
 *   name: 'string',
 *   label: 'string',
 *   field: <field type from FIELD_TYPE enum>,
 *   validate: <validation object list>
 *   ...
 * }
 * Options should have the followgin format:
 * {
 *   formName: 'string',
 *   buttonProps: {} // Look for material-ui docs for props
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
        type: fieldType,
        className: style(this.styles.input)
      },
      other
    )
    if (label) {
      otherProps.label = label
    }
    if (touched && error) {
      otherProps.helperText = error
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

const createForm = (fields, { formName, buttonProps }) => {
  class CustomForm extends Component {
    constructor () {
      super()
      this.styles = {
        field: { marginBottom: '10px' },
        input: { marginBottom: '0 !important' },
        error: { color: CSS.ERROR_COLOR, fontSize: '0.8em' }
      }
      this.renderField = getRenderField().bind(this)
      this.fields = fields
    }

    render () {
      const { handleSubmit, styles } = this.props
      return (
        <form onSubmit={handleSubmit} className={style(styles.form)}>
          {this.fields.map(({ name, validate, ...others }) => {
            const { fieldType = FIELD_NAME.TEXT } = others
            others.fieldType = fieldType
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
          <Button {...buttonProps} type='submit'>
            Submit
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
