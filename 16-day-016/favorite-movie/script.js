let favMovie = "John Wick"

let guessMovie = prompt("Guess the movie")
while ((favMovie != guessMovie) && (guessMovie != "quit")) {
    console.log("wrong")
    guessMovie = prompt("guess again")
}
if(guessMovie == favMovie){
        alert("congrats!!")
}