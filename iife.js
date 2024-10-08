// imediately invoked file expression (iife)

// there are some prblem arised because of global scope so to avoid that we use iife



// named iffe
(
    function hlo(){
        console.log(`DB CONNECTED`);
    }
)();        // adding ';' is important as it tells the function to end immediately after executing






// simple iffe
(
    (name)=>{   // can add args init
        console.log(`DB CONNECTED TO ${name}`)
    }
)("trent");         // add args in it


// executes immediately after executing