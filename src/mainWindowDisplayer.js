// module for updating the display of the main Window, given the current + forecast Data
export default function mainWindowDisplayer (myWeatherData) {

    console.log(myWeatherData)

    const mainWindow = document.getElementById('mainWindow')
    mainWindow.innerHTML = '' 

    const data = myWeatherData.returnData //making things shorter 

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
    const localTime = document.createElement('span')
    const tempC = document.createElement('span')

    //format the date value
    let localTimeValue = data.localTime
    localTimeValue = localTimeValue.slice(localTimeValue.indexOf(' ') + 1)

    conditionIcon.src = `https:${data.conditionIcon}`
    conditionText.textContent = data.condition
    localTime.textContent = `Local Time: ${(localTimeValue)}`
    tempC.textContent = `${data.currentTempC} ℃`

    

    //create scrolling clouds effect
    const scroller = document.createElement('div')
    scroller.id = "scroller"
    
    
    //main Window styling, based on condition text
    function setWeatherStyle () {
        console.log('setting style')
        const condition = data.condition
        console.log(...[condition, data.isDay])
        mainWindow.classList = ''
        scroller.classList = ''
        if (condition == 'Sunny') {
            mainWindow.classList.add('sunny')
        }
         else if (data.isDay === 0) {
            mainWindow.classList.add('night')
            scroller.classList.add('night')
        }
         else if (condition == "Partly cloudy" && data.isDay == 1) {
            mainWindow.classList.add('partlyCloudyDay')
        } 
        else if (condition == "Light rain" && data.isDay == 1) {
            mainWindow.classList.add('lightRainDay')
        } 
        else {
            mainWindow.classList.add('other')
        }
        
    } 
    setWeatherStyle()



    //displaying the forecast
    const forecastContainer = document.createElement('div')
    

    currentData.append(...[conditionIcon, conditionText, localTime, tempC])
    mainWindow.appendChild(currentData)
    mainWindow.appendChild(scroller)


}