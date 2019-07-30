
# runtype

A low effort alternative to Flow and TypeScript for small to medium size projects.

## Rationale

Flow and TypeScript add a lot of verbosity to projects. In cases where developers are new with type systems or working on a small team the verbosity can drag projects to a hault. Runtype is a low effort alternative for checking types during runtime in data critical parts of small to medium sized apps without dramatically increasing development time.

## Use

```js
import runtype from 'whaaaley/runtype'

const foobar = data => {
  runtype(data, {
    foo: 'string',
    bar: 'string[]',
    $baz: 'number'
    $qux: {
      foo: 'string',
      baz: 'string'
    }
  })

  // ...
}
```
