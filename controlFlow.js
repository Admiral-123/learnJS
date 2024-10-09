if (2==="2"){      // === checks data type also == only checks value
   console.log("correct");
}  else{
   console.log("nope")
}


if(2 != "3"){
    console.log("yes")
}


temperature = 36

if(temperature<50){
    console.log("less than 50")
}else{
    console.log("greater than 50")
}


let score = 100

if(score>=100){
    let power= "infinite medic"
    console.log(`you got ${power} power`)
}


// implicit scope

if(score>50) console.log("dj"), console.log("bravo");


let num=240;

if(200<num){
    console.log("greater than 200")
} else if(300<num){
    console.log("greater than 300")
} else if(400<num){
    console.log("greater than 400")
}


const userLoggedIN = true
const debitCard = true

if(userLoggedIN && debitCard){
    console.log("allow to buy")
}

const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = false;

if ((userLoggedInFromEmail || userLoggedInFromGoogle) && debitCard){
    console.log("allow to buy")
}else{
    console.log("dont allow")
}