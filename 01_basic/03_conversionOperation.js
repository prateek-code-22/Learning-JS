let score = "33abc"
console.log(typeof score) //string

let valueInNumber = Number(score) 
console.log(typeof valueInNumber) //number

console.log(valueInNumber) // not valid number NAN (not a number)

let score2 = null
console.log(typeof score2) // object

let convertScore = Number(score2)
console.log(typeof convertScore) // number
console.log(convertScore) // 0


let isLogged = 1
let boolIsLoggedIn = Boolean(isLogged)
console.log(boolIsLoggedIn) // true

let a = 33
let strNumber = String(a)
console.log(typeof strNumber) // string "33"

// "33" => 33
// "33abc" => NaN (type of NAN is number)
// true => 1; false=>0
// "" => false
// "hello" => true

//type of conversion:
// Number
// String
// Boolean


// *************************** Operations *************************


let val = 3
let negval = -val
console.log(negval) //-3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3)  // helloworld

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num1, num2, num3);

let count = 100;
++count;
console.log(count);

