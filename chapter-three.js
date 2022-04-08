// JavaScript types can be divided into two categories: Primitive and Object types.
// Primitive types include numbers, strings, boolean values, null and undefined.
// Anything else is an object
// An array is an object, as well as Set, Map, RegExp, Date, Error, functions and classes
// Object types are mutable (changable) Primitive types are immutable.
// JavaScript will convert values from one type to another. 
// When a number appears in JavaScript it is a numeric literal
// Base 10, hex (beginning with an Ox) base 2 (Ob) or base 8 (Oo)
// I doubt I will ever use non-base 10 numbers...but I guess you never know.
// You can use underscore to seperate long/large numbers to make them easier to read.
/* Math arithmatic
Math.pow(2,53) - 2 to the power of 53
Math.round - to the nearest integer
Math.ceil - round up
Math.floor - round down
Math.abs(-5) - absolute value
Math.max(4,5,6) - Return the largest argument
Math.min - return the smallest
Math.random - return a number between 0 and 1
Math.PI
Math.E - the base of a logarithm
math.sqrt(4) - the square root of a number
Math.pow(3, 1/3) - the cube root of 3
Math.sin - trig
Math.log(10)
Math.cbrt - cube root */
// If a number is too big to represent in javascript - the result with be a special value called "Infinity"
// If the number is too small to represent - it will show a 0
// NaN - Not a number

// Binary floating point and rounding errors
// It cannot represent 1/10 or .01 precisely.
// The value of .1 can be very closely apporoximated and generally doesn't cause an issue unless you are compairing for equality.
// If it is a problems try to use different integers. For example whole cents instead of 100ths of a dollar.
// BitInt numbers allow 64 bit numbers. These integers are identified by a lower case n after the numbers
// You can use the same arithmatic with BitInt as you do with regular numbers. But you can't mix and match
// Comparison operators (< >) do work with mixing BigInt and regular numbers
// The JavaScript type for representing text is a string.
// two\nlines (\n causes a line break)
// one\
// line\
// here
// The \ (backslash) can be used to escape quotes or apostrophies inside a string
// You can concatate strings by using the plus sign
// Strings can be evaluated with === or !=== 
let s = "Hello World"
s.substring(1, 4) // extracts "ell"
s.slice (1,4) // Same as above
s.split (", ") //split at the delimiter string
// page 35 has a list of all different properties for strings
// Strings a imutable. These methods create new strings 
// Boolean values indicate truth or false, on/off yes/no
// They are the result of camparisons in your code
// && operator performs Bolean and operation
// || indicates OR  
// ! performs Boolean, NOT operation
// Symbols were introduced in ES6 to serve non-string property names
// Symbols servce as a language extension mechanism
let s = Symbol("sym_x");
s.toString() // => "Symbol(sym_x)"
//Global objects is a regular JavaScript object that serves a very important purpose: the properties of this object are the globally definied indentifiers that are available to a JavaScript porgram.
// Imutable Primitive Values and Mutable Object References:
// Primitive values (undefinied, null, booleANS, numbers and strings)
// Objects (arrays and functions)
// Primitive values are immutable
// Strings are not arrays so you cannot alter a character - instead it will provide a new string.
let s = "hello"; // String
s.toUpperCase(); // Returns "HELLO" but doesn't alter s
console.log(s);
// Objects are mutable
let o = { x: 1 } // Start with an object
o.x = 2; // Nutate it by changing the value of a property
o.y = 3; // Mutate it by adding a new property
let a = [1,2,3]; //Arrays are mutable
a[0] = 0; //Change the value of the first element
a[3] = 4; // Adds a new array element.
//Objects are never equal
// Arrays are never equal
// Type Converstions:
10 + "objects" // => "10 Objects" number 10 converts to string
"7" + "4" //=> 11: Both strings convert to numbers
// Converstions and Equality:
// String equality operator "===" does not consider operands to be equal if they are not the same type
// The equality operator "==" uses a flexible definition of equality
null == undefined // True
"0" == 0 // True
// Explicit Converstions
Number("3") // Number 3
String(false) // "False" or use false.toString()
// toFixed() converts a number with a specified number of digits after the decimal.
let n=12345.678
n.toFixed(0) // 12346
n.toFixed(2) 12345.68
//toExponential converts a number to string using exponent notation
//toPrecision() converts a number to a string with the number of sig figs you specify.
// 3.10 Variable Declaration and Assignment
// ONe of the most fundamental techniques of computer programing is the use of name so or identifiers to represent values.
// Use let and const to declare variables
// You can declare on single lines or declare multiple variables in a single statement
let i, sum;
// It is good practice to assign an initial value to your variables when declaring them.
let message = "hello";
let i = 0, j = 0, k = 0;
// To declare a constant  instead of a variable use const. You must initialize the constant when you declare it.
const HO = 74;
const C = 299792.458;
// It is common practice to declare constants using all caps to distinguish them from variables.
// 3.10.3 - Distructing Assignment
let [x,y] = [1,2] // Same as let x=1, y=2










