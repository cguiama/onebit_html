/*
Fixando Switch:

1) Perguntar a distancia em anos-luz

2) Oferecer uma lista de opções (Parsec, Unidade Astronomica ou KM)

3) Perguntar qual operação deseja realizar

4) Fazer opções com switch armazenando o nome da unidade e o valor convertido

5) Exibir alerta contendo a distância em anos luz e a distancia convertida para a op desejada
 → "Distância em Anos-Luz: " + {let anos luz} + {conversão desejada} + {distancia convertida} 
    → 1 l.y = 0.306601pc (parsec)
    → 1 l.y = 63241.1 (Unidade Astronomica)
    → 1 l.y = 9,5 * 10 1² (Unidade em KM → Math.pow(10,12))

default = Distância em Anos-Luz: {letanoluz}\nUnidade não identificada: Conversão fora do escopo
*/

let distAl = prompt("Qual a distância em Anos-Luz?");

let uniTo = prompt("Digite o número para qual unidade você deseja converter?\n1 - Parsec.\n2 - Unidade Astronomica.\n3 - Km.");

let uniParsec = 0.306601;
let uniAstro = 63241.1;
let uniKm = 9.5 * Math.pow(10, 12);

let uniToParsec = distAl * uniParsec
let uniToUa = distAl * uniAstro
let uniToKm = distAl * uniKm

switch (uniTo) {
    case "1":
        alert("A distância em anos luz é: " + distAl + "\nA distância convertida para Parsec é: " + uniToParsec)
        break
    case "2":
        alert("A distância em anos luz é: " + distAl + "\nA distância convertida para a Unidade Astronomica é: " + uniToUa)
    case "3":
        alert("A distância em anos luz é: " + distAl + "\nA distância convertida para a Km é: " + uniToKm)
    default:
        alert("Distância em Anos-Luz: " + distAl + "\nUnidade não identificada: Conversão fora do escopo")
}