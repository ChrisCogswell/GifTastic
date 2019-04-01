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
            var gifDiv = $("<div class='gif' img src='response.data[i].images.fixed_height_still.url' data-still='response.data[i].images.fixed_height_still.url' data-animate='response.data[i].images.fixed_height.url' data-state='still'>");
            var rating = response.data[i].rating;
            var pOne = $("<p>").text("Rating: " + rating);
    
            gifDiv.append(pOne);
    
            var gifURL = response.data[i].images.fixed_height_still.url;
            var gif = $("<img>").attr("src", gifURL);
    
            gifDiv.append(gif);
    
            $("#gifs").prepend(gifDiv);
          
             }

        $(document).on("click", ".gif", function(event){
            event.preventDefault();

            console.log(this);
            
        var thisGif= $(this);
        
        // need to figure out how to get response data down here
        // console.log(response);
        var state= thisGif.attr("data-state");
        
        if (state === "still") {
            thisGif.attr("data-state", "animate");
            thisGif.attr("src", thisGif.attr("data-animate"))
            
        }else {
            thisGif.attr("data-state", "still")
            thisGif.attr("src", thisGif.attr("data-still"))
        }
        console.log(thisGif.attr("data-state"));
            })
    });
}

function makeButton(){
    
    $("#buttons").empty();
    
    for (var i = 0; i < topics.length; i++){
        
        var b = $("<button type='button' class='btn btn-success btn-lg'>");
        
        b.addClass("topic-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    }
}

$("#add-topic").on("click", function(event) {
    event.preventDefault();
    
    var newTopic = $("#topic-input").val().trim();
    
    topics.push(newTopic);

    makeButton();
  });




// $(document).on("click", ".gif", function(){
//     console.log(this);
    
// var thisGif= $(this);
// console.log(thisGif.attr("data-state"));
// console.log(thisGif.attr("data-animate"));
// // need to figure out how to get response data down here
// // console.log(response);
//     var state= thisGif.attr("data-state");

//     if (state === "still") {
//         thisGif.attr("data-state", "animate");
//         thisGif.attr("src", thisGif.attr("data-animate"))
    
//       }else {
//         thisGif.attr("data-state", "still")
//         thisGif.attr("src", thisGif.attr("data-still"))
//       }
//     })
    
    
    $(document).on("click", ".topic-btn", generateGif);
    
    
        
    makeButton();
    });
    