$(document).ready(function() {
// This needs to be changed from trending to search

var topics = ["movies", "funny", "dogs", "video games"];


function generateGif() {

    $("#gifs").empty();
    
    var topic= $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=oQjorW0Bm04hLKT7uWYB2WjxV0EJV3uD";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
   
    for (var i = 0; i < response.data.length; i++){
        var gifDiv = $("<div class='gif'>");
        var rating = response.data[i].rating;
        var pOne = $("<p>").text("Rating: " + rating);

        gifDiv.append(pOne);

        var gifURL = response.data[i].images.fixed_height_still.url;
        var gif = $("<img>").attr("src", gifURL);

        gifDiv.append(gif);

        $("#gifs").prepend(gifDiv);

    }
    // $("#gifs").append("<img src='" + response.data[i].images.fixed_height_still.url + "'>"); 
    
});
}

function makeButton(){

    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++){
        
        var b = $("<button>");

        b.addClass("topic-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    }
}







$(document).on("click", ".topic-btn", generateGif);


    
makeButton();
});