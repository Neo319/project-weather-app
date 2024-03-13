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
    const regionHeader = document.createElement('span')
    const countryHeader = document.createElement('span')

    locationHeader.textContent = data.name
    regionHeader.textContent = data.region
    countryHeader.textContent = data.country

    geoData.append(...[locationHeader, regionHeader, countryHeader])


    const currentData = document.createElement('div')
    
    //display the current conditions, a relevant icon, temperature (Celsius for now) 
    
    currentData.id = 'currentData'
    const conditionIcon = new Image()
    const conditionText = document.createElement('span')

    conditionIcon.src = `https:${data.conditionIcon}`
    conditionText.textContent = data.condition

    currentData.append(...[conditionIcon, conditionText])
    mainWindow.appendChild(currentData)

}