let jsonRes = '{"fact":"Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that\u2019s for human consumption can cause malnutrition.","length":360}'

console.log(jsonRes)

let validRes = JSON.parse(jsonRes)
console.log(validRes)
console.log(validRes.fact)

let student = {
    name: "Anmol",
    age: 20,
    degree: "BCA"
}

let jsonStudent = JSON.stringify(student)
console.log(jsonStudent)