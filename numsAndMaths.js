const score = 400
console.log(score)


const val = new Number(958)

console.log(val)

console.log(val.toString().length)

console.log(val.toFixed(2)) // gives precesion value (in decimals)

const otherNum = 5.5595

console.log(otherNum.toPrecision(2))        // round of the precesion value till the given val in args; (if some no. is in precesion decimal)

const million = 1000000
console.log(million.toLocaleString('en-IN'))   // gives comma in num



/********************************************************maths****************************************************************************/


console.log(Math);

console.log(Math.abs(-7))       // gives absolute value; -v => +ve and +ve => +ve

console.log(Math.round(4.6))
console.log(Math.ceil(4.1))     // always round to upper value
console.log(Math.floor(4.9))     // always round to lower value

console.log(Math.min(3,4,5,8,23))       // finds min num of arr
console.log(Math.max(3,4,5,8,23))       // finds max num of arr

console.log(Math.random())      // gives val b/w 0 and 1

// if we want value b/w two nums:

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)

//



