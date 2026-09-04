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

let url = "https://catfact.ninja/fact"

// fetch(url)
//     .then((response) => {
//         console.log(response)
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.fact)
//         return fetch(url)
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data2) => {
//         console.log(data2.fact)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

async function getFacts(params) {
    try {
        let res = await fetch(url);
        let data = await res.json()
        console.log(data.fact)
    }catch(err){
        console.log(e)
    }
}