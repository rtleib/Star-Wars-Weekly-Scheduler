// function for entering information on scheduler and saving to local storage
// get the current date
var date = document.getElementById("today");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var currentHour = parseInt(moment().format('HH'));
//function for weather api that refreshes weekly
var quoteContainer = document.getElementById('random-quote');
//create an array for each day
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

//load page
if (localStorage.getItem("schedule") !== null) {
  weeklySchedule = JSON.parse(localStorage.getItem("schedule"));
};

// save tasks for each hour 
var saveText = function () {
  var hour = this.parentElement.parentElement.dataset.hour;
  var value = this.parentElement.previousElementSibling.value;
  weeklySchedule[day][hour] = value
  localStorage.setItem("schedule", JSON.stringify(weeklySchedule));
};

// date format apprearance 
date.textContent = moment().format('MMMM Do, YYYY');

// save items to schedule
saveBtnEl.forEach(function (el) {
  el.addEventListener("click", saveText);
});

//change saveBtn icon on hover//
saveBtnEl

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
