// move to utils
// [foo, bar] => {foo: true, bar: true}
export const arrayToLookup = source => source.map(key => [key, true]).fromEntries()
// {foo: true, bar: true, baz: false} => // [foo, bar]
export const lookupToArray = source => Object.keys(source).filter(key => source[key])

// makeArray takes value and converts it to an array unless the value is already an array
//  this is useful when converting prop types to a known value
export const makeArray = (value) => {
  return Array.isArray(value) ? value : [value]
}
// makeArray('FOO') => ['FOO']
// makeArray(['FOO', 'BAR']) =? ['FOO', 'BAR']
