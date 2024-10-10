// for of



const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(`value of element is ${element}`)
}


const strArr = "if we being real"

for (const yeat of strArr) {
    console.log(yeat)
}


// maps

const myMap = new Map()
myMap.set('IN', "India")    // key -> value
myMap.set('FR', "France")
myMap.set('RU', "Russia")


console.log(myMap)


for (const [key, value] of myMap) {     // can destructure the map key:val by arr
    console.log(key, ':-', value)
}



// const iceCream = {
//     'ice cream 1' : 'vanilla',
//     'ice cream 2' : 'chocolate',
//     'ice cream 3' : 'butterscotch'
// }

// for (const [i] of iceCream) {
//     console.log(i)
// }  // obj are not iterated like this



