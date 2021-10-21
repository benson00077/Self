// !! TBD: indicator.style.backgroundColor
// !! TBD: closure protect vars
// !! TBD: 點選 nav 的時候會有 issue ，navIndicator 內看就知道 計算量太大了

// 監聽 scroll 改變 navStyle  (是 right_side_content 不是 window.scroll 上監聽)
// 監聽 nav 點擊 改變 navStyle 
// 監聽 nav 點擊 改變 scroll anchor 


const indicator = document.querySelector('.nav-indicator'); // for nav bar style 
const items = document.querySelectorAll('a.nav-link'); // for nav items
const elesContent = {
  exp: document.querySelector('#experience'),
  edu: document.querySelector('#education'),
  por: document.querySelector('#portfolio'),
  ref: document.querySelector('#reference')
}

const _navHeight = document.querySelector("#header").scrollHeight

main()

function scrollHandlerNaviBarStyle() {
  const [ expNav, eduNav, porNav, refNav ] = items
  const { exp, edu, por, ref }  = elesContent
  const expButtomBorderLine = exp.getBoundingClientRect().bottom
  const eduButtomBorderLine = edu.getBoundingClientRect().bottom
  const porButtomBorderLine = por.getBoundingClientRect().bottom
  const refButtomBorderLine = ref.getBoundingClientRect().bottom

  // scroll to different section
  if (expButtomBorderLine >= _navHeight) {
    navIndicator(expNav)
  } else if (expButtomBorderLine < _navHeight && eduButtomBorderLine >= _navHeight) {
    navIndicator(eduNav)
  } else if (eduButtomBorderLine < _navHeight && porButtomBorderLine >= _navHeight) {
    navIndicator(porNav)
  } else if (porButtomBorderLine < _navHeight && refButtomBorderLine >= _navHeight) {
    navIndicator(refNav)
  }
}

function navIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`; 
  indicator.style.left = `${el.offsetLeft}px`;
  // indicator.style.backgroundColor = el.getAttribute('active-color'); // set color in html file

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

function clickHandlerAnchorsSmoothScroll(event, respond = null) {
  const left_side_fixed = document.querySelector('.right-side-fixed')
  if (!left_side_fixed) return console.error("left_side_fixed not found. Should fix logic of scroll Anchor")
  
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)
  event.preventDefault()
  const targetID = (respond)
    ? respond.getAttribute('href')
    : this.getAttribute('href') // this -> window obj

  const targetAnchor = document.querySelector(targetID)
  if (!targetAnchor) return console.error("targetAnchor not found. argvs passed into clickHandlerAnchorsSmoothScroll should be a tag?")
  const originalTop = distanceToTop(targetAnchor)

  left_side_fixed.scrollBy({ top: originalTop - _navHeight, left: 0, behavior: 'smooth' })
}

function main() {
  items.forEach((item, index) => {
    item.addEventListener('click', (e) => { 
      navIndicator(e.target) // e.target is a tag = item
      clickHandlerAnchorsSmoothScroll(e, e.target)
    });
    item.classList.contains('is-active') && navIndicator(item);
  });

  let width = window.innerWidth
  if (width < 900) return
  setTimeout(() => {
    const right_side_content = document.querySelector('.right-side-fixed')
    right_side_content.addEventListener('scroll', scrollHandlerNaviBarStyle)
  }, 0)
}