// Selecting the Html elements
const mainDiv = document.querySelector("#main-div");
console.log(mainDiv);

// Function to create HTML elements

function createHTML(element, className, idName) {
	const htmEl = document.createElement(element);
	htmEl.classList.add(className);
	if (idName) {
		htmEl.setAttribute("id", idName);
	}
	return htmEl;
}

// Creating 3 mains containers for the project and nested them inside the container
// Wrapper with navbar , hero, floating-icons
const wrapper = createHTML("div", "wrapper", "wrap");
//Add element into container
mainDiv.appendChild(wrapper);
// Division with the services elements
const division = createHTML("div", "division", "division-services");
//Add element into container
mainDiv.appendChild(division);
// Section with order card and footer
const section = createHTML("div", "section", "sections");
mainDiv.appendChild(section);

// Wrapper with the navbar , which include left and right hand side of the header
// Navbar
const navbar = createHTML("div", "navbar", "header");
wrapper.appendChild(navbar);
// Navbar left with cv and copy button
const navbarStart = createHTML("div", "navbar-start", "navStart");
navbar.appendChild(navbarStart);
// Navbar right with social links
const navbarEnd = createHTML("div", "navbar-end", "navEnd");
navbar.appendChild(navbarEnd);
