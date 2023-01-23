// Chamando o módulo express
// Express é usado pára criar um servidor para mostrar tudo que estamos construindo dentro do navegador
// Vai pegar todos os arquivos JS renderizar e vai mostrar no navegador

const express = require('express')
const app = express(); // instanciando o express

// Informando ao express que vamos usar o EJS

app.set("view engine","ejs"); // método do express setar(criar) valores
// view engine - ferramenta usada para renderizar html
// vai usar o ejs para isso

// Criando uma rota
// app.get = Carrega tudo que tem dentro do express
// "/" é o próprio domínio do site

app.get("/",function(req,res){

    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'morzinho'
        },
        {
            title: 'I',
            message: 'nstall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    }) // res = resposta - renderizar o index
})

// Rota do nosso site/about 

app.get("/about",function(req,res){
    res.render("pages/about") // express já entende que tem que star dentro da pasta views
})

// Após configurar vamos rodar o servidor
// listen - função do express ouvindo uma porta

app.listen(8080)
console.log("Rodando")