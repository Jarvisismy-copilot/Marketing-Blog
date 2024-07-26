document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const postList = document.getElementById('post-list');
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.body;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = document.createElement('div');
            post.className = 'post';
            post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            postList.appendChild(post);

            form.reset();
        }
    });

    toggleModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
