// NUMBER

const score = 400
console.log(score);  //400

const balance = new Number(400)
console.log(balance);   //[Number: 400]

console.log(balance.toString());  //400 but type has changed to string and we can use string properties on it also.
console.log(balance.toString().length);  //3
console.log(balance.toFixed(2));  //400.00, use it to precise the value upto given decimal.

const otherNumber = 23.3456
console.log(otherNumber.toPrecision(3));   // 23.3 but returns the value in string
// 123.899 => 124  
// 1123.876 => 

const hundreds = 1000000
console.log(hundreds.toLocaleString());   //1,000,000 (according to US standards)
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000  (according to Indian standards)

//Can check other properties of Number also.



//MATHS

console.log(Math);   // an object with many properties

console.log(Math.abs(-4));   // 4 , gives absolute value of integer.
console.log(Math.round());   // gives round off values.
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9));   // 4

console.log(Math.random());   // gives random value between 0 and 1.

console.log(Math.random());  
console.log((Math.random()*10)+1);  
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min);
