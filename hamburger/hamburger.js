const SIZE_SMALL = {
  size: 'small',
  type: 'size',
  price: 50,
  cal: 20,
};
const SIZE_LARGE = {
  size: 'large',
  type: 'size',
  price: 100,
  cal: 40,
}
const STUFFING_CHEESE = {
  type: 'stuffing',
  price: 10,
  cal: 20,
}
const STUFFING_SALAD = {
  type: 'stuffing',
  price: 20,
  cal: 5,
}
const STUFFING_POTATO = {
  type: 'stuffing',
  price: 15,
  cal: 10,
}
const TOPPING_MAYO = {
  type: 'topping',
  price: 20,
  cal: 5,
}
const TOPPING_SPICE = {
  type: 'topping',
  price: 15,
  cal: 0,
}

class HamburgerException extends Error{
  constructor( message ) {
    super( message );
  }
}

class Hamburger {
  constructor(size, stuffing) {
    if ( !stuffing ) throw new HamburgerException('no stuffing given');
    if ( !size ) throw new HamburgerException('no size given');
    if ( stuffing.type !== 'stuffing' ) throw new HamburgerException('invalid stuffing');
    if ( size.type !== 'size' ) throw new HamburgerException('invalid size');
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping( topping ) {
    if (topping.type !== 'topping') throw new HamburgerException('invalid topping');
    if (this.toppings.includes(topping)) throw new HamburgerException(`such topping is already exist`);
    this.toppings.push( topping );
  }

  removeTopping( topping ) {
    if (topping.type !== 'topping') throw new HamburgerException('invalid topping');
    if (!this.toppings.includes( topping )) throw new HamburgerException('no such topping');
    const indexOfTargetTopping = this.toppings.indexOf( topping );
    this.toppings.splice( indexOfTargetTopping, 1 );
  }
  getToppings() {
    return this.toppings;
  }
  getSize() {
    return this.size.size;
  }
  calculatePrice() {
    let toppingsPrice = 0;
    for (const { price } of this.toppings) {
      toppingsPrice += price;
    }
    return this.size.price + this.stuffing.price + toppingsPrice
  }
  calculateCalories () {
    let toppingsCalories = 0;
    for (const { cal } of this.toppings) {
      toppingsCalories += cal;
    }
    return this.size.cal + this.stuffing.cal + toppingsCalories
  }
}

const hamburger = new Hamburger( SIZE_SMALL, STUFFING_SALAD );
console.log(hamburger);
hamburger.addTopping( TOPPING_SPICE );
hamburger.addTopping( TOPPING_MAYO );
console.log(hamburger);
hamburger.removeTopping(TOPPING_SPICE);
console.log(hamburger);
console.log(hamburger.getToppings());
console.log(hamburger.getSize());
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());
