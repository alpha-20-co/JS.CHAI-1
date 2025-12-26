function sayMyName(){
   console.log("s");
   console.log("h");
   console.log("r");
   console.log("u");
   console.log("t");
   console.log("i");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4)     //7
// addTwoNumbers(3,"4")   //34
// addTwoNumbers(3,"a")   //3a
// addTwoNumbers(3,null)  //3

// const result = addTwoNumbers(3,4)     //7
// console.log("result is : ", result);     // result is : underfined because console.log doesnot returns the value 8.


// function addTwoNumbers(number1,number2){
//     let result = number1+number2
//     return result
//     console.log("shruti");                         // return ke baad kch bhi diya rhega to wo print nhii hoga,uske pehle hota to print ho jata.

// }

// const result = addTwoNumbers(3,4)
// console.log("result is : ", result);      // result is : 7



function addTwoNumbers(number1,number2){
    return number1+number2
}

const result = addTwoNumbers(3,4)
// console.log("result is : ", result);



function loginUserMessage(username){
    return `${username} just logged in.`
}
console.log(loginUserMessage("shruti"));      //shruti just logged in.
console.log(loginUserMessage(""));           //just logged in.
console.log(loginUserMessage());              // undefined just logged in.


// if 












function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2));    //2
console.log(calculateCartPrice(200,400,600));   //200


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));   //[200,400,600]  gives an array.   (... is rest/spread operator...here it is rest operator)


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800));   //[600,800]   200 and 400 becomes val1 and val2


const user = {
    username: "shruti",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is : ${anyObject.username} and price is : ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"xyzzz",
    price:999
})

const myNewarr = [ 200,400,600,800 ]
function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(myNewarr));
console.log(returnSecondValue([200,400,600,800]));