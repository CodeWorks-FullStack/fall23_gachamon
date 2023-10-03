import { AppState } from "../AppState.js"

class GachamonsService {
  getRandomGachamon() {
    if (AppState.coins < 1) {
      return
    }
    AppState.coins--
    console.log('AppState Coins', AppState.coins);
  }

}

export const gachamonsService = new GachamonsService()