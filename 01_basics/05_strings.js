const name = "Minhaj"
const repoCount = 50 

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("minhaj-mv-com");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherstring = gameName.slice(-8,4)  
console.log(anotherstring);

const newstringone = "    Minhaj    ";
console.log(newstringone);
console.log(newstringone.trim());

const url ="https://hitest.com/hitesh%20chaudhry";

console.log(url.replace('%20','-'));    

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));
