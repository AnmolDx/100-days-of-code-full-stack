// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if(internetSpeed > 4){
//         success()
//     }else{
//         failure()
//     }

// }

// savetoDB("some data", () => {
//     console.log("your data was saved");

//     //second data
//     savetoDB("some more data", () => {
//         console.log("other data is saved too")

//         //third data
//         savetoDB("just save more data", () => {
//             console.log("this one is saved too, you lucky!")
//         }, () => {
//             console.log("that enough i guess")
//         })
//     }, () => {
//         console.log("connection is still weak")
//     })
// }, () => {
//     console.log("connection is weak")

// })

//refactoring code with promises

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data was saved")
        } else {
            reject("connection is week")
        }

    })
}
savetoDB("some data")
    .then((result) => {
        console.log("promise was resolved")
        console.log("result:", result)
        return savetoDB("some more data")
    })
    .then((result) => {
        console.log("other data was saved too")
        console.log("result:", result)
        return savetoDB("some more and more data")
    })
    .then((result) => {
        console.log("other data2 was saved too")
        console.log("result:", result)
    })
    .catch((error) => {
        console.log("promise was rejected")
        console.log("result:", error)
    })