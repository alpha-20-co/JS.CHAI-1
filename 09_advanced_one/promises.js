//promise is an object.


const promiseOne = new Promise(function(resolve,reject){
    // do an async task.
    //datebase calls, cryptography, network call
    setTimeout(function(){
        console.log("Async task is complete.");
        resolve();
    },1000);
    
})

promiseOne.then(function(){
    console.log("promise consumed.");
})


//another way to write promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2.")
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 is complete.")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "shruti@chai.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "shruti", password: "994"})
        }
        else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})


////then value leta h resolve ka aur catch error lega
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);         //upar wale then mein jo return hoke aaega whii next then me call hoga
})
.catch(function(error){
    console.log(error);
}) 
.finally(() => console.log("promise is either resolved or rejected."))              

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "999"})
        }
        else{
            reject('ERROR: JS WENT WRONG')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
       const response = await promiseFive    
       console.log(response); 
   } 
   catch (error) {
       console.log(error);
   }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E:",error);
//     }
// }

//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))