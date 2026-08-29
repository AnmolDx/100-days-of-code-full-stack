const sum = (a,b) => {
    console.log(a+b)
}
sum(5,3)

const cube = (n) => {
    console.log(n*n*n);
}
cube(5)

//return implicit

const mul = (a,b) => (a*b)
console.log(mul(3,5)) 

//arrow func with this keyword

const student = {
    name: "anmol",
    marks: 88,
    prop: this,
    getName: function(){
        console.log(this)
        return this.name;
    },
    getMarks: () => {
        console.log(this) //parent's scope(window)
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this)
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this)
        }, 2000);
    },
}

student.getInfo1()
student.getInfo2()