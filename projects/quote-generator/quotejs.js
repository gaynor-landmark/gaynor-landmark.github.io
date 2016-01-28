// Quotes to display
var quotes = [ {qt: "Do it with passion or not at all.", auth: "Anonymous"},
               {qt: "Today I  choose JOY", auth: "Anonymous"},
               {qt: "Today me will live in the moment unless it's unpleasant in which case me will eat a cookie", auth: "Cookie Monster"},
               {qt: "Hard times require furious dancing", auth: "Anonymous"},
               {qt: "I love deadlines. I like the whooshing sound they makes as they fly by.", auth: "Douglas Adams"},
               {qt: "When someone told me that I lived in a fantasy land, I nearly fell off my unicorn!", auth: "Anonymous"}
               ]
var HTMLQuote = '<div class="quoteText">%data%</div>';
var HTMLAuthor = '<div class="quoteAuthor"><h3>%data%</h3></div>';

$('#newQuote').on('click', function(e) {
    e.preventDefault();
    var quoteText =  displayQuote();
    // Remove existing iframe
    $('#twitter iframe').remove();
    $("#tweet").remove();
    var tweetBtn = $('<a></a>')
                   .addClass('twitter-share-button')
                   .attr('href', 'http://twitter.com/share')
                   .attr('data-url', 'http://test.com')
                   .attr('data-text', quoteText);
   $("#twitter").append(tweetBtn);     // add it back with the new quote   
   twttr.widgets.load();     //reload the  twitter iframe
});

// set the text for the next random quote
function displayQuote(){
  var rndN = getRndNumber(0, quotes.length -1);
  $("#quote").empty();
  var quoteText = $("#quote");     
  quoteText.empty();
  var formattedQuote = HTMLQuote.replace("%data%", quotes[rndN].qt )
  quoteText.append(formattedQuote);
  var formattedAuthor = HTMLAuthor.replace("%data%", quotes[rndN].auth )
  quoteText.append(formattedAuthor);
  return quotes[rndN].qt;
}

function getRndNumber (mn, mx) {
  return Math.floor(Math.random() * (mx - mn +1)) + mn;
}

$(document).ready(function (){
  // the first quote is defaulted
});