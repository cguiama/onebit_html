const sectionContent = document.getElementById("devHabilities");

const form = document.getElementById("insertHabilities");

function ev() {
	ev.preventDefault();
	text.innerText = "<p>Batata</p>";

	sectionContent.appendChild(text);
}

form.addEventListener("submit", ev());
