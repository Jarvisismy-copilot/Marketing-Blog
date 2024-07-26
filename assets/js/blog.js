document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.body;
    const postList = document.getElementById('post-list');

    toggleModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        addPostToDOM(post.title, post.content);
    });

    function addPostToDOM(title, content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        postList.appendChild(post);
    }
});
