// module for making and processing weatherAPI requests made in the app.

async function apiRequestMaker (search = "tokyo") {
    let currentData
    let forecastData
    const searchQuery = search.toString()


    try {
        // get current data
        const currentDataResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=1852810708a34201a0c141512241103&q=${searchQuery}`, {mode: 'cors'})
        currentData = await currentDataResponse.json()

        //get forecast data
        const forecastDataResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1852810708a34201a0c141512241103&q=${searchQuery}`, {mode: 'cors'})
        forecastData = await forecastDataResponse.json()
    } catch (error) {
        console.log('Oops -- error 1: ' + error)
        throw error
    }
        
    return {currentData, forecastData}
}

export default apiRequestMaker