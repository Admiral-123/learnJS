// map()

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.map((x) => x+2)
console.log(newNum)


// chaining: more than one arr func in same arr

const L = [4,9,14,19,24,29,34]

const M = L
            .map((x) => x*5)
            .map((x) => x+1)
            .filter((x) => x%2==0)
            .forEach((num) => console.log(num))


// console.log(M)