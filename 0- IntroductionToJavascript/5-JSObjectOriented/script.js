// methods are properties of objects that have the same behavior as functions but can interact with another properties in the object
const wolf = {
  wolfName: "Bob",
  paws: 4,
  eyes: 2,
  type: canine,
  diet: carnivore,
  sound: function() { console.log("Auuuuuuuu"); },
  setName: function(n) { wolfName = n; },
  getName: function() { return this.wolfName; },
  wolf: function(w, p, e, t, d) {
    this.wolfName = w;
    this.paws = p;
    this.eyes = e;
    this.type = t;
    this.diet = d;
  }
}    

// ==== Prototypes ==== //
// basically a father object to all other objects, adding some standard functions to all created objects
console.log(Object.getPrototypeOf(wolf));
console.log(Object.getPrototypeOf(wolf) === Object.prototype);
// object.hasOwnProperty(param) is one of the functions that the child object is given from the father
// if you create an object copying another one, the first object will be the prototype
const newWolf = Object.create(wolf);

// an object is a atomic piece of a class, this means that a class is like a object but generalized

let object = Object.create({}); // this is a constructor built-in

let bob = new wolf("Bob", 4, 2, "Canine", "Vegan");

// is useful to use a class just to declare the properties and create the methods outside the class, refereciation using prototype

// ==== ES6 ==== // the new way to use classes and the closest to a normal class
class Dog {
  constructor(race, paws, color) {
    this.race = race;
    this.paws = paws;
    this.color = color;
  }
  get getRace() {
    return 'The race is ' + this.race;
  }
  set setRace(race) {
    this.race = race;
  }
  sound() {
    console.log("Grrr");
  }
}
Dog.prototype.race = 'SRD';
let labrador = new Dog('Labrador', 'Yellow');
let paws = Symbol(); // a constant to a variable
Dog.prototype[paws] = 4;

class Mamal {
  constructor(paws) {
    this.paws = paws;
  }
}
class Elephant extends Mamal { // heritage, you need to use `super` to claim a property of the father class
  constructor(paws, trunks) {
    super(paws, paws);
    this.trunks = trunks;
  }
}
console.log(new Elephant instanceof Mamal); // returns true if the class is an instance of the other class

 // ==== BANK ==== //
class BankAccount {
  constructor(current, savings, savingFees) {
    this.currentBalance = current;
    this.savingsBalance = savings;
    this.savingFees = savingFees;
  }
  depositCurrent(value) {
    if (value < 0) {
      return 'Deposit amount cannot be negative';
    }
    this.currentBalance = this.currentBalance + value;
    return 'Your new balance is ' + (this.currentBalance);
  }
  depositSavings(value) {
    if (value < 0) {
      return 'Deposit amount cannot be negative';
    }
    this.savingsBalance = this.savingsBalance + value;
    return 'Your new balance is ' + (this.savingsBalance);
  }  
  withdrawCurrent(value) {
    if (value < 0) {
      return 'Deposit amount cannot be negative';
    }
    if (this.currentBalance - value < 0) {
      return 'You cannot withdraw more than you have';
    }
    this.currentBalance = this.currentBalance - value;
    return 'Your new balance is ' + (this.currentBalance);
  }  
  withdrawSavings(value) {
    if (value < 0) {
      return 'Deposit amount cannot be negative';
    }
    if (this.savingsBalance - value < 0) {
      return 'You cannot withdraw more than you have';
    }
    this.savingsBalance = this.savingsBalance - value;
    return 'Your new balance is ' + (this.savingsBalance);
  }    
  transferToSavings(value) {
    if (value < 0) {
      return 'Transfer amount cannot be negative';
    }
    if (this.currentBalance - value < 0) {
      return 'You cannot transfer more than you have';
    }    
    this.currentBalance = this.currentBalance - value;
    this.savingsBalance = this.savingsBalance + value;
    return 'Your new current balance is ' + (this.currentBalance) + 
           '\nYour new savings balance is ' + (this.savingsBalance);
  }
}
class SpecialAccount extends BankAccount {
  constructor(current, savings, savingFees) {
    super(this.currentBalance, savingsBalance, savingFees*2);
  }
}