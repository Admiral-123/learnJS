let date = new Date()       // date var is an obj; gives today's date

console.log(date.toString())
console.log(date.toISOString()) // prints date in ISO format
console.log(date.toDateString())// day month date year
console.log(date.toTimeString())// hour:minute:second GMTzone

console.log(date.toLocaleString())// dd/mm/yyyy hour:minutes:seconds
console.log(date.toLocaleDateString())// dd/mm/yyyy

console.log(date.getFullYear())
// console.log(date.getTimezoneOffset())


let myDate= new Date(2024, 0, 5)        // january is 0 (duh you're a programmer you should know that everything starts from 0)
console.log(myDate.toDateString())

let myDate2 = new Date(2023, 10, 19, 22, 45)
console.log(myDate2.toLocaleString(), " sad day :(")


let myDate3 = new Date("03-01-2025")    // in string jan starts from 1
console.log(myDate3.toLocaleDateString())


let timeStamp = Date.now()      // current time in unix timestamp
console.log(timeStamp)

console.log(myDate3.getTime())  // converts given date or time into unix timestamp



// can customize the through toLocaleString() func

let tim = new Date()
console.log(tim.toLocaleString('default', {
    weekday: 'short',
    day: '2-digit'
}))
