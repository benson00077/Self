

export const run = (portfolioScrollService) => {
  portfolioScrollService.onScroll(() => {
    portfolioScrollService.uiDisplayCntSwitch()
  })
}