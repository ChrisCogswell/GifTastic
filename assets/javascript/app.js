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
    
            var gifURLstatic = response.data[i].images.fixed_height_still.url;
            var gifURLanimate = response.data[i].images.fixed_height.url;
            var gif = $("<img>")
            gif.attr("src", gifURLstatic); 
            gif.addClass("gif");
            gif.attr("data-still", gifURLstatic);
            gif.attr("data-animate", gifURLanimate);
            gif.attr("data-state", "still"); 
    
            gifDiv.append(gif);
    
            $("#gifs").prepend(gifDiv);
          
         }
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




$(document).on("click", ".gif", function(){
    console.log(this);
    
    var thisGif= $(this);
    var state= thisGif.attr("data-state");

    if (state === "still") {
        thisGif.attr("data-state", "animate");
        thisGif.attr("src", thisGif.attr("data-animate"))
    
      }else {
        thisGif.attr("data-state", "still")
        thisGif.attr("src", thisGif.attr("data-still"))
      }
    })
    
    
    $(document).on("click", ".topic-btn", generateGif);
    
    
        
    makeButton();
    });
    
