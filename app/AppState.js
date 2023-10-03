import { Gachamon } from "./models/Gachamon.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // SECTION global variables go here
  // coins = loadState('coins', Number)
  coins = 0

  // NOTE this is just for intellisense, and better error handling
  /** @type {Gachamon[]}*/
  gachamons = [
    new Gachamon({ name: 'Kuzco', emoji: '🦙', rarity: 1 }),
    new Gachamon({ name: 'George', emoji: '🐒', rarity: 1 }),
    new Gachamon({ name: 'Stunk', emoji: '🦨', rarity: 2 }),
    new Gachamon({ name: 'Honey Boo Boo', emoji: '🦡', rarity: 2 }),
    new Gachamon({ name: 'Smoothless', rarity: 3, emoji: '🐉' }),
  ]

  /** @type {Gachamon[]}*/
  // myGachamons = []
  myGachamons = loadState('myGachamons', [Gachamon])


  /** @type {Gachamon | null}*/
  activeGachamon = null

  // !SECTION

  // NOTE Used to load initial data
  init() {

  }

}

// NOTE car goes 🚗
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
