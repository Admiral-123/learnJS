class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const userOne = new User('akash');
userOne.logMe()

// console.log(userOne.createId()) // static prop. cant be used from instance

console.log(User.createId())    // directly use class name to use static method