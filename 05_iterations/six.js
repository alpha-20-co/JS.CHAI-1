// const coding = ["js", "python", "cpp", "ruby", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// both are same....but in curly braces we have to give return otherwise it will show empty array.

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004},
    { title: 'book two', genre: 'non-fiction', publish: 1991, edition: 2015},
    { title: 'book three', genre: 'history', publish: 1976, edition: 2009},
    { title: 'book four', genre: 'science', publish: 1990, edition: 2003},
    { title: 'book five', genre: 'thriller', publish: 1999, edition: 2012},
    { title: 'book six', genre: 'romcom', publish: 2004, edition: 2025},
    { title: 'book seven', genre: 'fiction', publish: 1971, edition: 2000},
    { title: 'book eight', genre: 'non-fiction', publish: 1988, edition: 2003},
    { title: 'book nine', genre: 'history', publish: 1983, edition: 2010},
    { title: 'book ten', genre: 'thriller', publish: 1970, edition: 2006},
];

let userBooks = books.filter( (bk) => bk.genre === "history")
 userBooks = books.filter( (bk) => bk.publish > 1870 && bk.genre === "history")

console.log(userBooks);


