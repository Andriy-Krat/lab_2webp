document.addEventListener("DOMContentLoaded", () => {
    
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        body.classList.add('light-theme');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
    });

    const userOS = navigator.platform;
    const userBrowser = navigator.userAgent;

    localStorage.setItem('os_info', userOS);
    localStorage.setItem('browser_info', userBrowser);

    const sysInfoDiv = document.getElementById('sys-info');
    sysInfoDiv.innerHTML = `
        <strong>Системна інформація:</strong><br>
        ОС: ${localStorage.getItem('os_info')} <br>
        Браузер: ${localStorage.getItem('browser_info')}
    `;

    fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-list');
            data.forEach(comment => {
                const reviewHTML = `
                    <div class="review-item">
                        <h4>${comment.name}</h4>
                        <p><strong>Email:</strong> ${comment.email}</p>
                        <p>${comment.body}</p>
                    </div>
                `;
                reviewsContainer.innerHTML += reviewHTML;
            });
        })
        .catch(error => console.error('Помилка завантаження відгуків:', error));


    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-modal');

    setTimeout(() => {
        modal.style.display = 'flex';
    }, 60000); 

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});