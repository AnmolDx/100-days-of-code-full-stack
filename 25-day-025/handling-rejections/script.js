let h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("color changed")
            let num = Math.floor(Math.random()*5)+1
            if(num>3){
                reject("promise rejected")
            }
            resolve("color changed")
        }, delay);
    })
}

async function demo() {
    try{
        await changeColor("red", 1000)
        await changeColor("green", 1000)
        await changeColor("yellow", 1000)
        await changeColor("blue", 1000)
    }catch(err){
        console.log("error caught")
        console.log(err)
    }

    let a = 5;
    console.log("new sum is", a + 5)
}