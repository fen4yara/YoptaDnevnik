document.addEventListener('DOMContentLoaded', function() {
            // Загружаем шапку и подвал
            loadTemplates();
        });

// navigation.js
function loadTemplates() {
    // Загружаем шапку
    fetch('templates/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-header').innerHTML = html;

        });
    

    
    // Загружаем подвал
    fetch('templates/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-footer').innerHTML = html;
        });
}

