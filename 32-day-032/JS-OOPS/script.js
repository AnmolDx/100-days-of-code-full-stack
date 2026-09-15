let arr = [1,2,3]
arr.sayHello = function(){
    console.log("hello arr")
}

function personInfo(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`)
        }
    }
    return person
}
// let p1 = personInfo("anmol", 20)
// let p2 = personInfo("manish",19)

//Constructors - doesn't return anything & start with capital
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.talk = function() {
//     console.log(`hi, my name is ${this.name}`)
// }
// let p1 = new Person("adam", 25)
// let p2 = new Person("eve", 25)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    talk(){
        console.log(`hi, my name is ${this.name}`)
    }
}
let p1 = new Person("adam", 25)
let p2 = new Person("eve", 25)
