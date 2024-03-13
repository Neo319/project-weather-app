import apiRequestMaker from "./apiRequestMaker"
import "./style.css"

console.log("index.js ready!")

async function makeWeatherAPIRequest() {
    let myData = await apiRequestMaker('london') //test a request to London
    return myData
}

//test: retrieving + inspecting weather API data
makeWeatherAPIRequest().then((myWeatherData) => {
    console.log(myWeatherData) // weather data retrieved successfully 
})


