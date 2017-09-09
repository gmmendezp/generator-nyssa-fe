import React from 'react'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import Checkbox from 'material-ui/Checkbox'
import Input, { InputLabel } from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Select from 'material-ui/Select'
import Switch from 'material-ui/Switch'

export const FIELD_NAME = {
  CHECKBOX: 'checkbox',
  DATE: 'date',
  DATETIME: 'datetime-local',
  PASSWORD: 'password',
  RADIO: 'radio',
  SELECT: 'select',
  SWITCH: 'switch',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  TIME: 'time'
}

export const FIELD_TYPE = {
  [FIELD_NAME.CHECKBOX]: 'checkbox',
  [FIELD_NAME.DATE]: 'date',
  [FIELD_NAME.PASSWORD]: 'password',
  [FIELD_NAME.RADIO]: 'text',
  [FIELD_NAME.SELECT]: 'select',
  [FIELD_NAME.SWITCH]: 'text',
  [FIELD_NAME.TEXT]: 'text',
  [FIELD_NAME.TEXTAREA]: 'textarea',
  [FIELD_NAME.TIME]: 'time'
}

export const FIELD_COMPONENTS = {
  [FIELD_NAME.CHECKBOX]: (...allProps) => {
    const { label, value, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl margin='normal' {...{ error }}>
        {label ? (
          <FormControlLabel control={<Checkbox {...props} />} label={label} />
        ) : (
          <Checkbox {...props} />
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.DATE]: (...props) => (
    <TextField
      margin='normal'
      {...Object.assign({}, ...props)}
      InputLabelProps={{ shrink: true }}
    />
  ),
  [FIELD_NAME.DATETIME]: (...props) => (
    <TextField
      margin='normal'
      {...Object.assign({}, ...props)}
      InputLabelProps={{ shrink: true }}
    />
  ),
  [FIELD_NAME.PASSWORD]: (...props) => (
    <TextField margin='normal' {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.RADIO]: (...allProps) => {
    const { options, label, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl margin='normal' {...{ error }}>
        <FormLabel component='legend'>{label}</FormLabel>
        <RadioGroup aria-label={label} {...props}>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              control={<Radio />}
              value={option.value}
              label={option.text}
            />
          ))}
        </RadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.SELECT]: (...allProps) => {
    const {
      options,
      label,
      helperText,
      error,
      onChange,
      ...props
    } = Object.assign({}, ...allProps)
    return (
      <FormControl margin='normal' {...{ error }} {...props}>
        <InputLabel htmlFor='legend'>{label}</InputLabel>
        <Select
          input={<Input id='legend' />}
          onChange={event => onChange(event.target.value)}
          {...props}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.SWITCH]: (...allProps) => {
    const { label, value, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl margin='normal' {...{ error }}>
        {label ? (
          <FormControlLabel control={<Switch {...props} />} label={label} />
        ) : (
          <Switch {...props} />
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.TEXT]: (...props) => (
    <TextField margin='normal' {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.TEXTAREA]: (...props) => (
    <TextField margin='normal' multiline {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.TIME]: (...props) => (
    <TextField
      margin='normal'
      {...Object.assign({}, ...props)}
      InputLabelProps={{ shrink: true }}
    />
  )
}
