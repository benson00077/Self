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

// function gototop() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
