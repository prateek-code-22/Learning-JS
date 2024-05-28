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
