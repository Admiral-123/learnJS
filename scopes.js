
var c = 200     
// everything written outside {} block is global scope;
const b =300    // global scope is true everywhere

if (true){   // every variables declared inside {} block is local scope
    let A=10
    const b = 30        
    c =40

    console.log("loca scope b val: ", b)
}

// console.log(A)   // it would throw err as  A is out of scope

// console.log(b) // it would throw err as B is out of scope

console.log(c)  // var works even outside scope

console.log(`outer b value : ${b}`)