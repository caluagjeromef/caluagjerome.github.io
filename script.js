// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
  };
  
  // Get the navbar
  var navbar = document.getElementById("navbar");
  
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.scrollY > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  //slides
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var slides = document.getElementsByClassName("slide");
    
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2500); // Change slide every 2 seconds (adjust as needed)
  }
  
  function changeSlide(n) {
    slideIndex += n;
    showSlides();
  }

