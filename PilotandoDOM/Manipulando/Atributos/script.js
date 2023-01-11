// Manipulando Atributos
// HTML Element

// setAttribute('')
// Muda ou Cria novos atributos com valores
const header = document.querySelector('header');
header.setAttribute('id','header')

const headerID = document.querySelector('#header');
console.log(headerID) // sem o "get..." eu pego o elemento com o id
console.log(headerID.getAttribute('id')) 

const title = document.querySelector('h1');
console.log(title)
title.setAttribute('class','h1 title')