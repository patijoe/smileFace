'use strict';

// definir variables
const body = document.querySelector('body');
const carilla = document.querySelector('.carilla');
const animo = document.querySelector('.animo');
const btn = document.querySelector('.btn');

// funcion pintar
function print () {
    carilla.innerHTML = animo.value;
} 

// funcion número random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// funcion cambio color de fondo según número random
function change () {
    const number = getRandomInt(100);

    console.log(number);

    if (number%2===0) {
        body.classList.add('amarillo');
        body.classList.remove('naranja');
    } else {
        body.classList.add('naranja');
    }
}

// aparece dibujado la opcion de cargar
carilla.innerHTML = animo.value;

// listener
btn.addEventListener('click', print);
btn.addEventListener('click', change);
