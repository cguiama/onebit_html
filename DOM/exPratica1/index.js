function addContact() {
	const contactSection = document.getElementById("contactsList");

	const h3 = document.createElement("h3");
	h3.innerText = "Contato";

	const ul = document.createElement("ul");

	const nameLi = document.createElement("li");
	nameLi.innerHTML = "Nome: ";
	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.name = "fullname";
	nameLi.appendChild(nameInput);
	ul.appendChild(nameLi);
	ul.appendChild(document.createElement("br"));

	const phoneLi = document.createElement("li");
	phoneLi.innerText = "Telefone: ";
	const phoneInput = document.createElement("input");
	phoneInput.type = "text";
	phoneInput.name = "phone";
	phoneLi.appendChild(phoneInput);
	ul.appendChild(phoneLi);
	//a função document.createElement('tipo de tag') é utilizada para criar uma tag (elemento) dentro do html, dentro de ('') passamos o tipo
	// na linha abaixo criamos o elemento <br>
	ul.appendChild(document.createElement("br"));

	const addresLi = document.createElement("li");
	addresLi.innerHTML = '<label for="address">Endereço: </label>';
	const addressInput = document.createElement("input");
	addressInput.type = "text";
	addressInput.name = "address";
	addressInput.id = "address";
	addresLi.appendChild(addressInput);
	ul.appendChild(addresLi);
	ul.appendChild(document.createElement("br"));

	contactSection.append(h3, ul);
}

function removeContact() {
	const contactSection = document.getElementById("contactsList");

	const titles = document.getElementsByTagName("h3");
	const contacts = document.getElementsByTagName("ul");

	//Nesta função, criamos o removeChild passando as tags que foram criandas com o append, sempre na ultima posição da Lista

	contactSection.removeChild(titles[titles.length - 1]);
	contactSection.removeChild(contacts[contacts.length - 1]);
}
