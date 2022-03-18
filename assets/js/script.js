// function for entering information on scheduler and saving to local storage

//function for weather api that refreshes weekly
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

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

var getWeatherInfo = function() {
    console.log('this functions works');

    // var weatherUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=28a7fce4f20896b97ae391942a7e9c8d";
};

pullQuote();
getWeatherInfo();