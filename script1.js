document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('executor-search');
    const filterTags = document.querySelectorAll('.filter-tag');
    const sections = document.querySelectorAll('.glass-card');
    const executorCards = document.querySelectorAll('.executor-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    function filterExecutors() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all';

        executorCards.forEach(card => {
            const sectionId = card.closest('section').id;
            const executorName = card.querySelector('h3').textContent.toLowerCase();
            const matchesSearch = !searchTerm || executorName.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || sectionId === activeFilter;

            card.classList.toggle('hidden', !(matchesSearch && matchesFilter));
        });

        sections.forEach(section => {
            const hasVisibleCards = section.querySelectorAll('.executor-card:not(.hidden)').length > 0;
            section.classList.toggle('hidden', !hasVisibleCards);
        });
    }

    searchInput.addEventListener('input', filterExecutors);

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterExecutors();
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        body.classList.add(savedTheme + '-mode');
    } else if (systemPrefersDark) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    updateToggleIcon();

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
        updateToggleIcon();
    });

    function updateToggleIcon() {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.style.color = '#ffeb3b'; // Màu vàng cho chế độ sáng
        } else {
            icon.style.color = '#ffffff'; // Màu trắng cho chế độ tối
        }
    }
});
