// ## Cadastro de Recrutas

// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

// - o primeiro nome
// - o sobrenome
// - o campo de estudo
// - o ano de nascimento

// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

// ## Calculadora de 4 Operações

// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

// Após calcular os resultados o programa deve exibi-los na tela.

// 01

// let nome = prompt("Qual o seu nome recruta?");
// let sobrenome = prompt("E o sobrenome?");
// let campoEstudo = prompt("Qual seu campo de estudo?");
// let anoNascimento = prompt("Em que ano você nasceu?");

// alert(
// 	`Seu nome é ${nome} ${sobrenome}, você estuda ${campoEstudo} e nasceu em ${anoNascimento}`
// );

let a = prompt("Digite o primeiro numero");
let b = prompt("Digite o segundo numero");

let soma = parseFloat(a) + parseFloat(b);
let subtrai = a - b;
let divide = a / b;
let multiplica = a * b;

alert(
	`Segue o resultado das quatro operações básicas:\n\nSoma: ${soma}\nSubtração: ${subtrai}\nDivisão: ${divide}\nMultiplicação: ${multiplica}`
);
