let url = "https://dog.ceo/api/breeds/image/random"

let btn = document.querySelector("button")
let image = document.querySelector("#result")

btn.addEventListener("click", async () => {
    let img = await getImg()
    image.src = img;
})
async function getImg() {
    try{
        let res = await axios.get(url);
        console.log(res)
        return res.data.message
    }catch(e){
        console.log(e)
        return "error picture not found"
    }
}

