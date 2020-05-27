'use strict';

/*
3. Выведите в консоль значения, указанные рядом с комментариями:
*/

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        }, 
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        }, 
    ]
}

console.log(`Автор: ${post.author}`);
console.log(`Дизлайки комментария юзера ${post.comments[0].userName}: ${post.comments[0].rating.dislikes}`);
console.log(`ID юзера-комментатора ${post.comments[1].userName}: ${post.comments[1].userId}`);
console.log(`Текст комментария юзера ${post.comments[1].userName}: ${post.comments[1].text}`);
