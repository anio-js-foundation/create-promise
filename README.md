# @anio-js-foundation/create-promise

Create a Promise whose `resolve` and `reject` functions are accessible from outside the Promise constructor.

```js
import createPromise from "@anio-js-foundation/create-promise"

const {promise, resolve, reject} = createPromise()

// resolves "promise" after 1000ms
setTimeout(resolve, 1000, "abcdef")

console.log(await promise)
```
