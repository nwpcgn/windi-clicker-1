const addkomma = (int = 0) => int.toLocaleString();

export const GameClick = (function () {
  function Constructor(clicker) {
    this.total = clicker.total;
    this.ticker = clicker.ticker;
    this.upgrades = clicker.upgrades;
  }

  Constructor.prototype.update = function (slug = "r1") {
    let obj = this.upgrades[slug];
    if (obj.cost > this.total) return false;

    if (slug === "r1") {
      this.ticker.click += obj.cost / 15;
      this.total -= obj.cost;
      obj.own += 1;
      obj.cost = obj.cost * 5;
      obj.add = obj.cost / 15;
      obj.eff = obj.cost / 15;
      this.upgrades.r1 = obj;
    }

    return obj;
  };

  Constructor.prototype.click = function () {
    this.total = this.total + this.ticker.click;
    console.log(this.total)
  };
  Constructor.prototype.status = function () {
    let arr = [
      `${addkomma(this.total)} &euro;`,
      `${addkomma(this.ticker.click)} <small>&euro;/click</small>`,
      `${addkomma(this.ticker.auto)} <small>&euro;/sec</small>`,
    ];
    return arr;
  };

  return Constructor;
})();
export default GameClick;
