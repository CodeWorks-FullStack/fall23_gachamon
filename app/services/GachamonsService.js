import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

function _saveMyGachamon() {

  // NOTE this will save a value into localStorage for us. The first argument is where we're storing something in localStorage, and the second argument is the value we are storing in local storage. Think of is as creating a key:value pair on an object
  saveState('myGachamons', AppState.myGachamons)
}


class GachamonsService {
  removeGachamon() {
    const activeGachamon = AppState.activeGachamon

    // NOTE we run findIndex here so we can use splice to remove that element from an array. Splice works similar to find, but will return the index of an item instead of the entire item
    const indexOfGachamon = AppState.myGachamons.findIndex(gachamon => gachamon == activeGachamon)

    console.log(indexOfGachamon);

    // NOTE if findIndex does not find an item, it will return -1, which still splice the last element of an array. We don't want that, so we end the function here
    if (indexOfGachamon == -1) {
      return
    }

    // NOTE splice takes in the index of where you want to start splicing as the first argument, and how many items to remove as the second argument 
    AppState.myGachamons.splice(indexOfGachamon, 1)

    // NOTE update localstorage
    _saveMyGachamon()

    // NOTE manually trigger our listener assigned to 'myGachamons'
    AppState.emit('myGachamons')

    // NOTE sets the active gachamon to have no value 
    AppState.activeGachamon = null
  }
  getRandomGachamon() {

    if (AppState.coins < 1) {
      return
    }

    // NOTE this triggers our listener assigned in the coins controller
    AppState.coins--

    // console.log('AppState Coins', AppState.coins);
    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    // console.log('appstate before', AppState.activeGachamon);

    // NOTE overwrites our null value in the AppState, or overwrites our last active Gachamon
    AppState.activeGachamon = randomGachamon
    // console.log('appstate after', AppState.activeGachamon);

    AppState.myGachamons.push(randomGachamon)

    // NOTE updates local storage
    _saveMyGachamon()
    // console.log('my gachamons', AppState.myGachamons);

    // NOTE this will trigger our listener, but it looks crazy
    // AppState.myGachamons = AppState.myGachamons

    // NOTE this will manually trigger our listener assigned to myGachamons
    AppState.emit('myGachamons')
  }

}

export const gachamonsService = new GachamonsService()