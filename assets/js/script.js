// function for entering information on scheduler and saving to local storage
// get the current date
var date = document.getElementById("today");
var milHours = ["9","10","11","12","13","14","15","16","17"];
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

//reload tasks on reload
var reload = function(){
  milHours.forEach(function(hour){
    //get items from localStorage
    var timeBlock = document.querySelector(`[data-hour="${hour}"] textarea`);
    timeBlock.value = localStorage.getItem(hour);
    //set color coding by hour
    if (parseInt(hour) > currentHour) {
      timeBlock.classList.add("future")
    } else if (parseInt(hour) === currentHour){
      timeBlock.classList.add("present")
    } else if (parseInt(hour) < currentHour) {
      timeBlock.classList.add("past")
    }
    console.log(hour, typeof parseInt(hour));
    console.log(currentHour, typeof currentHour);
  });

};

// date format apprearance 
date.textContent = moment().format('MMMM Do, YYYY');

// save items to schedule
saveBtnEl.forEach(function(el) {
  el.addEventListener("click", saveText);
});

reload();


//function for weather api that refreshes weekly

var quoteContainer = document.getElementById('random-quote');

var pullQuote = function() {
    
    var quoteUrl = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

    // pulls from api to get a random quote
    fetch(quoteUrl).then(function(response) {
    console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
            console.log(data);
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

pullQuote();

$(document).ready(function(){
    $("#date").datepicker({ 
    });
});