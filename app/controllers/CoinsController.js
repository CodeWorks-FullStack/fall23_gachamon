import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

function _drawCoins() {
  let coinEmojis = ''

  for (let i = 0; i < AppState.coins; i++) {
    coinEmojis += '🪙'
  }

  // setText('coinCount', AppState.coins)
  setText('coinCount', coinEmojis)
}


export class CoinsController {
  constructor () {
    // SECTION page load

    console.log('Coins Controller loaded');

    // !SECTION

    // SECTION register listeners

    // AppState.on('coins', () => console.log('coins changed'))
    AppState.on('coins', _drawCoins)

    // !SECTION 
  }

  // SECTION public methods
  addCoin() {
    console.log('You clicked the add coin button!');
    coinsService.addCoin()

    // NOTE handled by our listener
    // _drawCoins()
  }
  // !SECTION 
}