


var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=oQjorW0Bm04hLKT7uWYB2WjxV0EJV3uD";

function staticGif() {
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    $("#gif").append("<img src='" + response.data[9].images.fixed_height_still.url + "'>"); 
    $("#gif2").append("<img src='" + response.data[10].images.fixed_height_still.url + "'>");    
   
});
}

function movingGif(){
}


$("#gif").on("click", function(event){
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          $("#gif").html("<img src='" + response.data[9].images.fixed_height.url + "'>"); 
          $("#gif2").html("<img src='" + response.data[10].images.fixed_height_still.url + "'>");    

      });  
    // movingGif();
});

$("#gif2").on("click", function(event){
    event.preventDefault();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      $("#gif2").html("<img src='" + response.data[10].images.fixed_height.url + "'>");    
      $("#gif").html("<img src='" + response.data[9].images.fixed_height_still.url + "'>"); 

    });  
});
    

staticGif();