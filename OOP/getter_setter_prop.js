// getter and setter using prototypal method

function User(email, password){

    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(val){
            this._email = val;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(val){
            this._password = val;
        }
    })
}

const userOne = new User('one@example.com', 'jkl')

console.log(userOne.email);
console.log(userOne.password);