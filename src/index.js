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
const errorText = document.getElementById('errorText')
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { //if the enter key is pressed, while focused on the searchbar

        //format search input value
        search = searchInput.value.trim()

        try {
            makeWeatherAPIRequest(search)
            .then((myWeatherData) => {
                mainWindowDisplayer(myWeatherData)
            })
            .catch (function (error) {
                console.log('error 3')
                console.log(error)
                //display error message to DOM
                errorText.textContent = "Error! Try a different search."
                errorText.classList.add('active')
                setTimeout(function () {
                    errorText.textContent = ''
                    errorText.classList = ''
                }, 5000)
            })
        
        } catch (error){
            console.log('error 2')
            console.log(error)
        }
    }
})


