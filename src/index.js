import apiRequestMaker from "./apiRequestMaker"
import "./style.css"

console.log("index.js ready!")


//test: retrieving + inspecting weather API data
async function makeweatherAPIrequest() {
    let myData 
    await apiRequestMaker()
    

    console.log(myData)
}

makeweatherAPIrequest()

