const one = () =>{
    const username = "ben"

    function two(){
        const web = "vb"
        console.log(username)
    }
    // console.log(web);    // scope of web was ended

    two()

    // we can use the variable of global scope in local scope but not the other way round
}

one()




console.log(addOne(5))
function addOne(num){
    return num+1;
}



// hoisting:-

// addTwo(8)    // we cant use expression before declaring
const addTwo = function(num){       // we can declare function like this (it is aka expression)
    return num+2;
}

