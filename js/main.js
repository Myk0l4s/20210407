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

// -------------------------------------------------

// function myBurger () {
//     if (burger) {
//         burger.addEventListener('click', () => {
        
//             if (navigation.className == 'nav on') {
//                 navigation.classList.remove('on');
//             } else {
//                 navigation.classList.add('on');
//             }
            
//         });
//       } else {
//         console.log('elemento nera');
//       }
    
//     }

//------------------------------------------------------




// Masyvai, kokie?

//! Ivairus duomenu tipai

let masyvas = new Array();  // Senas uzrasymas
let masyvas2 = [];


// let arr1 = [
//     'Mykolas',
//     {
//         type: 'Ms',
//         age: 29
//     },
//     true,
//     function () {
//         console.log('Labas!');
//     }
// ];

// console.log(arr1);
// arr1[3]();

//! Daugiamaciai masyvai

// let arr2 = [
//     [1, 2, 3]
//     [4, 5, 6]
//     [7, 8, 9]
// ];

//! Kad gauti kazkokia masyvo reiksme 

let arr0ne = [

]