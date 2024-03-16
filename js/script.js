const myLibrary = [];
const TABLE = document.querySelector(".Books_Table");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function(){
  //     return this.title + " by " + this.author +
  //     ", " + this.pages + " pages, " + (this.read ? " already read": "not read yet");
  // }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
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
  }
}

displayBooks();
