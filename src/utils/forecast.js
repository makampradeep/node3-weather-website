const request =require('request')


const forecast=(latitude,longitude,callback)=>{

const url ='http://api.weatherstack.com/current?access_key=d63209d1073ff5cab478305577c0d9f4&query='+ latitude +',' + longitude +''
console.log(url)

request({url: url, json:true},(error,response)=>{
    if(error)
{
    callback('unable to connect tolocatopn services',undefined)
}
else if (response.body.error)
{
   callback('unable to get location try anothersearch',undefined)
}
else
{
  callback(undefined,response.body.location.name)
}
   })
}

module.exports =forecast