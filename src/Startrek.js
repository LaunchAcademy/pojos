class StarTrek {
  constructor(series, ship, captain) {
    this.ship = ship
    this.series = series
    this.captain = captain
  }

  theBest() {
    let best = "Deep Space Nine is the best series, Voyager is the best Ship, Jean Luc Picard is the best Captain!"
    return best
  }
}

module.exports = StarTrek