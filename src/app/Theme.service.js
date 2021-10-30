export class ThemeService {
  constructor() {
    this.body = document.querySelector('body')
    this.switcher = document.querySelector('#theme-switcher')
  }

  init() {
    this.body.classList.add("lightTheme")
    this.body.classList.add("lightSwitcher")
  }

  onClick(cb) {
    this.switcher.addEventListener("click", cb)
  }

  isLight() {
    return this.body.classList.contains("lightTheme")
  }

  switchDark() {
    this.body.classList.remove("lightTheme")
    this.body.classList.add("darkTheme")
    this.body.classList.remove("lightSwitcher")
    this.body.classList.add("darkSwitcher")
  }

  switchLight() {
    this.body.classList.remove("darkTheme")
    this.body.classList.add("lightTheme")
    this.body.classList.remove("darkSwitcher")
    this.body.classList.add("lightSwitcher")
  }
}