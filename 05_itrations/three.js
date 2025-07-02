// for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// object no matlab ahiya kai vastu par tamare loop lagavu chhe
// for (const num of arr) {
//     console.log(num);
    
// }

// const Greetings = "Hello World!"
// for (const greet of Greetings) {
//     console.log(`Each Char is : ${greet}`);
    
// }

// Maps 
// it hold's uniq value
const map = new Map()
map.set("IN","India")
map.set("USA","Unnited States Of America")
map.set("Fr","France")
map.set("IN","India")


// console.log(map);

for (const key of map) {
    console.log(key);
    
}

const myObject = {
    "game1":"NFS",
    "game2":"spiderman"
};

// for (const [key,value] of myObject) {
//     console.log(key , "-:" , value);
    
// }

