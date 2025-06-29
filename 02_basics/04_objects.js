// const tinderuser = new Object(); //it is singleton object 
const tinderuser ={}//it is not singleton object

tinderuser.id = "123abc";
tinderuser.name = "sammy";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Minhaj",
            lastname:"vora"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [ 
    {
    id:1,
    email:"h@gamil.com"
    },   
    {
    id:1,
    email:"h@gamil.com"
    }  , 
    {
    id:1,
    email:"h@gamil.com"
    }   ,
    {
    id:1,
    email:"h@gamil.com"
    }   ,
    {
    id:1,
    email:"h@gamil.com"
    }   
]

user[1].email;
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));


