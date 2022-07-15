
import { checkinput } from './checkinput.js'
import { postData } from './updateui.js'
import { postDatatwo } from './updateui.js'
import { postDatathree } from './updateui.js'




/* Function called by event listener */
// document.getElementById('submit').addEventListener('click', performAction);
function handleSubmit(event){
  event.preventDefault()
  const city=document.getElementById('city').value;
  const date=document.getElementById('date').value;
  
  console.log(date)

  // var dateVar =  new Date($("#dateInput").val());
  //          $("#results").append("<p>" + dateVar + "</p>")

if(checkinput(city)){

console.log(city)
postData('http://127.0.0.1:8081/add', {city:city} ).then(data=> {

  const lng=data.geonames[0].lng;
  const lat=data.geonames[0].lat;
  document.getElementById('country').innerHTML=data.geonames[0].name;



  postDatatwo('http://127.0.0.1:8081/addweatherdata', {lat:lat,lng:lng} ).then(data=> {


    document.getElementById('htemp').innerHTML="Highe,"+data.data[0].max_temp+"°C"+" Low,"+data.data[0].low_temp+"°C";
    document.getElementById('description').innerHTML = data.data[0].weather.description;
    document.getElementById('icon').src =`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;
   // document.getElementById('date').innerHTML=data.weather.date;


    })

        
    postDatathree('http://127.0.0.1:8081/Pixdata', {city:city} ).then(data=> {
      console.log("test")
        
            document.querySelector('.img1').src=data.hits[0].webformatURL;
       
            
            
            })
  


})

localStorage.setItem("city",city)

localStorage.getItem("city")
document.getElementsByClassName("info").innerHTML=""


}
else{
  console.log("Invaild url");
  // alert('Please enter a valid URL!')
  document.getElementById("error").innerHTML="Please enter a valid URL!";
}}



    export {          
      handleSubmit
    }
    