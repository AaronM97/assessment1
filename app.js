const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

let quotes = [
  '"Perfect is the enemy of good." <br> –Voltaire',
  '"I’m still learning." <br> –Michelangelo',
  '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
  '"Be curious, not judgmental." <br> –Walt Whitman',
  '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
  '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
  '"Nothing will work unless you do." <br> –Maya Angelou',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
  '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
  '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
  '"A learning curve is essential to growth." <br> –Tammy Bjelland'
];

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("index"));

app.get('/quotes', (req, res) => {
  // shouldn't include trailing slashes on routes
  // This doesn't really add anything as quotes is an array - seems like an expensive process to be iterating over an array to produce a string with breaks?
  res.send(quotes)
})

app.get('/quotes/random', (req, res) => {
  let rnd = Math.floor(Math.random() * quotes.length);
  res.send(quotes[rnd]);
})

app.get("/quotes/:index", (req, res) => {
  let index = req.params.index;
  console.log(typeof(index));
  // index will be a string
  // this works - however due to hidden conversion by JS - ideally should have explicit conversion from string to number type 
  // What if the array was extended? would the following code still be correct?
  const indexChecker = index <= 15 && index > 0 ? true : false;
  if (indexChecker) {
    res.status(200).send(quotes[req.params.index - 1])
  } else {
    // good use of status codes - but a little excessive for the purposes of this exercise. 
    // what if the array was extended? Would the following message still be valid?
    res.status(404).send(`There are only 15 quotes. Please pick a quote between 1 & 15.`);
  }
});

app.listen(port, () => console.log(`Quote App listening on port ${port}!`));
// Would have been good to change this from the stock response.