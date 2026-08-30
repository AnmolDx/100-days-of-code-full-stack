let arr = [1,3,4,2,5,3,2,2,5,6,34,19];

console.log(...arr)
console.log(Math.min(...arr))

let char = [..."hello"]
console.log(char)

let odd = [1,3,5,7,9]
let even = [2,4,6,8,10]
let num = [...odd, ...even]

console.log(num)