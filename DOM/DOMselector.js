document.getElementById('id name')  // to get an element by its id

document.getElementById('id name').className       // gives the class name of that element (which was selected by id)


document.getElementById('id name').getAttribute('attribute  name')  //  fetch attributes of the element (which was fetched by id)


document.getElementById('id name').setAttribute('attribute', 'attributeName')       // can set an attribute (can override previous attribute)

document.getElementById('id name').setAttribute('class', 'attributeName prevAttributeName')     // if you want to set both prev attrib then use space and write both


const title = document.getElementById('id name');   // can take this element in a variable and can do operations with it
title.style.backgroundColor = 'yellow'      // we took title element and used style property to change bg color
title.style.padding = "150px" // padding

title.innerText     // gives the text written in the element (which can be seen in the window)
title.textContent   // gives all the text written in the element (even the hidden ones)
title.innerHTML     // gives the entire html of the element 


document.querySelector('h1')    // gives the 1st element of h1 tag

document.querySelector('#title')// can query through id selector
document.querySelector('.heading')  // can query through class selector


// suppose we've a list and we need to change color in first word of the string

const myUl = document.querySelector('ul')   // with querySelector we've the unordered list 

myUl.querySelector('li').style.color = 'green'    // we again run querySelector in that ul list and we'll get the first word of list and we'll apply color in that word

//to change the val of the first element of the list:-

x = myUl.querySelector('li') 
x.innerText = 'seven'



// query selector all :

const lis = document.querySelectorAll('li')       // gives all the query (list in this case) in the form of nodelist

// nodelist is diff. from arr.


lis[2].style.backgroundColor = 'pink'

lis.forEach((num) => console.log(num))  // can use forEach with NodeList

lis.forEach((num)=> {num.style.color= 'white'})


// by className


document.getElementsByClassName('className')  // returns in HTMLcollection (it doesnt have looping)


const myLiList = document.getElementsByClassName('className')
const myLiListArr = Array.from(myLiList)        // converts HTMLCollection into array

