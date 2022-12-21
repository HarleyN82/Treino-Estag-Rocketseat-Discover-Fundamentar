/* 
    ForEach
        * Função de objetos do tipo array
        * Executar um bloco de código para cada elemento do array
        * Array: Objeto que agrupa elementos de objetos em forma de lista
        * Estrutura:
            * array.forEach(item,index,list)
                - item: nome simbólico para representar cada elemento do array
                - index: Guarda a posição do elemento do array
                - list: Lista para guardar todos os elementos expostos
*/

let approvedList = [
    "sos23@gmail.com",
    "carla22@gmail.com",
    "joshua32@gmail.com",
    "what123@gmail.com",
];

const sendEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
}

approvedList.forEach((item,posicao,array) => {
    sendEmail(item);
    console.log(`Sua posição é a de: ${posicao+1}`);
    console.log(`A quantidade de pessoas no processo seletivo é : ${array.length}`);
})

// Cada elemento do array servirá automaticamente como um parâmetro para a função estabelecida.