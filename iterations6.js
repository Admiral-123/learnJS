const greekNotation = ["alpha","sigma","gamma"]

const val = greekNotation.forEach((item)=>{
    console.log(item)
    return item;    
})


console.log(val) //// it'll give undefined


// filter() 

const num = [2,3,4,5,6,7,8,9,10]

const valL=num.filter((x)=> x>4)    // filter() filters out arr elements on the basis of given condition in callback func
console.log(valL)

const valL2 = num.filter((x)=>{
    return x<8      // when using scope '{}' then dont forget to return
})
console.log(valL2)





const book = [
    {
        title: "one", genre: "non-fiction", publish:2002, edition:2010
    },
    {
        title: "two", genre: "sci-fi", publish:2004, edition:2020
    },
    {
        title: "three", genre: "fantasy", publish:2012, edition:2022
    },
    {
        title: "four", genre: "psychology", publish:2007, edition:2015
    },
    {
        title: "five", genre: "fantasy", publish:2006, edition:2024
    },
    {
        title: "six", genre: "sci-fi", publish: 1999, edition: 2023
    }
];


const userBook = book.filter((bk) => {return bk.genre === 'fantasy'})    // we can filter out the objects from the arr
console.log(userBook)

console.log()

let userBook2= book.filter((bk) => bk.publish>2004)
console.log(userBook2)

console.log()

let userBook3= book.filter((x)=> {
    return x.publish>1995 && x.genre==='sci-fi'
})
console.log(userBook3)