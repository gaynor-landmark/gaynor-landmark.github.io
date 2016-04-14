
function picNum(){
  // return a random number between 1 and 11
  return (Math.floor(Math.random() * 11) + 1);
}

function picNumArray(){
  // return an array of 3 random numbers without duplicates
  var picNumArr = [];
  var i = 0;
  while (i < 3) {
    var newNum = picNum();
    if (picNumArr.indexOf(newNum) < 0) {
      picNumArr[i] = newNum;
      i++;
    }
  }
  return picNumArr;
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

document.onclick = function(e){

  if (e.target.id !== 'reflectionsID') {
    //close reflections if they are open
    var refdropdownContent = document.getElementById("reflectionsLinks");
    if (refdropdownContent.classList.contains('show')){
      refdropdownContent.classList.remove('show');
    }
  }
  if (e.target.id !== 'projectsID') {
    //close projects if they are open
    var prodropdownContent = document.getElementById("projectsLinks");
    if (prodropdownContent.classList.contains('show')){
      prodropdownContent.classList.remove('show');
    }
  }
}

$(document).ready(function(){
  // load the bottom three pictures -select randomly from the set of 11
  var picNumArr = picNumArray();
  console.log(picNumArr);
  for (var i = 1; i < 4; i++){
    var riverPic = document.getElementById("riverPic" + i);
    riverPic.src = "./images/Bend-in-the-river" + picNumArr[i -1] + ".jpg";
  };
});
