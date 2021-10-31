class Btn {
  constructor(ele) {
    this.ele = ele;
    this.ctn = document.querySelector("#right-side-fixed");
  }

  displayWhenScroll(pixel = 0) {
    this.ctn.scrollTop > pixel
      ? (this.ele.style.display = "block")
      : (this.ele.style.display = "none");
  }
}

class Nav {
  constructor() {
    this.indicator = document.querySelector(".nav-indicator"); // for nav bar style
    this.navLinks = document.querySelectorAll("a.nav-link"); // for nav items
    this.anchors = {
      exp: document.querySelector("#experience"),
      edu: document.querySelector("#education"),
      por: document.querySelector("#portfolio"),
      ref: document.querySelector("#reference"),
    };
    this.navHeight = document.querySelector("#header").scrollHeight;
    this.cache = {
      eleButtomBorderLine: [null],
    };
  }

  _getButtomBorderPosn(eles) {
    return eles.map((ele) => ele.getBoundingClientRect().bottom);
  }

  _navIndicator(ele) {
    this.navLinks.forEach((navLink) => {
      navLink.classList.remove("is-active");
      //navLink.removeAttribute('style')
    });
    this.indicator.style.width = `${ele.offsetWidth}px`;
    this.indicator.style.left = `${ele.offsetLeft}px`;

    ele.classList.add("is-active");
    ele.style.color = ele.getAttribute("active-color");
  }

  display() {
    const [expNav, eduNav, porNav, refNav] = this.navLinks;
    const { exp, edu, por, ref } = this.anchors;
    const [expPosn, eduPosn, porPosn, refPosn] = this._getButtomBorderPosn([
      exp,
      edu,
      por,
      ref,
    ]);
    // scroll to different section
    let scrollTarget = null;
    if (expPosn >= this.navHeight) {
      scrollTarget = expNav;
    } else if (expPosn < this.navHeight && eduPosn >= this.navHeight) {
      scrollTarget = eduNav;
    } else if (eduPosn < this.navHeight && porPosn >= this.navHeight) {
      scrollTarget = porNav;
    } else if (porPosn < this.navHeight && refPosn >= this.navHeight) {
      scrollTarget = refNav;
    }
    this._navIndicator(scrollTarget);
  }
}

export class PortfolioScrollService {
  constructor() {
    this.ctn = document.querySelector("#right-side-fixed");
    this.btn_ctnSwitch = new Btn(document.querySelector("#resume-switcher"));
    this.btn_goTop = new Btn(document.querySelector("#go-to-top"));
    this.nav = new Nav();
  }

  display_btn_ctnSwitch() {
    this.btn_ctnSwitch.displayWhenScroll(100);
  }
  display_btn_goTop() {
    this.btn_goTop.displayWhenScroll(20);
  }
  display_nav_indicator() {
    this.nav.display();
  }

  onScroll(cb) {
    this.ctn.addEventListener("scroll", cb);
  }
}
