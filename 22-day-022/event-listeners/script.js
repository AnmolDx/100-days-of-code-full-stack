let btn = document.querySelector("button")
btn.addEventListener("click", function() {
    console.log("hello")
})
btn.addEventListener("click", function() {
    console.log("Anmol")
})
btn.addEventListener("dblclick", function() {
    console.log("you have double clicked the button")
})

let para = document.querySelector("p")
para.addEventListener("click", function() {
    console.log("the para was clicked")
})

let div = document.querySelector("div")
div.addEventListener("mouseenter", function() {
    console.log("you are in div")
})

btn.addEventListener("click", function(){
    console.log(this.innerText)
    this.style.backgroundColor = "red"
})

let input = document.querySelector("input")
input.addEventListener("keydown", function(event){
    console.log(event.code)
    console.log(event.key)
    console.log("key was pressed")
})

let form = document.querySelector("form")
form.addEventListener("submit", function (event){
    event.preventDefault()
    alert("confirm?")

    let user = document.querySelector("#username")
    let pass = document.querySelector("#password")

    console.dir(user)
    console.log(user.value)

    console.dir(pass)
    console.log(pass.value)
})