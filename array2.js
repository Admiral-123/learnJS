const x = ["hlo","hi","hey"]

const y = ["bye","see ya","goodbye"]

// x.push(y)       // arr y would become an element of arr x
// console.log(x)

const arr1 = x.concat(y)    // both x and y elements are joined together in a single arr
console.log(arr1)

const arr2 = [...x, ...y]   // spreading method; now every single element of the arr is individual element; we spreaded both arr x and arr y
console.log(arr2)


const an_arr = [1,[4,5,8],[3,[809,90,[89,[0]]]]]       // an arr in which there are multiple arrays inside arrays

const usable_an_arr = an_arr.flat(Infinity)     // flat removes all the arrays inside arrays and gives the new arr; in args we can tell till how much level we've to remove arrays

console.log(usable_an_arr)





console.log(Array.isArray("karti"))     // tells if something is arr
console.log(Array.from("karti"))    // converts each letter into elements and contain em in array
console.log(Array.from({naam : "karti"}))   // returns empty arr as we haven't defined that do we have to make arr of key or val

let s1 = 100
let s2=200
let sehwwag=300
let lara = 400

console.log(Array.of(s1,s2,sehwwag,lara))       // returns new arr from set of elements (set of elements are in args)