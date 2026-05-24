// datatypes should be same during comparisons.

console.log(null > 0);   // false    (these types of conversions can confuse you)
console.log(null == 0);  //false
console.log(null >= 0);  //true


//comparison first changes null into number then compares it.(null = 0) that is why null>0 is false and null>=0 is true
//comaprison and equality are two very different things.
// strict check "===", checks value strictly means checks its datatype also.