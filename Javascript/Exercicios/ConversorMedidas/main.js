// Convertendo metros para outras unidades

const input1 = prompt("Digite o valor em metros que deseja converter");
const input2 = prompt(`Digite para qual unidade deseja fazer a conversão\n
1 - milímetro\n
2 - centímetro\n
3 - decímetro\n
4 - decâmetro\n
5 - hectômetro\n
6 - quilometro`);

valor = parseFloat(input1);
unidade = parseFloat(input2);

switch (unidade) {
	case 1:
		alert("O valor da conversão para milímetro é: " + valor * 1000);
		break;
	case 2:
		alert("O valor da conversão para centímetro é: " + valor * 100);
		break;
	case 3:
		alert("O valor da conversão para decímetro é: " + valor * 10);
		break;
	case 4:
		alert("O valor da conversão para decâmetro é: " + valor / 1);
		break;
	case 5:
		alert("O valor da conversão para hectômetro é: " + valor / 10);
		break;
	case 6:
		alert("O valor da conversão para quilômetro é: " + valor / 100);
		break;
	default:
		alert("Opção inválida");
		break;
}
