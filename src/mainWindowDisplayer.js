// module for updating the display of the main Window, given the current + forecast Data
export default function mainWindowDisplayer (myWeatherData) {

    console.log(myWeatherData)

    const mainWindow = document.getElementById('mainWindow')
    mainWindow.innerHTML = '' 

    const data = myWeatherData.returnData //making things shorter 

    //test: can we display the name? 

    const geoData = document.createElement('div')
    geoData.id = 'geoData'
    mainWindow.appendChild(geoData)

    // display the name, region, & country
    const locationHeader = document.createElement('h3')
    locationHeader.id = 'locationHeader'
    const regionHeader = document.createElement('span')
    regionHeader.id = 'regionHeader'
    const countryHeader = document.createElement('span')
    countryHeader.id = 'countryHeader'

    locationHeader.textContent = data.name
    regionHeader.textContent = data.region
    countryHeader.textContent = data.country

    console.log(...[locationHeader, regionHeader, countryHeader])


    geoData.append(...[locationHeader, regionHeader, countryHeader])






}