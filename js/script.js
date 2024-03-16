const myLibrary = [];
const TABLE = document.querySelector(".Books_Table");
const DIALOG = document.querySelector(".dialog");
const BOOK = document.querySelector("#book");
const AUTHOR = document.querySelector("#author");
const PAGES = document.querySelector("#pages");
const READ = document.querySelector("#read");
const SHOWBTN = document.querySelector("#show");
const ADDBTN = document.querySelector("#add");

SHOWBTN.addEventListener("click", () => DIALOG.showModal());

ADDBTN.addEventListener("click", () =>
  addBookToLibrary(BOOK.value, AUTHOR.value, PAGES.value, READ.checked)
);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  BOOK.value = "";
  AUTHOR.value = "";
  PAGES.value = "";
  READ.checked = false;
  DIALOG.close();
  displayBooks();
}

function clearTable(table) {
  var rows = table.rows;
  var i = rows.length;
  while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
  }
}

function displayBooks() {
  clearTable(TABLE);
  for (let i = 0; i < myLibrary.length; i++) {
    const row = TABLE.insertRow(TABLE.length);
    row.insertCell(0).appendChild(document.createTextNode(myLibrary[i].title));
    row.insertCell(1).appendChild(document.createTextNode(myLibrary[i].author));
    row.insertCell(2).appendChild(document.createTextNode(myLibrary[i].pages));
    const input = row
      .insertCell(3)
      .appendChild(document.createElement("input"));
    input.type = "checkbox";
    input.checked = myLibrary[i].read;
    input.id = i;
    input.addEventListener(
      "click",
      () => (myLibrary[input.id].read = input.checked)
    );
    const btn = row.insertCell(4).appendChild(document.createElement("button"));
    btn.classList.add("btn");
    btn.textContent = "remove book";
    btn.id = i;
    btn.addEventListener("click", () => {
      myLibrary.splice(btn.id, 1);
      displayBooks();
    });
  }
}

displayBooks();
