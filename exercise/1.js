// Write a function called getNumber() that returns a Promise. The promise should resolve with a random number between 1 and 10 after 2 seconds.

const getNumber = () =>{
    return new Promise((resolve,reject) =>{     // first param is always resolve in promise
        setTimeout(()=>{
            const num = Math.floor((Math.random()*10 + 1));
            resolve(num);
        },2000)
    });
}


getNumber().then((res)=>{
    console.log(res);
}).catch((err)=> console.log(`error: ${err}`));



// same thing in async await


// const displayNum = async () => {
//     try{
//     const num = await getNumber();
//     console.log(num);
//     }
//     catch(err){
//         console.log(`error : ${err}`);
//     }
// }


// displayNum()