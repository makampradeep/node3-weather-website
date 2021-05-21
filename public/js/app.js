console.log('client side js is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
console.log(data)
    })
})

// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
    
   
 
//         response.json().then((data)=>{
//             if(data.error)
//             {
//                 console.log(data.error)
//             }
//             else
//             {
//                 console.log(data.address+''+data.forecastData)
//             }
//         })
// })

 
const weatherForm =document.querySelector('form')
const search =document.querySelector('input')
const messagOne =document.querySelector('#message-1')
const messagTwo =document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{


    e.preventDefault()
    const location =search.value
    
    fetch('/weather?address='+ location +'').then((response)=>{
        messagOne.textContent ='loading...' 
        messagTwo.textContent =''
 
        response.json().then((data)=>{
            if(data.error)
            {
                console.log(data.error)
                messagOne.textContent=data.error
            }
            else
            {
                console.log(data.address+''+data.forecastData)
                messagOne.textContent=data.forecastData
                messagTwo.textContent=data.longitude+' and '+data.latitude
            }
        })
})


})
