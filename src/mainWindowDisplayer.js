// module for updating the display of the main Window, given the current + forecast Data
export default function mainWindowDisplayer (myWeatherData) {

    const mainWindow = document.getElementById('mainWindow')

    //test: can we display the name? 
    mainWindow.textContent = myWeatherData.currentData.location.name


}