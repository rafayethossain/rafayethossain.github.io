document.addEventListener('DOMContentLoaded', () => {
    // Only proceed if we're on a blog post page (check if there's a blog-post element)
    const blogPost = document.querySelector('.blog-post');
    
    // Create and append Back to Top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(backToTopBtn);

    // Create and append progress bar only on blog post pages
    if (blogPost) {
        const progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        document.body.insertBefore(progressBar, document.body.firstChild);
    }

    // Show/hide back to top button and update progress bar
    window.addEventListener('scroll', () => {
        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Update reading progress only on blog post pages
        if (blogPost) {
            const rect = blogPost.getBoundingClientRect();
            const progressBar = document.getElementById('reading-progress');
            
            // Calculate progress only when the blog post is in view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const totalHeight = blogPost.clientHeight;
                const currentProgress = Math.abs(rect.top) / (totalHeight - window.innerHeight) * 100;
                const bounded = Math.min(100, Math.max(0, currentProgress));
                progressBar.style.width = `${bounded}%`;
            }
        }
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
