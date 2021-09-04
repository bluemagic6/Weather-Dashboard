var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var APIKey = "c8f8c0dc99abc022e07170e47874a788";
var cityName = document.querySelector('.inputValue');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

button.addEventListener('click',function(){
    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        var cityValue = data['city']
        var tempValue = data['main']['temp']
        var deseValue = data['weather'][0]['description']

        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = deseValue;
    })


.catch(err => alert("Wrong City city!"))
})