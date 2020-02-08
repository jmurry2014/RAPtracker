$("#artistButton").on('click', function () {
    var artist = $("#artistSearch").val().trim()
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=test&date=upcoming" + artist + "?app_id=test";
    var test = $("#map").attr('data-vision')

    console.log(test)

    if (test === 'hide') {
        console.log('this is hidden')
        $('#map').hide()
        $("#map").attr('data-vision', 'show')

    }


    else {
        console.log('this is visible')
        $('#map').show()
        $("#map").attr('data-vision', 'hide')
    }


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


            if (today.getTime() < concertDate.getTime()) {
                $(".tableData").before($("<tr><td>" + venueName + "</td>" + "<td>" + city + ', ' + region + "</td>" + "<td>" + time + "</td></tr>"))
            } else {
                continue;
            }

        }
        $("#map").show()




    });
    $("#concertInfo").find("td").remove();

})






function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 38.899,
            lng: -94.725
        }
    });

} $("#map").hide()