// also called as regex
// object type
// is a pattern that describes a set of strings that matches the patterns, that means that a regex is like a filter that can accept a specific match and reject the rest\
let reg1 = new RegExp("test"); // or... 
let reg2 = /test/ 
console.log(/testing/.test('tttteesssstiinggg')); // returns true
console.log(/testing/.test('asdadsadsadadsada')); // returns false
// you can use regex to identify a string in a string, even if the string is typed in a diferent way, like the first case
// you also can create a regex using just numbers, it isnt restricted to letters

const interval = /[0-9]/ // this way you create a regex that verify if the number is between the interval
// you can use the 'interval' regex to verify if a string haxe a number

/* // special types to use in a regx to restrict the accepted strings as you want
\d - accepts any expression using numbers [0-9]
\w - accepts only alphanumerics characters
\s - accepts only blankspaces or breaklines
\D - accepts only letters [^0-9]
\W - accepts only non-alphanumeric characters
\S - accepts any character that isnt a blankspace
.  - accepts any character besides breakline
\b - indicates that a string is terminated by the sequence of digits before the \b
*/ // remember that this substitues only one character, so if you want to verify a string of characters, you need to use the special character times the length of the string
// if you use something like /\d\d/ you're verifying if a string have 2 numeric characters, no ONLY 2 numeric characters, so '200000' will turns out to be true

const notLetter = /[^a-z]/; // return false if a string have a lower letter (^ is the 'not' operator)
const oneOrMoreNumbers = /\d+/; // return false if the string have minus than one number (+ is the 'plus' operator)
const optional = /Gab?riel/; // turns the character before the '?' as optional, so will return true if you digit 'Gariel'
const cep = /\d{5}-\d{3}/; // create precision in the digits, only will accept 5 digits before the '-' and 3 after (in this case only numbers)
const digits = /\d+/;
console.log(digits.exec("Here we have the number 100!")); // exec substitutes the .test() function, returns an object containing the variables that the filter reads, so in this case will return the input, the number 100 and the index where the number 100 appears 
console.log(digits.exec("Here we dont have any number!")); 
console.log("Here we have a number 200!".match(/\d+/)); // another way to verify values inside a string (like exec but inside a string)

let fruits = /\d+ (bananas|apples|oranges)/; // you give some cases separed by a pipe and return true if the value inside the pipes are included in the string you're trying to validate

const validadeDomain = /[?www]\w+\.com.br|.com/; // this way you can use some of the parameters to validade if a domain is valid or not
const validadeEmail = /w+@\w+\.\w+/; // a way to validate emails




