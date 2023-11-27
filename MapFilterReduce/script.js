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