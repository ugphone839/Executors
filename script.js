document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('executor-search');
    const filterTags = document.querySelectorAll('.filter-tag');
    const sections = document.querySelectorAll('.glass-section'); // Đã sửa tên class
    const executorCards = document.querySelectorAll('.executor-card');
    const themeToggle = document.querySelector('.theme-toggle');

    // --- 1. Filter Logic ---

    function filterExecutors() {
        const searchTerm = searchInput.value.toLowerCase();
        // Lấy filter đang active từ thẻ có class 'active'
        const activeFilter = document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all';

        sections.forEach(section => {
            const sectionId = section.id;
            let hasVisibleCardsInSection = false;

            // Lọc từng card trong section
            section.querySelectorAll('.executor-card').forEach(card => {
                const executorName = card.querySelector('h3').textContent.toLowerCase();
                const matchesSearch = !searchTerm || executorName.includes(searchTerm);

                // Nếu filter là 'all' HOẶC sectionId khớp với filter
                const matchesFilter = activeFilter === 'all' || sectionId === activeFilter;

                // Nếu khớp cả tìm kiếm và bộ lọc section
                const isVisible = matchesSearch && matchesFilter;
                
                // Ẩn/hiện card
                card.style.display = isVisible ? 'block' : 'none';

                if (isVisible) {
                    hasVisibleCardsInSection = true;
                }
            });

            // Ẩn/hiện toàn bộ Section
            if (activeFilter === 'all' || activeFilter === sectionId) {
                // Nếu activeFilter là 'all', chỉ ẩn section nếu không có card nào khớp với tìm kiếm.
                // Nếu activeFilter là sectionId, luôn hiện section đó (nếu có card).
                section.style.display = hasVisibleCardsInSection ? 'block' : 'none';
                section.classList.toggle('hidden', !hasVisibleCardsInSection);
            } else {
                 // Nếu không khớp với filter đang chọn thì ẩn section đi
                section.style.display = 'none';
                section.classList.add('hidden');
            }
        });
    }

    // Event listeners cho Search
    searchInput.addEventListener('input', filterExecutors);

    // Event listeners cho Filter Tags
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Xóa active khỏi tất cả các tags
            filterTags.forEach(t => t.classList.remove('active'));
            // Thêm active vào tag được click
            tag.classList.add('active');
            
            // Xóa input tìm kiếm (để lọc theo tag chính xác hơn)
            searchInput.value = '';

            // Chạy lại hàm lọc
            filterExecutors();
        });
    });
    
    // Khởi tạo trạng thái lọc ban đầu
    filterExecutors();


    // --- 2. Theme Toggle Logic ---
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme
    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    // Update theme toggle icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Theme toggle click handler with smooth transition
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class
        document.documentElement.classList.add('theme-transition');
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
