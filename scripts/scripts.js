function showContent(contentId) {
    const contents = document.querySelectorAll('.content-item');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    if (window.innerWidth < 768) {
        toggleMenu();
    }
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const forumLink = document.querySelector('#forumLink');
    forumLink.classList.add('forum-link');

    const equipeLink = document.querySelector('#equipeLink');
    equipeLink.classList.add('equipe-link');

    forumLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('conteudoForum');
    });

    equipeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('conteudoEquipe');
    });
});