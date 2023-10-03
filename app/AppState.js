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
  // NOTE we call loadstate here to pull data from our local storage. Our first argument should be a key that is in local storage, and our second argument is what we our data to turin into once it's loaded from localStorage
  myGachamons = loadState('myGachamons', [Gachamon])
  // myGachamons = [] we are now loading these from localStorage, so we don't have to do this

  /** @type {Gachamon | null}*/
  // NOTE this starts as having no value (or null), but we can store a single gachamon here later
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
