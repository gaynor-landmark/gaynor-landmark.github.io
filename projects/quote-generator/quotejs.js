// Quotes to display
var quotes = [ {qt: "Do it with passion or not at all.", auth: "Anonymous"},
               {qt: "Today I  choose JOY", auth: "Anonymous"},
               {qt: "Today me will live in the moment unless it's unpleasant in which case me will eat a cookie", auth: "Cookie Monster"},
               {qt: "Hard times require furious dancing", auth: "Anonymous"},
               {qt: "When someone told me that I lived in a fantasy land, I nearly fell off my unicorn!", auth: "Anonymous"}
               ]
var HTMLQuote = '<div class="quoteText">%data%</div>';
var HTMLAuthor = '<div class="quoteAuthor"><h3>%data%</h3></div>';



function displayQuote(){
  var mn = 0;
  var mx = quotes.length -1;
  var rndN = getRndNumber(mn, mx);
  $("#quote").empty();
  var quoteText = $("#quote");     // document.getElementById("#quote");
  quoteText.empty();
  var formattedQuote = HTMLQuote.replace("%data%", quotes[rndN].qt )
  quoteText.append(formattedQuote);
  var formattedAuthor = HTMLAuthor.replace("%data%", quotes[rndN].auth )
  quoteText.append(formattedAuthor);

  // prepare to tweet with the new quote
  loadTwitterButton(quotes[rndN].qt);
} 

function loadTwitterButton(quoteText){
  $("#twitter iframe").remove();    //remove the old button
  var tweetBtn = $('<a id="tweet" class="twitter-share-button href="#">Tweet</a>')
                  .attr("href", "https://twitter.com/intent/tweet?text=" + quoteText);
  $("#twitter").append(tweetBtn);    // append a new button with the updated quote
  twttr.widgets.load(document.getElementById("#twitter")); 
}

function getRndNumber (mn, mx) {
  return Math.floor(Math.random() * (mx - mn +1)) + mn;
}

$(document).ready(function (){
  // display the first quote
  displayQuote();
  var btn = document.getElementById("newQuote");
  btn.addEventListener("click", displayQuote,true);
  
});