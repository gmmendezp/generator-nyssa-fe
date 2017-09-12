import React from 'react'
import Autocomplete from 'react-md/lib/Autocompletes'
import Checkbox from 'react-md/lib/SelectionControls/Checkbox'
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer'
import SelectionControlGroup from 'react-md/lib/SelectionControls/SelectionControlGroup'
import SelectField from 'react-md/lib/SelectFields'
import Switch from 'react-md/lib/SelectionControls/Switch'
import TextField from 'react-md/lib/TextFields'
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer'

export const FIELD_NAME = {
  AUTOCOMPLETE: 'autocomplete',
  CHECKBOX: 'checkbox',
  DATE: 'date',
  PASSWORD: 'password',
  RADIO: 'radio',
  SELECT: 'select',
  SWITCH: 'switch',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  TIME: 'time'
}

export const FIELD_TYPE = {
  [FIELD_NAME.AUTOCOMPLETE]: 'text',
  [FIELD_NAME.CHECKBOX]: 'checkbox',
  [FIELD_NAME.DATE]: 'text',
  [FIELD_NAME.PASSWORD]: 'password',
  [FIELD_NAME.RADIO]: 'text',
  [FIELD_NAME.SELECT]: 'select',
  [FIELD_NAME.SWITCH]: 'text',
  [FIELD_NAME.TEXT]: 'text',
  [FIELD_NAME.TIME]: 'text'
}

export const FIELD_COMPONENTS = {
  [FIELD_NAME.AUTOCOMPLETE]: (...props) => {
    let { type, ...inputProps } = Object.assign({}, ...props)
    return <Autocomplete onAutocomplete={inputProps.onChange} {...inputProps} />
  },
  [FIELD_NAME.CHECKBOX]: (...props) => (
    <Checkbox {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.DATE]: (...props) => (
    <DatePicker {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.PASSWORD]: (...props) => (
    <TextField {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.RADIO]: (...props) => (
    <SelectionControlGroup {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.SELECT]: (...props) => (
    <SelectField {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.SWITCH]: (...props) => (
    <Switch {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.TEXT]: (...props) => (
    <TextField {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.TIME]: (...props) => (
    <TimePicker {...Object.assign({}, ...props)} />
  )
}
