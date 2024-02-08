JavaScript

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText.trim() === '') {
        alert('Por favor, escribe un comentario válido.');
        return;
    }

    const commentsContainer = document.getElementById('commentsContainer');
    const newComment = document.createElement('div');
    newComment.innerText = commentText;
    commentsContainer.appendChild(newComment);

    commentInput.value = '';
}