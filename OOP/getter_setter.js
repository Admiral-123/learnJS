class User{
    // every property in constructor has setter and getters
    
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // both constructor and setter are racing for setting the email so the call stack gets exceeded
    // so what we do is that we change email to _email (another var)

    get email(){
        return `${this._email}abc`;     // we can also change the way we can get password
    }

    set email(val){
        this._email = val;
    }


    set password(val){
        this._password = val;
    }

    get password(){
        return this._password.toUpperCase()
    }
}

const userOne = new User('one@example.com', 'kljdf');

console.log(userOne.email)
console.log(userOne.password)