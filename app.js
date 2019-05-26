const express = require('express'); 
const request = require('request'); 

var app = express(); 
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


let apiKey = 'baf5d33f31da2f780a0718d4d8f2e706'
let city = argv.city || 'Houston'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, (err, response, body) => {
    if (err) {
        console.log('error: ', err)
    } 

    let weather = JSON.parse(body)
    console.log(`It's ${weather.main.temp} degrees in ${weather.name}`);
})

