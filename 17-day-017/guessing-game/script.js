let maxNum = prompt("Enter the maximum number");

let randNum = Math.floor(Math.random()*maxNum)+1;

let guessNum = prompt("Enter your guess number")

while(true){
    if(guessNum == "quit" || guessNum == ""){
        console.log(`Nah!, you quit. ${randNum} was the number`)
        break;
    }
    if(guessNum == randNum){
        alert("Damn! you have guessed it right");
        break;
    }else if(guessNum < randNum){
        guessNum = prompt("your guess is small try again!")
    }else if(guessNum > randNum){
        guessNum = prompt("your guess is large try again!")
    }else{
        guessNum = prompt("You're wrong, Guess Again!")
    }

}