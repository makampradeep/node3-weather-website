const request = require('request');



const geocode =(address,callback)=>{
    const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJhZGVlcG1ha2FtIiwiYSI6ImNrb2pqYjRlcjAxOHQyb3FqZnJhYWRuNmEifQ.KRauCUSCWJHnMm1Lz4TTNw'
    console.log(url2)
    request({url: url2, json:true},(error,response)=>{


     if(error)
 {
     callback('unable to connect tolocation services',undefined)
 }
 else if(error===undefined)
 {
    callback('unable to provide address',undefined)
 }
 else if (response.body.features.length===0)
 {
    callback('unable to get location try anothersearch',undefined)
}
 else
 {
 callback(undefined,{
latitude:response.body.features[0].geometry.coordinates[1],
longitude :response.body.features[0].geometry.coordinates[0]
   })
 }
    })
}


module.exports =geocode