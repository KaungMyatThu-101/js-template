'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const days = ['mon', 'tue', 'wed', 'fri']; //enhance
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
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

  openingHours, //Enhance Object Literal

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 1 or
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  // 2
  orderDelivery: function ({
    time = '22:00',
    address,
    starterIndex = 0,
    mainIndex = 0,
  }) {
    console.log(
      `We have received the order. The main dish is ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}and ${address} before ${time}`
    );
  },
  orderpasta: function (ing1, ing2, ing3) {
    console.log(`this pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//----------- spread operator

// const ingredients = [
//   prompt("let's make pasta, Ingrediant 1 ? "),
//   prompt(' Ingrediant 2 ? '),
//   prompt(' Ingrediant 3 ? '),
// ];
// console.log(ingredients);
// restaurant.orderpasta(...ingredients);

// const newRestaurant = { fontIn: 1990, ...restaurant, founder: 'Smit' };
// console.log(newRestaurant);

// restaurant.orderDelivery({
//   time: '11:11',
//   address: 'BKK',
//   starterIndex: 2,
//   mainIndex: 0,
// });

// const nestedArr = [1, 2, [3, 4]];
// const [i, , [j, k]] = nestedArr;
// console.log(i, j, k);

// ----------set default value

// const [x = 2, l, m = 3] = [1, 5];
// console.log(x, l, m);

// const [starterFood, mainFood] = restaurant.order(3, 0);
// console.log(starterFood, mainFood);

// ------------------------Destructuring object------------------------

//-----set default vale to destructuring object

// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu); //there's no menu in object so it show empty array

// -----------over write the last value by destructuring object

// let x = 111;
// let y = 222;
// const num = { x: 10, y: 20, z: 30 };
// ({ x, y } = num);
// console.log(x, y);
// console.log(num);

// // ---------------change the object's name of KEY

// const { name: resName, categories, openingHours: hours } = restaurant;
// console.log(resName, categories, hours);

// // ---------------nested destructuring object

// const {
//   fri: { open: openingTime, close },
// } = hours;
// console.log(openingTime, close);

// ------------------------Destructuring Arrays------------------------

//-------- 1.noraml aray input

// const arr = [1,2,3];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

//-------- 2.aray input by destructuring

// const arr = [1, 2, 3];
// const [a, b, c] = arr; //a,b,c[] is destructuring and 1,2,3 is array
// const [d, e, f] = [1, 2, 3];
// console.log(a, b, c);
// console.log(arr);

// let [g, , h] = restaurant.starterMenu;
// console.log(g, h);
// [h, g] = [g, h];
// console.log(g, h);

// ------------------------Spread Operator{...(in right side of =) } for Arrays(replicate original array into new array; can input array into function as an argument------------------------

// --------------manually input data

// const arr = [3, 5, 7];
// const newArr = [1, 2, arr[0], arr[1], arr[2]]; //manually
// console.log(newArr);

// //--------------input data by using spread operator

// const newArr1 = [1, 2, ...arr];
// console.log(newArr1);
// console.log(...newArr1); // it turn array into normal number data

// const newMenu = [...restaurant.mainMenu, 'Gatilic'];
// console.log(newMenu);

// const mainMenuNew = [restaurant.mainMenu];
// console.log(mainMenuNew);

// const combineMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(combineMenu);

// const company = 'Apple';
// const arrayToString = [...company]; //it changes array into string
// console.log(arrayToString);

// ------------------------Rests Pattern and Parameters(combine seperated data into a bunch as a array) ------------------------

// --------------syntux for rest parameter(... =)

// const nestedArray = [1, 3, ...[5, 7]]; //spread operator(... is on right side)
// console.log(nestedArray);

// const [a, b, ...others] = [1, 2, ...[3, 4, 5], 6]; //left side is destructuring ; right is spread operator(...) ; in left side (...) is not spread operators but rest parameters
// console.log(a, b, others);

//------------ rest operator for object

// const { sat, ...weakdays } = restaurant.openingHours;
// console.log(weakdays);

//------------ rest operator for function

// const num = [3, 7, 5];

// const add = function (
//   ...numbers //numbers is rest parameter
// ) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(1, 3);
// add(2, 5, 8);
// add(3, 8, 5, 9, 2, 7); //arbitrary amount
// add(...num); //input multiple array data into funtion by using rest parameter

// restaurant.orderPizza('pineapple', 'Grapes', 'chees');

// ------------------------Short Chrcuiting (and/or)------------------------

// ---------------------or operator(||)

// console.log(0 || true);
// console.log('hello' || 3); //return first trusly value
// console.log('' || 3);
// console.log(undefined || null); //return last falsy vlue

// restaurant.numGuest = 25;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// console.log(restaurant);

// const guest2 = restaurant.numGuest || 10; //short chrcuiting
// console.log(guest2); //output first truelt value

// ---------------------and operator(&&)

// console.log(0 && 'hello'); //and operator; prefer falsly value
// console.log(true && 'hello');
// console.log('hello' && 19 && null && 'world'); //output falsly value

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'pineapple');
// }
// restaurant.orderPizza('strawbery', 'pineapple', 'icecream') &&
//   restaurant.orderPizza;

// ------------------------ Nullish Coalescing Operator(??------------------------
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// restaurant.numGuest = 0;
// const guest3 = restaurant.numGuest ?? 10;
// console.log(guest3);

// ------------------------ Logical OR assignment (||=)------------------------
// The logical OR assignment (x ||= y) operator only assigns if x is falsy.

const shop1 = {
  resName: 'hello',
  guest: 20,
};
const shop2 = {
  resName: 'world',
  owner: 'Hachi',
};
const shop3 = {
  resName: 'Black',
  guest: 0,
};

// //-----------normal way

// shop1.guest = shop1.guest || 10;
// shop2.guest = shop2.guest || 10;

// console.log(shop1.guest);
// console.log(shop2.guest);
// console.log(shop3.guest);

//-----------Logical Assigment Operator ||=

// shop1.guest = shop1.owner || 10;

// console.log(shop1.guest);

// shop1.guest = shop1.guest ||= 10;
// shop2.guest ||= 10;
// console.log(shop1.guest);
// console.log(shop2.guest);

// shop3.guest ??= 10;
// console.log(shop3.guest);

// shop3.guest ||= 10;
// console.log(shop3.guest);

// shop2.owner = shop2.owner && 'Anonymous';
// shop2.owner &&= 'Anonymous';

// shop1.owner = shop1.owner && 'Anonymous';
// shop2.owner &&= 'Anonymous'; //same meaning
// console.log(shop2.owner);
// console.log(shop1.owner);

// //////////////////////////-----------------------/////////////////////////For Of Loop(//same with for loop)-----------------------/////////////////////////---------------------------

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const [i, val] of menu.entries()) {
//   console.log(`${i + 1} : ${val}`);
// }

// //////////////////////////-----------------------/////////////////////////Optional Chining-----------------------/////////////////////////---------------------------

// const friday = restaurant.openingHours.fri.open;
// // const monday = restaurant.openingHours.mon.open;
// console.log(friday);
// // console.log(monday);

// //check property is valid or not

// //original
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //optional chining(?.) ? check the property/object infront of them
// // console.log(restaurant.openingHours.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} open and ${open}`);

//   console.log(restaurant.order?.(0, 1));
// }

// //////////////////////////-----------------------/////////////////////////Looping Objects Object Keys Value and Entries-----------------------/////////////////////////---------------------------


const property = Object.keys(openingHours);
let str = `We are open on ${property.length} days `;
for(const day of Object.keys(openingHours)){
  // console.log(day);
  str += `${day },`;
  
}

// const property = object.keys(openingHours);//obj.key show object's key as a array data type
// console.log(property);
console.log(str);

const objValue = Object.values(openingHours);
console.log(objValue);

const objEntries = Object.entries(openingHours);
console.log(objEntries);

for (const [key, {open, close}] of objEntries){
  // console.log(x);
  console.log(`this is key ${key} . We open at  ${open} and close at ${close} `);
}