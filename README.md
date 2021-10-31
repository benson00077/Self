- [My portfolio](#my-portfolio)
- [Building log](#building-log)
- [Init / env](#init--env)
  - [SCSS setting](#scss-setting)
  - [Problem Shooting: CROS problem](#problem-shooting-cros-problem)
  - [Problem Shooting: Cache when localhost test](#problem-shooting-cache-when-localhost-test)
- [CSS notes](#css-notes)
  - [Dark / Light Theme Switcher](#dark--light-theme-switcher)
  - [Typing Effect w/ keyframe](#typing-effect-w-keyframe)
  - [Navigation Bar 懸浮兩個方法](#navigation-bar-懸浮兩個方法)
  - [處理 display 消失 vs 出現](#處理-display-消失-vs-出現)
  - [CSS 效能 : Repaint & Reflow](#css-效能--repaint--reflow)
  - [CSS unit: rem](#css-unit-rem)
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
| Version | Implementation | Content changed
| ------ | ------ | ------ |
|v1| - | Korean hard coded content
|v2| make it a template <br/> json file served by other gitpage respository | En/Zh
|v3| add animation | |
|v4| import webpack | | 
|v5| Refactoring js to oop | |


# Init / env
## SCSS setting
- Install globally `npm install sass -g`
- Install in project `npm install sass --save`
- Compile sass to css file `sass ./scss/base.scss ./css/base.css`
- Compile automatically `sass --watch ./scss/base.scss ./css/base.css`

## Problem Shooting: CROS problem
- Happened when I try to make this program a template instead of hard code html text, by using JavaScript importing other js/json files (perely opne indtx.html file with broser)
- Also hanppend when using JavaScript fetch API for json
- Problem arroused because [File protocal != https  protocal](https://stackoverflow.com/questions/8456538/origin-null-is-not-allowed-by-access-control-allow-origin)
- Solution: host a webserver instaed of opening local html file
  - In terminal, `cd /path/to/mydir` (path of that local html file)
  - `python -m http.server` with python3 
  - Now try on URL `http://localhost:8000/index.html` 
  - Problem: `cache` didn't removed and thus make debug unfriendly.

## Problem Shooting: Cache when localhost test
- [Solution Further](https://stackoverflow.com/questions/42341039/remove-cache-in-a-python-http-server):
  - Since `http.server` does not send "no cache" header, so we need to send "no cache" header
    ```python
    # NoCacheHTTPServer.py
    import http.server

    PORT = 8000

    class NoCacheHTTPRequestHandler(
        http.server.SimpleHTTPRequestHandler
    ):
        def send_response_only(self, code, message=None):
            super().send_response_only(code, message)
            self.send_header('Cache-Control', 'no-store, must-revalidate')
            self.send_header('Expires', '0')

    if __name__ == '__main__':
        http.server.test(
            HandlerClass=NoCacheHTTPRequestHandler,
            port=PORT
        )
    ```
  - Run in CLI: `python NoCacheHTTPServer.py` in your testing index.html directory.
  - Now try on URL `http://localhost:8000/index.html` 
  - Run under `python 3` : `conda activate`


# CSS notes

## Dark / Light Theme Switcher
- [UI](https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/)
- [SCSS mixin](https://stackoverflow.com/a/63221870/16124226)

## Typing Effect w/ keyframe

## Navigation Bar 懸浮兩個方法
1. header `positon: fixed`
2. header content 兩塊 div 切開， content 用 `overflow-y: scroll`

## 處理 display 消失 vs 出現
[Transitions on the CSS display property](https://stackoverflow.com/a/3332179/16124226)
1. don't transist `display: none` and `display: block`
2. transist `opacity` from 0 to 1 and `height` form 0 to any instead
3. transition 可以計算數值，從舊的到新的變化過程。但 display none to block 並沒有數值可以計算。因此不適用。

## CSS 效能 : Repaint & Reflow
- 解答了為何 JS 替換 class name 或修改 cssText較好，而不是逐個設定 style 屬性 [more](https://ithelp.ithome.com.tw/articles/10217427)

## CSS unit: rem
- which comes in handing when doing RWD
- compared to vh, vw

# JavaScript notes
## Javascript Multiple Event Listener, OR integrated into one Event Listenr? 
- [ref](https://stackoverflow.com/questions/5411055/can-multiple-event-listeners-handlers-be-added-to-the-same-element-using-javascr)
## Scrolling event api
- `window.pageYOffset` 
- `scrollHeight`: nav bar 的可捲動高度，作為偏移扣除
- `Scroll2thisEle.getBoundingClientRect().top`: 可捲動範圍內，el 上緣(不含 margin) 的距離。
- `someScrollableContent.scrollBy({ top: ???px, left: 0, behavior: 'smooth' })`: to scroll smoothly


# Animation notes
## Navigation Bar w/ scroll 
### Event: 
1. Click navi → scroll to anchor. Strategy: `scrollBy` api (should substract navi height), be aware of `getBoundingClientRect().top` api don't calculate margin [more](https://stackoverflow.com/a/50657644/16124226), may use `getComputedStyle` to access value including margin.
2. Scroll → navi bar style change to indicate current scroll place.  Strategy : for loop in each cb in scroll event listener, as in scrollSlide.js
### Styling: 
  - HTML: span tag as an indicator under nav tag
  - CSS: `selector:not(.is-active)`  (`negation pseudo-class`)
  - JavaScript: `el.classList.add('is-active')`, `el.classList.remove('is-active')`

## Opening Animation w/ scroll
### Event:
1. Scroll → js add or remove classList each frame
### Styling:
  - CSS: 
    - base class w/ `transition: all 1s;`
    - changed class w/ `transform: translateY(-200px) scale(0.5) rotate3d(1,1,1 0.2turn` etc.
  - JavaScript: `el.classList.add('someClassName')`, `el.classList.remove('someClassName')`

# ❓Question tbd
- DOM 做為參數放外面，給 Event Lstener 的 cb 好，還是直接宣告在 cb 內好？
- 怎樣可以讓 滑動到超出邊界的時候·不要有來回推擠效果？

