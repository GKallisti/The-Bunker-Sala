window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollToSection(sectionId) {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        const sectionId = event.target.textContent.toLowerCase();
        scrollToSection(sectionId);
      }
    });
  }
});
