let a = 10
const b = 20
var c = 30


















































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