import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

function _drawCoins() {
  let coinEmojis = ''

  for (let i = 0; i < AppState.coins; i++) {
    coinEmojis += '🪙'
  }

  setText('coinCount', coinEmojis)

  // NOTE if you just want to dump out a single value, you don't have to do anything fancy
  // setText('coinCount', AppState.coins)
}


export class CoinsController {
  constructor () {
    // SECTION page load

    console.log('Coins Controller loaded');

    // !SECTION

    // SECTION register listeners

    // AppState.on('coins', () => console.log('coins changed'))
    // NOTE registers an event listener for our 'coins' property in the AppState. Every time this value is re-assigned, this calls the _drawCoins function
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