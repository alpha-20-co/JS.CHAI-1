const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js","cpp","ruby","python","java"]
for (const key in programming){
    // console.log(programming[key]);
}

const map = new Map()                                  // can't be iterated.
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map){
    // console.log(key);
}

