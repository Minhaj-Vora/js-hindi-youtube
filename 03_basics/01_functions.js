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
console.log(loginUsermessage("minhaj"));