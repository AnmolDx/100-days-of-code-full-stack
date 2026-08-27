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