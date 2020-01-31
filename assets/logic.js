// calling the farmers market api
var artist = 'Chance The Rapper'
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=test";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // Printing the entire object to console
    console.log(response);

});



