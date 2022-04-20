const geocode=require('./utils/geocode')
const forecast = require('./utils/forecast')
const address=process.argv[2]

geocode(address,(error,data)=>{
    console.log('Error:',error)
    console.log('Data',data)
    forecast(latitude,longitude,(error,data)=>{
        console.log('Error: ',error)
        console.log('Data: ',data)
})

})