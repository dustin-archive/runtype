
const arrayGroup = /\((.+)\)\[\]/ // (foo bar baz)[] => foo bar baz
const arrayType = /(.+)\[\]/ // string[] => string
const splitOr = /\|/

const node = data => {
  if (arrayGroup.test(data)) {
    return [{
      type: 'array',
      arrayTypes: data.match(arrayGroup)[1].split(splitOr)
    }]
  }

  const result = []
  const types = data.split(splitOr)

  for (let i = 0; i < types.length; i++) {
    const type = types[i]

    if (arrayType.test(type)) {
      result[result.length] = {
        type: 'array',
        arrayTypes: [
          type.match(arrayType)[1]
        ]
      }

      continue
    }

    result[result.length] = {
      type: types[i]
    }
  }

  return result
}

console.log(node('string'))
console.log(node('string[]'))
console.log(node('string|number'))
console.log(node('(string|number)[]'))
console.log(node('string[]|number[]'))
