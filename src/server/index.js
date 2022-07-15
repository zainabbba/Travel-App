var path = require('path')
const apikey=process.env.API_KEY;
projectData = {};
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
projectData = {};
const app = express()
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
const fetch = require("node-fetch");
app.use(express.static('dist'));

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.get('/all', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
});


// const apiKey_geo='zainabshbaba';
// console.log(apiKey_geo);
console.log(`Your API key is ${process.env.apiKey_geo}`);

app.post('/add', async(req, res) => {
    console.log(req.body.city)
    const resp = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.city}&maxRows=1&fuzzy=0.6&username=${process.env.apiKey_geo}&lang=en`);
    console.log(req.body.lat);
    try {
    //    console.log(resp);
        const data = await resp.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});


// const apikey_weatherbit="3bfa2411eb4d493ebc748a42bb2fa0fc"
console.log(`Your API key is ${process.env.apikey_weatherbit}`);


//console.log(req.body.long)
app.post('/addweatherdata', async(req, res) => {
    console.log(req.body.lat);
    const resp = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.lng}&key=${process.env.apikey_weatherbit}&lang=en`);
    console.log(resp);

    try {
    //    console.log(resp);
        const data = await resp.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});





// const apikey_Pixabay="23312162-105cd3c8b36b7b9f02921ec56"

console.log(`Your API key is ${process.env.apikey_Pixabay}`);


//console.log(req.body.long)
app.post('/Pixdata', async(req, res) => {
    console.log(req.body.city);
    const resp = await fetch(`https://pixabay.com/api/?key=${process.env.apikey_Pixabay}&q=${req.body.city}`);
    console.log(resp);

    try {
    //    console.log(resp);
        const data = await resp.json();
        console.log("here");
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});


