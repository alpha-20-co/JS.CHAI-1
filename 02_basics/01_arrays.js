//ARRAY

const myArr = [0,1,2,3,4,5]
const myHeroes = ["ironman", "spiderman", "thor"]

const myArr2 = new Array(0,1,2,3,1)

console.log(myArr[0]);   // gives the element at index 0.

// ARRAY METHODS 

myArr.push(6)
console.log(myArr);   // adds 6 to the array.

myArr.pop()
console.log(myArr);   // deletes the last element in the array.

myArr.unshift(9)   // adds 9 to the starting of the array.
myArr.shift()      // deletes the first element

console.log(myArr.includes(8));   // false as it doesnot contains 8.
console.log(myArr.indexOf(8));   // -1 as 8 is not in the array but will give the index of the element which is in the array.


const newArr = myArr.join()
console.log(newArr);         // binds the array and changes the elements into string.


// slice and splice

console.log("A ", myArr);       //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);

console.log(myn1);              //[ 1, 2 ]
console.log("B ", myArr);       //B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3);

console.log(myn2);                   //[ 1, 2, 3 ]
console.log("C ", myArr);            //C  [ 0, 4, 5 ]



