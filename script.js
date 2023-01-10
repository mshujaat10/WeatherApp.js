var search = document.getElementById('inp');


var mainWeather = document.getElementById('main-weather');
var cityName = document.getElementById('city');
var getIcon = document.getElementById('icon');
var Main = document.getElementById('main');
var getPressure = document.getElementById('pressure');
var feelLike = document.getElementById('feels');
var getCloud = document.getElementById('clouds');
var getHumidty = document.getElementById('humidity');
var Description = document.getElementById('desc');

var key = "9385897cf80ce34d5617eecf7e5732bb";


function getWeather(){
    var Value = search.value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${Value}&appid=${key}&units=metric`;
    console.log(Value);
    fetch(url).then((res) => res.json())
    .then((data) => {
        console.log(data);
        mainWeather.innerHTML = `${data.main.temp}&#176;`
        cityName.innerHTML = `${data.name}`;
        getIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
        Main.innerHTML = `${data.weather[0].main}`;

        feelLike.innerHTML = `${data.main.feels_like}`;
        getCloud.innerHTML = `${data.clouds.all}`;
        getPressure.innerHTML = `${data.main.pressure}`;
        getHumidty.innerHTML = `${data.main.humidity}`;
        Description.innerHTML = `${data.weather[0].description}`;

        if(data.weather[0].main=='Clear'){
            document.querySelector('body').classList = 'clear-img';
        }
        else if(data.weather[0].main=='Clouds'){
            document.querySelector('body').classList = 'cloudy-img';
        }
        else if(data.weather[0].main=='Fog'){
            document.querySelector('body').classList = 'fog-img';
        }
        else if(data.weather[0].main=='Haze'){
            document.querySelector('body').classList = 'fog-img';
        }
        else if(data.weather[0].main=='Rain'){
            document.querySelector('body').classList = 'rainy-img';
        }
        else if(data.weather[0].main=='Sunny'){
            document.querySelector('body').classList = 'sunny-img';
        }
        else if(data.weather[0].main=='Mist'){
            document.querySelector('body').classList = 'mist-img';
        }
        else if(data.weather[0].main=='Snow'){
            document.querySelector('body').classList = 'snow-img';
        }
    })



let Newdate = new Date();
let date = Newdate.getDate(); 
let month = Newdate.getMonth();
let year = Newdate.getFullYear();

let dt = document.getElementById('date').innerHTML = date;
let mt = document.getElementById('month');
let yr = document.getElementById('year').innerHTML = year;

let months = ['Jan,', 'Feb,', 'Mar,', 'Apr,', 'May,', 'Jun,', 'Jul,', 'Aug,', 'Sep,', 'Oct,', 'Nov,', 'Dec,'];
mt.innerHTML = `${months[month]}`;
}
