// for each loop
const algo = ["sort","search","encryption"]


algo.forEach( function (item)  {
    console.log(item)
})

/* in the above .forEach() we add a callback func in args-
    this callback func doesnt have a name, it has an arg 
    (which is basically elements of arr)
*/

algo.forEach( function (val){
    console.log(val.concat(" algo"))
})


algo.forEach( (arg) => {        // we can use arrow func too
    //console.log(arg)
})


// we can also put ref of another func in callback func
const printMe = (data) => {
    console.log(data)
}

algo.forEach(printMe)

algo.forEach((item, index, arr)=>{      // forEach method can give value about element, index and even array
    console.log(item, index, arr)
}) 



const Fc = [
    {
        club: "man united",
        league: "epl"
    },
    {
        club: "ac milan",
        league: "serie A"
    },
    {
        club: "real madrid",
        league: "la ligua"
    }

]

Fc.forEach((item)=>{
    console.log(item.club,":", item.league)
})