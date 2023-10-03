import { AppState } from "../AppState.js"

class CoinsService {
  addCoin() {
    // NOTE creates a copy of the value since it is a primitive data type
    // let coins = AppState.coins
    AppState.coins++
    console.log('AppState coins', AppState.coins);
  }

}

export const coinsService = new CoinsService()