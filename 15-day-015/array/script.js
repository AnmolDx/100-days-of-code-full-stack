let students = ["Anmol", "Manish", "Nitin"]

//Array method
let languages = ["HTML", "CSS", "JavaScript"]
languages.push("Python")
console.log(languages)

languages.pop()
console.log(languages)

languages.unshift("C")
console.log(languages)

languages.shift()
console.log(languages)

console.log(languages.indexOf("CSS"))
console.log(languages.includes("CSS"))

//concat
let primary = ["red", "orange"]
let secondary = ["blue", "green"]

let concat = primary.concat(secondary)
console.log(concat)

//revese
concat.reverse()
console.log(concat)

//slice 
console.log(concat.slice(2))

//splice
concat.splice(0, 1)
console.log(concat)

concat.splice(0, 0, "white", "grey")
console.log(concat)

//sort
concat.sort()
console.log(concat)

let pra = ["january", "july", "march", "august"]
let newpra = pra.splice(0,2,"july", "june")
console.log(pra)