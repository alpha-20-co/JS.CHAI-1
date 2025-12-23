const marvelHeroes = ["thor", "spiderman", "ironman"]
const dcHeroes = ["superman", "flash", "batman"]

marvelHeroes.push(dcHeroes)
console.log(marvelHeroes);        //[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvelHeroes[3][1]);   // flash

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);                // [ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]
// merges both the arrays


const allnH = [...marvelHeroes, ...dcHeroes]  //SPREAD
console.log(allnH);                           // also merges both the arrays.

const anotherArr = [1,2,3,[4,5,5],7,[6,7,[9,8]]]
const real_anotherArr = anotherArr.flat(infinity)  // inspite of infinity we can give the depth either like here we can give 3
console.log(real_anotherArr);    // gives all the elements in a single array [1,2,3,4,5,5,7,6,7,9,8]

console.log(Array.isArray("shruti"));    //false as it is a string.
console.log(Array.from("shruti"));       //['s','h','r','u','t','i']  converts it into array.


console.log(Array.from({name:"shruti"}));    //[]  empty array (interesting case)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //[100, 200, 300]