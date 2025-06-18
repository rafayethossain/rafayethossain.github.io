document.addEventListener('DOMContentLoaded', () => {
    // Create and append Back to Top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(backToTopBtn);

    // Create and append progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    document.body.insertBefore(progressBar, document.body.firstChild);

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Update reading progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Smooth scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add keyboard support for back to top button
    backToTopBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
