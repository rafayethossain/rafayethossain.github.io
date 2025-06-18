// Initialize scroll features when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create and append the reading progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress-bar';
    document.body.appendChild(progressBar);

    // Create and append the back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top-btn';
    backToTopButton.setAttribute('aria-label', 'Scroll back to top');
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    // Function to update reading progress
    function updateReadingProgress() {
        const docElement = document.documentElement;
        const body = document.body;
        const windowHeight = window.innerHeight;
        
        // Calculate total scrollable height
        const scrollable = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            docElement.clientHeight,
            docElement.scrollHeight,
            docElement.offsetHeight
        ) - windowHeight;
        
        // Calculate how far we've scrolled
        const scrolled = window.scrollY;
        
        // Calculate and set the progress percentage
        const progressPercentage = (scrolled / scrollable) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, progressPercentage))}%`;

        // Show/hide back to top button
        backToTopButton.style.display = scrolled > windowHeight / 2 ? 'block' : 'none';
    }

    // Scroll to top function
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    let ticking = false;
    document.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateReadingProgress();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial update
    updateReadingProgress();
});