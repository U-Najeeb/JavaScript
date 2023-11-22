
const openingHours= {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
};

// Optional Chaining (?.)
console.log(restaurant.openingHours.mon) // Undefined Since it is not present 
console.log(restaurant.openingHours.mon.open) // Error : Type Error'

//Here we use optional chaining 
console.log(openingHours)
console.log(restaurant.openingHours.mon?.open) // This will not throw an error and instead will just show undefined 
// it will just if (restaurant.openingHours.mon) this exists then map it to open otherwise error

// This above code is eqvivalant of writing 
if (restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open)
}

//lets use (?.) in a loop

const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sat']

for (let day of days){
    const open = restaurant.openingHours[day]?.open 
    console.log(`On ${day}, we open at ${open}`)
}
/*On mon, we open at undefined these are undefined because they where not present Suppose we want to change it to closed
as we studied we use OR (||)*/
//On tue, we open at undefined
//On web, we open at undefined
//On thu, we open at 12
//On fri, we open at 11
//On sat, we open at 0

for (let day of days){
    const open = restaurant.openingHours[day]?.open || "Closed"
    console.log(`On ${day}, we open at ${open}`)
}
// On mon, we open at Closed Now You can see we can use it with OR (||)
// On tue, we open at Closed
// On web, we open at Closed
// On thu, we open at 12
// On fri, we open at 11
/* On sat, we open at Closed But now we are facing another issue here restaurant is actually open on sat but it is showing closed 
Why is that ? because if we see open = 0 in sat so its a falsy value and or ignores falsy values we restaurant.openingHours[day]?.open
this thing becomes False so it prints Closed*/

//Question is how do we fix it? Answer is Nullish Coleasing Operator(??)

for (let day of days){
    const open = restaurant.openingHours[day]?.open ?? "Closed"
    console.log(`On ${day}, we open at ${open}`)
}
// On mon, we open at Closed Now You can see we can use it with OR (||)
// On tue, we open at Closed
// On web, we open at Closed
// On thu, we open at 12
// On fri, we open at 11
/*On sat, we open at 0 How this worked? as we know nullish operator checks if restaurant.openingHours[day]?.open is nullish or undefined if 
that would have been the case then it would have returned CLOSED
and since 0 is not null or undefined it returns 0*/

// We can use it with Arrays as well
const user = [{name: "Umair", age : 24}]
console.log(user[0]?.name ?? "User Not Found")

// Most of the cases we use ?. and ?? together