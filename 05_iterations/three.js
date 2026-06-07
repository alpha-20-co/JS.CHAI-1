// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each character is ${greet}`);
    
}

// maps (it is an object)   hols key-value pairs,same as dsa   (unique key in sorted order)

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {                              // myObject is not iterable......for of loop is not working for objects
    'game1': 'NFS',
    'game2': 'PUBG'
}
// for (const [key,value] of myObject) { 
//     console.log(key, ":-", value); 
// }