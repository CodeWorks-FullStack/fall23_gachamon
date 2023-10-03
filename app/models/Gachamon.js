export class Gachamon {


  // NOTE this is just for intellisense, and better error handling
  /**
   * @param {{ name: string; emoji: string; rarity: number; }} data
   */
  constructor (data) {
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity
  }

  get GachamonCatalogCard() {
    return `
    <div class="col">
      <p class="mb-0 fs-1" title="${this.name}">${this.emoji}</p>
    </div>
    `
  }
}

// const gachamon = new Gachamon({ name: 'Kuzco', emoji: '🦙', rarity: 1 })