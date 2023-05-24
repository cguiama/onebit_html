function register(element) {
	const username = element.children.username.value;
	const password = element.children.password.value;

	const passwordConfirmation = element.children.passwordConfirmation.value;

	if (password === passwordConfirmation) {
		alert("Usuário registrado com sucesso.");
	} else {
		alert("As senhas não conferem");
	}

	console.log(username, password, passwordConfirmation);
}
