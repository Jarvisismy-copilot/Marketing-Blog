document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const postList = document.getElementById('post-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = { title, content };
            addPostToDOM(post.title, post.content);
            savePost(post);
            form.reset();
        }
    });

    function addPostToDOM(title, content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        postList.appendChild(post);
    }

    function savePost(post) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
});
