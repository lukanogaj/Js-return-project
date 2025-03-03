// import { navbarStartData } from "./data/data";
// console.log(navbarStartData);

// Selecting the Html elements
const mainDiv = document.querySelector("#main-div");
console.log(mainDiv);
// Array with objects to use the data
const data = {
	dataNavbarStart: [
		{
			email: "lukanogaj@hotmail.co.uk",
			copy: "Copy",
			cv: "CV",
		},
	],
	dataNavbarEnd: [
		{
			linkedin: "Linkedin",
			slash: "/",
			dribble: "Dribbble",
			slash: "/",
			instagram: "Instagram",
		},
	],
};
// Function to create HTML elements
function createHTML(element, className, idName) {
	const htmEl = document.createElement(element);
	htmEl.classList.add(className);
	if (idName) {
		htmEl.setAttribute("id", idName);
	}
	return htmEl;
}
//  Maps to create the start and end navbar
// const navbarStartItems = data.dataNavbarStart.map((item) => {
// 	const listStartItems = document.createElement("li");
// 	listStartItems.setAttribute("id", "listItem");
// 	listStartItems.classList.add("list-items");
// 	navbar.appendChild(listStartItems);
// 	listStartItems.innerHTML = item;
// 	return item;
// });
// console.log(navbarStartItems);

// Creating 3 mains containers for the project and nested them inside the container
const navbar = createHTML("div", "navbar", "header");
// Entire navbar
mainDiv.appendChild(navbar);

// Navbar left with cv and copy button
const navbarStart = createHTML("div", "navbar-start", "navStart");
navbar.appendChild(navbarStart);
//  Maps to create the start and end navbar
const navbarStartItems = data.dataNavbarStart.map((item) => {
	const listStartItems = document.createElement("li");
	listStartItems.setAttribute("id", "listItem");
	listStartItems.classList.add("list-items");
	navbarStart.appendChild(listStartItems);
	// listStartItems.innerHTML = item;
	return item;
});
console.log(navbarStartItems);

// Navbar right with social links
const navbarEnd = createHTML("div", "navbar-end", "navEnd");
navbar.appendChild(navbarEnd);
// Wrapper, hero, floating-icons
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

// Wrapper  , which include left and right hand side of the header
