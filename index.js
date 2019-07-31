
function endsWithBrackets (type) {
  if (type.endsWith('[]')) {
    return {
      type: 'array',
      arrayTypes: [
        {
          type: type.slice(0, -2)
        }
      ]
    }
  }

  return {
    type: type
  }
}

function parse (input) {
  var start = input.indexOf('(')

  if (start === -1) {
    var next = input.indexOf('|')

    if (next === -1) {
      return endsWithBrackets(input)
    }

    var target = []
    var prev = 0

    for (var i = 0; next !== -1; i++) {
      target[i] = endsWithBrackets(input.slice(prev, next))
      prev = next + 1
      next = input.indexOf('|', prev)
    }

    target[i] = endsWithBrackets(input.slice(prev))

    return target
  }

  var end = input.lastIndexOf(')[]')

  if (end === -1) {
    return 'ERROR'
  }

  return {
    type: 'array',
    arrayTypes: parse(input.slice(start + 1, end))
  }
}

function runtype (data, interface) {
  for (var key in interface) {
    const list = parse(interface[key])

    for (var i = 0; i < list.length; i++) {
      const item = list[i]
      const value = data[key]

      if (typeof value === item.type) {
        return 'pass'
      }
    }
  }

  return 'fail'
}

var data = {
  hello: 123
}

var interface = {
  hello: 'string|number'
}

console.log(
  runtype(data, interface)
)
