/*

✓ - selecionar o elementiD orderForm
✓ - criar a função addEventListener do tipo submit e passar uma função como parametro (ev)
- selecionar os eventos com query selector e receber seus valores
- selecionar e receber todos os valores do checkbox
- retornar tudo no console.log
- usar preventDefault() para impedir o comportamento padrão do evento de envio do formulario.
- atribuir valores vazios ao form
- criar um alert para retornar as frases do pedido realizado e passar os itens que vão no sanduiche

*/

const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
	ev.preventDefault();

	//Aqui, criamos uma const que seleciona uma query no documento, o tipo é passado dentro de () e o valor buscado está entre [].
	//Assim selecionamos exatamente a query desejada, tipo <tag> com seu nome ou ID
	const name = document.querySelector("input[name='name']").value;
	const address = document.querySelector("input[name='address']").value;
	const breadType = document.querySelector("select[name='breadType']").value;
	const main = document.querySelector("input[name='main']").value;
	const observations = document.querySelector("textarea[name='observations']");

	let salad = "";
	document
		.querySelectorAll("input[name='salad']:checked")
		.forEach(function (item) {
			salad += " -" + item.value;
		});

	console.log({
		name,
		address,
		breadType,
		main,
		salad,
		observations,
	});
});
