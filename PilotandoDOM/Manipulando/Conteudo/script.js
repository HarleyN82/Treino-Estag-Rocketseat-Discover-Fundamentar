// Manipulando Conteúdo

// textContent
// Modificando o conteúdo de um texto existente
// HTML Element
const element = document.querySelector('h1')
element.textContent = 'Alterado'  // (+=) - concatena

// innerText
// Criar um texto dentro de um elemento
// HTML Element
const texto = document.querySelector('#texto')
texto.innerText = 'Olá Devs!'

// innerHTML
// Criar um elemento, mas dentro de alguma estrutura
// Texto que age como elemento (difere de 'createElement')
// HTML Element
const div = document.querySelector('.div')
div.innerHTML = '<li>Lista</li>'

// value
// HTML Attributes - Atua dentro dos elementos como atributos
const input = document.querySelector('input') //.value - puxa o valor
input.value = "Valor que eu quiser"