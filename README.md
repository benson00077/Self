
# My Korean portfolio
published [here](https://benson00077.github.io/Self/) by gitpage.



## Notes when building this program
### SCSS setting
- Install globally `npm install sass -g`
- Install in project `npm install sass --save`
- Compile sass to css file `sass ./scss/base.scss ./css/scss`
- Compile automatically `sass --watch ./scss/base.scss ./css/scss`


### Dark / Light Theme Switcher
- [UI](https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/)
- [SCSS practice](https://stackoverflow.com/questions/57017955/is-there-a-way-to-add-dark-mode-to-my-application-with-scss)


### Problem Shooting: CROS problem
- Happened when I try to make this program a template instead of hard code html text, by using JavaScript importing other js/json files.
- Also hanppend when using fetch API for json
- [File protocal != https  protocal](https://stackoverflow.com/questions/8456538/origin-null-is-not-allowed-by-access-control-allow-origin)
- Solution: host a webserver instaed of opening local html file
  - In terminal, `cd /path/to/mydir` (path of that local html file)
  - `python -m http.server` with python3 
  - Now try on URL `http://localhost:8000/index.html` 