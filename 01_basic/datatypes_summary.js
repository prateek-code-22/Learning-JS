// Primitive data types

// 7 types: String, Number, Boolean, null, undefinedm Symbol, BigInt

const score = 100
const scoreVal = 100.3

const logged = false
const temp = null
let user;

const id = Symbol("123")
const anotherid = Symbol("123")

const bigNumber = 445654323456543n

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["ironman", "hulk", "black window"]
let myobj = {
    name: "prateek",
    age: 22,
}

const myfunction = function(){
    console.log("hello world!");
}


// Memory management done by js itself. 

// Stack (primitive), Heap (Non primitive)- changes in refernce(org value).

let u1name = "sam";
let u2name = u1name  // create copy of var to modify new value
u2name = "david"
console.log(u1name);
console.log(u2name);


let userOne = {
    email: "user@gmail.com",
    upi: "u1@ybl"
}

let userTwo = userOne //userTwo have userOne reference with same value

console.log(userOne);
console.log(userTwo.email);

