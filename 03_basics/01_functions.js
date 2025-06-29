function sayMyName(){
    console.log("M");
    console.log("I");
    console.log("N");
    console.log("H");
    console.log("A");
    console.log("J");
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result
    
    return num1+num2
}

let result = addTwoNumbers(2,3);
// console.log("result:",result);


// default perameter set kari sakay
// function loginUsermessage(username = "sam"){
//     if (!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`;
// }





function loginUsermessage(username){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUsermessage("samir"));
// console.log(loginUsermessage("minhaj"));

function calculateCartPrice(...num1){
    return num1
}




// jo aa rite hoy to value one ma 200 jase value 2 ma 400 jase ane baki nu badhu num one ma jase rest oprator aapd ne ek array generate kari ne aapse
// function calculateCartPrice(value1,value2,...num1){
//     return num1
// }


// console.log(calculateCartPrice(200,400,600,2000));

const user = {
    username:"Minhaj",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);
// handleObject({username:"juned",price:399});

const mynewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));
