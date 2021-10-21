// 初始到 miansection 之間 scroll 的動畫效果

// usefull api for scrolling : 
// const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)  scrollHeight
// OR document.documentElement.getBoundingClientRect().top

(function() {
  let width = window.innerWidth
  if (width < 900) return

  window.addEventListener("scroll", openingAnimationSlide)
})();


function openingAnimationSlide(){

  let slidableDistance = document.querySelector('#content').offsetTop
  let scroll = window.pageYOffset


  let unlock = document.querySelector('#unlock')
  let messages = document.querySelectorAll('#message p')
  let buffer = 1 // buffer for previouse scroll animation
  let frameHeigth = slidableDistance / (messages.length + buffer) // or just get client vh 

  /* unlock screen scroll animation */ 
  if (scroll >= frameHeigth / 3) {
    unlock.classList.remove('locked')
  } else {
    unlock.classList.add('locked')
  }


  /* messages scroll animation */
  for (let i = 0; i < messages.length; i++) {  
    if (scroll >= frameHeigth * (i + buffer) && scroll < frameHeigth * (i + buffer + 1)) {
      messages[i].classList.add('is-active')
      if (messages[i+1]) messages[i+1].classList.remove('is-active')
      break
    }
  }


  /* figure(mobile) scroll animaiton  */
  let figure = document.querySelector('figure')
  let fileDonwloading = document.querySelector('#file-downloading')
  let unit = slidableDistance * (1/10)
  if (scroll <= unit * 5 ) { 
    figure.classList.contains("animation") && figure.classList.remove("animation")
  } else if (scroll > unit * 5 && scroll <= unit * 7) {
    figure.classList.contains("animation-rotate") && figure.classList.remove("animation-rotate")
    figure.classList.add("animation")
    fileDonwloading.classList.contains("animation-display") && fileDonwloading.classList.remove("animation-display")
  } else if (scroll > unit * 7 && scroll <= unit * 9) {
    figure.classList.contains("animation") && figure.classList.remove("animation")
    figure.classList.add("animation-rotate") 
    fileDonwloading.classList.contains("animation-rotate") && fileDonwloading.classList.remove("animation-rotate")
    fileDonwloading.classList.add("animation-display")
  } else if (scroll > unit * 9) {
    fileDonwloading.classList.add("animation-rotate")
  }
  
  /* prevent scroll the inside div before outside one sroll to bottom */
  let tolerate = 5; // > tolerate should hook with 瀏覽器 %大小
  const left_side_fixed = document.querySelector('.right-side-fixed')
  if (scroll + tolerate < slidableDistance) {
    left_side_fixed.style.overflowY = "hidden"
  }
  if (scroll + tolerate >= slidableDistance) {
    left_side_fixed.style.overflowY = "scroll"
  }
}
