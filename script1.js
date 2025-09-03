document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
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
        // Đối với biểu tượng bóng đèn, chúng ta có thể thay đổi màu sắc để biểu thị trạng thái
        if (theme === 'dark-mode') {
            icon.style.color = '#ffeb3b'; // Màu vàng cho bóng đèn khi ở chế độ tối (như đang sáng trong đêm)
        } else {
            icon.style.color = '#333'; // Màu tối cho bóng đèn khi ở chế độ sáng (như đang tắt)
        }
        // Bạn cũng có thể thay đổi biểu tượng nếu muốn, ví dụ:
        // icon.classList.remove('fa-lightbulb', 'fa-moon', 'fa-sun');
        // if (theme === 'dark-mode') {
        //     icon.classList.add('fa-sun'); // Hiển thị mặt trời khi ở chế độ tối
        // } else {
        //     icon.classList.add('fa-moon'); // Hiển thị mặt trăng khi ở chế độ sáng
        // }
    }

    // Optional: Search functionality
    const searchInput = document.getElementById('executor-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const executorCards = document.querySelectorAll('.executor-card');

            executorCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                // Check if card display is 'none' from previous filter or initial state
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
