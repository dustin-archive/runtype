
const parse = input => {
  const start = input.indexOf('(')

  if (start === -1) {
    let position = input.indexOf('|')

    if (position === -1) {
      return { type: input } // this is done
    }

    // temporary solution
    const target = []
    const x = input.split('|')
    for (let i = 0; i < x.length; i++) {
      target.push({ type: x[i] })
    }
    return target

    // let pos = 0
    //
    // const target = []
    // let remaining = input
    //
    // while (position !== -1) {
    //   position = remaining.indexOf('|')
    //
    //   target.push({
    //     type: remaining.slice(0, position)
    //   })
    //
    //   remaining = remaining.slice(position + 1)
    // }
    //
    // return target
  }

  const end = input.lastIndexOf(')[]')

  if (end === -1) {
    return 'ERROR'
  }
}

console.log(parse('string'))
console.log(parse('aa|bbcc|ddeeff'))
// console.log(parse('string[]'))
// console.log(parse('string|number'))
// console.log(parse('(string|number)[]'))
// console.log(parse('string[]|number[]'))

// const middle = input.slice(start, end)
//
// console.log(middle)

// const start = indexOf('|')
//
// if (start === -1) {
//   return
// }
//
// const

// const target = {}
// for (let i = 0; i < input.length; i++) {
//
// }
// return target
