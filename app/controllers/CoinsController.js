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
    console.log('Coins Controller loaded');
  }

  // SECTION public methods
  addCoin() {
    console.log('You clicked the add coin button!');
    coinsService.addCoin()
    _drawCoins()
  }
  // !SECTION 
}