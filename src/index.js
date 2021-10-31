import { run } from "./app/app";
import { PortfolioFetchService } from "./app/PortfolioFetch.service";
import { ThemeService } from "./app/Theme.service";
import { WindowScrollService } from "./app/WindowScroll.service";
import { NavibarService } from "./app/Navibar.service";
import { PortfolioScrollService } from "./app/PortfolioScroll.service";
import { PortfolioGoTopService } from "./app/PortfolioGoTop.service";

import "./main.scss";

const portfolioFetchService = new PortfolioFetchService();
const themeService = new ThemeService();
const windowScrollService = new WindowScrollService();
const navibarService = new NavibarService();
const portfolioScrollService = new PortfolioScrollService();
const portfolioGoTopService = new PortfolioGoTopService();

const services = {
  portfolioFetchService,
  themeService,
  windowScrollService,
  navibarService,
  portfolioScrollService,
  portfolioGoTopService,
};

run(services);
