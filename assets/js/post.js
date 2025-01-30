export default function newItem(post) {
    const article = document.createElement("article");
    article.classList.add("post");

    const postHTML = `
        <div class="head">
            <img class="image" src="${post.avatar}" alt="profile"> 
            <h1>${post.name}</h1> 
            <h3 class="date">${post.date}</h3> 
        </div>
        <div class="content">
            <h2>${post.title}</h2> 
            <p>${post.text}</p> 
            <img src="${post.image}" alt="post"> 
        </div>`;

    article.innerHTML = postHTML;
    return article;
}