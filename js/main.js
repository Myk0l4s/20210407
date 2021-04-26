"use strict";

//! Burger Meniu animation and VAR.
// ------------------------------------------------------
let burger = document.querySelector('.burger');
let navigation = document.querySelector('.nav');

burger.addEventListener('click', () => {
    
    if (navigation.className == 'nav on') {
        navigation.classList.remove('on');
    } else {
        navigation.classList.add('on');
    }
    
});

// ------------------------------------------------------







