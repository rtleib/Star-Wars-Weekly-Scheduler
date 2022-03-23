// function for entering information on scheduler and saving to local storage
// get the current date
var date = document.getElementById("today");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var currentHour = parseInt(moment().format('HH'));

// global variable for displaying quote to html
var quoteContainer = document.getElementById('random-quote');

// global variables for weekly forecast
var citySearch = document.querySelector('#city-input');
var userInput = document.querySelector('#value');

// create array for each day
var weeklySchedule = [
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
    {
      nineAm: "",
      tenAm: "",
      elevenAm: "",
      twelvePm: "",
      onePm: "",
      twoPm: "",
      threePm: "",
      fourPm: "",
      fivePm: "",
    },
  ];
var day;

// loads page with saved items in local storage
if (localStorage.getItem('schedule') !== null) {
    weeklySchedule = JSON.parse(localStorage.getItem('schedule'));
};

// save tasks for each hour
var saveText = function() {
    var hour = this.parentElement.parentElement.dataset.hour;
    var value = this.parentElement.previousElementSibling.value;
    weeklySchedule[day][hour] = value;
    localStorage.setItem('schedule', JSON.stringify(weeklySchedule));
};

// save items to schedule
saveBtnEl.forEach(function (el) {
  el.addEventListener("click", saveText);
});

// date format apprearance 
date.textContent = moment().format('MMMM Do, YYYY');


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

document.getElementById("sunday").addEventListener("click", function () {
  day = 0;
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

document.getElementById("monday").addEventListener("click", function () {
  day = 1;
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

document.getElementById("tuesday").addEventListener("click", function () {
  day = 2;
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

document.getElementById("wednesday").addEventListener("click", function () {
  day = 3;
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

document.getElementById("thursday").addEventListener("click", function () {
  day = 4;
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

document.getElementById("friday").addEventListener("click", function () {
  day = 5;
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