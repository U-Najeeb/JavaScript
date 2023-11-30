"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const btnLogout = document.querySelector('.logout__btn');

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");


// Bankist App
const movementsUI = function (movements){
  containerMovements.textContent = "  ";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
const displayMovements = function (movements) {
  movementsUI(movements)
};

//Display Balance
const displayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

//Summary Portion
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest} €`;
};

//Creating Usernames
const createUserName = (accs) => {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);

//Sort Functionality

btnSort.addEventListener('click', (e)=>{
  e.preventDefault()
  const sortMovements = function (movements){
    const sortedMovements = movements.sort((a,b) => a-b)
    movementsUI(sortedMovements)
  }
  sortMovements(currentAccount.movements)
})

// Login Functionality
let currentAccount;

// Check if the user is already logged in
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// If logged in, retrieve the account details
if (isLoggedIn) {
  const storedUsername = localStorage.getItem("username");
  currentAccount = accounts.find((acc) => acc.userName === storedUsername);
}
// Function to update UI after successful login
const updateUIOnLogin = () => {
  labelWelcome.textContent = `Welcome ${currentAccount.owner.split(" ")[0]}`;
  containerApp.style.opacity = 100;

  inputLoginUsername.value = inputLoginPin.value = " "
  inputLoginPin.blur();
  displayMovements(currentAccount.movements);
  displayBalance(currentAccount.movements);
  calcDisplaySummary(currentAccount.movements);
};

// Event listener for the login button
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  // Find the account by username
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value.trim()
  );
  // Check if the account exists and the pin is correct
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Store login information in local storage
    localStorage.setItem("username", currentAccount.userName);
    localStorage.setItem("isLoggedIn", true);

    // Update the UI
    updateUIOnLogin();
  }
});

// If the user is already logged in, update the UI
if (isLoggedIn && currentAccount) {
  updateUIOnLogin();
}

// Logout Functionality

btnLogout.addEventListener('click', ()=>{
  localStorage.clear()
})
