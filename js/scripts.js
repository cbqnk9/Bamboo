/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// JavaScript code
document.getElementById('category').addEventListener('change', function () {
    var selectedCategory = this.value;

    // Get all articles
    var articles = document.getElementById('articleList').getElementsByTagName('li');

    // Show or hide articles based on selected category
    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var articleCategory = article.classList[0];

        if (selectedCategory === '' || articleCategory === selectedCategory) {
            article.style.display = 'block';

            var postSnippet = article.querySelector('.post-snippet');
            var content = postSnippet.textContent;

            if (content.length > 20) {
                postSnippet.textContent = content.substring(0, 20) + '...';
            }
        } else {
            article.style.display = 'none';
        }
    }
});

// JavaScript code for comment submission
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.querySelector("#commentForm");
    const commentSection = document.querySelector("#commentSection");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const commentAuthor = document.querySelector("#commentAuthor").value;
        const commentText = document.querySelector("#commentText").value;

        // Create a new comment element
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerHTML = `
                    <div class="d-flex mb-4">
                    <div class="flex-shrink-0"><img class="rounded-circle"
                src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div class="ms-3">
                    <p class="fw-bold comment-author">${commentAuthor}</p>
                    <p class="fw-lighter fs-6 comment-date">${formatDate(new Date())}</p>
                    <p class="comment-text">${commentText}</p>
        `;

        // Append the new comment to the comment section
        commentSection.appendChild(comment);

        // Clear form inputs
        commentForm.reset();
    });

    // Helper function to format date as "Month Day, Year"
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
});

function btn(){
    alert('로그인이 필요한 서비스입니다.');
    location.href='signIn.html';
}