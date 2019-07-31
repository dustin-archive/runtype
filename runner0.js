
const isString = value => {
  if (typeof value === 'string') {
    return true
  }
  return false
}

const isOptional = value => {
  if (value.startsWith('$')) {
    return true
  }
  return false
}

const needsArray = value => {
  if (value.endsWith('[]')) {
    return true
  }
  return false
}

const runtype = (data, structure) => {
  for (let key in structure) {
    const value = data[key] // get the value parallel to the current key
    const expectedType = structure[key]






    console.log(value, expectedType)

    if (expectedType === 'string') {
      const result = isString(value)

      console.log('result', result)

      if (result === false) {
        return `Error! ${key} is not a string!`
      }
    }
  }

  return 'All good!'
}

const parse = data => {
  for (let key in data) {

  }
}

export default runtype

const data = {
  foo: 'bar',
  bar: ['foo', 'bar', 'baz'],
  baz: [1, 2, 3]
}

const output = {
  foo: 'string | number',
  bar: '(string | number)[]', // string or number array
  baz: 'string[] | number[]' // stringArray or numberArray
  // $baz: 'number'
}

const x = {
  foo: [
    { type: 'string' },
    { type: 'number' }
  ],
  bar: [
    { type: 'array', arrayTypes: ['string', 'number'] }
  ],
  baz: [
    { type: 'array', arrayTypes: ['string'] },
    { type: 'array', arrayTypes: ['number'] }
  ]
}
