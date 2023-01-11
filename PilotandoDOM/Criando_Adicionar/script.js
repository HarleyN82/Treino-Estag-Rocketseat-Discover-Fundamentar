// Criando e adicionando elementos

// createElement
// cria-se um elemento no nó do DOM
// HTML Document

const div = document.createElement('div');
div.innerText = "Texto da minha div";

// append prepend
// HTML Document
// Adiciona elementos append(depois) e prepend (antes) na página

const body = document.querySelector('body');
body.append(div) // Após o body ele vai adicionar a nossa div
//body.prepend(div)

// insertBefore(elementoNovo, nóReferencia)
// HTML Element
// Adicionar elementos onde eu quiser

const scr = document.querySelector('body script'); // body.docum... substitui o "body script"
body.insertBefore(div,scr)

// Não existe "insertAfter", então vamos simulá-lo com:
const header = document.querySelector('header'); 
body.insertBefore(div,header.nextElementSibling) // Adicionar após o irmão anterior do header.

