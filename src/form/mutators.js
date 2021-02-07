const setValueMutator = (
  [fieldId, value],
  state,
  { changeValue }
) => {
  changeValue(state, fieldId, () => value)
}

const mutators = { setValueMutator }
export default mutators
