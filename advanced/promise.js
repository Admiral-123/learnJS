// promise is an obj representing the eventual completion or faliure of an async operation.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// basically it means some async operation which'll happen in future

/*
promise has three states:

pending: initial state, neither fulfilled nor rejected

fulfilled: meaning that the operation was completed successfully

rejected: meaning that the operation failed

*/


// create promise
const promiseOne = new Promise((resolve, reject)=>{
    // do any async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('async task is complete')
        resolve();  // call resolve() so resolve can connect with .then()
    }, 1000);
});       

// to consume promise; .then() has a connection with resolve; it has a callback func which receives the returned value from the created promise
promiseOne.then(()=>{
    console.log('promise consumed')
})




// can also do it like

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved")
})



const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 3");
        resolve({username: 'alex', email: 'alex@example.com'}); // data passed in resolve goes to .then()
    }, 1000);
});

promiseThree.then((user)=>{ // user is the data passed from resolve
    console.log(user);
})



const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name:'ben', age: '29'})
        }
        else{
            reject('ERR: something went wrong')
        }
    }, 2000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.name;       // now where this returned val is going? - we use another .then() to get that
    
})
.then((name)=>{
    console.log(name)
})
.catch((err)=> console.log(err))
.finally(()=> console.log('the promise is either resolved or rejected'))


// with async

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {

        let error = true;
        if(!error){
            resolve({name:'alex', age: '26'})
        }
        else{
            reject('ERR: JS went wrong')
        }
        
    }, 3000);
})

const consumePromiseFive = async () =>{     // async handle rejection by try and catch
    try{
        const response =  await promiseFive;
        console.log(response)
    } catch (err){
        console.log(err)
    }
}

consumePromiseFive();


const getApiInJson = async () =>{

    try{
    const response = await fetch('https://api.github.com/users/Admiral-123');   // fetching some response from a url, it takes time so use await
    const data = await response.json();     // converting data to json format also takes time
    console.log(data);
    } catch(err){
        console.log("error", err);
    }
}


// getApiInJson()

// can also do it in then() catch() format

fetch('https://api.github.com/users/Admiral-123')       // fetch goes into high priority task queue (refer to event loop diagram in events dir)
.then((response)=>{
    return response.json();
})
.then((res)=>{      // get the returned data
    console.log(res)
})
.catch((err)=>{
    console.log("error", err)
})

/* 
when, response = fetch('something'), two things happens:

i) Data -> onFulfilled[] or onRejection[]   (ofFulfilled has resolution of promise and onRejection has rejection of promise)  

ii) web browser/node -> network request -> fulfilled/rejected       -> (global memory) response

*/


/*
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/
