var firstBlockID = ""
var secondBlockID = ""
var timeoutID
var matchesNr = 0
var missesNr = 0
var timeoutid

$(document).ready( function(){

  $(document).on("click", "#board td", function(e){
    var blockID = $(this).attr('id')
    if (canRespond(blockID))
    {
      playBlock(blockID);
    }
   })
  }
)

function canRespond (blockID) {
  console.log("canrespond", timeoutid, typeof timeoutid)
  if (timeoutid !== undefined) {
    return false
  }
  if (blockID === firstBlockID || blockID === secondBlockID){
    return false
  }
  var block = $("#" + blockID)
  if (block.hasClass("match")) {
    return false  // don't respond to the click if the block has already been matched
  }
  return true
}

function playBlock(blockID){
  if  (firstBlockID === "") {
    firstBlockID = blockID
    $("#" + firstBlockID).toggleClass("newColour" + blockID)
  } else {
    secondBlockID = blockID
    $("#" + secondBlockID).toggleClass("newColour" + blockID)
    if (checkMatch(firstBlockID, secondBlockID)){
      //it is a match
      // change the class to matched
      $("#" + secondBlockID).addClass("match")
      $("#" + firstBlockID).addClass("match")
      matchesNr++
      var msg1 = document.getElementById("message1")
      msg1.textContent = "Matches " + matchesNr
      firstBlockID = ""
      secondBlockID = ""
    } else {
      // unset both selections
      if (firstBlockID !== secondBlockID){
        missesNr++
        var msg2 = document.getElementById("message2")
        msg2.textContent = "Misses " + missesNr
        timeoutid = setTimeout(function(){ unset() }, 2000)
        console.log(timeoutid)
      }
    }
  }

}


function unset(){
  //unset the miss-matched colours to pick another match
  //alert("unsetting")
  var secondblock = $("#" + secondBlockID)
  var firstblock = $("#" + firstBlockID)
  firstblock.toggleClass("newColour" + firstBlockID )
  secondblock.toggleClass("newColour" + secondBlockID )
  firstBlockID = ""
  secondBlockID = ""
  clearTimeout(timeoutid)
  timeoutid = undefined
}

function checkMatch(firstBlockID, secondBlockID){
  // if the same color was picked twice - return false
  if (firstBlockID == secondBlockID) {
    firstBlockID = ""
    secondBlockID = ""
    return false
  }
  //check the pairs to see if this is a match
  switch (firstBlockID) {
    // row 1
    case "r1c1" : {
     // orange
     return (secondBlockID == "r2c1")
     break
    }
    case "r1c2" :{
     // red
     return (secondBlockID == "r2c3")
     break
    }
    case "r1c3" :{

     return (secondBlockID == "r2c4")
     break
    }
    case "r1c4" : {
     // Indigo
     return (secondBlockID == "r4c1")
     break;
    }
    case "r1c5": {
     // MistyRose
     return (secondBlockID == "r5c3")
     break;
    }
    //row 2
    case "r2c1": {
     // orange
     return (secondBlockID == "r1c1")
     break;
    }
    case "r2c2": {
     // Coral
     return (secondBlockID == "r3c4")
     break;
    }
    case "r2c3": {
     // red
     return (secondBlockID == "r1c2")
     break;
    }
    case "r2c4":{
     //
     return (secondBlockID == "r1c3")
     break;
    }
    case "r2c5": {
     // Sienna
     return (secondBlockID == "r5c4")
     break;
    }
  //row 3
    case "r3c1" :{
     // Orchid
     return (secondBlockID == "r4c2")
     break;
    }
    case "r3c2" :{
     // black
     return (secondBlockID == "r6c2")
     break;
    }
    case "r3c3" :{
     // green
     return (secondBlockID == "r3c5")
     break;
    }
    case "r3c4":{
     // SpringGreen
     return (secondBlockID == "r2c2")
     break;
    }
    case "r3c5" :{
     // green
     return (secondBlockID == "r3c3")
     break;
    }
    //row 4
    case "r4c1" :{
     // Indigo
     return (secondBlockID == "r1c4")
     break;
    }
    case "r4c2":{
     // Orchid
     return (secondBlockID == "r3c1")
     break;
    }
    case "r4c3" :{
     // SpringGreen
     return (secondBlockID == "r4c4")
     break;
    }
    case "r4c4" :{
     // SpringGreen
     return (secondBlockID == "r4c3")
     break;
    }
    case "r4c5": {
     // SkyBlue
     return (secondBlockID == "r5c5")
     break;
    }
    //row 5
    case "r5c1":{
     // Gold
     return (secondBlockID == "r5c2")
     break;
    }
    case "r5c2":{
     // Gold
     return (secondBlockID == "r5c1")
     break;
    }
    case "r5c3" :{
     // MistyRose
     return (secondBlockID == "r1c5")
     break;
    }
    case "r5c4": {
     // Sienna
     if (secondBlockID == "r2c5"){
       return true;
     }
     break;
    }
    case "r5c5": {
     // SkyBlue
     if (secondBlockID == "r4c5"){
       return true;
     }
     break;
    }
    //row 6

    case "r6c1":{
     // Grey
     if (secondBlockID == "r6c3"){
       return true;
     }
     break;
    }
    case "r6c2":{
     // Black
     if (secondBlockID == "r3c2"){
       return true;
     }
     break;
    }
    case "r6c3" :{
     // grey
     if (secondBlockID == "r6c1"){
       return true;
     }
     break;
    }
    case "r6c4": {
     // Purple
     if (secondBlockID == "r6c5"){
       return true;
     }
     break;
    }
    case "r6c5": {
     // Purple
     if (secondBlockID == "r6c4"){
       return true;
     }
     break;
    }
    default:
      return false;
  }
}
