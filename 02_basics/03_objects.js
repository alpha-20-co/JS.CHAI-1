//singleton
//object.create


//object literals

const mySym = Symbol("key1")       // declaring a symbol

const jsUser = { 
    name:"shruti",
    "full name": "shruti kumari",    // we can not access this data by dot method
    [mySym]: "mykey1",               // we have to use square bracket for symbols, if we dont use it then system will take it as a string instead of symbol.
    age: 21,
    email:"shruti@google.com",
    location:"jamshedpur",
    isLoggedIn: false,
    lastLogginDays:["monday","friday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);     // we can access the value in a specific key using both the methods.
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "shruti@chatgpt.com"    // changes email
object.freeze(jsUser)                  // it freezes the object so that no values under any key can be further get changed now.

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);        // function does not gets execute, it just returns back....[function(anonymous)]
console.log(jsUser.greeting());      // hello js user


jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting2());      // hello js user, shruti