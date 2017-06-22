// grab the articles as a json


$.getJSON('/articles', function(data) {

  console.log("app.js file .getJSON runs");


  // for each one
  for (var i = 0; i<data.length; i++){
    // display the apropos information on the page
    $('#articles').append('<div class="myarticle"><a href="'+ data[i].link +'"><p data-id="' + data[i]._id + '">'+ data[i].title +'</a><p>Submit your comment:</p><form action="submit"><input type="text"><input type="submit"></form></div>');
  }
});