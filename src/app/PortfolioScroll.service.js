export class PortfolioScrollService {
  constructor(){
    this.ctn = document.querySelector('#right-side-fixed');
    this.scrolledX = this.ctn.scrollTop;
    this.ctnSwitchBtn = document.querySelector('#resume-switcher');
  }

  uiDisplay(ele, expression) {
    if (expression) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  } 

  uiDisplayCntSwitch() {
    this.uiDisplay(this.ctnSwitchBtn, this.ctn.scrollTop > 100)
    console.log(this.ctn.scrollTop) // is it mutable with client? 
  }

  onScroll(cb) {
    this.ctn.addEventListener("scroll", cb)
  }
}