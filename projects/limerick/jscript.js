var timeoutID;   
function showLimerick(){
  //clear the timeout 
  window.clearTimeout(timeoutID);
  //retrieve the name that was entered
  var name = document.getElementById("name"); 
   $("#text").empty();      // clear any previous limerick or message ;
  if (name.value == ""){
    $("#text").append("Please enter your name so that I  can write you a limerick.");
  }
  else {
    var myLimerick = firstLine(randN()) + name.value + "<br>";    //else, add name to the end of the first line 
    myLimerick = myLimerick  + limerick.who[randN()] + "<br>";
    myLimerick = myLimerick  + limerick.andThen[randN()] + "<br>";
    myLimerick = myLimerick  + limerick.andSo[randN()] + "<br>"; + "!";

    $("#text").append(myLimerick);
  };
  // display the limerick text or reminder
  var lim = document.getElementById("limerick");     
  if (lim.classList.contains("hidden")){
    lim.classList.remove("hidden");
  }
  // display the try again button
  if  (name.value != ""){
    var btn = document.getElementById("again");     
    if (btn.classList.contains("hidden")){
      btn.classList.remove("hidden");
    }
  }
}

function firstLine(n){
  return "There once was " + limerick.animal[n] + " named ";
}

function randN(){
  //return a random number between 0 and 2
  var x = Math.random();
  console.log(x);
  return Math.floor(Math.random() * 3);
}

var limerick = {
  animal: ["a horse", "a dog", "a turkey"],
  who: ["Who went to  vist the zoo,", "Who rode to the beach in a bus,", "Who lived at the top of the hill,"],
  andThen: ["The sun was too hot and the water too cold,", "They thought he'd escaped, he was caught at the gate", "His house caught alight, on a black stormy night,"],
  andSo: ["And he never went there again.", "And he nearly passed out from the  pain.", "And he never got home again."]

};

$(document).ready(function(){
  var btn = document.getElementById("again");
  btn.addEventListener("click", showLimerick,true);
  // set a timer and remind the user to enter their name if they haven't when a few seconds have passed - use showLImerick to do this
  timerID = window.setTimeout(showLimerick, 2000);
});
