const express = require('express'); 
var exphbs  = require('express-handlebars');
const request = require('request'); 

const app = express()
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('home', {
        style: 'home.css'
    })
}) 

// // let apiKey = 'baf5d33f31da2f780a0718d4d8f2e706'
// // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

// // request(url, (err, response, body) => {
// //     if (err) {
// //         console.log('error: ', err)
// //     } 

// //     let weather = JSON.parse(body)
// //     console.log(`It's ${weather.main.temp} degrees in ${weather.name}`);
// // })

app.listen(3000, () => {
    console.log('Port is up and running');
})

module.exports = {
    app 
}
