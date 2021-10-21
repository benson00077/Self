- [My portfolio](#my-portfolio)
  - [Building log](#building-log)
  - [Notes for init / env](#notes-for-init--env)
    - [SCSS setting](#scss-setting)
    - [Problem Shooting: CROS problem](#problem-shooting-cros-problem)
    - [Problem Shooting: Cache when localhost test](#problem-shooting-cache-when-localhost-test)
  - [Notes for CSS](#notes-for-css)
    - [Dark / Light Theme Switcher](#dark--light-theme-switcher)
    - [Typing Effect w/ keyframe](#typing-effect-w-keyframe)
  - [Notes for JavaScript](#notes-for-javascript)
    - [Javascript Multiple Event Listener, OR integrated into one Event Listenr?](#javascript-multiple-event-listener-or-integrated-into-one-event-listenr)
    - [Scrolling event api](#scrolling-event-api)
  - [Notes for animation](#notes-for-animation)
    - [Navigation Bar w/ scroll](#navigation-bar-w-scroll)
      - [Event:](#event)
      - [Styling:](#styling)
      - [Strategy:](#strategy)
    - [Opening Animation w/ scroll](#opening-animation-w-scroll)
    - [❓](#)


# My portfolio
published [here](https://benson00077.github.io/Self/) by gitpage.


## Building log
| Version | Implementation | Content changed
| ------ | ------ | ------ |
|v1| - | Korean hard coded content
|v2| make it a template <br/> json file served by other gitpage respository | En/Zh
|v3| add animation | |


## Notes for init / env
### SCSS setting
- Install globally `npm install sass -g`
- Install in project `npm install sass --save`
- Compile sass to css file `sass ./scss/base.scss ./css/base.css`
- Compile automatically `sass --watch ./scss/base.scss ./css/base.css`

### Problem Shooting: CROS problem
- Happened when I try to make this program a template instead of hard code html text, by using JavaScript importing other js/json files (perely opne indtx.html file with broser)
- Also hanppend when using JavaScript fetch API for json
- Problem arroused because [File protocal != https  protocal](https://stackoverflow.com/questions/8456538/origin-null-is-not-allowed-by-access-control-allow-origin)
- Solution: host a webserver instaed of opening local html file
  - In terminal, `cd /path/to/mydir` (path of that local html file)
  - `python -m http.server` with python3 
  - Now try on URL `http://localhost:8000/index.html` 
  - Problem: `cache` didn't removed and thus make debug unfriendly.

### Problem Shooting: Cache when localhost test
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


## Notes for CSS

### Dark / Light Theme Switcher
- [UI](https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/)
- [SCSS practice](https://stackoverflow.com/questions/57017955/is-there-a-way-to-add-dark-mode-to-my-application-with-scss)

### Typing Effect w/ keyframe



## Notes for JavaScript
### Javascript Multiple Event Listener, OR integrated into one Event Listenr? 
- [ref](https://stackoverflow.com/questions/5411055/can-multiple-event-listeners-handlers-be-added-to-the-same-element-using-javascr)
### Scrolling event api
`scrollHeight`: nav bar 的可捲動高度，作為偏移扣除
`Scroll2thisEle.getBoundingClientRect().top`: 可捲動範圍內，el 上緣(不含 margin) 的距離。
`someScrollingContent.scrollBy({ top: ???px, left: 0, behavior: 'smooth' })`: smooth 捲動距離


## Notes for animation
### Navigation Bar w/ scroll 
#### Event: 
1. Click navi → scroll to anchor
2. Scroll → navi bar style change to indicate current scroll place
#### Styling: 
  - HTML: span tag as an indicator under nav tag
  - CSS: `selector:not(.is-active)`  (`negation pseudo-class`)
  - JavaScript: `el.classList.add('is-active')`, `el.classList.remove('is-active')`
#### Strategy:
  - for loop in each cb in scroll event listener

### Opening Animation w/ scroll


### ❓ 
- DOM 做為參數放外面，給 Event Listener 的 cb 好，還是直接宣告在 cb 內好？
- 怎樣可以讓 滑動到超出邊界的時候·不要有來回推擠效果？

