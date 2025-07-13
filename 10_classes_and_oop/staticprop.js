class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`);
        
    }
    static createId (){
        return `123`
    }
}
const uname = new user("hitesh");
// console.log(uname.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const tuser = new Teacher("Minhaj","m@gmail.com")

tuser.logMe()
console.log(tuser.createId());