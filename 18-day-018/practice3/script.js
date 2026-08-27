function sum(n){
    let sumOfn = 0
    for(let i = 1; i<=n; i++){
        sumOfn = i + sumOfn;
    }
    return sumOfn
}
console.log(sum(4))

function concat(arr){
    let mainStr = ""
    for(str of arr){
        mainStr = mainStr + " " + str
    }
    return mainStr
}
console.log(concat(["hello", "world"]))