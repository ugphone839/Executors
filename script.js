document.addEventListener('DOMContentLoaded', () => {
    // =====================================================================
    // ---------------------------------------------------------------------
    // --- 1. DỮ LIỆU CÁC EXECUTOR (CHỈNH SỬA Ở ĐÂY ĐỂ UPDATE LINK/VERSION) ---
    // ---------------------------------------------------------------------
    // =====================================================================
    const EXECUTOR_DATA = {
        pc: [
            // VOLCANO
            {
                name: "Volcano",
                logo: "https://files.catbox.moe/ucf3km.png",
                version: "version-4aeb17bd13994560",
                status: "Online",
                links: [{ text: "Download", url: "https://volcano.wtf/", className: "btn-download-main" }]
            },
            // VELOCITY
            {
                name: "Velocity",
                logo: "https://files.catbox.moe/tj6brv.png", 
                version: "version-4aeb17bd13994560",
                status: "Offline",
                links: [{ text: "Download", url: "https://gofile.io/d/OAdat2", className: "btn-download-main" }]
            },
            // SWIFT
            {
                name: "Swift",
                logo: "https://files.catbox.moe/5krpqt.webp",
                version: "version-4aeb17bd13994560",
                status: "Offline",
                links: [{ text: "Download", url: "https://getswift.vip/download", className: "btn-download-main" }]
            },
            // SOLARA
            {
                name: "Solara",
                logo: "https://files.catbox.moe/gjzzjt.png",
                version: "version-4aeb17bd13994560",
                status: "Online",
                links: [{ text: "Download", url: "https://getsolara.dev/download/", className: "btn-download-main" }]
            },
            // XENO
            {
                name: "Xeno",
                logo: "https://www.xeno.onl/images/xeno.png", 
                version: "version-4aeb17bd13994560",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/tteuvpbe9k4p20f/Xeno-v1.2.85.zip/file", className: "btn-download-main" }]
            }
        ],
        ios: [
            // KRNL iOS
            {
                name: "Krnl iOS",
                logo: "https://cdn.wearedevs.net/images/thumbnails/krnl.jpeg",
                version: "2.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://krnl.filenetwork.vip/file/Krnl_release_695.ipa", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://krnl.filenetwork.vip/file/Krnl_vng_release_685.ipa", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            // ARCEUS X NEO iOS
            {
                name: "Arceus X Neo iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.694",
                status: "Offline",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/6lcgdmn244ta2n5/ArceusX_1.6.4_2.668.658.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }]
            },
            // CODEX iOS
            {
                name: "Codex iOS",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.694",
                status: "Offline",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/7afzer5xxo1110n/Codex_2.674.782.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }]
            },
            // DELTA iOS
            {
                name: "Delta iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.695",
                status: "Online",
                links: [{ text: "Download", url: "https://deltaios-executor.com/", className: "btn-download-main", statusText: "Status: Online" }]
            }
        ],
        android: [
            // ARCEUS X NEO
            {
                name: "Arceus X NEO",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "6.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://www.mediafire.com/file/llra8r3n7gi6n8a/Roblox_Arceus_X_NEO_1.9.0_-_FIXED.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/glclfeebbmhzxeq/Roblox_-_VNG_Arceus_X_NEO_1.9.0.apk/file", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            // CODEX
            {
                name: "Codex",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://gofile.io/d/UzbLud", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/3piv87u6044r554/Codex_v2.689_VNG.apk/file", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            // CRYPTIC
            {
                name: "Cryptic",
                logo: "https://getcryptic.net/assets/moonglow-HcoSKqMr.png",
                version: "2.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://www.mediafire.com/file/6q6vmnynk7gu2uv/Cryptic_2.695.956_APK.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/pf4k4kacl46v02b/Cryptic+2.689.880+VNG.apk/file", className: "btn-download-alt", statusText: "VNG: Offline" }
                ]
            },
            // DELTA
            {
                name: "Delta",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.695",
                status: "Online",
                links: [{ text: "Download", url: "https://delta.filenetwork.vip/android.html", className: "btn-download-main", statusText: "Status Global: Online" }]
            },
            // RONIX
            {
                name: "Ronix",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "2.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://wearedevs.net/d/Ronix", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://wearedevs.net/d/Ronix", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            // KRNL
            {
                name: "Krnl",
                logo: "https://cdn.wearedevs.net/images/thumbnails/krnl.jpeg",
                version: "2.695",
                status: "Online",
                links: [
                    { text: "Global", url: "https://krnl.filenetwork.vip/android.html", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://krnl.filenetwork.vip/android.html", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            // TRIGON
            {
                name: "Trigon",
                logo: "https://trigonevo.com/wp-content/uploads/2021/09/cropped-New-Trigon-with-Shadow-300x300.png.webp",
                version: "2.695",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/wb805lrhytsypk5/Trigon_v2.695.956.apk/file", className: "btn-download-main", statusText: "Status Global: Online" }]
            },
            // VEGA X
            {
                name: "Vega X",
                logo: "https://vegax.gg/assets/img/V_logo_white.png",
                version: "2.695",
                status: "Online",
                links: [{ text: "Download", url: "https://github.com/1f0yt/community/releases/download/Vegax/Vega-X-v695.apk", className: "btn-download-main", statusText: "Status Global: Online" }]
            }
        ]
    };

    // =====================================================================
    // ---------------------------------------------------------------------
    // --- 2. LOGIC TẠO CARD & TÌM KIẾM (KHÔNG CẦN CHỈNH SỬA) ---
    // ---------------------------------------------------------------------
    // =====================================================================

    const searchInput = document.getElementById('executor-search');
    const filterTags = document.querySelectorAll('.filter-tag');
    const sections = document.querySelectorAll('.glass-section');
    const themeToggle = document.querySelector('.theme-toggle');

    /**
     * Tạo chuỗi HTML cho một thẻ executor dựa trên dữ liệu.
     * @param {Object} executor - Dữ liệu của executor.
     * @returns {string} Chuỗi HTML của thẻ.
     */
    function createExecutorCardHTML(executor) {
        // Chuyển đổi trạng thái sang định dạng class (online, offline, maintenance)
        const statusClass = executor.status.toLowerCase().replace(/\s|\(|\)/g, ''); 
        const statusNote = executor.statusNote ? `<span class="status-note">${executor.statusNote}</span>` : '';

        // Tạo chuỗi HTML cho các nút hành động (link tải)
        const actionButtonsHTML = executor.links.map(link => {
            return `<a href="${link.url}" class="btn ${link.className}" target="_blank" rel="noopener noreferrer"><i class="fas fa-download"></i> ${link.text}</a>`;
        }).join('');
        
        // Tạo chuỗi HTML cho các trạng thái (ví dụ: Global/VNG)
        const statusInfosHTML = executor.links.map(link => {
            const linkStatusText = link.statusText || `Status: ${executor.status}`;
            // Lấy class dựa trên statusText của từng link
            const linkStatusClass = linkStatusText.includes('Online') ? 'status-online' : (linkStatusText.includes('Offline') ? 'status-offline' : 'status-maintenance');
            return `<span class="status ${linkStatusClass}">${linkStatusText}</span>`;
        }).join('');
        
        // Nếu có nhiều link (Global/VNG) thì dùng statusInfosHTML, ngược lại dùng status chung.
        const infoContent = executor.links.length > 1 ? statusInfosHTML : 
            `<span class="status status-${statusClass}">${executor.status}${statusNote}</span>`;


        return `
            <div class="executor-card">
                <div class="card-header">
                    <img src="${executor.logo}" alt="${executor.name} Logo" class="executor-logo">
                    <h3>${executor.name}</h3>
                </div>
                <div class="card-info">
                    <span class="version">Version: ${executor.version}</span>
                    ${infoContent}
                </div>
                <div class="card-actions">
                    ${actionButtonsHTML}
                </div>
            </div>
        `;
    }

    /**
     * Tải và chèn các thẻ executor vào container tương ứng.
     */
    function loadExecutors() {
        for (const platform in EXECUTOR_DATA) {
            const container = document.getElementById(`${platform}-grid`);
            if (container) {
                let html = '';
                EXECUTOR_DATA[platform].forEach(executor => {
                    html += createExecutorCardHTML(executor);
                });
                container.innerHTML = html;
            }
        }
        filterExecutors(); // Áp dụng bộ lọc ban đầu
    }

    /**
     * Logic lọc và tìm kiếm executors.
     */
    function filterExecutors() {
        const searchTerm = searchInput.value.toLowerCase();
        // Lấy data-filter của thẻ đang active, mặc định là 'all'
        const activeFilter = document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all';

        sections.forEach(section => {
            const sectionId = section.id;
            let hasVisibleCardsInSection = false;

            // Lọc từng card trong section
            section.querySelectorAll('.executor-card').forEach(card => {
                const executorName = card.querySelector('h3').textContent.toLowerCase();
                const matchesSearch = !searchTerm || executorName.includes(searchTerm);

                // Kiểm tra xem section có khớp với filter đang chọn không
                const matchesFilter = activeFilter === 'all' || sectionId === activeFilter;

                // Nếu khớp cả tìm kiếm và bộ lọc section
                const isVisible = matchesSearch && matchesFilter;
                
                // Ẩn/hiện card
                card.style.display = isVisible ? 'flex' : 'none'; // Đổi từ 'block' sang 'flex' để giữ layout

                if (isVisible) {
                    hasVisibleCardsInSection = true;
                }
            });

            // Ẩn/hiện toàn bộ section
            const showSection = hasVisibleCardsInSection && (activeFilter === 'all' || activeFilter === sectionId);
            section.style.display = showSection ? 'block' : 'none';
        });
    }

    // Xử lý sự kiện tìm kiếm
    searchInput.addEventListener('input', filterExecutors);

    // Xử lý sự kiện lọc (Tags)
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterExecutors();
        });
    });
    
    // =====================================================================
    // --- 3. LOGIC THEME (GIỮ NGUYÊN) ---
    // =====================================================================

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem('theme');

    // Thiết lập theme ban đầu
    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    // Update theme toggle icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.querySelector('span').textContent = theme === 'dark' ? 'LIGHT' : 'DARK';
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

    // Bắt đầu quá trình: Load dữ liệu vào HTML
    loadExecutors();
});
