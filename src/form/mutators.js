const setValueMutator = (
  [fieldId, value],
  state,
  { changeValue }
) => {
  changeValue(state, fieldId, () => value)
}

export default { setValueMutator }
