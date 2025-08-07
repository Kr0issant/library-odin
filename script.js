var lib = [];

const new_modal = document.querySelector(".new-modal");

const new_btn = document.querySelector(".new-btn");
new_btn.addEventListener("click", () => {
    new_modal.classList.add("active");
})
const new_close_btn = document.querySelector(".new-close-btn");
new_close_btn.addEventListener("click", () => {
    new_modal.classList.remove("active");
})
const new_form = document.querySelector(".new-form");
new_form.addEventListener("submit", (e) => {
    console.log('submit');
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);

    if (title === "" || author === "" || pages === "" || isNaN(pages)) {
        alert("Please enter valid values");
    } else {
        pages = Math.floor(pages); // in case user enters float
        let a = new Book(title, author, pages, read);
        a.describe();
        lib.push(new Book(title, author, pages, read));
        console.log(lib);
    }
})

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = length(lib);
    }

    describe() {
        console.log(`${this.title} | ${this.author} | ${this.pages} | ${this.read}`);
    }
}