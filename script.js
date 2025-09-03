document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        body.classList.add(savedTheme);
        updateToggleIcon(savedTheme);
    } else if (systemPrefersDark) {
        body.classList.add('dark-mode');
        updateToggleIcon('dark-mode');
    } else {
        body.classList.add('light-mode'); // Default to light mode if no preference
        updateToggleIcon('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateToggleIcon('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateToggleIcon('light-mode');
        }
    });

    function updateToggleIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark-mode') {
            icon.classList.remove('fa-lightbulb');
            icon.classList.add('fa-lightbulb'); // Giữ nguyên biểu tượng bóng đèn
            // Nếu bạn muốn thay đổi màu bóng đèn để biểu thị trạng thái
            icon.style.color = '#e0e0e0'; // Màu trắng cho chế độ tối
        } else {
            icon.classList.remove('fa-lightbulb');
            icon.classList.add('fa-lightbulb'); // Giữ nguyên biểu tượng bóng đèn
            // Nếu bạn muốn thay đổi màu bóng đèn để biểu thị trạng thái
            icon.style.color = '#ffeb3b'; // Màu vàng cho chế độ sáng
        }
    }

    // Optional: Search functionality
    const searchInput = document.getElementById('executor-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const executorCards = document.querySelectorAll('.executor-card');

            executorCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
