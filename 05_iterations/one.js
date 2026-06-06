// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 9){
        // console.log("9 is the best number.");
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        // console.log( i + '*' + j + '=' + i*j);     // table ban rha
    }    
}

let myArray = [ "flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 9){
        // console.log(`detected 9`);
        break;
    }
//    console.log(`value of i is ${index}`); 
}

for (let index = 1; index <= 20; index++) {
    if(index == 9){
        console.log(`detected 9`);
        continue;
    }
   console.log(`value of i is ${index}`);    // sab print hoga pr 9 print nhii hoga
}

