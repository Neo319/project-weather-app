// module for making and processing weatherAPI requests made in the app.

async function apiRequestMaker (search = "tokyo") {
    let forecastData
    const searchQuery = search.toString()



    try {
        //get forecast  + current data
        const forecastDataResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1852810708a34201a0c141512241103&q=${searchQuery}`, {mode: 'cors'})
        if (!forecastDataResponse.ok) {
            throw new Error ('WeatherAPI failed with status ' +forecastDataResponse.status)
        }
        forecastData = await forecastDataResponse.json()
    } catch (error) {
        console.log('Oops -- error 1: ' + error)
        throw error
    }


    //extract the data that we need 
    const returnData = {
        //location data
        name: forecastData.location.name,
        region: forecastData.location.region,
        country: forecastData.location.country,
        localTime: forecastData.location.localtime,
        isDay: forecastData.current.is_day,

        //current weather data
        condition: forecastData.current.condition.text,
        conditionIcon: forecastData.current.condition.icon,
        currentTempC: forecastData.current.temp_c,
        currentTempF: forecastData.current.temp_f,

        windDir: forecastData.current.wind_dir,
        windKph: forecastData.current.wind_kph,
        windMph: forecastData.current.wind_mph,
        

        //forecast weather data
        forecast: {
            avgTempC: forecastData.forecast.forecastday[0].day.avgtemp_c,
            avgTempF: forecastData.forecast.forecastday[0].day.avgtemp_f,
            minTempC: forecastData.forecast.forecastday[0].day.mintemp_c,
            minTempF: forecastData.forecast.forecastday[0].day.mintemp_f,
            maxTempC: forecastData.forecast.forecastday[0].day.maxtemp_c,
            maxTempF: forecastData.forecast.forecastday[0].day.maxtemp_f,
    
            rainChance: forecastData.forecast.forecastday[0].day.daily_chance_of_rain,
            snowChance: forecastData.forecast.forecastday[0].day.daily_chance_of_snow,
        },

        //extract data for the next four hours
        
    }
    

    return {returnData}
}

export default apiRequestMaker