# @anio-js-core-foundation/create-promise

Creates a Promise where `resolve` and `reject` is accessible outside the Promise constructor.

```js
import createPromise from "@anio-js-core-foundation/create-promise"

const {promise, resolve, reject} = createPromise()

// resolves "promise" after 1000ms
setTimeout(resolve, 1000, "abcdef")

console.log(await promise)
```
