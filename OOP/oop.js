// object literal - literally creating an obj

const user ={
    username: "admiral",
    age: 99,
    login: true,

    // in arrow func this keyword doesnt work
    getUserDetails: function(){
        // console.log(`username: ${this.username}`) // use this function for the context of current obj
        
        // console.log("got user details");

        console.table(this) // entire value of the obj in current context
    }   
}

console.log(user.getUserDetails()) 



// constructor function : allows to make many more obj with new context with one object literal

// const promiseOne = new Promise()    // new keyword is constructor func
const date = new Date()


function User(username, isLoggedIn){    // now we can make many objects from it
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    return this;    // passed on the above val. although it'd do it implicitly even if we dont write it
}

// when we use 'new', each call creates a new object, and userOne and userTwo will be separate instances.

const userOne = new User("kane", false);    // if we dont use new keyword then userTwo would override userOne (as both are using same obj literal)
const userTwo = new User("jos", false);
console.log(userOne)
console.log(userTwo.constructor)    // constructor keyword actually just tells the reference of instance obj

