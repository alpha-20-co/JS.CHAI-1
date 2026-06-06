const userEmail = "s@mohan.ac.in"


// falsy values :-
// false, 0, -0, "", BigInt, null, undefined, NaN

// truthy values :-
// "0", "false", " ", [], {}, function(){}    (either "" or '')

// const userEmail = []       // (empty array)
//  if(userEmail.length === 0){
//        console.log("array is empty");
// }


// const emptyObj = {}            // (empty object)
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }


// Nullish Caolescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10        //5
// val1 = null ?? 10     //10
// val1 = undefined ?? 15    //15
// val1 = null ?? 10 ?? 20   //10, jo bhi pehle hoga wo value milega.


// console.log(val1);

// Terniary Operator

// conditiion ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// 100 greater than 80 h mtlb false hua condition to more than 80 print hoga agar condition true hota to less than 80 print hota