$(document).ready(function(){
  // load the main image -select randomly from the set of 11

    var riverPic = document.getElementById("img1");
    var pic = picNum()

    riverPic.src = "./images/Bend-in-the-river" + pic + ".jpg";
  console.log('doc ready', pic, riverPic.src)
});


function picNum(){
  // return a random number between 1 and 11
  return (Math.floor(Math.random() * 11) + 1);
}
