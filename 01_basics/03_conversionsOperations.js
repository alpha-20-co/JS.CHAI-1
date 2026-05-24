let score = 33

console.log(typeof score);   //number,if score = "33" then string
console.log(typeof(score));  //number,if score = "33" then string


let valueInNumber = Number(score)
console.log(typeof valueInNumber);   //number, if score = "33" still number

console.log(valueInNumber);   //NaN if score = "33abc" but it's type is still number   (NaN means not a number)
                              // if score = null, 0
                              // if score = undefined, NaN
                              // if score = true/false, 1/0
                              // if score = "string", NaN


let isLoggedIn = 1


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // true..... and for 0 it is false
                                // "", false
                                // "string", true



let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//33 => 33,string





// OPERATIONS

let value = 3
let negValue = -value
console.log(negValue);   //-3

// we know all basics operations

// str1 + str 2 

console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2);  // 122
console.log(1+2+"2");  // 32


console.log(true);  // true
console.log(+true); // 1
console.log(+""); //0

// prefix and postfix from mdn

