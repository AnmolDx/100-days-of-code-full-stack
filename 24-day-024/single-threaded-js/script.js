// setTimeout(() => {
//     console.log("yoooooo")
// }, 2000);

// console.log("hello")

let h1 = document.querySelector("h1")

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay);
    })
}

// setTimeout(() => {
//     h1.style.color = "red"
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange"
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "blue"
// }, 3000);

// changeColor("red",1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000)
//         })
//     })
// })

changeColor("red", 5000)
.then(() => {
    console.log("red color was completed")
    return changeColor("green", 1000)
})
.then(() => {
    console.log("green color was completed")
    return changeColor("blue", 1000)
})
.then(() => {
    console.log("blue was completed")
})
.catch(() => {
    console.log()
})