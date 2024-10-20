// in getNumber() func extend with then and give squared num


const getNumber = () =>{
    return new Promise((resolve,reject) =>{     // first param is always resolve in promise
        setTimeout(()=>{
            const num = Math.floor((Math.random()*10 + 1));
            resolve(num);
        },2000)
    });
}




getNumber().then((resp)=>{
    console.log(`original num is ${resp}`);
    return resp*resp;
})
.then((sqrNum)=>{
    console.log(`squared num is ${sqrNum}`);
})
.catch((err)=> console.log(`error ${err}`));