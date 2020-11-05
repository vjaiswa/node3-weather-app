console.log("Hello")
const geoCodeObject = require('./utils/geocode')
const forecastObject = require('./utils/forecast.js')
const command = process.argv[2]
if(!command){
    console.log('Please provide location.')
}else{
    geoCodeObject.geoCode(command,(error,{latitude,longitude,place}={}) =>{
        if(error){
            console.log(error)
        }else{
            forecastObject.forecast(latitude,longitude,(error,{temperature,feelsLike,description}) =>{
                if(error){
                    console.log(error)
                }else{
                    console.log(latitude)
                    console.log(longitude)
                    console.log(place)
                    console.log(temperature)
                    console.log(feelsLike)
                    console.log(description)
                }
            })        
        }
    })
}



