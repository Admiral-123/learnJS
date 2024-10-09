const userEmail = "a@gmail.com"     // we assume string value as true

if (userEmail){
    console.log("got mail")
}   else {
    console.log("didnt got no mail")
}



const userEmail2=""         // we assume empty string value as false 

if (userEmail2){
    console.log("got mail")
}   else {
    console.log("didnt got no mail")
}

let arr = []        // empty arr is taken as true

if (arr){
    console.log("got arr")
}   else {
    console.log("didnt got no arr")
}


/*
falsy = false, 0, -0, bigInt 0n, "", null, undefined, nan

truthy = true, "0", " ", 'false', [], {}, function(){}

*/


if(userEmail.length === 0){
    console.log("empty arr")
}

const emptyObj ={}

if ((Object.keys(emptyObj)).length === 0){
    console.log("obj is empty")
}


// Nullish Coalescing Operator (??): null and undefined


let val;

// val = 5??10

val = null ?? 10        // checks for undefined and null and avoid it

let val2 = undefined ?? 20

let val3 = null ?? 21 ?? 90     // takes the first value after ignoring null/undefined

console.log(val)
console.log(val2)
console.log(val3)

// ternary operator

let price = 15

let IceCream;

IceCream = (price<=10)?("vanilla"):("chocolate")
console.log(IceCream)