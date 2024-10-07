function sayIt(){
    console.log("yolo")
}

sayIt()


function loginMsg(username /*= "sam"*/ ){   // we can put a default value for the var in args
    if(username==null || username.trim()==""){
        return "no username found"
    }

    return `${username.trim()} just logged in`
}

console.log(loginMsg("  jason   "));



const calculateCartPrive = (...num1) => {       // returns nums in arrays

    return num1
}

console.log(calculateCartPrive(200,459,799));


const icecream1 = {
    flavour: "vanilla",
    price:20
}

const product = (productName) =>{
    return `ice-cream flavour is ${productName.flavour} and its price is ${productName.price}`
}

console.log(product(icecream1));


console.log(product({
    flavour:"chocolate",
    price:30
}));
