// Manipulando Estilos

// .style
// HTML Style
// camelCase

const element = document.querySelector('body')
element.style.backgroundColor = 'lightyellow';  // setando valores
console.log(element.style.backgroundColor); // pegando valores

// classList
// HTML Element (o elemento)
// DOMTokenList (retorno do elemento)

const heading = document.querySelector('h1')
heading.classList.add('active','blue') 
heading.classList.remove('active')
heading.classList.toggle('active') // Se não tem, então bota

console.log(heading.classList)