import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

function _saveMyGachamon() {
  saveState('myGachamons', AppState.myGachamons)
}


class GachamonsService {
  removeGachamon() {
    const activeGachamon = AppState.activeGachamon

    const indexOfGachamon = AppState.myGachamons.findIndex(gachamon => gachamon == activeGachamon)

    console.log(indexOfGachamon);
    if (indexOfGachamon == -1) {
      return
    }

    AppState.myGachamons.splice(indexOfGachamon, 1)

    _saveMyGachamon()
    AppState.emit('myGachamons')



    AppState.activeGachamon = null
  }
  getRandomGachamon() {

    if (AppState.coins < 1) {
      return
    }

    AppState.coins--
    // console.log('AppState Coins', AppState.coins);
    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    // console.log('appstate before', AppState.activeGachamon);
    AppState.activeGachamon = randomGachamon
    // console.log('appstate after', AppState.activeGachamon);

    AppState.myGachamons.push(randomGachamon)
    _saveMyGachamon()
    // console.log('my gachamons', AppState.myGachamons);

    // AppState.myGachamons = AppState.myGachamons
    AppState.emit('myGachamons')
  }

}

export const gachamonsService = new GachamonsService()