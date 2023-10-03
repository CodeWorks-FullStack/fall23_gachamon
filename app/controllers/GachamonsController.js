import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { setHTML } from "../utils/Writer.js";

// SECTION private functions

function _drawGachamonCatalog() {
  const gachamons = AppState.gachamons
  console.log('here are the gachamons', gachamons);
  let content = ''
  gachamons.forEach(gachamon => content += gachamon.GachamonCatalogCard)
  setHTML('gachamonCatalog', content)
}

// !SECTION


export class GachamonsController {
  constructor () {
    console.log('Gachamons Controller loaded');
    _drawGachamonCatalog()
  }

  // SECTION public methods
  getRandomGachamon() {
    gachamonsService.getRandomGachamon()

  }
  // !SECTION 


}