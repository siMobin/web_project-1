document.addEventListener("DOMContentLoaded", function () {
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = ' ';
    pTag.appendChild(newVal);
  }); 

var pos1 = window.pageYOffset;
window.onscroll = function() {
var pos2 = window.pageYOffset;
  if (pos1 > pos2) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  pos1 = pos2;
}