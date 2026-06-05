const user = {
    username : "shruti",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to website`);  // this refers to current context.
        console.log(this);
    }
}
// user.welcomeMessage()  // shruti, Welcome to website
// user.username = "sam"
// user.welcomeMessage()  // sam, Welcome to website   // current context is changed

// console.log(this);

// function chai(){
//     let username = "shruti"
//     console.log(this.username);
// } 
// chai()     // undefined     // this can be used under objects...function ke under use nhii kr paaenge


// const chai = function(){
//     let username = "shruti"
//     console.log(this.username);
// }
// chai()       // undefined



          // ARROW FUNCTION

const chai = ()  => {
    let username = "shruti"
    console.log(this.username);  //undefined
    console.log(this);           // {} empty paranthesis
}
// chai()    

// basic syntax of arrow function


// explicit return
// const addTWo = (num1,num2)  => {            // if curly brases is there,then we have to write return
//     return num1+num2
// }

// implicit return
// const addTWo = (num1,num2)  => num1+num2
// const addTWo = (num1,num2)  => (num1+num2)
const addTWo = (num1,num2)  => {username:"shruti"}  // undefined
const addTWo = (num1,num2)  => ({username:"shruti"}) //{username: "shruti"} , objects defined krne ke liye paranthesis use krna hi padega.

// console.log(addTwo(3,4));     // will run similar.