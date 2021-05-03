
# My portfolio
published [here](https://benson00077.github.io/Self/) by gitpage.


## Building log
| Version | Implementation | Content changed
| ------ | ------ | ------ |
|v1| - | Korean hard coded content
|v2| make it a template <br/> json file served by other gitpage respository | En/Zh


## Notes when building this program
### SCSS setting
- Install globally `npm install sass -g`
- Install in project `npm install sass --save`
- Compile sass to css file `sass ./scss/base.scss ./css/base.css`
- Compile automatically `sass --watch ./scss/base.scss ./css/base.css`


### Dark / Light Theme Switcher
- [UI](https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/)
- [SCSS practice](https://stackoverflow.com/questions/57017955/is-there-a-way-to-add-dark-mode-to-my-application-with-scss)


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