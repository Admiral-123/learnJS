const name = "kk"
const num = 19

console.log(`Hello my name is ${name} and my age is ${num}`)

const penName = new String("kz kumar")  // this "kz kumar" has key val pairs 0=k, 1=z ...

console.log(penName[0])     // access val through key
console.log(penName.__proto__)  // prototype

console.log(penName.length)

console.log(penName.toUpperCase())
console.log(penName.charAt(5))
console.log(penName.indexOf('z'))

const newStr = penName.substring(0,5)       // from 0th to 4th char of the data

console.log(newStr)


const anotherStr = penName.slice(-6, 4)     // if given -ve value, gives char in reverse
console.log(anotherStr)



const newStr1 = "   hlo     "
console.log(newStr1.trim())     // removes the whitespaces in the value


const x = "hlo-how-are-you"
console.log(x.replace("hlo", "hi"))     // replace "hlo" with "hi"
console.log(x.includes("you")) // tells if certain val is in the string

console.log(x.split('-'))       // splits string into array on the basis of the seperator given

console.log(x.startsWith("lo",1))   // checks if the given input starts with the position given (in the args)

console.log(x.concat(" what you doing"))
