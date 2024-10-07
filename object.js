// singleton

// object literals


const mySym = Symbol("key1")    // symbols are declared like this

const x = {
    name: "alex",
    "gender": "male",        // CANT access it like x.gender now
    age: 99,                    // behind the scene these name, age,location, etc keys are taken in as string "name", "age",...
    email: "alex@oldmail.com",
    location: "nyc",
    isInSystem: false,
    lastLogged: ["Monday", "Tuesday"],
    [mySym]: "alex key"     // symbols are added in obj like this
    
}

//console.log(x.name)   // we can use this methods to access data of obj.

console.log(x["age"])       // to access data of objects like this we need to type key val in strings
console.log(x["gender"])

console.log(x[mySym])   // to access symbols in objects

// x.email = "alex@gmail.com"      // we can change data of obj
// Object.freeze(x)        // we can freeze obj by which no data could be changed
// x.email= "alex@hlo.com" // now we've freezed obj x we cant change the data

console.log(x["email"])


x.greeting = function(){
    console.log("hlo xer")
}

x.greeting2 = function(){
    console.log(`hlo xer, ${this.name}`)
}

// console.log(x.greeting)      // gives Function (anonymous)
// console.log(x.greeting2)

console.log(x.greeting())       // gives the desired output and 'undefined'
console.log(x.greeting2())