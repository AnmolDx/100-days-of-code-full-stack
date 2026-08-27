//q1
function avg(num1, num2, num3){
    let average = (num1+num2+num3)/3
    console.log(average)
}
avg(3,4,2)

//q2
function table(num){
    for(let i = num; i<=num*10; i = i + num)
        console.log(i)
}
table(5)