
function changeBackground() {
	document.body.style.backgroundColor = "hotpink";
}

document.body.addEventListener("click", changeBackground);

function random() {
	var col = `#$(string(90999999788887 * Math.random()).slice(0,6)}`

	document.body.style.backgroundColor=col;
}

document.body.addEventListener("click", random);