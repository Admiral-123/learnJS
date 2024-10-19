// getter setter in obj method


const User = {
    _email: 'a@m.com',      // the underscore _ means that we're defining pvt prop; but when we use get and set the underscore is ignored
    _password: 'abd',

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

// Factory function using Object.create()
// Object.create(User) creates a new object 'one', which inherits properties and methods from 'User'.

const one = Object.create(User)
console.log(one.email);
