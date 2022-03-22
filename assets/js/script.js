// function for entering information on scheduler and saving to local storage
// get the current date
var date = document.getElementById("today");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var currentHour = parseInt(moment().format('HH'));

// save tasks for each hour 
var saveText = function(){
  var hour = this.parentElement.parentElement.dataset.hour;
  var value = this.parentElement.previousElementSibling.value;
  console.log (hour);
  console.log(value);
  localStorage.setItem(hour, value);
};


// date format apprearance 
date.textContent = moment().format('MMMM Do, YYYY');

// save items to schedule
saveBtnEl.forEach(function(el) {
  el.addEventListener("click", saveText);
});

var pullQuote = function () {
  var quoteUrl = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

  // pulls from api to get a random quote
  fetch(quoteUrl).then(function (response) {
    console.log(response);
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayQuote(data);
      });
    };
  });
};

var displayQuote = function (quote) {
  // create a span to hold quotes
  var quoteEl = document.createElement('span');
  quoteEl.textContent = quote.content;
  console.log(quoteEl);

  // append to container
  quoteContainer.appendChild(quoteEl);
};

document.getElementById("saturday").addEventListener("click", function () {
  day = 6;
  var textDescriptions = document.querySelectorAll(".description");
  var position = 0;
  var display = document.querySelector("#display");
  display.classList.remove("hidden");
  for (var key in weeklySchedule[day]) {
    console.log(weeklySchedule[day][key]);
    console.log(textDescriptions[position]);
    textDescriptions[position].value = weeklySchedule[day][key];
    position++;
  }
});

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

  fetch(weatherUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data.daily);
      });
    };
  });
};

var displayWeather = function (display) {
  console.log(display);

  for (property in display) {
    console.log(property, display[property]);
  };
};

userInput.addEventListener('submit', formHandler);

pullQuote();
