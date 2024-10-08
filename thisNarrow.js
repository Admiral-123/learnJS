const player = {
    name: "steve",
    score: 130,

    welcomeMsg: function() {
        console.log(`hlo ${this.name}, welcome to the game`)    // this ref to current context

        console.log(this);      // gives all the context of the obj
        
    }
}

player.welcomeMsg()
player.name="alex"  // changed the name in obj
player.welcomeMsg() // so new welcome msg would have alex

console.log(this)       // in the node enviroment there are no context so returns empty objects

function x(){
    let username="labuschagne"
    console.log(this)   // gives alot of info about the function of node enviroment
    console.log(this.username)      // gives undefined as this. properly returns in objs not in functions
}

 x() 


const c = function () {
    let username1 = "warnee"
    console.log(this.username1)          // would give undefined
}

c()


const d = () =>{
    let username2 =  "mitch"
    console.log(this.username2)
}

d()

const addThree = (n1, n2, n3) => (n1+n2+n3)     // implicit return (basically we dont hv to write return we're assuming it)
console.log(addThree(9, 8,4))

// if we want to return obj through implicit return

const objR = () => ({username:"carlos", age:34})        // wrap ({})

console.log(objR())