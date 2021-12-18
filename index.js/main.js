

let nome = prompt("digite aqui o seu nome ");
let sobreNome = prompt("digite aqui o seu Sobrenome ");
let peso = prompt("Qual é o seu peso atual ?");
let altura = prompt("Qual é a sua altura ?");
peso = parseFloat(peso);
altura = parseFloat(altura);
const  resultado = peso / (altura * altura);

alert(`seu nome é ${nome} e o sobrenome é ${sobreNome} essa é a sua altura ${altura} e esse é o seu peso ${peso} 
o resultado do seu imc é ${resultado}`);
