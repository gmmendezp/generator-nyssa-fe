export const alphaNumeric = message => value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? message || 'Only alphanumeric characters'
    : undefined

export const checkEmail = message => value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message || 'Invalid email address'
    : undefined

export const maxLength = (max, message) => value =>
  value.length > max
    ? message || `Must be ${max} characters or less`
    : undefined

export const minLength = (min, message) => value =>
  value.length < min
    ? message || `Must be ${min} characters or more`
    : undefined

export const number = message => value =>
  value && isNaN(Number(value)) ? message || 'Must be a number' : undefined

export const required = message => value =>
  value ? undefined : message || 'The field is required'
