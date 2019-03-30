$(document).ready(function() {
// This needs to be changed from trending to search

var topics = ["movies", "funny", "dogs", "games"];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[1] + "&limit=10&api_key=oQjorW0Bm04hLKT7uWYB2WjxV0EJV3uD";

function generateGif() {
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    for (var i = 0; i < response.data.length; i++){
    $("#gif").append("<img src='" + response.data[i].images.fixed_height_still.url + "'>"); 
    }
});
}

function makeButton(){

    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++){
        var b = $("<button>");

        b.addClass("topic");
        b.attr("data-word", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    }
}


// $("#gif").on("click", function(event){
//     event.preventDefault();
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response){
//           $("#gif").html("<img src='" + response.data[9].images.fixed_height.url + "'>"); 
//           $("#gif2").html("<img src='" + response.data[10].images.fixed_height_still.url + "'>");    

//       });  
// });

// $("#gif2").on("click", function(event){
//     event.preventDefault();
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response){
//       $("#gif2").html("<img src='" + response.data[10].images.fixed_height.url + "'>");    
//       $("#gif").html("<img src='" + response.data[9].images.fixed_height_still.url + "'>"); 

//     });  
// });
    
makeButton();
generateGif();
});