interface Product{
    id: string,
    name: string,
    age: number
}

class Book implements Product{
    id:string;
    name: string;
    age: number;
    author: string;

    constructor(id: string, name: string, age: number, author: string){
        this.id=id;
        this.name=name;
        this.age=age;
        this.author=author;
    }
    showInfo(): string{
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Author: ${this.author}`;
    }
} 
let book1=new Book("1","TTN",20,"ROSE");

const sprint =document.getElementById("main");
if(sprint){
    sprint.innerText=book1.showInfo();
}