export class NavibarService {
  constructor() {
    this.ctn = document.querySelector('#right-side-fixed')
    this.navLinks = document.querySelectorAll('a.nav-link'); // for nav items
    this.navHeight = document.querySelector("#header").scrollHeight
  }

  smoothScroll(event) {
    event.preventDefault()
    const targetAnchorID = event.target.getAttribute('href') 
    const targetAnchor = document.querySelector(targetAnchorID)
    this.ctn.scrollBy({ top: this._distanceToNavbar(targetAnchor), left: 0, behavior: 'smooth' })
  }

  _distanceToTop(ele) { return Math.floor(ele.getBoundingClientRect().top) }
  _distanceToNavbar(ele) { return this._distanceToTop(ele) - this.navHeight }

  onClick(cb) {
    this.navLinks.forEach((navLink) => {
      navLink.addEventListener("click", cb)
    })
  }
}