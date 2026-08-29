const student = {
    name: "anmol",
    age: 20,
    math: 80,
    comp: 90,
    eng: 78,
    getAvg(){
        // let avg = (math + comp + eng)/3; //this will not work cuz js will not take those keys as parameters.
        let avg = (this.math + this.comp + this.eng)/3;
        console.log(`${this.name} average is ${avg}`)
    }
}
student.getAvg()