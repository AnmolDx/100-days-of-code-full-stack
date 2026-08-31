let section = document.getElementsByClassName("section")

for(let i=0; i<section.length; i++){
    console.dir(section[i])
}

let para = document.querySelector("p")
console.log(para.innerHTML)
console.log(para.innerText)
console.log(para.textContent)

para.innerText = "this is some random text i am learning dom manipulation"

console.dir(para.style)
para.style.color = "red"
para.style.backgroundColor = "green"