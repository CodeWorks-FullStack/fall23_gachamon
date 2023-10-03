import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

// SECTION private functions

function _drawGachamonCatalog() {
  const gachamons = AppState.gachamons
  console.log('here are the gachamons', gachamons);
  let content = ''
  gachamons.forEach(gachamon => content += gachamon.GachamonCatalogCard)
  setHTML('gachamonCatalog', content)
}

function _drawActiveGachamon() {
  const activeGachamon = AppState.activeGachamon

  // NOTE this can be null, so if it we inject nothing into the speciified id, and stop running this function
  if (!activeGachamon) {
    setHTML('activeGachamon', '')
    return
  }

  console.log('draw active gachamon', activeGachamon);

  // NOTE Pop utility that utilizies sweet alerts
  Pop.toast(`You got a ${activeGachamon.name}!`, 'success', 'top', 1000, true)
  setHTML('activeGachamon', activeGachamon.ActiveGachamonCard)
}

function _drawMyGachamons() {
  const myGachamons = AppState.myGachamons
  console.log('my gachamons', myGachamons);
  let content = ''
  myGachamons.forEach(gachamon => content += gachamon.GachamonCatalogCard)
  setHTML('myGachamons', content)
}

// !SECTION


export class GachamonsController {
  constructor () {
    // SECTION page load
    console.log('Gachamons Controller loaded');
    _drawGachamonCatalog()
    _drawMyGachamons()
    // !SECTION

    // SECTION listeners
    AppState.on('activeGachamon', _drawActiveGachamon)
    AppState.on('myGachamons', _drawMyGachamons)
    // !SECTION
  }

  // SECTION public methods
  getRandomGachamon() {
    gachamonsService.getRandomGachamon()
  }

  removeGachamon() {
    const wantsToRemove = window.confirm('Are you sure you do not want this Gachamon?')

    if (!wantsToRemove) {
      return
    }

    gachamonsService.removeGachamon()


  }
  // !SECTION 


}