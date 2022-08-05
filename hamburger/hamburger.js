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
const SIZE_SMALL = {
  size: 'small',
  type: 'size',
  price: 50,
  cal: 20,
};
// FIXME отступ
const SIZE_LARGE = {
  size: 'large',
  type: 'size',
  price: 100,
  cal: 40,
}
// FIXME отступ
const STUFFING_CHEESE = {
  type: 'stuffing',
  price: 10,
  cal: 20,
}
// FIXME отступ
const STUFFING_SALAD = {
  type: 'stuffing',
  price: 20,
  cal: 5,
}
// FIXME отступ
const STUFFING_POTATO = {
  type: 'stuffing',
  price: 15,
  cal: 10,
}
// FIXME отступ
const TOPPING_MAYO = {
  type: 'topping',
  price: 20,
  cal: 5,
}
// FIXME отступ
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
    // FIXME логичнее проверять сначала size, а потом stuffing. Соблюдаем порядок аргументов заданный в сигнатуре функции
    if ( !stuffing ) throw new HamburgerException('no stuffing given'); // FIXME лишние отступы ( ... )
    if ( !size ) throw new HamburgerException('no size given'); // FIXME лишние отступы ( ... )
    if ( stuffing.type !== 'stuffing' ) throw new HamburgerException('invalid stuffing'); // FIXME лишние отступы ( ... )
    if ( size.type !== 'size' ) throw new HamburgerException('invalid size'); // FIXME лишние отступы ( ... )
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping( topping ) { // FIXME лишние отступы ( ... )
    if (topping.type !== 'topping') throw new HamburgerException('invalid topping');
    if (this.toppings.includes(topping)) throw new HamburgerException(`such topping is already exist`);
    this.toppings.push( topping );
  }

  removeTopping( topping ) { // FIXME лишние отступы ( ... )
    if (topping.type !== 'topping') throw new HamburgerException('invalid topping');
    if (!this.toppings.includes( topping )) throw new HamburgerException('no such topping');
    const indexOfTargetTopping = this.toppings.indexOf( topping );
    this.toppings.splice( indexOfTargetTopping, 1 );
  }
  // FIXME отступ
  getToppings() {  // FIXME make getter
    return this.toppings;
  }
  // FIXME отступ
  getSize() {  // FIXME make getter
    return this.size.size;
  }
  // FIXME отступ
  calculatePrice() {
    let toppingsPrice = 0;
    for (const { price } of this.toppings) {
      toppingsPrice += price;
    }
    return this.size.price + this.stuffing.price + toppingsPrice
  }
  // FIXME отступ
  calculateCalories () {
    let toppingsCalories = 0;
    for (const { cal } of this.toppings) {
      toppingsCalories += cal;
    }
    return this.size.cal + this.stuffing.cal + toppingsCalories
  }
}

const INVALID_SIZE = {
  type: 'size',
}

const hamburger = new Hamburger( INVALID_SIZE, STUFFING_SALAD ); // FIXME лишние отступы ( ... )
console.log(hamburger);
// FIXME отступ
hamburger.addTopping( TOPPING_SPICE );
hamburger.addTopping( TOPPING_MAYO );
console.log(hamburger);
// FIXME отступ
hamburger.removeTopping(TOPPING_SPICE);
console.log(hamburger);
console.log(hamburger.getToppings());
console.log(hamburger.getSize());
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());
