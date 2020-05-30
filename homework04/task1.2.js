'use strict';
/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. 
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
который будет назначать свойству highlighted значение true.
*/

//es5
// function Post(author, text, date) {
//     this.author;
//     this.text;
//     this.date;
// }

// Post.prototype.edit = function(text) {
//     this.text = text;
// }

// function AttachedPost(author, text, date, highlighted) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
// AttachedPost.prototype.makeTextHighlighted = function() {
//     this.highlighted = true;
// }

//es6
class Post {
    constructor(author, text, date) {
        this.author;
        this.text;
        this.date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const newPost = new Post();
newPost.edit('Lorem ipsum');

const newAttachedPost = new AttachedPost();
newAttachedPost.makeTextHighlighted();
