import apiRequestMaker from "./apiRequestMaker"
import mainWindowDisplayer from "./mainWindowDisplayer"
import "./style.css"

async function makeWeatherAPIRequest(search) {
    let myData = await apiRequestMaker(search) //test a request to London
    return myData
}

//test: retrieving + inspecting weather API data
makeWeatherAPIRequest('london').then((myWeatherData) => {

    //displaying API data
    mainWindowDisplayer(myWeatherData)
})


//searchbar function
const searchInput = document.getElementById('search')
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { //if the enter key is pressed, while focused on the searchbar

        //format search input value
        search = searchInput.value.trim()

        makeWeatherAPIRequest(search).then((myWeatherData) => {
            //displaying API data
            mainWindowDisplayer(myWeatherData)
        })
    }
})


