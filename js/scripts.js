



// RANDOM QUOTE GENERATOR
// Load a new quote from a list of quotes and plug it into the DOM
function loadNewQuote() {
  // Array of arrays of quotes, authors
  var quotes = [
    ["Organizing is what you do before you do something, so that when you do it, it is not all mixed up.", "A. A. Milne"],
    ["Good order is the foundation of all things.", "Edmund Burke"],
    ["For every minute spent organizing, an hour is earned.", "Benjamin Franklin"],
    ["But everything should be done in a fitting and orderly way.", "1 Corinthians 14:40"],
    ["A year from now you may wish you had started today.", "Karen Lamb"]
  ]
  // Get a random number
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  // Get a random quote
  var quote = quotes[randomNumber];
  // Plug quote and author into the #quote and #quote author
  document.getElementById('quote').innerHTML = quote[0]
  document.getElementById('quote-author').innerHTML = quote[1]

}


// SIDENAV

// Open the sidenav by triggering CSS rules
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("noScroll");
}

// Close the navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").classList.remove("active");
  document.body.classList.remove("noScroll");
}
