let addBtn = document.querySelector("#addTask")
let inpTask = document.querySelector("input")
let list = document.querySelector("ul")


addBtn.addEventListener("click", function () {
    let listTask = document.createElement("li")
    let task = inpTask.value
    listTask.innerText = task
    list.append(listTask)
    inpTask.value = ""

    let dltBtn = document.createElement("button")
    dltBtn.setAttribute("class", "dlt")
    dltBtn.innerText = "delete"
    listTask.append(dltBtn)

})

list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let dltList = event.target.parentElement
        dltList.remove()
    }
})