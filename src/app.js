const path = require('path')
const request = require('request');
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app =express()
//paths for express config

//paths for express config
const publicDirectoryPath =path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')

//setup handlebar engines and views location
app.set('view engine','hbs')
app.set('views',viewpath)

hbs.registerPartials(partialspath)
app.use(express.static(publicDirectoryPath))



//app.use(express.static(path.join(__dirname,'../public/index.html')))

//express is used to send something like websites from browser unlike command line arguements and also helps us to work with API 
 //for more info visit expressjs.com
//app.use is a way to customize your server
//challenge 1

//set up about route and render a page title
//set up a weather route and render a page title
//test ur work by visiting in browser

//challenge2

//setup about route to render title with html
//set up weather route to send back JSON
//test your work by visiting them in browser



// app.get('',(req,res)=>{
// res.send('<h1>weather</h1>')
// })

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Andrew Mead'
    })
    })

    app.get('/help',(req,res)=>{
        res.render('help',{
            title:'Weather',
            name:'andrew meed'
        })
        })



    app.get('/about',(req,res)=>{
        res.render('about',{
            title:'About Me',
            name:'Andrew Mead'
        })
        })
// app.get('',(req,res)=>{
// res.send('<h1>weather</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send({
//         name:'andrew',
//         age:27
//     })

// })
    
    app.get('/weather',(req,res)=>{
        if(!req.query.address)
        
           return  res.send({
                error:'address is not provided'
            })
         else
         {
            geocode(req.query.address,(error,data)=>{

   
                if(error){
                   return res.send({
                     error :error
                        })
               }
               
               forecast(data.latitude,data.longitude,(error,forecastData)=>{
                   if(error){
                    return res.send({
                        error :error
                           })
                   }
                   return  res.send({
                    forecastData:forecastData,
                    latitude:data.latitude,
                    longitude:data.longitude,
                    address:req.query.address
                })
               })
               })
         }
        })

//      else if(req.query.address=='philadelphia')   
     
    
//      {
//     return res.send({
//         longitude:'34',
//         latitude:'27',
//         address:req.query.address
//     })
    
// }
// else
//     {
//  return res.send({
//  ssss :'[]'
//     })
//         }
  
    
// app.get('/about',(req,res)=>{
//     res.send('Hell')
//     })
    
//     app.get('/weather',(req,res)=>{
//         res.send('nice weather')
//         })


        app.get('/about',(req,res)=>{
            res.send('<title>My name is pradeep</title>')
            })
            
            app.get('/weather',(req,res)=>{
                res.send({
                    forecast:23.33,
                    location:'india'
                })
                })      
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errormsg:'help page not found',
        name:'Andrew Mead'
    })
                    })

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errormsg:'page not found',
        name:'Andrew Mead'
       
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

