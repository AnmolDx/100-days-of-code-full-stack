// for(let i=0; i<=5; i++){
//     console.log("hello!!")
// }
const math = require("./math")

console.log(process.argv)

let args = process.argv

for(let i=2; i<args.length; i++){
    console.log("hello, " + args[i])
}

console.log(math.pi)
console.log(math.g)

// console.log(someValue)