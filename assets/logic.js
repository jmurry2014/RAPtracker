$("#artistButton").on('click', function () {
    var artist = $("#artistSearch").val().trim()
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=test&date=upcoming" + artist + "?app_id=test";
    console.log(artist)


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imageURL = response[0].artist.image_url;
        var image = $("<img id='pictureSize'>")
        var artistName = response[0].artist.name

        console.log(response)


        $("#artistName").html(artistName)
        image.attr('src', imageURL)
        $("#artistImage").html(image)
        $("#venue").html(response[125].venue.name)

        var concertDate = response[0].datetime
        console.log(concertDate)

        for (var i = 0; i < response.length || 5; i++) {
            var time = moment(response[i].datetime).format("MMM Do, YYYY hh:mm");
            var venueName = response[i].venue.name
            var city = response[i].venue.city;
            var region = response[i].venue.region

            if (i == 5) {
                break;
            }









            $(".tableData").before($("<tr><td>" + venueName + "</td>" + "<td>" + city + ', ' + region + "</td>" + "<td>" + time + "</td></tr>"))

        }
    });

    $("#concertInfo").find("td").remove();



})










var today = new Date();
console.log(today)

