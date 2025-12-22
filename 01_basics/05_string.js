//string (type is object)


const name = "shruti"
const repoCount = 50

//console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)    // very important

const gameName = new String('shruti')  // another way to declare a string

console.log(gameName[0]);   // will give us 's'
console.log(gameName.__proto__);   //{}

console.log(gameName.length);   // 6
console.log(gameName.toUpperCase());  // SHRUTI
console.log(gameName.charAt(4));   // gives the character at position 4.
console.log(gameName.indexOf('t'));  // gives the position of 't'.

const newString = gameName.substring(0,4)
console.log(newString);   // shru

const anotherString = gameName.slice(-8,4)
console.log(anotherString);  // hru

const newStringOne = "    shruti   "
console.log(newStringOne);   //    shruti   
console.log(newStringOne.trim());  //shruti,will trim the spaces

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));    // will replace "%20" to "-"
console.log(url.includes('shruti'));   // false

const newStringTwo = "shruti-bored-dead"
console.log(newStringTwo.split('-'));   //['shruti', 'bored', 'dead'], will give an array 

//have to learn more about string on mdn.