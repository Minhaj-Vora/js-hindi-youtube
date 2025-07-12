const name = "irfan"
const user = {
    username:"hitesh",
    logginCount:8,
    signedIn:true,

    getUserDetail:function (){
        // console.log("Get user detail from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function userr(username,loggInCount,isLoggedIn){
    this.username=username 
    this.loggInCount=loggInCount
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne = new userr("minhaj",8,true)
const userTwo = new userr("irfan",20,false)

console.log(userOne);
