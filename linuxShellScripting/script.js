document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Toggle dark mode
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Accordion functionality
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

