//----------------------- Coding Challenge 1

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.
// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// const avgDolphins = (dataDolphins1, dataDolphins2, dataDolphins3) =>
//   (dataDolphins1 + dataDolphins2 + dataDolphins3) / 3;

// const scoeDolphins = console.log(avgDolphins(44, 23, 71));

// const avgKoalas = (dataKoalas1, dataKoalas2, dataKoalas3) => {
//   const avg2 = (dataKoalas1 + dataKoalas2 + dataKoalas3) / 3;
//   return avg2;
// };
// const scoeKoals = console.log(avgKoalas(65, 54, 49));

// const checkWinner = (scoeDolphins, scoeKoals) => {
//   if (scoeDolphins > scoeKoals * 2) {
//     return console.log("winner is Dolphins");
//   } else if (scoeDolphins * 2 < scoeKoals) {
//     return console.log("winner is koalas");
//   } else {
//     console.log("No Winner");
//   }
// };
// checkWinner(scoeDolphins, scoeKoals);

// //----------------------------- Coding Challenge #2

// /*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// TEST DATA: 125, 555 and 44
// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

// const calcTip = function (bills) {
//   for (let i = 0, length = bills.length; i < length; i += 1) {
//     const tip =
//       bills[i] >= 50 && bills[i] < 200
//         ? bills[i] * (15 / 100)
//         : bills[i] * (20 / 100);
//     console.log(`bills = ${bills[i]}, Tip${tip}, Total= ${bills[i] + tip}`);
//   }
// };
// calcTip([125, 555, 44]);

// //----------------------------- Coding Challenge #3

// Coding Challenge #3 with object
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formulas/heights/height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John wweighs92 kg and is 1.95 m tall.
TEST DATA 2: Marweighshts 95 kg and is 1.88 m tall. Joweighshts 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// const mark = {
//   weight: 78,
//   height: 1.69,
//   clacMarkBMI: function () {
//     this.markBMI = this.weight / this.height ** 2;
//     return this.markBMI;
//     // this.bmi = this.weight / this.height ** 2;
//   },
// };

// const john = {
//   weight: 92,
//   height: 1.95,
//   calcJohnBMI: function () {
//     this.johnBMI = this.weight / this.height ** 2;
//     return this.johnBMI;
//   },
// };
// console.log(mark.clacMarkBMI());
// console.log(john.calcJohnBMI());

// if (mark.markBMI > john.johnBMI) {
//   console.log("Mark BMI is heigher ");
// } else {
//   console.log("John BMI is heigher ");
// }

// //----------------------------- Coding Challenge #3

// /*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// TEST DATA: 125, 555 and 44
// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

const calcTip = function (bills) {
  for (let i = 0, length = bills.length; i < length; i += 1) {
    const tip =
      bills[i] >= 50 && bills[i] < 200
        ? bills[i] * (15 / 100)
        : bills[i] * (20 / 100);
    console.log(`bills = ${bills[i]}, Tip${tip}, Total= ${bills[i] + tip}`);
  }
};
calcTip([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]);
