let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = "title:" + title;
  this.author = "author:" + author;
  this.pages = "pages:" + pages;
  this.read = "read:" + read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  console.log(title);
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  let hide = document.querySelector(".formulaContainer").remove();
}
let i = -1;
function Display() {
  let container = document.querySelector(".container");
  let box = document.createElement("div");
  box.classList.add("boxes");
  box.dataset.title = `bok${++i}`;
  container.append(box);
  let boxes = document.querySelector(`div[data-title="bok${i}"]`);
  let bookContent = document.createElement("div");
  bookContent.classList.add("box-content");
  bookContent.dataset.title = `bok${i}`;
  bookContent.textContent = `${myLibrary[myLibrary.length - 1].title}\r\n${
    myLibrary[myLibrary.length - 1].author
  }\r\n${myLibrary[myLibrary.length - 1].pages}\r\n${
    myLibrary[myLibrary.length - 1].read
  }`;
  //read status
  let readStatus = document.createElement("button");
  readStatus.innerText = "read";
  readStatus.classList.add("read");
  readStatus.addEventListener("click", function () {
    if (this.innerText == "read") {
      this.innerText = "not read";
      myLibrary[i].read = "not read";
    } else {
      this.innerText = "read";
      myLibrary[i].read = "read";
    }
  });
  bookContent.append(readStatus);
  boxes.append(bookContent);
  //delete button
  let divbutton = document.createElement("div");
  let button = document.createElement("button");
  divbutton.classList.add("delete");
  button.innerText = "delete";
  let boxContent = document.querySelector(`div[data-title="bok${i}"]`);
  boxContent.append(divbutton);
  divbutton.append(button);
  //delete book from library
  button.addEventListener("click", function () {
    boxes.remove();
    let removedBook = myLibrary[i];
    myLibrary.splice(removedBook, 1);
    console.log(removedBook);
  });
}
//display input formula
let addBookButton = document.querySelector(".Add");
addBookButton.addEventListener("click", function () {
  let formulaContainer = document.createElement("div");
  formulaContainer.classList.add("formulaContainer");
  document.body.append(formulaContainer);
  let formulaboxes = document.createElement("div");
  formulaboxes.classList.add("formulaboxes");
  formulaContainer.append(formulaboxes);
  let title = document.createElement("label");
  title.innerText = "title:";
  formulaboxes.append(title);
  let inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "title");
  inputTitle.setAttribute.type = "text";
  formulaboxes.append(inputTitle);
  let author = document.createElement("label");
  author.innerText = "author:";
  formulaboxes.append(author);
  let inputAuthor = document.createElement("input");
  inputAuthor.setAttribute("id", "author");
  inputAuthor.setAttribute.type = "text";
  formulaboxes.append(inputAuthor);
  let pages = document.createElement("label");
  pages.innerText = "pages:";
  formulaboxes.append(pages);
  let inputPages = document.createElement("input");
  inputPages.setAttribute("id", "pages");
  inputPages.setAttribute.type = "text";
  formulaboxes.append(inputPages);
  let read = document.createElement("label");
  read.innerText = "read:";
  formulaboxes.append(read);
  let inputRead = document.createElement("input");
  inputRead.setAttribute("id", "read");
  inputRead.setAttribute.type = "text";
  formulaboxes.append(inputRead);
  let submit = document.createElement("button");
  submit.classList.add("submit");
  submit.innerText = "submit";
  formulaboxes.append(submit);
  submit.addEventListener("click", function () {
    addBookToLibrary();
    Display();
  });
});

console.log(myLibrary);
