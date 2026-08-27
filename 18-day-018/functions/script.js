function hello(){
    console.log("Hello World!")
}

hello()
hello()
hello()

function printloop5(){
    for(let i = 1; i<=5; i++){
        console.log(i)
    }
}
printloop5()
printloop5()

// functions with arguments

function greet(name){
    console.log(`Hello ${name}`)
}
greet("Anmol")
greet("Nitin")

//return 
function sum(a, b){
    return a + b;
}
console.log(sum(3,5))

//scope 
let mul = 33 //global scope
function multiple(a,b){
    let mul = a*b; //function scope
    console.log(mul)
}
multiple(2,3)
console.log(mul)

{
    let a = 5; //block scope
    console.log(a)
}
// console.log(a)