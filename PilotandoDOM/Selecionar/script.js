// getElementById()
// HTML Element
const id = document.getElementById("blog-title");
console.log(id);

// getElementByClassName()
// HTMLCollection
const clas = document.getElementsByClassName('one'); 
console.log(clas);

// getElementByTagName()
// HTMLCollection
const tagN = document.getElementsByTagName("h1"); 
console.log(tagN);

// querySelector()
// HTML Element
// Pega o primeiro que achar
const query = document.querySelector("[title]");
console.log(query);

// querySelectorAll()
// NodeList
// Pega todos  semelhantes
const all = document.querySelectorAll(".one");
console.log(all);
all.forEach(all => console.log(all)); /*HtmlCollection não funciona com forEach*/      


/* DIFERENÇA ENTRE HTMLCOLLECTION E NODELIST

HTMLCollection: A interface HTMLCollection representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.

-> Link: https://www.w3schools.com/jsreF/dom_obj_htmlcollection.asp

                    ----- // -----

NodeList: O objeto NodeList é uma /lista/ de elementos extraídos do documento html.

-> Link: https://www.w3schools.com/jsreF/dom_obj_html_nodelist.asp

*/