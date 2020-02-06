$("#artistButton").on('click', function () {
    var artist = $("#artistSearch").val().trim()
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=test&date=upcoming" + artist + "?app_id=test";
    console.log(artist)


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)


        var imageURL = response[0].artist.image_url;
        var image = $("<img id='pictureSize'>")
        var artistName = response[0].artist.name


        var todayDate = new Date()
        var today = new Date(todayDate);
        console.log('Todays Date: ' + today)




        $("#artistName").html(artistName)
        image.attr('src', imageURL)
        $("#artistImage").html(image)
        $("#venue").html(response[125].venue.name)




        for (var i = 0; i < response.length; i++) {
            var time = moment(response[i].datetime).format("MMM Do, YYYY hh:mm");
            var concertDate = new Date(response[i].datetime)
            var venueName = response[i].venue.name
            var city = response[i].venue.city;
            var region = response[i].venue.region

            console.log('Concert Date: ' + concertDate)
            // if (i == 5) {
            //     break
            // }

            if (today.getTime() < concertDate.getTime()) {
                //date 1 is newer
                console.log('date is valid')
                $(".tableData").before($("<tr><td>" + venueName + "</td>" + "<td>" + city + ', ' + region + "</td>" + "<td>" + time + "</td></tr>"))
            } else {
                console.log('date is invalid')
                continue;

            }





        }




    });

    $("#concertInfo").find("td").remove();



})






