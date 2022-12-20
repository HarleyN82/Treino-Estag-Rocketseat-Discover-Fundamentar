/* 
    Throw
        * Lançar e disparar
        * Se houver erro a mensagem ou o próprio erro será disparado
        * new Error() - usado para mostrar o erro
    
    Try
        * Tentar
        * Executará a função
    
    Catch
        * Pegar
        * Irá capturar o erro
        * Uncaught - Contrário de 'catch', logo significa que algo não foi pego. Ele acontece quando usamos o 'throw', mas não o try/catch.
    
    Juntos
        * Isso significa que vamos tentar executar (try) um bloco de código, e se der algum erro, será disparado e capturado (catch) na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.
*/

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório') // Também poderia ser disparado apenas a mensagem
    }

    console.log(name)
}

// Nesse caso, se o nome vier vazio, será disparada uma mensagem.
// Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

/* O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo. */