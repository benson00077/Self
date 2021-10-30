
export class PortfolioGoTopService {
  constructor(){
    this.ctn = document.querySelector('#right-side-fixed');
    this.goTopBtn = document.querySelector('#go-to-top');
  }

  onClick(cb) {
    this.goTopBtn.addEventListener("click", cb)
  }
}