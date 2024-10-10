// for loop 


for (let index = 0; index < 10; index++) {

    const element = index
    if(element == 7){
        console.log("thala for a reaso-")
    }
    console.log(element)
    
}



for (let i = 0; i <=5; i++) {
    console.log("outer loop")
    for (let j = 0; j < 3; j++) {
        console.log(`inner loop val ${j}, outer iteration value ${i}`)
    }
    
}

for (let k = 1; k <= 10; k++) {
    for (let l = 1 ; l <=10; l++) {
        console.log(`${k} x ${l} = ${k*l}`)
    }
    
}


let myArr = ["iniesta", "casillas", "pique"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}


console.log();


// break and continue

for (let z = 0; z < 21; z++) {
    if(z == 7){
        console.log("thala detected");
        break;
    }
    console.log(`value of z is ${z}`);

}
    
for (let y = 0; y < 21; y++) {
    if(y == 7){
        console.log("thala detected");
        continue;       // comtinues the iteration even after finding the condition
    }
    console.log(`value of z is ${y}`);
    
}