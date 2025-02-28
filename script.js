// Selecting the Html elements
const mainDiv = document.querySelector("#main-div");
console.log(mainDiv);

// Function to create HTML elements

function createHTML(element, className, idName) {
	const htmEl = document.createHTML(element);
	htmEl.classList.add(className);
	if (idName) {
		htmEl.setAttribute("id"), idName;
	}
	return htmEl;
}
