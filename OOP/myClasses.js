// ES6 


class User {
    // constructor is executed first in instance of class (object)
    constructor(username, score, pass){
        this.username = username;
        this.score = score;
        this.pass = pass;
    }


    // created a func for encrypt password (ik that encryption is weak :_)

    encryptPassword(){
        return `${this.pass}abc`
    }

    capUsername(){
        return this.username.toUpperCase();
    }
}


const userone = new User('ayan', 55, 'TvFE*734');

console.log(userone.encryptPassword())
console.log(userone.capUsername())


// behind the scene:

// function User(username, score, pass){
//     this.username = username;
//     this.score = score;
//     this.pass = pass;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.pass}abc`
// }

// User.prototype.capUsername = function(){
//     return this.username.toUpperCase();
// }

