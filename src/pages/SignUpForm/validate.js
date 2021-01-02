import { getFuncValidateFields, isEmailInvalid, isRequired } from '../../form/validationHelpers'

const validate = getFuncValidateFields({
  email: [isRequired, isEmailInvalid],
  password: [isRequired]
})

export default validate
