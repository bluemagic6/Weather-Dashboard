var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=c8f8c0dc99abc022e07170e47874a788')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var deseValue = data['weather'][0]['description']

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = deseValue;
    })


.catch(err => alert("Wrong City Name!"))
})