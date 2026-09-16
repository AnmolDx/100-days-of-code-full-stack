class Person{
    constructor(name,age){
        console.log("person class constructor")
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi i am ${this.name}`)
    }
}
class Student extends Person{
    constructor(name, age, marks){
        console.log("student class constructor")
        super(name, age);//parent class constructor is being called
        this.marks = marks;
    }
}
// let stu1 = new Student("anmol", 20, 98);

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}