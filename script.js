// let js = "amaizing";

// let firstName = "Jonas";
// console.log(firstName);

// let country = "Ukaraine";
// let continent = "Europe";
// let population = "48m";

// console.log(country, continent, population);

// const now = 2037;
// const ageJonas = now - 1988;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2);

// const firstName = "Sergiy";
// const lastName = "Zubenko";
// const job = "tester";
// const birthYear = 1988;
// const now = 2025;
// const fullName = firstName + " " + lastName;
// const sergiy =
//   "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job;
// console.log(sergiy);

// const sergiyNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}`;
// console.log(sergiyNew);

// if (ageJonas > ageSarah) {
//   console.log("Jonas is older then sarah");
// }

const userName = "Sarah";
const userYear = 1988;
const now = 2025;
const ageNow = now - userYear;
const agePass = ageNow >= 18;

if (agePass) {
  console.log(`${userName}, is ${ageNow} and old enough to drive 🏎️`);
} else {
  console.log(`${userName}, is is ${ageNow} and too young to drive 🏎️`);
}
