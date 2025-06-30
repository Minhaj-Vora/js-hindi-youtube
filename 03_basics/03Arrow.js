const user ={
    username:"minhaj",
    price:999,

    welcomeMessage:function() {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     username = "minhaj"
//     // console.log(this);
//     console.log(this.username);
    
// }

// chai()

// const chai = () => {
//     let username = "Minhaj2"
//     console.log(this);
    
// }
// chai()


// const addTwo = (num1,num2) => { 
//     return num1 + num2 
// }

// aane implicit ketvay one line function 
// const addTwo = (num1,num2) =>  num1 + num2 

// function ne jo tame {} ma wrap karso to pachi return lagavu padse and () karso to nai  lagavu pade 
// const addTwo = (num1,num2) =>  (num1 + num2 )

// aavi rite karso to nai work kare km k tene peranthysis ma wrap karvu pade 
// const addTwo = (num1,num2) =>  {username:"Minhaj"}

// aa rite work thase pela ma farjiyat return lakhvu padse 
const addTwo = (num1,num2) =>  ({username:"Minhaj"})

console.log(addTwo(5,7))