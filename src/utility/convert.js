// move to utils
// [foo, bar] => {foo: true, bar: true}
export const arrayToLookup = source => source.map(key => [key, true]).fromEntries()
// {foo: true, bar: true, baz: false} => // [foo, bar]
export const lookupToArray = source => Object.keys(source).filter(key => source[key])
