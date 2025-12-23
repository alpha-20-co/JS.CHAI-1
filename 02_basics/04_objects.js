// const tinderUser = {}     // non singleton object

const tinderUser = new Object()   // singleton object
tinderUser.id = "994ss"
tinderUser.name = "shruti"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// objects under object

const regularUser = {
    email : "shruti@gmail.com",
    fullname : {
        userfullname : {
            firstname : "shruti",
            lastname : "kumari"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"s", 2:"h"}
const obj2 = {3:"r", 4:"u"}
const obj3 = {5:"t",6:"i"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);             // gives three objects under obj4

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}     // spread, mostly used syntax for combining many objects
console.log(obj4);


// objects under arrays

const User = [
    {
        id:1,
        email:"shruti@gmail.com"
    }
     {
        id:1,
        email:"shruti@gmail.com"
    }
     {
        id:1,
        email:"shruti@gmail.com"
    }
]

User[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));    //will give all keys inside tinderUser in an array
console.log(Object.values(tinderUser));    // will give all values inside tinderUser in an array
console.log(Object.entries(tinderUser));   // gives array under array....[['id','994ss],[...],[....]]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // true because given object contains this key



