// function for entering information on scheduler and saving to local storage

// global variables for weekly forecast
var citySearch = document.querySelector('#city-input');
var userInput = document.querySelector('#value');

var quoteContainer = document.getElementById('random-quote');

var pullQuote = function() {
    
    var quoteUrl = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

    // pulls from api to get a random quote
    fetch(quoteUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {;
            displayQuote(data);
            });
        };
    });
};

var displayQuote = function(quote) {

    // create a span to hold quotes
    var quoteEl = document.createElement('span');
    quoteEl.textContent = quote.content;
    console.log(quoteEl);

    // append to container
    quoteContainer.appendChild(quoteEl);
};

// listens for submit on form
var formHandler = function(event) {
  event.preventDefault();

  var city = citySearch.value.trim();

  if(city) {
    getCity(city);
  } 
  else {
    alert('City name does not exist');
  };
};

// fetches lat and lon from user search for city
var getCity = function(city) {

  var displayCity = document.querySelector('.city-name');
  displayCity.textContent = city + ' ';

  var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
  var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  fetch (cityUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function (data) {
        cityWeather(data.coord);
      });
    };
  });
};

// pulls weather for city based on lat and lon coordinates
var cityWeather = function(coord) {

  var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
  var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coord.lat + "&lon=" + coord.lon + "&exclude=minutely,hourly,current&units=imperial&appid=" + APIKey;
  var forecastEl = document.getElementsByClassName('forecast');

  fetch(weatherUrl).then(function (response) {
    if (response.ok) {

      forecastEl[0].classList.add('loaded');

      response.json().then(function (data) {
        console.log(data);
        
        var fDay = '';
        data.daily.forEach((value, index) => {
        
          if (index > 0) {
            var dayName = new Date(value.dt * 1000).toLocaleDateString('en', {
              weekday: 'long',
            });
            
            var icon = value.weather[0].icon;
            var showIcon = document.createElement('img');
            showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            console.log(showIcon);
            console.log(icon);
            var temp = value.temp.day.toFixed(0);

            fDay = `<div class = 'forecast-day column is-flex-wrap-wrap'>
                      <p>${dayName}</p>
                      <p><img class='icon' title = 'icon' src='http://openweathermap.org/img/wn/${icon}@2x.png'></p>
                      <div class = 'forecast-day--temp'>${temp}<sup>°F</sup></div>
                    </div>`;
            
            forecastEl[0].insertAdjacentHTML('beforeend', fDay);
          };
        });
      });
    };
  });
};

userInput.addEventListener('submit', formHandler);

pullQuote();