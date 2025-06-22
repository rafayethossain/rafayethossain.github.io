(function() {
  const themeToggle = document.getElementById('darkModeToggle');
  const themeIcon = document.getElementById('darkModeIcon');
  const themeLabel = themeToggle ? themeToggle.querySelector('.dark-mode-label') : null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (themeToggle) themeToggle.setAttribute('aria-pressed', isDark);
    if (themeIcon) themeIcon.innerText = isDark ? '☀️' : '🌙';
    if (themeLabel) themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Initialize theme
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    setTheme(prefersDark.matches);
  }

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(!isDark);
    });
  }

  // Listen for system theme changes
  prefersDark.addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
})();
