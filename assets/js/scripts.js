import newPost from "./post.js";

const posts = [
    {
        avatar: './assets/images/profile.jpg',
        name: 'Carlos Sanchez',
        date: '29/1/2025',
        title: 'Hello World!',
        text: 'This is my personal portfolio site where I post my job experience, and what projects I have and are working on. If you are interested, you can contact me or leave your thoughts on the Guestbook.',
        image: './assets/images/post.webp'
    },
    {
        avatar: './assets/images/profile.jpg',
        name: 'Carlos Sanchez',
        date: '6/2/2024',
        title: 'First Web App',
        text: 'My first web app was using the Vue js framework using a google sheet\'s app script by Google as a basic API while working for Fourth Enterprises in customer service. You can check it <a class="links" href="https://github.com/ByteDevMaven/Vue-Tickets">/here</a>.',
        image: './assets/images/vue.webp'
    }
]

function addPost() {
    const addSelectedPosts = document.getElementById("post__container");
    posts.forEach(shoe => {
        addSelectedPosts.appendChild(newPost(shoe));
    })
}

document.addEventListener("DOMContentLoaded", addPost);