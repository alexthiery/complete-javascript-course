///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (scores) => {
//   return scores.reduce((a, b) => a + b, 0) / scores.length;
// };

// let Dolphins = [44, 23, 71];
// let Koalas = [22, 12, 71];

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log("nobody wins");
//   }
// };

// checkWinner(calcAverage(Dolphins), calcAverage(Koalas));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = (input) => {
//   return input >= 50 && input <= 300 ? input * 0.15 : input * 0.2;
// };

// console.log(calcTip(55));

// let testData = [125, 555, 44];

// const tips = [calcTip(testData[0]), calcTip(testData[1]), calcTip(testData[2])];

// console.log(tips);

//  objects in javascript are specified as key value pairs
const alex = {
  name: "alex",
  surname: "thiery",
  town: "sheffield",
};

//  they can be accessed through both dot and bracket notation

// console.log(alex.town);

// console.log(alex["to" + "wn"]);

//  this is really cool. prompt will make a prompt window pop up in the browser. then depending on the value which is entered, this will be assigned to the variable name (in this instance interested in) - this can then be used to subset the object and return the associated value
const interestedIn = prompt(
  "which property to you want to know about alex? name, surname or town?"
);

console.log(alex[interestedIn]);

console.log(
  alex[interestedIn]
    ? alex[interestedIn]
    : `there is no property called ${interestedIn}`
);

//  you can add new values using dot and bracket notation as well

alex.email = "alexthiery1@gmail.com";

console.log(alex.email);
