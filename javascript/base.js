// ---Light or Dark Theme css switcher---///

document.addEventListener("DOMContentLoaded", () => {
  // initially set class="lightTheme" to body tag
  let body = document.querySelector('#body');
  body.classList.add("lightTheme");
  body.classList.add("lightSwitcher")

  // The button that switch dark or light theme
  let themeSwitcher = document.querySelector('#theme-switcher');

  themeSwitcher.addEventListener("click", () => {
    let currentIsLightTheme = body.classList.contains("lightTheme")
    
    if (currentIsLightTheme) {
      body.classList.remove("lightTheme")
      body.classList.add("darkTheme")
      body.classList.remove("lightSwitcher")
      body.classList.add("darkSwitcher")
    }
    if (!currentIsLightTheme) {
      body.classList.remove("darkTheme")
      body.classList.add("lightTheme")
      body.classList.remove("darkSwitcher")
      body.classList.add("lightSwitcher")
    }
  })

})


//--- icon-menu active-or-not UI---//
// expand menu when in samll screen size
// collaspe the expanded munu wehn click outside the menu
const menu_container = document.querySelector('.menu-content-container')

document.addEventListener("click", (e) => {
  if (e.target.classList.contains('icon-menu')) {
    menu_container.classList.add("menu-active")
  } else {
    menu_container.classList.remove("menu-active")
  };

})


// ---Go to Top Button---///

function createBtn() {
    let btn = document.createElement('button');
    document.body.appendChild(btn);
}

// When the user clicks on the button, scroll to the top of the document
const button = document.querySelector('.go-to-top');
button.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

