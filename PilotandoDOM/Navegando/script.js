// Navegando pelos Elementos

// parentNode parentElement
// HTML element
const element = document.querySelector('h1')
console.log(element.parentNode);
console.log(element.parentElement);

// childNodes children
// HTML element
const el = document.querySelector('body')
console.log(el.childNodes); // NodeList
console.log(el.children); // HTMLCollection - Elimina os espaços do html

// firstChild firstElementChild
// HTML element
console.log(el.firstChild); // #text (devido aos espaços no html)
console.log(el.firstElementChild); // Não leva em consideração espaços vazios

// lastChild lastElementChild
// HTML element
console.log(el.lastChild);
console.log(el.lastElementChild); 

// nextSibling nextElementSibling
// HTML element
const header = document.querySelector('header') // body script (primeiro script dentro do body)
console.log(header.nextSibling); // Leva em consideração os espaços
console.log(header.nextElementSibling); // Não leva em consideração os espaços

// previousSibling previousElementSibling
// HTML element
const bodScr = document.querySelector('body script') 
console.log(bodScr.previousSibling); // Leva em consideração os espaços
console.log(bodScr.previousElementSibling); // Não leva em consideração os espaços