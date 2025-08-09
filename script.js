var lib = [];

const book_template = `
<div class="book-card">
    <div class="book-info">
        <p>{TITLE}</p>
        <p>{AUTHOR}</p>
    </div>
    <img width="75%" height="75%" src="{IMG}">
    <div class="book-actions">
        <button class="read-toggle" onclick="_toggle('{ID}')">{TOGGLE}</button>
        <button class="delete-btn" onclick="_delete('{ID}')">Delete</button>
    </div>
</div>
`

const new_modal = document.querySelector(".new-modal");
const content_div = document.querySelector(".content");

const new_btn = document.querySelector(".new-btn");
new_btn.addEventListener("click", () => {
    new_modal.classList.add("active");
})
const new_close_btn = document.querySelector(".new-close-btn");
new_close_btn.addEventListener("click", () => {
    new_modal.classList.remove("active");
})
const new_submit_btn = document.querySelector(".new-submit-btn");
new_submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let img = document.querySelector("#img").value;
    let read = document.querySelector("#read").checked;

    if (title === "") {
        alert("Please enter a title");
    } else {
        if (img === "") {
            img = "./assets/placeholder.png"
        }
        lib.push(new Book(title, author, img, read));
    }
    draw_books();
    new_modal.classList.remove("active");
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#img").value = "";
    document.querySelector("#read").checked = false;
})

class Book {
    constructor(title, author, img, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.img = img;
        this.read = read;
    }
}

function _toggle(id) {
    const btn = lib.findIndex(book => book.id === id);
    lib[btn].read ? lib[btn].read = false : lib[btn].read = true;
    draw_books();
}

function _delete(id) {
    const btn = lib.findIndex(book => book.id === id);
    lib.splice(btn, 1);
    draw_books();
}

function draw_books() {
    let book_divs = ""
    lib.forEach(i => {
        let _i = book_template;
        _i = _i.replace("{TITLE}", i.title);
        _i = _i.replace("{AUTHOR}", i.author);
        _i = _i.replace("{IMG}", i.img);
        _i = _i.replaceAll("{ID}", i.id);
        i.read ? _i = _i.replace("{TOGGLE}", "Finished") : _i = _i.replace("{TOGGLE}", "Unfinished");
        book_divs += _i;
    });
    content_div.innerHTML = book_divs;
}