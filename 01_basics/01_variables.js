const accountId = 144553
let accoundEmail = "shruti@gmail.com"
var accountPassword = "302409"
accountCity = "jamshedpur"

// accountId = 2  // not allowed or can't be changed

accountEmail = "mohan@gmail.com"
accountPassword = "093024"
accountCity = "giridih"

console.table([ accountId, accountPassword, accountEmail, accountCity]);     // will give all the variables in a tabular form.


// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

/*
   prefer not to use var because of issues in block scope and functional scope.
*/