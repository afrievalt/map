import { isEmailInvalid, getFuncValidateFields }  from "./validationHelpers"

const NO_ERROR = {};
describe("isEmailInvalid - ", ()=> {
  it("when valid email > no error  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "valid@email.com"});

    // assert
    expect(result).toEqual(NO_ERROR)
  })

  it("when partial email > -Invalid  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "in-progress@email"});

    // assert
    expect(result).toEqual({email: "-Invalid"})
  })

  it("when partial email > -Invalid  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "in-progress@"});

    // assert
    expect(result).toEqual({email: "-Invalid"})
  })

  it("when partial email > -Invalid  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "in-progress"});

    // assert
    expect(result).toEqual({email: "-Invalid"})
  })

  it("when partial email > -Invalid  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "in-progress"});

    // assert
    expect(result).toEqual({email: "-Invalid"})
  })

  it("bad email > -Invalid  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: "in-@@progress"});

    // assert
    expect(result).toEqual({email: "Invalid"})
  })

  it("no email > - no error  ", ()=> {
    // arrange
    const validate = getFuncValidateFields({
      email: isEmailInvalid
    })
    // act
    const result = validate({email: ""});

    // assert
    expect(result).toEqual(NO_ERROR)
  })


})