/* FIXME сделай через перечисления и карты
    const HamburgerSize = {
      SMALL = "SMALL",
      LARGE = "LARGE"
    };
    const hamburgerSizeAndPropertiesMap = {
     [HamburgerSize.SMALL]: { price:50, calories: 20 },
     [HamburgerSize.LARGE]: { price:100, calories: 40 },
    };
    остальные свойства аналогично
 */

const hamburgerSize = {
  SMALL : "SMALL",
  LARGE : "LARGE",
};

const hamburgerStuffing = {
  CHEESE : "CHEESE",
  SALAD : "SALAD",
  POTATO: "POTATO",
};

const hamburgerTopping = {
  MAYO : "MAYO",
  SPICE : "SPICE",
};

const hamburgerSizeAndPropertiesMap = {
  [hamburgerSize.SMALL]: { price:50, calories: 20 },
  [hamburgerSize.LARGE]: { price:100, calories: 40 },
  [hamburgerStuffing.CHEESE]: { price:10, calories: 20 },
  [hamburgerStuffing.SALAD]: { price:20, calories: 5 },
  [hamburgerStuffing.POTATO]: { price:15, calories: 10 },
  [hamburgerTopping.MAYO]: { price:20, calories: 5 },
  [hamburgerTopping.SPICE]: { price:15, calories: 0 },
};

class HamburgerException extends Error{
  constructor( message ) {
    super( message );
  }
}

class Hamburger {
  constructor(size, stuffing) {
    if ( !size ) throw new HamburgerException('no size given');
    if ( !stuffing ) throw new HamburgerException('no stuffing given');
    if ( !hamburgerSize[size] ) throw new HamburgerException(`${size} is invalid size`);
    if ( !hamburgerStuffing[stuffing] ) throw new HamburgerException(`${stuffing} is invalid stuffing`);
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping( topping ) {
    if (!hamburgerTopping[topping]) throw new HamburgerException(`${topping} is invalid topping`);
    if (this.toppings.includes(topping)) throw new HamburgerException(`topping ${topping} is already exist`);
    this.toppings.push( topping );
  }

  removeTopping( topping ) {
    if (!hamburgerTopping[topping]) throw new HamburgerException(`${topping} is invalid topping`);
    if (!this.toppings.includes( topping )) throw new HamburgerException('no such topping');
    const indexOfTargetTopping = this.toppings.indexOf( topping );
    this.toppings.splice( indexOfTargetTopping, 1 );
  }

  getToppings() {
    return this.toppings;
  }

  getSize() {
    return this.size;
  }

  calculatePrice() {
    let toppingsPrice = 0;
    for (const topping of this.toppings) {
      toppingsPrice += hamburgerSizeAndPropertiesMap[topping].price;
    }
    return hamburgerSizeAndPropertiesMap[this.size].price + hamburgerSizeAndPropertiesMap[this.stuffing].price + toppingsPrice
  }

  calculateCalories () {
    let toppingsCalories = 0;
    for (const topping of this.toppings) {
      toppingsCalories += hamburgerSizeAndPropertiesMap[topping].calories;
    }
    return hamburgerSizeAndPropertiesMap[this.size].calories + hamburgerSizeAndPropertiesMap[this.stuffing].calories + toppingsCalories
  }
}

const hamburger = new Hamburger( 'SMALL', 'SALAD' );
console.log(hamburger);

hamburger.addTopping( 'SPICE' );
hamburger.addTopping( 'MAYO' );
console.log(hamburger);

console.log(hamburger.calculatePrice());

hamburger.removeTopping('MAYO');
console.log(hamburger);

console.log(hamburger.calculatePrice());

console.log(hamburger.getSize());

console.log(hamburger.getToppings());

hamburger.addTopping('MAYO')
console.log(hamburger);

console.log(hamburger.calculateCalories());


