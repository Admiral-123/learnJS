// let myName = "Admiral                 ";

// console.log(myName.trueLength);     // i want by default method trueLength for all string



let hero = ["ironman", "batman"];

let playerRole = {
    ironman: "armour",
    batman: "vengeance",

    getIronPower: function(){
        console.log(`Ironman power is ${this.ironman}`);
    }
}

playerRole.getIronPower()


Object.prototype.admiral = function(){      // we accessed the top level hierarchy (object) in js and added a property/method in it
    console.log('admiral is a function which is now in the Object prototype')
}

playerRole.admiral()    // as playerRole is also an obj so it'll also have admiral() func

hero.admiral()  // object is super prototype of array so arrays will also have admiral() func



Array.prototype.hlo = () => console.log('hlo');

hero.hlo()
// playerRole.hlo() // it'll give err as we have only given this hlo() property to array not to the obj






// inheritance

// to inherit prototypal properties


const user ={
    name: 'robert',
    email: 'robert@example.com'
}

const Teacher = {
    isTeaching: true
}

const TeachingSupport = {
    isAvailable: true,
}
const TAsupport= {
    makeAssignment: 'solve problems',
    fullTime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax for prototype inheritance

Object.setPrototypeOf(TeachingSupport,Teacher) // (obj which is inheriting, obj which has to be inherited)




String.prototype.trueLength = function(){

    console.log(this.trim().length);

}



const Ename = "      alexFridman    "   // trim() doesnt trim out spaces b/w two chars

Ename.trueLength()