// just needed to wrap this is the $(document).ready(function) {...}
// and then fix the axios call for the GET
$("form").submit(event => {
  event.preventDefault();
  axios.post("").then(response => {
    quote = response.data;
    $("#text").css({
      "text-align": "center",
      "min-height": "150px",
      display: "flex",
      "justify-content": "center",
      "align-items": "center"
    });
    $(".quote").html(quote);
  });
});

// The code already exists in this file to be able to make a call to your own random quote route. 
// This is duplicating eisint functionality that just needed fixing.
// It does however function to produce the intended output

// $(document).ready(function () {
//   $('input').click(function () {
//     event.preventDefault();
//     event.stopPropagation();
//     $('.quote').text(`${getRandomQuote()}`);
//   })
// }) // made this jquery to display a quote when the button was clicked 
// // Console logged typeof getrandquote to see what I get back and it was a string so its expected to (when I insert it to the <p>) render out the <br> but it doesn't. spent too much time atempting it so cutting my losses short and moving on
// // had to keep a copy of the quotes here as I didn't know how to 