// Immediately Invoked Function Expression (IIFE)

// IIFE is used to reduce the pollution due to global scope and also for easy execution.

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();           // ; is used to end the code                // DB Connected

// ()()   (definition of function)(execution)

( () => {
    console.log(`DB Connected two`)
})();                         // agar ; nhii rehta to error show krta

( (name) => {
    console.log(`DB Connected two ${name}`)
})('shruti');                        


