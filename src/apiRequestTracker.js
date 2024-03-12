// module dedicated to making and processing weatherAPI requests made in the app.

const apiRequestTracker = () => {
    let apiRequestData 

    fetch('https://api.weatherapi.com/v1/current.json?key=1852810708a34201a0c141512241103&q=osaka', {mode: 'cors'})
    .then(function (response) { //once the api request is resolved, convert from JSON
        return response.json()
    })
    .then(function (jsonData) { //log the data once the JSON conversion is resolved
        console.log(jsonData)
        console.log(jsonData.current)
        apiRequestData = jsonData
    })
    .catch(function (error) { // issue occurs in any part of the promise chain
        console.log('error 1')
        console.log(error)
    })

}

export default apiRequestTracker