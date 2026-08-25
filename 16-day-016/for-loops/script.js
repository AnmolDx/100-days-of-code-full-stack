console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

for(let i = 1; i <= 5; i++){
    console.log(i)
}

//print all odd number from 1 to 15
console.log("odd numbers")
for(let i = 1; i<=15; i++){
    if(i%2 !== 0){
        console.log(i)
    }
}

console.log("even numbers")
for(let i = 1; i<=10; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

// let num = prompt("write ur number to print multiplication table")
// num = parseInt(num)
// for(let i = num; i<=num*10; i = i + num){
//     console.log(i)
// }

//nested for loop
for(let i = 1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j = 1; j<=3; j++){
        console.log(j)
    }
}

//while loop
let i = 1;
while(i<=10){
    console.log(i)
    i++
}
