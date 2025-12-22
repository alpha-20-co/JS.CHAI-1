let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);   // object

let myCreatedDate = new Date(2026, 8, 9)
console.log(myCreatedDate.toDateString());   // Wed Sep 09 2026

let myCreatedDate = new Date(2026, 8, 9, 9, 9)
console.log(myCreatedDate.toLocaleString());   //9/9/2026, 9:09:00 AM

let myCreatedDate = new Date("09-09-2004")

let myTimeStamp = Date.now()

console.log(myTimeStamp);   // gives value in mili seconds from  the day jan 1970
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));   // gives value is seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // starts from 0
console.log(newDate.getDay());    // starts from monday

newDate.toLocaleString('default',{
    weekday : "long",
    timeZone : ''
})