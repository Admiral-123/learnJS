// note that this is just syntactic sugar bts everything is happening in prototypal way

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Admin extends User {  // Admin inherits properties from User class

    constructor(username, email, pass){
        super(username);     // calls the constructor of parent class
        this.email= email;
        this.pass = pass;
    }

    addRule(rule){
        console.log(`new rule added by admin ${this.username}: ${rule}`);
    }
}


const userOne = new Admin('andrew', 'andrew@example.com', 'Mcuv*887');

userOne.addRule('no foul words')
userOne.logMe()

const userTwo = new User('mitchel')

console.log(userTwo instanceof Admin)
console.log(userOne instanceof User)    // as unserOne is instance of Admin which in turn instance of User so its true