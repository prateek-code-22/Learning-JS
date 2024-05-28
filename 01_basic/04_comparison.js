console.log("2" > 1); //true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// == equality check
// comparison > < >= <=
// comparison convert null to number => 0
// null >= 0 true and null > 0 false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// false for all

// strict check === (check also data type)
console.log(2 == "2");

