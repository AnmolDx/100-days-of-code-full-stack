let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el)
}
arr.forEach(print)

//map

// let num = [1, 2, 3, 4]
// let double = num.map((el) => {
//     return el*2
// })
// console.log(double)

//filter
let nums = [1,3,4,5,3,33,53,23,10,22];
let ans = nums.filter((el) => {
    return el < 10
})
console.log(ans)

//every
let result = nums.every((el) => el%2 == 0)
console.log(result)

//reduce
let num = [1,2,3,4,5]
let finalVal = num.reduce((result, el) => {
    console.log(result)
    return result+el
})
console.log(finalVal)

let max = arr.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
    console.log(max)
})
console.log(max)