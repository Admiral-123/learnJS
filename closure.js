const makeFunc = () => {
    // 'name' is a local variable created inside makeFunc().
    const name = 'aiden';

    // 'displayName' is a function that has access to the 'name' variable; Even though 'name' is defined inside makeFunc(), displayName can use it.
    function displayName() {
        console.log(name); // This logs the 'name' variable to the console.
    }

    // We are returning the 'displayName' function without executing it; This means the function is returned as a value but not yet called.
    return displayName;
}


const a = makeFunc();  // 'a' is now assigned to the 'displayName' function that was returned by makeFunc().
// Although 'name' is defined inside makeFunc(), 'displayName' still has access to it, because 'displayName' "closes over" the 'name' variable.
// This is known as closure


a();
// When we call 'a()', it executes the 'displayName' function, which logs the value of 'name'; The important point here is that 'name' still exists even though makeFunc() has finished execution.