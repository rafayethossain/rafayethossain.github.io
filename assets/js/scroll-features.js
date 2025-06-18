document.addEventListener('DOMContentLoaded', () => {
    // Create and append Back to Top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(backToTopBtn);

    // Create progress bar wrapper and bar
    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'progress-wrapper';
    
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressWrapper.appendChild(progressBar);
    
    // Insert progress bar at the top of the page
    document.body.insertBefore(progressWrapper, document.body.firstChild);

    // Function to calculate reading progress
    function updateReadingProgress() {
        const docElement = document.documentElement;
        const bodyElement = document.body;
        const windowHeight = window.innerHeight;
        
        // Total scrollable distance
        const totalHeight = Math.max(
            bodyElement.scrollHeight,
            bodyElement.offsetHeight,
            docElement.clientHeight,
            docElement.scrollHeight,
            docElement.offsetHeight
        ) - windowHeight;
        
        // How far we've scrolled
        const scrolled = window.scrollY;
        
        // Calculate percentage
        const progressPercent = (scrolled / totalHeight) * 100;
        
        // Update progress bar width
        progressBar.style.width = `${Math.min(progressPercent, 100)}%`;
        
        // Update back to top button visibility
        if (scrolled > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }    // Listen for scroll events
    window.addEventListener('scroll', updateReadingProgress);
    window.addEventListener('resize', updateReadingProgress);

    // Smooth scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial progress update
    updateReadingProgress();
});
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
