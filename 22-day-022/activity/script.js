let btn = document.querySelector("button")
let h2 = document.querySelector("h2")

btn.addEventListener("click", function() {
    let randomColor = getRandomColor()
    h2.innerText = randomColor
    console.log("color generated")
    
    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor

})

function getRandomColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    let color = `rgb(${r},${g},${b})`
    return color
}
getRandomColor()