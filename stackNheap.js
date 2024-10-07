// Stack (used in primitive DT), Heap (Non-primitive)

let name = "slim shady" // goes in stack

let anotherName = name
anotherName="marshal"

console.log(name)       // name doesnt change anotherName; is assigned to the copy of name
console.log(anotherName)
// object:

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

// goes into heap memory

let user2 = userOne;        // the details of userOne is in the heap; user2 is assigned with the ref of userOne in the heap memory

user2.email="kk@gmail.com"

console.log(userOne.email)  // both the email is same as both the var has same ref from the heap
console.log(user2.email)