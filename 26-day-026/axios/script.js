let url = "https://catfact.ninja/fact"

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    
    }catch(e){
        console.log("error", e);
        return "no fact found"
    }
}

let p = document.querySelector("#result")
let btn = document.querySelector("button")
btn.addEventListener("click", async () => {
    let fact = await getFacts()
    p.innerText = fact
})

// async function getFacts() {
//     try{
//         let res = await fetch(url)
//         let data = await res.json()
//         console.log(data.fact);

//         let res2 = await fetch(url)
//         let data2 = await res2.json()
//         console.log(data2.fact())
//     }catch(e){
//         console.log("error", e);
//     }
//     console.log("bye");
// }