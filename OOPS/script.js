'use strict'
class Account {
    locale = navigator.language;
    #movements = []
    #pin
    constructor (owner, currency, pin){
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        console.log(`Thanks for opening an account ${owner}`)
    }
    getMovements () {
        return this.#movements
    }
    deposite(...val){
        this.#movements.push(...val)
        return this
    }
    withdraw(val){
        this.deposite(-val)
    }
    #approveLoan(val){
        return true
    }
    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposite(val)
            console.log("Loan Approved")
        }
    }
}
const acc1 = new Account('Umair', 'EUR', 1111)

acc1.deposite(100).deposite(200).deposite(4000)
console.log(acc1)


// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
  }
  
  const Umair = new PersonCl('Umair Najeeb', 1996);
  console.log(Umair);
  Umair.calcAge();
  console.log(Umair.age);
  
  console.log(Umair.__proto__ === PersonCl.prototype);
  
  // PersonCl.prototype.greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };
  Umair.greet();
  
  // 1. Classes are NOT hoisted
  // 2. Classes are first-class citizens
  // 3. Classes are executed in strict mode
  
  const walter = new PersonCl('Walter White', 1965);
  // PersonCl.hey();
  
  
  ///////////////////////////////////////
  // Setters and Getters
  const account = {
    owner: 'Umair',
    movements: [200, 530, 120, 300],
  
    get latest() {
      return this.movements.slice(-1).pop();
    },
  
    set latest(mov) {
      this.movements.push(mov);
    },
  };
  
  console.log(account.latest);
  
  account.latest = 50;
  console.log(account.movements);
  
  
  ///////////////////////////////////////
  // Object.create
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const Zain = Object.create(PersonProto);
  console.log(Zain);
  Zain.birthYear = 2002;
  Zain.calcAge();
  
  console.log(Zain.__proto__ === PersonProto);
  
