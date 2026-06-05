// block scope and global scope

// let a = 10
// const b = 20
// var c = 30

//scope in code environment and scope during inspect in brwoser are different.


//if else,functions and loops curly braces ke through scope defined hota h.

//nested scope

function one(){
    
    const username = "shruti"

    function two(){
        const website = "youtube"
        console.log(username);
    
    }
    console.log(website);
    two()
}
one()       //scope is not working properly.
// have to see it again














































// scopes 2.0


function one(){

    const username = "shruti"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    
    // console.log(website);

    // two()

}

one()


if (true){
    const username = "shruti"
    if(username === "shruti"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website)   won't run becasue it is out of scope
}

// console.log(username)      won't run becasue it is out of scope



//++++++++++++ intereseting ++++++++++++


function addone(num){
    return num + 1
}

addone(5)


const addtwo = function(num){
    return num + 2
}
addtwo(5)