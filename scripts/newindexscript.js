$(document).ready(function(){
  // load the main image -select randomly from the set of 5

    var riverPic = document.getElementById("img1");
    var pic = picNum()

    riverPic.src = "./images/river" + pic + ".jpg";
  console.log('doc ready', pic, riverPic.src)
});


function picNum(){
  // return a random number between 1 and 5
  return (Math.floor(Math.random() * 5) + 1);
}

document.onclick = function(e){

  if (e.target.id !== 'reflectionsID') {
    //close reflections if they are open
    var refdropdownContent = document.getElementById("reflectionsLinks");
    if (refdropdownContent.classList.contains('show')){
      refdropdownContent.classList.remove('show');
    }
  }

}
function dropReflectionsNav(){
  console.log ("ref");
  document.getElementById("reflectionsLinks").classList.toggle("show");

}
