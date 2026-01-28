// for each loop

const coding = ["js", "python", "cpp", "ruby", "java"]
// coding.forEach( function (item) {                  // call back function
//     console.log(item);
// })

// coding.forEach( (val) => {                            // call back arrow function
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)                                  // just giving the reference of the function not acctually executing it here.
  
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languagename:"javasript",
        languagefile:"js"
    },

    {
        languagename:"java",
        languagefile:"java"
    },

    {
        languagename:"python",
        languagefile:"py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languagename);
})