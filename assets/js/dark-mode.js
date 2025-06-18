document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline-block';
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Toggle icons
        darkIcon.style.display = isDark ? 'none' : 'inline-block';
        lightIcon.style.display = isDark ? 'inline-block' : 'none';
    });

    // Check system preference
    if (!currentTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark-mode');
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'inline-block';
        }
    }
});
