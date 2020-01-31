// calling the farmers market api


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



        for (var i = 0; i < 5; i++) {

            console.log(response[i])



        }


        $("#artistName").html(artistName)
        image.attr('src', imageURL)
        $("#artistDiv").append(image)

    });
})






$("#close").on('click', function () {
    $("#artistDiv").empty()
})

