let todo = [];

let req = prompt("enter your choice")

while (true) {
    if (req == "quit") {
        console.log("quitting the todo")
        console.log("------------------")
        console.log("done")
        break;
    }
    if (req == "list") {
        for (task of todo) {
            console.log(task)
        }
    } else if (req == "add") {
        let task = prompt("what do you want to add?")
        todo.push(task);
        console.log("task added")
        console.log("--------------")
    } else if (req == "delete") {
        let task = prompt("what do you want to remove?")
        if (todo.includes(task)) {
            todo.splice(todo.indexOf(task), 1);
            console.log("task removed")
            console.log("--------------")
        }else{
            console.log(`there is no task like ${task} use "list" to show all your task`)
        }
    }else{
        console.log("wrong request")
    }

    req = prompt("enter your choice")

}
