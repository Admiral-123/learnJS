function setUsername(username){
    // Simulate complex DB calls or other operations to set the username
    // In reality, this could involve API calls, validations, etc.
    this.username = username;
    // console.log('called')
}

function createUser(username, email, password){
    // setUsername(username) // 'this' in setUsername() will call the function but after it's execution the call stack would remove its execution context
    
    // setUsername.call(username)  // .call() method explicitly sets the this context for the function you are calling so you can hold the reference of that function

    setUsername.call(this, username)    // we'll provide 'this' of the current context 

    /* 
    We pass the current 'this' (the createUser instance) as the context for setUsername, 
    so that 'this' inside setUsername refers to the createUser instance. 
    */


    this.email = email
    this.password = password
}

const userOne = new createUser("adam", "adam@gmail.com", 'kEyN*123')

console.log(userOne)