//  for in loop


const theObj = {
    js: "javascript",
    ts: "typescript",
    rs: "rust"
}

for (const key in theObj) {
    console.log(key, ":",theObj[key])
}


const Lang = ["c++","julia","java","rust","ruby"]

for(const element in Lang){     
    // console.log(element)      // for in only gives keys of the elements of the arr

    console.log(Lang[element])
}



// const myMap = new Map()
// myMap.set('IN', "India")   
// myMap.set('FR', "France")
// myMap.set('RU', "Russia")

// for (const key in myMap) {
//     console.log(key)
// }        // maps are'nt iterable by for in loop