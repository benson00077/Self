import { run } from "./app/app"
import { PortfolioScrollService } from "./app/PortfolioScroll.service";
import "./main.scss"

const portfolioScrollService = new PortfolioScrollService()

run(portfolioScrollService);
