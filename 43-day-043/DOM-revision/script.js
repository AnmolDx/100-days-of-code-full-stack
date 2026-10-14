// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

let para = document.createElement("p")
para.textContent = "Hey, I'm red!"
para.style.color = "red"

container.appendChild(para)

let h3 = document.createElement("h3")
h3.textContent = "I'm a blue H3"
h3.style.color = "blue"

container.appendChild(h3)

container.appendChild(content)

let div = document.createElement("div")

div.style.border = "2px solid black"
div.style.backgroundColor = "pink"

let h1 = document.createElement("h1")
h1.textContent = "I'm in a div"

div.appendChild(h1)

let secPara = document.createElement("p")
secPara.textContent = "ME TOO!"

div.appendChild(secPara)

container.appendChild(div)

const btn = document.querySelector("button")
btn.onclick = () => alert("Hello World")

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id)
    })
})