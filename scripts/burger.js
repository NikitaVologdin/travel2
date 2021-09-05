"use strict";

let button = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let body = document.querySelector('body');
    button.addEventListener('click', function(element){
        console.log(element);
        button.classList.toggle('burger_active');
        menu.classList.toggle('nav_active');
        body.classList.toggle('_lock');
    });