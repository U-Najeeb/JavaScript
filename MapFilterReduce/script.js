'use strict';



// Data Transformations Using Map, Filter and reduce


//MAP METHOD

const arr = [1, 2, 3, 4, 5]

const mappedArr = arr.map((element) => element * 2) // MAP method gives us a brand new array based on the original array
// the array it return is typeof object 
console.log(mappedArr)

//FILTER METHOD

const filterArr = arr.filter(element => element % 2 === 0)
console.log(filterArr)

// More on MAP Method

const euros = [200, 450, -400, 3000, -650, -130, 70, 1300]

const conversionRate = 1.1

const eurosToUsd = euros.map((euro) => Math.floor (euro * conversionRate))

console.log(eurosToUsd)


// Example 2

const eurosDescription = euros.map((euro, i ) => 
`Movement ${i + 1}:You ${euro > 0  ? `Deposited `: `Withdrew`}${euro}`
)
console.log(eurosDescription)

// More on FILTER METHOD

const Deposits = euros.filter((euro) => euro > 0)
console.log(Deposits)

// These methods are pretty useful because we can use these methods in chaining as well

// Example 

const mappedFilteredArray = euros.map((euro) => Math.floor (euro * conversionRate)).filter((euro) => euro > 0)
console.log(mappedFilteredArray)

// Reduce Method

const reducedArray = euros.reduce((acc, euro) => acc + euro)
console.log(reducedArray) //3840

// Find Max value in the array 

const maxValue = euros.reduce((acc, euro, euros) => (acc > euro) ? acc : euro , euros[0])
console.log(maxValue)

// Minimum value in the array
const minValue = euros.reduce((acc, euro, euros) => (acc < euro) ? acc : euro , euros[0])
console.log(minValue)

// FIND METHOD of arrays

const bankAccounts = [...accounts]

// FIND METHOD returns the first element of the array the meets the condition

const bankAccount = bankAccounts.find((account) => account.owner === "Jessica Davis")

console.log(bankAccount)

// INCLUDES METHOD

console.log(euros.includes(3000)) // checks for equality returns a boolean value

// SOME METHOD

const anyDeposits = euros.some((mov) => mov > 0)
console.log(anyDeposits)// Returns a boolean value and check if any element in the array satisfies the condition 

// EVERY METHOD

const checkEvery = euros.every((euro) => euro <= 3000)
console.log(checkEvery) // Returns a boolean value and checks if each and every element in the array satisfies the condition 

// FLAT AND FLAT MAP
// What these methods do is that it will flaten the array 

//EXAMPLE

const arrToFlaten =  [[1,2,3], [4,5,6], [7,8,9]]

const flatenedArr = arrToFlaten.flat()
console.log(flatenedArr) // Returns a flatened array


const arrToDeepFlaten =  [[1,[2,3]], [[4,5],6], [7,8,9]]

const deepFlatenedArr = arrToDeepFlaten.flat(2) // The number that is given as an argument is called the depth to which we want to flaten

console.log(deepFlatenedArr)

const overallBalance = accounts.map((acc) => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance)

// FLATMAP *** It simple is like a map method but at the end it flatens the array


const overallBalanceFlatmap = accounts.flatMap((acc) => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(overallBalanceFlatmap)
