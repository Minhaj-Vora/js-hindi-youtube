const promiseOne = new Promise(function(resolve,reject){
    // Do any async task 
    // DB calls ,Cryptography , network 
    setTimeout(()=>{
        console.log("Async Task is Complate");
        resolve();
        
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("Async task 2 complated");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"hitesh",pass:"123"})
        }else{
            reject("something went wrong")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"javascript",pass:"123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})