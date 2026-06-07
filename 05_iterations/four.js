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
    // console.log(programming[key]);      // bs key likhenge to 0 1 2 3 4 aa jaega mtlb key aaega bs
}

const map = new Map()                                  // can't be iterated.
map.set("IN", "India")                                 // map is not iterable.
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map){
    // console.log(key);
}

