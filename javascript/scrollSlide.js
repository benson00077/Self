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

  let figure = document.querySelector('figure')
  let figcaption = document.querySelector('figcaption')

  let slidableDistance = document.querySelector('#content').offsetTop
  let scroll = window.pageYOffset

  // -- testing -- //
  let testing = document.querySelector('#testing')
  //domFloatHandler(testing, slidableDistance, scroll)
  // -- testing -- //

  let unlock = document.querySelector('#unlock')
  let messages = document.querySelectorAll('#message p')
  let buffer = 4 // buffer for previouse scroll animation
  let frameHeigth = slidableDistance / (messages.length + buffer) // or just get client vh 
  //let frameState = {active: null}
  let frameState = [...Array(messages.length + buffer)].map(() => null)

  /* unlock */ 
  if (scroll >= frameHeigth) {
    unlock.classList.remove('locked')
  } else {
    unlock.classList.add('locked')
  }


  /* messages */
  for (let i = 0; i < messages.length; i++) {  
    if (scroll >= frameHeigth * (i + buffer) && scroll < frameHeigth * (i + buffer + 1)) {
      //frameState.active = i
      frameState[i] = true
      if (frameState[i+1]) framesState[i+1] = false

      messages[i].classList.add('is-active')
      if (messages[i+1]) messages[i+1].classList.remove('is-active')
      break
    }
  }


  if (scroll <= slidableDistance * (2/3) ) { // 改成 css .in-active ，不然會影響效能 reflow
    figure.style.position = "fixed"
    figure.style.transform = "translatex(0)"
    //figcaption.style["background-position"] = "0% -" + scroll / 10 + "px"
    //figcaption.scrollBy({ top: scroll, left: 0, behavior: 'smooth' })
  }
  else if (scroll > slidableDistance * (2/3) ) {
    //figure.style.transform = `translatex(${window.innerWidth}px)`
    //figure.style.transform = `translateY(${window.innerHeight / 2}px)`
    figure.style.transform = `scale(${1.5})`
    //figcaption.scrollBy({ top: scroll, left: 0, behavior: 'smooth' })
  }
  else {
    figure.style.position = "relative"
  }
  
  // prevent scroll the inside div before outside one sroll to bottom
  let tolerate = 30; // > tolerate should hook with 瀏覽器 %大小
  const left_side_fixed = document.querySelector('.right-side-fixed')
  if (scroll + tolerate < slidableDistance) {
    left_side_fixed.style.overflowY = "hidden"
  }
  if (scroll + tolerate >= slidableDistance) {
    left_side_fixed.style.overflowY = "scroll"
  }
}


// DEPRECATED 左側欄位 一開始浮動後 到底端左側定位
// dom = document.querySelector('.testing')
function domFloatHandler(dom, slidableDistance, winScroll) {
  if (winScroll <= slidableDistance / 2) {
    if (dom.classList.contains("testing2")) dom.classList.remove("testing2")
    dom.classList.add("testing")
  }
  if (winScroll > slidableDistance / 2) {
    if (dom.classList.contains("testing")) dom.classList.remove("testing")
    dom.classList.add("testing2")
  }
}
