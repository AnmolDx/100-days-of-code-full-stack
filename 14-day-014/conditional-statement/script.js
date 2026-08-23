// let age = 23
// if (age >=18) {
//     console.log("You can vote")
//     console.log("You can also drive")
// }
// if (age < 18) {
//     console.log("You cannot vote")
// }

//else if statement
// let age = 14;
// if(age >= 18){
//     console.log("You can vote")
// }
// else if(age < 18){
//     console.log("You cannot vote")
// }

//else statement
let color = "pink"
if(color === "red"){
    console.log("stop");
}else if(color === "yellow"){
    console.log("wait");
}else if(color === "green"){
    console.log("go")
}else{
    console.log("The traffic light is broken")
}

//Nested if-else statement
let marks = 98;
if(marks >= 33){
    console.log("pass")
    if(marks >= 80){
        console.log("Grade: O")
    }else{
        console.log("Grade: A")
    }
}else{
    console.log("fail")
}