import createPromise from "./src/index.mjs"

const {promise, resolve, reject} = createPromise()

// resolves "promise" after 1000ms
setTimeout(resolve, 1000, "abcdef")

console.log(await promise)
