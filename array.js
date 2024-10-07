const myArr = [0,4,5,6]
const myFootballers = ["cr7","messi","ozil","buffon"]

const myArr2  = new Array(1,2,3,4)
console.log(myFootballers[3])


// arr methods

myArr.push(7)

myArr.pop()        // removes last val of array

myArr.unshift(7)    // adds the given args in the 0th position of the arr
myArr.shift()       // removes the first element

console.log(myArr)

console.log(myFootballers.includes("neymar"))       // tells if an element is included in arr or not

console.log(myFootballers.indexOf("neymar"))    // tells the index of the element in arr; if that element doesnt exist than returns -1


const newArr = myArr2.join()        // converts arr into string
console.log(newArr)
console.log(typeof newArr)


// slice and splice

const arr3 = [1,4,6,8,5,3]
const arr4 = [1,4,6,8,5,3]

const arr3S = arr3.slice(0,3)       // slice creates arr, takes element (excluding end range 3rd element) 

const arr4SP = arr4.splice(0,3)     // splice removed 0th and 4th and all in b/w elements from arr and added it in new array named arr4SP


console.log(arr3S)
console.log(arr3)

console.log(arr4SP)
console.log(arr4)
