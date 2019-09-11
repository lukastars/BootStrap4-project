/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


$( document ).ready(function() {
    $('#headerVideoLink').magnificPopup({
     type:'inline',
     midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
   });
     
   });