var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var APIKey = "c8f8c0dc99abc022e07170e47874a788";
var iconEl = document.getElementById('icon');
var fiveDayEl = document.getElementById('fiveDay')

button.addEventListener('click',function(){
    var cityName = document.querySelector('.inputValue').value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=imperial";
    // var cityName = document.querySelector('.inputValue').value;
    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        var cityValue = data.name
        var tempValue = data.main.temp
        var deseValue = data.weather[0].description
        var apiIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        
        city.innerHTML = cityValue;
        iconEl.setAttribute("src", apiIcon)
        temp.innerHTML = tempValue;
        desc.innerHTML = deseValue;
        console.log(cityValue)
    })
    
    .catch(err => alert("Wrong City city!"))
});

renderFive (city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=imperial`

    fetch(url)

    // for loop
    for (let i = 1; i < 6; i++){
        const cityVal = data.city.name
        const dateVal = data.list[i].dt
        const tempVal = data.list[i].main.temp
        const humidVal = data.list[i].main.humidity


        const dailyCard = `
        <h5 class = "card-title">${cityVal}</h5>
        <p class="card-text">${tempVal}</p>
        <p class="card-text">${humidVal}</p>
        `
    }
};