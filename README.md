- [My portfolio](#my-portfolio)
- [Building log](#building-log)
- [CSS notes](#css-notes)
  - [Dark / Light Theme Switcher](#dark--light-theme-switcher)
  - [Typing Effect w/ keyframe](#typing-effect-w-keyframe)
  - [Navigation Bar 懸浮兩個方法](#navigation-bar-懸浮兩個方法)
  - [處理 display 消失 vs 出現](#處理-display-消失-vs-出現)
  - [CSS 效能 : Repaint & Reflow](#css-效能--repaint--reflow)
  - [CSS unit: rem](#css-unit-rem)
  - [滑動到超出邊界的時候·不要有推擠效果？ prevent "bounce" effect when the top or bottom of a page is reached](#滑動到超出邊界的時候不要有推擠效果-prevent-bounce-effect-when-the-top-or-bottom-of-a-page-is-reached)
- [JavaScript notes](#javascript-notes)
  - [Javascript Multiple Event Listener, OR integrated into one Event Listenr?](#javascript-multiple-event-listener-or-integrated-into-one-event-listenr)
  - [Scrolling event api](#scrolling-event-api)
- [Animation notes](#animation-notes)
  - [Navigation Bar w/ scroll](#navigation-bar-w-scroll)
    - [Event:](#event)
    - [Styling:](#styling)
  - [Opening Animation w/ scroll](#opening-animation-w-scroll)
    - [Event:](#event-1)
    - [Styling:](#styling-1)
- [❓Question tbd](#question-tbd)

# My portfolio

published [here](https://benson00077.github.io/Self/) by gitpage.

# Building log

| Version | Implementation                        | Content changed           |
| ------- | ------------------------------------- | ------------------------- |
| v1      | -                                     | Korean hard coded content |
| v2      | dynamic update datas by fetching json | En/Zh                     |
| v3      | add animation                         |                           |
| v4      | import webpack                        |                           |
| v5      | Refactoring js to oop                 |                           |

# CSS notes

## Dark / Light Theme Switcher

- [UI](https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/)
- [SCSS mixin](https://stackoverflow.com/a/63221870/16124226)

## Typing Effect w/ keyframe

scss code [here](src/scss/_mobile-content.scss)

## Navigation Bar 懸浮兩個方法

1. header `positon: fixed`
2. header content 兩塊 div 切開， content 用 `overflow-y: scroll`
3. ref: `position: sticky`

## 處理 display 消失 vs 出現

[Transitions on the CSS display property](https://stackoverflow.com/a/3332179/16124226)

1. don't transist `display: none` and `display: block`
   - transition 轉場，可以計算數值，從舊的到新的變化過程。但 display none to block 並沒有數值可以計算。因此不適用。
2. Instead: transist `opacity` from 0 to 1 and `height` form 0 to any instead

## CSS 效能 : Repaint & Reflow

- 解答了為何 JS 替換 class name 或修改 cssText 較好，而不是逐個設定 style 屬性 [more](https://ithelp.ithome.com.tw/articles/10217427)

## CSS unit: rem

- which comes in handy when doing RWD
- compared to vh, vw

## 滑動到超出邊界的時候·不要有推擠效果？ prevent "bounce" effect when the top or bottom of a page is reached

1. To prevent scroll chaining. [ref](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior). <br/>
   ❓ but not work in my iOS chrome, that's because bounce scroll in the browser is a feature of some versions of iOS / macOS. see next solution.

   ```css
   html {
     margin: 0;
     overscroll-behavior: none;
   }
   ```

2. other solutions: body `overflow: hidden`, child div `overflow: scroll`
   - [ref1](https://stackoverflow.com/questions/12046315/prevent-overscrolling-of-web-page)
   - [ref2](https://stackoverflow.com/questions/21209223/remove-bounce-on-scroll-in-browser-issue-with-positionfixed-div)
   - ❓ side effect: 滑鼠如果在更裡面的子區塊，就觸法不了 scroll event 而造成動畫卡住的感覺。
   - 也許解法跟 event delegation or event capturing / bubbling 有關

# JavaScript notes

## Javascript Multiple Event Listener, OR integrated into one Event Listenr?

- [ref](https://stackoverflow.com/questions/5411055/can-multiple-event-listeners-handlers-be-added-to-the-same-element-using-javascr)

## Scrolling event api

| api                                                                 |                                             |
| ------------------------------------------------------------------- | ------------------------------------------- |
| `window.pageYOffset`                                                | represent current view position on Scroll   |
| `scrollHeight`                                                      | usecase: as nav bar scroll height           |
| `ScrollAnchor.getBoundingClientRect().top`                          | 可捲動範圍內，el 上緣(不含 margin) 的距離。 |
| `ScrollContent.scrollBy({ top: ?px, left: 0, behavior: 'smooth' })` | scrollTo X                                  |

# Animation notes

## Navigation Bar w/ scroll

### Event:

1. Click navi → smoothly scroll to anchor.
   - `event.preventDefault()`
   - `scrollBy` api
2. Scroll → navi bar style change to indicate current scroll place.
   - scroll event listener

### Styling:

- HTML: span tag as an indicator under nav tag
- CSS: `selector:not(.is-active)` (`negation pseudo-class`)
- JavaScript: `el.classList.add('is-active')`, `el.classList.remove('is-active')`

## Opening Animation w/ scroll

### Event:

1. Scroll → js add or remove classList each frame

### Styling:

- CSS:
  - base class w/ `transition: all 1s;`
  - changed class w/ `transform: translateY(-200px) scale(0.5) rotate3d(1,1,1 0.2turn)` etc.
- JavaScript: `el.classList.add('someClassName')`, `el.classList.remove('someClassName')`

# ❓Question tbd

- DOM 做為參數放外面，給 Event Lstener 的 cb 好，還是直接宣告在 cb 內好？
