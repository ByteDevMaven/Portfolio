import newPost from "./post.js";

async function fetchPosts() {
    const response = await fetch('./data/posts.json'); // Fetch the JSON file
    const posts = await response.json(); // Convert response to JSON
    addPost(posts);
}

function addPost(posts) {
    const addSelectedPosts = document.getElementById("post__container");
    posts.forEach(post => {
        addSelectedPosts.appendChild(newPost(post));
    })
}

document.addEventListener("DOMContentLoaded", fetchPosts);