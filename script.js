// Add any JavaScript functionality here
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  
  // Toggle navigation menu for smaller screens
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }

  
