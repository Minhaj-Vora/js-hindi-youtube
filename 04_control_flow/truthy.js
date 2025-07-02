const userEmail = []

// empty string hot to else part that run 
// if (userEmail) {
//     console.log(`Got the user Email`);
    
// }else{
//     console.log(`Don't have user email`);
// }/

// falsy value 
// false ,  0 , -0 , bigInt 0n ,"",null,undefined,NaN 

// truthy value 
// "0",'false'," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log(`Array is Empty`);
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log(`object is empty`);
    
// }

// nullish coaleascing oprator (??) : null,undefined 
let val1;
// val1 = 5 ?? 10;
// val1 =  null ?? 10;
// val1 =  undefined ?? 10;
val1 =  null ?? 10 ?? 20;
console.log(val1);


// Terniary Oprator 
// condition ? true : false 

const iceaTeaPrice = 100
iceaTeaPrice <= 80 ? console.log(`less then 80`) : console.log(`more then 80`)

