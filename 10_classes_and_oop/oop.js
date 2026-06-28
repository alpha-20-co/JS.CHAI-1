const user = {
    username: "shruti",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logincount, IsLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.IsLoggedIn = IsLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("shruti", 9, false)
const userTwo = new User("mohan", 10, true)      //new is a constructor prototype...agar new nhii denge to value overwrite ho jaega
console.log(userOne);

console.log(userOne.constructor)             //reference dega khud hi ke baare mein...

// new keyword use krne se sbse pehle empty object create hota h which is called as instances
// uske baad constructor function call hota h
// uske baad saare arguments inject ho jaate h usme
// function ke andar mill jaata h arguments

//instances of ke baare mein pdhna h