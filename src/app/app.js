export const run = ({...services}) => {
  const {
    portfolioFetchService,
    themeService,
    windowScrollService,
    navibarService,
    portfolioGoTopService,
    portfolioScrollService  
  } = services 

  portfolioFetchService.init();
  portfolioFetchService.onClick(() => {
    const self = portfolioFetchService
    switch(self.state) {
      case 'eng':
        self.jsonImporter(self.srcs.eng)
        self.state = 'zh'
        break
      case 'zh':
        self.jsonImporter(self.srcs.zh)
        self.state = 'eng'
        break
      default:
        console.log('err app.js portfolioFetchService')  
    }
  })

  themeService.init();
  themeService.onClick(() => {
    const self = themeService
    self.isLight()
      ? self.switchDark()
      : self.switchLight()
  })

  windowScrollService.onScroll(() => {
    const self = windowScrollService
    self.animation()
    self.prevnetOverlapScroll()
  })

  navibarService.onClick((e) => {
    navibarService.smoothScroll(e)
  })

  portfolioGoTopService.onClick(() => {
    portfolioGoTopService.ctn.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  portfolioScrollService.onScroll((e) => {
    const self = portfolioScrollService
    self.display_btn_ctnSwitch()
    self.display_btn_goTop()
    self.display_nav_indicator()
  })
}

