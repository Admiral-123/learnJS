//const vbUser = new Object()         // singleton obj

const vbUser = {}       // non singleton obj

vbUser.id = "23"
vbUser.name = "darren"
vbUser.isLogged = false

// console.log(vbUser)

const regUser ={
    email: "some@gmail.com",
    fullname: {
        firstname:{
            name: "steve"
        },

        secondname: "smith"
    }
}

console.log(regUser.fullname?.firstname.name)       // question mark is there because if there's no obj there

const o1 = {1: "a", 2: "b"}
const o2 = {3: "c", 3: "d"}

// const o3 = Object.assign({}, o1, o2)        // combines 2 or more objects in an single object; think of {} as target obj where o1 and o2 are src object will go

const o3 = {...o1, ...o2}   // or we can use spread operator to join 2 or more objs

console.log(o3)

const userBase = [      // objs in arr
    {
        id: 1,
        email: "a@gmail.com"
    },
    
    {
        id: 2,
        email: "b@gmail.com"
    },

    {
        id: 3,
        email: "c@gmail.com"
    }
]

console.log(userBase[1].email)


console.log(Object.keys(vbUser));   // returns all the keys of the obj in an array
console.log(Object.values(vbUser)); // returns all the val of the obj in an array
console.log(Object.entries(vbUser));// returns all the ['keys', 'val'] of obj in an array


console.log(vbUser.hasOwnProperty('isLogged'))  // checks if an obj has a property (property name is in args)