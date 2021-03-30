mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
    var nav = document.getElementsByClassName("menu");  
    nav[0].classList.add("scrolled");
  } else {
    mybutton.style.display = "none";
    var nav = document.getElementsByClassName("menu");  
    nav[0].classList.remove("scrolled");
  }

  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

