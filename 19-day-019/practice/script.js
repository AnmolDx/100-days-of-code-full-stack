const square = (n) => {
    console.log(n*n)
}
square(3)

let msg = setInterval(() => {
    console.log("Hello World")
}, 2000)

setTimeout(() => {
    console.log("stopping...")
    clearInterval(msg)

}, 10000)