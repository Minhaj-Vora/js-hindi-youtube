// singleton
// object.create

// object literals

const mysym = Symbol("key1")

const jsuser = {
    name:'Minhaj',
    "full name":"Minhaj vora",
    [mysym]:"mykey1",
    age:22,
    location:"Ahemdabad",
    email:"Minhaj@google.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email="Minhaj@chatgpt.com";
// Object.freeze(jsuser);
jsuser.email="Minhaj@microsoft.com";

// console.log(jsuser);

jsuser.greetings = function () {
    console.log("Hello JS User");
}

// jyare pan same object ne reffr karvo hoy tyare this word no upyog thay
jsuser.greetings2 = function () {
    console.log(`Hello JS User ${this.name}`);
    
}

// console.log(jsuser.greetings());
console.log(jsuser.greetings2());