// reduce

const myNum = [1,2,3,4,5,6]

const total = myNum.reduce( function (accumulator, currenValue) {
    console.log(`acc: ${accumulator}; cV: ${currenValue}`)
    return accumulator+currenValue
}, 0)       // 0 in the end means start from 0th element

console.log(total)


console.log()



// in arrow func 

const total2 = myNum.reduce((acc, cV) => acc+ cV, 0)
console.log(total2)


const cart = [
    {
        itemName: "book",
        price: 349
    },
    {
        itemName: "phone",
        price: 33499
    },
    {
        itemName: "shirt",
        price: 899
    },
    {
        itemName: "trousers",
        price: 1599
    },
    {
        itemName: "trousers",
        price: "1599"
    }
]

console.log()


const totalPrice = cart
                        .filter((x) => (typeof (x.price)) === "number")
                        .reduce((acc, item) => acc + item.price, 0)


console.log(totalPrice)