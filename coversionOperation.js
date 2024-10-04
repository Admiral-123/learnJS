let score = "55asj"    // if we assign it to null then output in valInNum would be 0

console.log(typeof score);

let valInNum = Number(score)
console.log(typeof valInNum);
console.log(valInNum);  // output would be NaN- not a number

/* 
conversion into Number:

"33"=>33
"55dg" => NaN
true=>1; false=>0

*/


let isLoggedIn = 1;

BooleanIsLoggedIn = Boolean(isLoggedIn)

console.log(BooleanIsLoggedIn)
/*
conversion into Boolean:

0=>false; 1=>true
""=>false
"jkldgj"=>true

*/


let x = 55;

xInStr= String(x);
console.log(typeof xInStr)
console.log(xInStr);