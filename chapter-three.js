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
