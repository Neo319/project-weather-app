import apiRequestMaker from "./apiRequestMaker"
import mainWindowDisplayer from "./mainWindowDisplayer"
import "./style.css"

async function makeWeatherAPIRequest() {
    let myData = await apiRequestMaker('london') //test a request to London
    return myData
}

//test: retrieving + inspecting weather API data
makeWeatherAPIRequest().then((myWeatherData) => {

    //displaying API data
    mainWindowDisplayer(myWeatherData)
})



