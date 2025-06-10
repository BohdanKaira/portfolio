
document.addEventListener('DOMContentLoaded', () => {
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;
  const storedTheme = localStorage.getItem('theme');

  
  if (storedTheme === 'dark') {
    html.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀︎';
  } else {
    html.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '☽';
  }

  
  themeToggle?.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (themeIcon) themeIcon.textContent = isDark ? '☀︎' : '☽';
  });
});



// Burger toggle
const menu = document.getElementById('mobileMenu');
const toggle = document.getElementById('menuToggle');

toggle?.addEventListener('click', () => {
  menu.classList.toggle('translate-y-[-100%]');
  menu.classList.toggle('translate-y-0');
});

function closeMenu() {
  menu.classList.add('translate-y-[-100%]');
  menu.classList.remove('translate-y-0');
}
