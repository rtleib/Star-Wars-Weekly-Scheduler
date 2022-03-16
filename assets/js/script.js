// function for entering information on scheduler and saving to local storage

//function for weather api that refreshes weekly

//function for quote api that changes daily

// curl -X GET "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote" -H "accept: text/plain"

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
};

pullQuote();
