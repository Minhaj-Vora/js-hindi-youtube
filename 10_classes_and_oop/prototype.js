// let myName = "minhaj     "
// let mychanel = "chai    "

// console.log(myName.length);

let myHeros=['thor','spidrman']

let heropower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spidy power is : ${this.spiderman}`);
        
    }
}

Object.prototype.minhaj=function(){
    console.log("minhaj is present in all object");
    
}

Array.prototype.heyMinhaj=function(){
    console.log(`Minhaj says hello`);
    
}

// heropower.minhaj()
// myHeros.minhaj()
// heropower.heyMinhaj()
// myHeros.heyMinhaj()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername = "chaiaurcode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherusername.trueLength();
"minhaj".trueLength();
"icetea".trueLength();