const accountId = 132
var accountName = "sam"
let city = "ny"
state = "uk"

// accountId = 112  not allowed to change const value

/* var is not used now because of block scope and function scope*/ 

accountName = "john"
city = "pune"
state = "maharastra"

let country; //gives undefined

console.log(accountId);
console.table([accountId, accountName, city, state])
console.log(country)

