// just needed to wrap this is the $(document).ready(function) {...} /// I at the time of the exam didn't understand axios and didn't use it - hence my function down below. But otherwise this is something I did overlook
// and then fix the axios call for the GET

// Sensei Dom's comments /// Student Aaron's comments 
/// var axios = require('axios').default; why does the app not work when you add this line when in theory you'd think to add this to be able to use axios
/// to test myself, I will read this Jquery in English, and can you please tell me if I am right or left
$(document).ready(function() { // When the document has finished loading, do this function
$("form").submit(event => { // from the form (on html), when there is a submit event fired do what proceeds
  event.preventDefault(); // do not refresh page
  axios.get("/quotes/random").then(response => { // using axios get this route, then with the response
    let quote = response.data; // let quote = the data value of the response object
    $("#text").css({
      "text-align": "center",
      "min-height": "150px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    }); // change a whole load of the css of the element with class text
    $(".quote").html(quote); // on the class with quote change the html content to show the value of quote
  });
});
})

// The code already exists in this file to be able to make a call to your own random quote route. 
// This is duplicating exisint functionality that just needed fixing.
// It does however function to produce the intended output
/// Only after reviewing this with less pressure I see how everything was essentially given to us on a silver platter, and I shot myself in the foot by yes creating my own function for what is already given. Take: take a moment to understand things better which will in turn help me manage stress which will lead to less stupidness from me 


// $(document).ready(function () {
//   $('input').click(function () {
//     event.preventDefault();
//     event.stopPropagation();
//     $('.quote').text(`${getRandomQuote()}`);
//   })
// }) // made this jquery to display a quote when the button was clicked 
// // Console logged typeof getrandquote to see what I get back and it was a string so its expected to (when I insert it to the <p>) render out the <br> but it doesn't. spent too much time atempting it so cutting my losses short and moving on
// // had to keep a copy of the quotes here as I didn't know how to 

