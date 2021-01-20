export const getError = meta => {
  const {
    error = '',
    touched
  } = meta
  const inProgressError = error && error[0] === '-'
  const displayError = inProgressError
    ? error.substring(1)
    : error
  const suppressError = inProgressError && !touched
  const errorMessage = suppressError
    ? ''
    : displayError
  return {
    showError: !!errorMessage,
    errorMessage
  }
}
