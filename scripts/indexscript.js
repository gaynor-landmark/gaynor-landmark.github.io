
function picNum(){
  // return a random number between 1 and 12
  return (Math.floor(Math.random() * 12) + 1);
}

function dropReflectionsNav(){
  console.log ("ref");
  document.getElementById("reflectionsLinks").classList.toggle("show");
  //close projects if they are open
  var dropdownContent = document.getElementById("projectsLinks");
  if (dropdownContent.classList.contains('show')){
    dropdownContent.classList.remove('show');
  } 
}

function dropProjectsNav(){
  console.log("pro") ;
  document.getElementById("projectsLinks").classList.toggle("show");
  //close reflections if they are open
  var dropdownContent = document.getElementById("reflectionsLinks");
  if (dropdownContent.classList.contains('show')){
    dropdownContent.classList.remove('show');
  }
}

window.onclick = function(e){
  if (!e.target.matches("#reflections")){
   


    
  }
}

$(document).ready(function(){
  // load the bottom three pictures -select randomly from the set of ten
  for (var i = 1; i < 4; i++){
    var riverPic = document.getElementById("riverPic" + i);   
    riverPic.src = "./images/Bend-in-the-river" + picNum() + ".jpg";
  };
});
