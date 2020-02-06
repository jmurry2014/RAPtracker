


$("#artistButton").on('click', function () {
    var artist = $("#artistSearch").val().trim()
    console.log(artist)

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=test&date=upcoming" + artist + "?app_id=test";
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

        console.log(time)
        for (var i = 120; i < response.length; i++) {
            var time = moment(response[i].datetime).format("MMM Do, hh:mm")
            $("#tableData").after($("<tr><td>" + response[i].venue.name + "</td>" + "<td>" + response[i].venue.city + ', ' + response[i].venue.region + "</td>" + "<td>" + time + "</td>"))











        }




    });
})








