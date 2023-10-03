export class Gachamon {


  // NOTE this is just for intellisense, and better error handling
  /**
   * @param {{ name: string; emoji: string; rarity: number; }} data
   */
  constructor (data) { // we pass through a single object in our constructor
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity
  }

  // NOTE you can store more than one HTML template on your class models
  get GachamonCatalogCard() {
    return `
    <div class="col">
      <p class="mb-0 fs-1" title="${this.name}">${this.emoji}</p>
    </div>
    `
  }

  get ActiveGachamonCard() {
    return `
    <div class="col-8 text-center">
      <div class="border border-dark border-3 rounded bg-secondary shadow p-4">
        <p class="active-gachamon">${this.emoji}</p>
        <p class="fs-1">${this.name}</p>
        <p class="fs-2">Rarity: ${this.rarity}</p>
        <div class="text-end">
          <button onclick="app.GachamonsController.removeGachamon()" class="btn btn-danger">Remove SOMEONE</button>
        </div>
      </div>
    </div>
    `
  }
}

// const gachamon = new Gachamon({ name: 'Kuzco', emoji: '🦙', rarity: 1 })