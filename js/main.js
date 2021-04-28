"use strict";

//! Burger Meniu animation and VAR.
// ------------------------------------------------------
let burger = document.querySelector('.burger');
let navigation = document.querySelector('.nav');


if (burger) {
    burger.addEventListener('click', () => {
    
        if (navigation.className == 'nav on') {
            navigation.classList.remove('on');
        } else {
            navigation.classList.add('on');
        }
        
    });
  } else {
    console.log('elemento nera');
  }


// ------------------------------------------------------


let likeBody = document.body;

console.log(likeBody);

likeBody.addEventListener('click', (e) => {
    console.log(e.path[1]);
});




// burger.addEventListener('click', () => {
    
//     if (navigation.className == 'nav on') {
//         navigation.classList.remove('on');
//     } else {
//         navigation.classList.add('on');
//     }
    
// });
