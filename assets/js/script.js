// function for entering information on scheduler and saving to local storage

//function for weather api that refreshes weekly

//function for quote api that changes daily

// curl -X GET "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote" -H "accept: text/plain"


var pullQuote = function() {
    console.log("function fires!");
    
    var quoteUrl = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";
    console.log(quoteUrl);
};