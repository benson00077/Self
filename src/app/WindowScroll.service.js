/** Is it better to abtract the frame logic? */

class ScreenCtn {
  constructor(scrollableLen) {
    this.posnIndicator = document.querySelector("#main-posn-indicator");
    this.unlockScreen = document.querySelector("#unlock");
    this.msgs = document.querySelectorAll("#message p");
    this.file = document.querySelector("#file-downloading");
    this.buffer = 1; // buffer for previouse scroll animation
    this.frameLen = scrollableLen / (this.msgs.length + this.buffer); // or just get client vh
  }

  main() {
    // let scrollPosn = window.pageYoffset();
    const scrollPosn =
      0 - Math.floor(this.posnIndicator.getBoundingClientRect().top);
    this.animation_unlockScreen(scrollPosn);
    this.animation_msgs(scrollPosn);
    this.animation_file(scrollPosn);
  }

  animation_unlockScreen(scrollPosn) {
    scrollPosn >= this.frameLen / 3 ? this._screenUnlock() : this._screenLock();
  }

  animation_msgs(scrollPosn) {
    /* messages scroll animation */
    for (let i = 0; i < this.msgs.length; i++) {
      if (
        scrollPosn >= this.frameLen * (i + this.buffer) &&
        scrollPosn < this.frameLen * (i + this.buffer + 1)
      ) {
        this.msgs[i].classList.add("is-active");
        if (this.msgs[i + 1]) {
          this.msgs[i + 1].classList.remove("is-active");
        }
        break;
      }
    }
  }

  animation_file(scrollPosn) {
    if (scrollPosn < this._framePosnFromLast(2)) {
      this._removeClass(this.file, "animation-display");
    } else if (
      scrollPosn >= this._framePosnFromLast(2) &&
      scrollPosn < this._framePosnFromLast(1)
    ) {
      this._addClass(this.file, "animation-display");
      this._removeClass(this.file, "animation-rotate");
    } else if (scrollPosn >= this._framePosnFromLast(1)) {
      this._addClass(this.file, "animation-rotate");
    }
  }

  _screenUnlock() {
    this.unlockScreen.classList.remove("locked");
  }
  _screenLock() {
    this.unlockScreen.classList.add("locked");
  }
  _framePosnFromLast(n) {
    return this.frameLen * (this.msgs.length + this.buffer - n);
  }

  _addClass(ele, className) {
    ele.classList.add(className);
  }
  _removeClass(ele, className) {
    ele.classList.contains(className) && ele.classList.remove(className);
  }
}

class Mobile {
  constructor(scrollableLen) {
    this.posnIndicator = document.querySelector("#main-posn-indicator");
    this.figure = document.querySelector("figure");
    this.frameNum = 12;
    this.frameLen = scrollableLen * (1 / this.frameNum);
  }

  main() {
    // let scrollPosn = window.pageYoffset();
    const scrollPosn =
      0 - Math.floor(this.posnIndicator.getBoundingClientRect().top);
    this.animation(scrollPosn);
  }

  animation(scrollPosn) {
    if (scrollPosn <= this.frameLen * 8) {
      this._removeClass("animation");
    } else if (
      scrollPosn > this.frameLen * 8 &&
      scrollPosn <= this.frameLen * 10
    ) {
      this._addClass("animation");
      this._removeClass("animation-rotate");
    } else if (
      scrollPosn > this.frameLen * 10 &&
      scrollPosn <= this.frameLen * 11
    ) {
      this._addClass("animation-rotate");
      this._removeClass("animation");
    }
  }

  _addClass(className) {
    this.figure.classList.add(className);
  }
  _removeClass(className) {
    this.figure.classList.contains(className) &&
      this.figure.classList.remove(className);
  }
}

export class WindowScrollService {
  constructor() {
    //this.ctn = window;
    this.ctn = document.querySelector("#main");
    this.scrollableLen = document.querySelector("#content").offsetTop; // only when #content located in the bottom
    this.screenCtn = new ScreenCtn(this.scrollableLen);
    this.mobile = new Mobile(this.scrollableLen);
    this.childScrollCtn = document.querySelector("#right-side-fixed");
  }

  animation() {
    this.screenCtn.main();
    this.mobile.main();
  }

  onScroll(cb) {
    this.ctn.addEventListener("scroll", cb);
    //window.addEventListener("scroll", cb, true);
  }
}
