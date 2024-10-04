console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true

/* comparison (>,<,>=,<=) works differently than  equality (==); comparison converts null to 0 */

console.log("1">0)      // str converts to num for comparison
console.log("03"<0)


console.log(undefined>0)    // undefined is undefined... duh
console.log(undefined==0) 
console.log(undefined>=0) 


console.log("2"===2)    // if we use === then it'll also check the datatype