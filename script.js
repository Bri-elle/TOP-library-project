const myLibrary = [];

/**
 * Book Object
 * @param {*} id
 * @param {*} title
 * @param {*} author
 * @param {*} pages
 * @param {*} readStatus
 */

function Book(title, author, pages, readStatus) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
}

/**
 *
 * @param {*} title
 * @param {*} author
 * @param {*} pages
 * @param {*} readStatus
 */
function addBookToLibrary(title, author, pages, readStatus) {
	// create a unique book id
	// const id = crypto.randomUUID();
	const bookTitle = title;
	const bookAuthor = "By " + author;
	const totalPages = pages;
	let status = "";

	if (readStatus.toLowerCase() == "yes") {
		status = true;
	} else {
		status = false;
	}

	// create a book
	const book = new Book(bookTitle, bookAuthor, totalPages, status);
	//  store the new book object into an array.
	// myLibrary.push(book)
	myLibrary.unshift(book);
}

// set prototype

/**
 * Test for addBookToLibrary()
 * @param {*} params
 */
addBookToLibrary("Atomic Habits", "James Clear", 320, "no");
addBookToLibrary("Hello Tomorrow", "Cindy Trimm", 240, "yes");
addBookToLibrary(
	"7 Habits of Highly Effective People",
	"Stephen R. Covey",
	391,
	"yes"
);
addBookToLibrary("Personal Success", "Brian Tracy", 127, "yes");
addBookToLibrary("Goal Getters", "Nicole Crank", 107, "yes");
addBookToLibrary("Ultra Learning", "Scott Young", 320, "yes");
addBookToLibrary("Hi GOD, One More Thing", "Nicole Crank", 266, "yes");

/**
 * Display Books List
 *
 */
function displayBooks() {
	let booksContainer = document.querySelector("#carousel");
	booksContainer.innerHTML = "";
	// iterate through array items
	myLibrary.forEach((book) => {
		// parent Node

		// child Node of bookContainer
		let article = document.createElement("article");

		// child nodes of article
		let miniBox = document.createElement("div");
		miniBox.classList.add("box");
		let readBtn = document.createElement("button");
		readBtn.classList.add("readBtn");
		if (book.readStatus == true) {
			readBtn.textContent = "Read";
		} else {
			readBtn.textContent = "Not Read";
		}

		readBtn.addEventListener("click", () => {
			if (readBtn.textContent == "Read") {
				readBtn.textContent = "Not Read";
			} else {
				readBtn.textContent = "Read";
			}
		});
		let deleteBtn = document.createElement("button");
		deleteBtn.classList.add("readBtn");
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", (event) => {
			article.remove();
		});

		miniBox.append(readBtn, deleteBtn);
		//  add mini-box elements
		let titleText = document.createElement("p");
		titleText.classList.add("title");
		let authorText = document.createElement("p");
		authorText.classList.add("author");
		let pagesText = document.createElement("p");
		pagesText.classList.add("pages");
		let readStatusText = document.createElement("p");
		readStatusText.classList.add("read-status");

		//add content
		titleText.textContent = book.title;
		authorText.textContent = book.author;
		pagesText.textContent = book.pages + " pages";
		// console.log(book.readStatus);
		if (book.readStatus == true) {
			readStatusText.textContent = "read";
		} else {
			readStatusText.textContent = "not read";
		}

		// add elements to parent containers
		article.append(miniBox, titleText, authorText, pagesText);

		booksContainer.appendChild(article);

		console.log(booksContainer);
	});
}

displayBooks();

/**
 * display form to add book to library
 */
function displayDialog() {
	let form = document.querySelector("#dialog");
	console.log(form);
	form.style.display = "flex";
}

/**
 * cancel form
 */
function closeDialog() {
	let dialog = document.querySelector("#dialog");
	console.log(form);
	dialog.style.display = "none";
}

/**
 *
 * Add Event listener to add to library form
 */

let form = document.querySelector("#libraryForm");
form.addEventListener("submit", (event) => {
	event.preventDefault();

	const title = form.querySelector("#title").value;
	const author = form.querySelector("#author").value;
	const pages = form.querySelector("#pages").value;
	const status = form.querySelector("input[type='radio']:checked").value;

	addBookToLibrary(title, author, pages, status);
	closeDialog();
	displayBooks();
});

// /**
//  * show dialog
//  */

// function showDialog() {
// 	let dialog = document.querySelector("dialog");
// 	dialog.showModal();
// }

// /**
//  * cancel dialog
//  */

// function closeDialog() {
// 	let dialog = document.querySelector("#dialog");
// 	dialog.close();
// }

function displaySideNav() {
	const sideNav = document.querySelector("aside");
	sideNav.style.display = "block";
}

function closeSideNav() {
	const sideNav = document.querySelector("aside");
	sideNav.style.display = "none";
}
