const h = {
    name: "ronaldo",
    age:36,
    goalInternational: 132
}

const {age} = h     // known as destructuring; taking a prop. of object 

const {goalInternational: gI}= h        // can also destructure the prop. and assign it to another var (like gI in this case)

console.log(age)

console.log(gI)


// api:

// in json :-

// {
//     "name": "lks"
//     "email": "lks@gmail.com"
//     "gender": "mig29"
// }

// in array :-
// [
//     {},
//     {},
//     {}
// ]

