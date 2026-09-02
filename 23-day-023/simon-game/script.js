let gameSeq = []
let userSeq = []

let started = false;
let level = 0
let body = document.querySelector("body")
let h2 = document.querySelector("h2")

let boxes = ["yellow", "blue", "red", "green"]

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp()
    }
})
function flash(box){
    box.classList.add("flash")
    setTimeout(() => {
        box.classList.remove("flash")
    }, 250);
}

function levelUp(){
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    let rand = Math.floor(Math.random()*4)
    let randColor = boxes[rand]
    let randBox = document.querySelector(`.${randColor}`)
    flash(randBox)
    
    gameSeq.push(randColor)
    console.log(gameSeq)
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText = `Game over! Your Score was ${level}`
        body.style.backgroundColor = "red"
        setTimeout(() => {
            body.style.backgroundColor = "white"
        }, 150);
        reset()
    }
}

function boxPress() {
    let box = this;
    flash(box)
    userSeq.push(box.id)
    console.log(userSeq)

    checkAns(userSeq.length-1)
}
let allBoxes = document.querySelectorAll(".box")
for(box of allBoxes){
    box.addEventListener("click", boxPress)
}

function reset(){
    gameSeq = [];
    started = false;
    userSeq = []
    level = 0;
}