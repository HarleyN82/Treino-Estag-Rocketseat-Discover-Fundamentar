// conversão de números
console.log(parseInt('12'));
console.log(Number('12'));

// conversão de valor não numérico
console.log(parseInt('teste')); // conseguem entender que não é um número
console.log(Number('teste'));

// conversão de ponto flutuante
console.log(parseInt('12.7')); // ele converte para inteiro
console.log(Number('12.7'));
console.log(parseFloat('12.7')); // converte testo (string) para valores numéricos flutuantes

// conversão de expoentes
console.log(parseInt('1e2')); // não entende expressão de exponencial
console.log(Number('1e2'));