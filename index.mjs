export default function createPromise() {
	let promise, resolve, reject

	promise = new Promise((a, b) => {
		resolve = a
		reject = b
	})

	return {promise, resolve, reject}
}
