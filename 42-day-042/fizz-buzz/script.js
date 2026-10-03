// let userInp = parseInt(prompt("Enter a number"))
userInp = 20

for(let i=1; i<=userInp; i++){
    if(i%5 === 0 && i%3 === 0){
        console.log("fizzbuzz")
    }else if(i%5 === 0){
        console.log("buzz")
    }else if(i%3 === 0){
        console.log("fizz")
    }else{
        console.log(i)
    }
}