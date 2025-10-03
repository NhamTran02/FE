var Book = /** @class */ (function () {
    function Book(id, name, age, author) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.author = author;
    }
    Book.prototype.showInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat(this.age, ", Author: ").concat(this.author);
    };
    return Book;
}());
var book1 = new Book("1", "TTN", 20, "ROSE");
var sprint = document.getElementById("main");
if (sprint) {
    sprint.innerText = book1.showInfo();
}
