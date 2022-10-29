// -----------------Coding challenge 1-----------------

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formulas/heights/height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John wweighs92 kg and is 1.95 m tall.
TEST DATA 2: Marweighshts 95 kg and is 1.88 m tall. Joweighshts 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// let weightOfMark1 = 78;
// let heightOfMark1 = 1.69;

// let weightOfJohn1 = 92;
// let heightOfJohn1 = 1.95;

// let BIMofMark = weightOfMark1 / heightOfMark1 ** 2;
// let BIMofJohn = weightOfJohn1 / heightOfJohn1 ** 2;

// console.log("BIMofMark = " + BIMofMark);
// console.log("BIMofJohn = " + BIMofJohn);

// let markHigherBMI = BIMofMark > BIMofJohn;
// console.log(markHigherBMI);

// let weightOfMark2 = 95;
// let heightOfMark2 = 1.88;

// let weightOfJohn2 = 85;
// let heightOfJohn2 = 1.76;

// let BIMofMark2 = weightOfMark2 / heightOfMark2 ** 2;
// let BIMofJohn2 = weightOfJohn2 / heightOfJohn2 ** 2;

// console.log("BIMofMark2 = " + BIMofMark2);
// console.log("BIMofJohn2 = " + BIMofJohn2);

// let markHigherBMI2 = BIMofMark2 > BIMofJohn2;
// console.log(markHigherBMI2);

// -----------------Coding challenge 2-----------------

// let weightOfMark1 = 78;
// let heightOfMark1 = 1.69;

// let weightOfJohn1 = 92;
// let heightOfJohn1 = 1.95;

// let BIMofMark = weightOfMark1 / heightOfMark1 ** 2;
// let BIMofJohn = weightOfJohn1 / heightOfJohn1 ** 2;

// if (BIMofMark > BIMofJohn) {
//   console.log("BIM of Mark is greater than john");
// } else {
//   console.log("BIM of john is greater than Mark ");
// }

// if (BIMofMark > BIMofJohn) {
//   console.log("BIM of Mark " + BIMofMark + " is greater than john");
// } else {
//   console.log("BIM of john " + BIMofJohn + " is greater than Mark");
// }

// -----------------Coding challenge 3-----------------
// // Coding Challenge #3
// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (a draw means they have the same average score).
// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. HINT: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.
// TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 106
// GOOD LUCK

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// 1;
// // let avgDolphinsScore;
// // console.log(
// //   (avgDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3)
// // );
// const avgDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(avgDolphinsScore);

// const avgKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(avgKoalasScore);

// 2;
// if (avgDolphinsScore > avgKoalasScore) {
//   console.log("Dolphine team is the winner");
// } else if (avgKoalasScore > avgDolphinsScore) {
//   console.log("Koalas team is the winner");
// } else if (avgDolphinsScore === avgKoalasScore) {
//   console.log("The daw!");
// } else {
//   console.log("something wrong");
// }

// 3;
// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
//   console.log("Dolphine team is the winner");
// } else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
//   console.log("Koalas team is the winner");
// } else if (avgDolphinsScore === avgKoalasScore) {
//   console.log("The daw!");
// }

// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
//   console.log("Dolphine team is the winner");
// } else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
//   console.log("Koalas team is the winner");
// } else if (
//   avgDolphinsScore === avgKoalasScore &&
//   avgDolphinsScore >= 100 &&
//   avgKoalasScore >= 100
// ) {
//   console.log("The daw!");
// } else {
//   console.log("No tem win the trophy");
// }

// -----------------Coding challenge 3-----------------

// Coding Challenge #4
// /*
// Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 ;

const bill = 275;
const tip = bill >= 50 && bill < 200 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`Bill = ${bill}, Tip${tip}, Total= ${bill + tip}`);
