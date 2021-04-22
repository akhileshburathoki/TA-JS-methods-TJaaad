// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(` `);
// - Add two new words in the strings array "called" and "sentance"
strings.push(`called`, `sentance`);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(` `);
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.forEach((wrd) => {
  if (wrd.includes(`is`)) {
    console.log(wrd);
  }
});
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => {
  return num % 3 === 0;
});
// -  Sort Array from smallest to largest
numbers.sort((num1, num2) => {
  return num1 - num2;
});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largest = numbers.sort((num1, num2) => {
  num1 - num2;
});
// - Find longest string in strings

// - Find all the even numbers
numbers.map((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
// - Find all the odd numbers
numbers.map((num) => {
  if (num % 2 !== 0) {
    return num;
  }
});
// - Place a new word at the start of the array use (upshift)
strings.unshift(`This`);
// - Make a subset of numbers array [18,9,7,11]
numbers.push([18, 9, 7, 11]);
// - Make a subset of strings array ['a','collection']
strings.push(["a", "collection"]);
// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word
let numWord = strings.map((wrd) => {
  return wrd.length;
});
// - Find the sum of the length of words using above question
let sum = 0;
numWord.map((num) => {
  sum = sum + num;
});
console.log(sum);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
