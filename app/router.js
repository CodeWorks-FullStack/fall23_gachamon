import { AboutController } from "./controllers/AboutController.js";
import { CoinsController } from "./controllers/CoinsController.js";
import { GachamonsController } from "./controllers/GachamonsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { coinsService } from "./services/CoinsService.js";
import { AboutView } from "./views/AboutView.js";
// import { HomeController } from "./controllers/HomeController.js";


export const router = [
  {
    path: '',
    controller: [CoinsController, GachamonsController],
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]

