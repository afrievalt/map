import { getFuncValidateFields, getIsTooLong, isNumberInvalid, isRequired } from '../../form/validationHelpers'

const validate = getFuncValidateFields.log(
  {
    id: [
      isRequired, isNumberInvalid
    ],
    lastName: [
      isRequired, getIsTooLong(200)
    ],
    studentFirstName: [
      isRequired, getIsTooLong(200)
    ],
    studentLastName: [
      isRequired, getIsTooLong(200)
    ]
  }
)

export default validate
