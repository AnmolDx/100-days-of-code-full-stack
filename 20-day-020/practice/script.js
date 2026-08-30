let num = [20, 39, 59, 37, 10, 60];

let result = num.filter((el) => {
    return el%10 == 0
})
console.log(result)

let min = num.reduce((min, el) => {
    if(min > el){
        return el
    }else{
        return min
    }
    console.log(min)
})
console.log(min)