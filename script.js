document.addEventListener('DOMContentLoaded', () => {
    // =====================================================================
    // ---------------------------------------------------------------------
    // --- 1. DỮ LIỆU CÁC EXECUTOR (CHỈNH SỬA Ở ĐÂY ĐỂ UPDATE LINK/VERSION) ---
    // ---------------------------------------------------------------------
    // =====================================================================
    const EXECUTOR_DATA = {
        pc: [
            {
                name: "Velocity",
                logo: "https://files.catbox.moe/tj6brv.png",
                version: "version-1588a9c58c674e38",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://gofile.io/d/N0T8FI", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            },
            {
                name: "Bunni",
                logo: "https://sf-static.upanhlaylink.com/img/image_20251107ec93fb41bcff1cb31ece2f29c4c3d623.jpg",
                version: "version-1588a9c58c674e38",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://github.com/peyton-bunni/bunni-download/raw/refs/heads/main/latestbunni.zip", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            },
            {
                name: "Solara",
                logo: "https://files.catbox.moe/gjzzjt.png",
                version: "version-0f5223fb6e7e4955",
                status: "Online",
                links: [
                    { text: "Download", url: "https://getsolara.dev/download/static/files/Solara.Dir.zip", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Xeno",
                logo: "https://www.xeno.onl/images/xeno.png",
                version: "version-0f5223fb6e7e4955",
                status: "Online",
                links: [
                    { text: "Download", url: "https://xeno.onl/40a25bcf88299d7d251541579671ca47/a92f0e88/5729899ebcd696a9?hash=msT3l0rUql5bEO8R3cfEltzA28H4oLGqTI05IbQUDVtfM1qMntKCgVNQov9KIK4h", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Ronix PC",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "version-1588a9c58c674e38",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://gofile.io/d/iVZKbO", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            }
        ],
        android: [
            {
                name: "Arceus X NEO",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Global", url: "https://www.mediafire.com/file/8841v0l31pwj28e/Roblox_Arceus_X_NEO_1.9.8.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/o6a2yhenrvhqzr5/Roblox_-_VNG_Arceus_X_NEO_1.9.8.apk/file", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            {
                name: "Codex",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Global", url: "https://gofile.io/d/UzbLud", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/8dxf37l1y6xtcct/Codex+v2.701.apk/file", className: "btn-download-alt", statusText: "VNG: Offline" }
                ]
            },
            {
                name: "Delta",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Download", url: "https://delta.filenetwork.vip/file/Delta-2.703.1353.apk", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Ronix",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "2.704",
                status: "Online",
                links: [
                    { text: "Global", url: "https://wearedevs.net/d/Ronix", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://wearedevs.net/d/Ronix", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            {
                name: "Trigon",
                logo: "https://trigonevo.com/wp-content/uploads/2021/09/cropped-New-Trigon-with-Shadow-300x300.png.webp",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Download", url: "https://www.mediafire.com/file/l8z13a1vy83jngt/Trigon_v2.703.1353.apk/file", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Vega X",
                logo: "https://vegax.gg/assets/img/V_logo_white.png",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Download", url: "https://github.com/1f0yt/community/releases/download/Vegax/Vega.X.apk", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "FluxusZ",
                logo: "https://files.catbox.moe/qt87ws.webp",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Global", url: "https://fluxusz.com/download", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://fluxusz.com/download", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            {
                name: "Cryptic",
                logo: "https://getcryptic.net/logo.png",
                version: "2.704",
                status: "Online",
                links: [
                    { text: "Global", url: "https://www.mediafire.com/file/z1lophbifjti0g0/Cryptic_APK_2.704.1060.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/f4dqfrs1jgj5hbm/Cryptic_VNG_APK_2.703.1352.apk/file", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            }
        ],
        ios: [
            {
                name: "Arceus X Neo iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.694",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://www.mediafire.com/file/6lcgdmn244ta2n5/ArceusX_1.6.4_2.668.658.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            },
            {
                name: "Codex iOS",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.694",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://www.mediafire.com/file/7afzer5xxo1110n/Codex_2.674.782.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            },
            {
                name: "Delta iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.703",
                status: "Online",
                links: [
                    { text: "Download", url: "https://deltaexploits.gg/delta-executor-ios", className: "btn-download-main", statusText: "Status: Online" }
                ]
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

    function createExecutorCardHTML(executor) {
        const statusClass = executor.status.toLowerCase().replace(/\s|\(|\)/g, ''); 
        const statusNote = executor.statusNote ? `<span class="status-note">${executor.statusNote}</span>` : '';

        const actionButtonsHTML = executor.links.map(link => {
            return `<a href="${link.url}" class="btn ${link.className}" target="_blank" rel="noopener noreferrer"><i class="fas fa-download"></i> ${link.text}</a>`;
        }).join('');
        
        const statusInfosHTML = executor.links.map(link => {
            const linkStatusText = link.statusText || `Status: ${executor.status}`;
            const linkStatusClass = linkStatusText.includes('Online') ? 'status-online' : (linkStatusText.includes('Offline') ? 'status-offline' : 'status-maintenance');
            return `<span class="status ${linkStatusClass}">${linkStatusText}</span>`;
        }).join('');
        
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
        filterExecutors();
    }

    function filterExecutors() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all';

        sections.forEach(section => {
            const sectionId = section.id;
            let hasVisibleCardsInSection = false;

            section.querySelectorAll('.executor-card').forEach(card => {
                const executorName = card.querySelector('h3').textContent.toLowerCase();
                const matchesSearch = !searchTerm || executorName.includes(searchTerm);
                const matchesFilter = activeFilter === 'all' || sectionId === activeFilter;
                const isVisible = matchesSearch && matchesFilter;
                
                card.style.display = isVisible ? 'flex' : 'none';

                if (isVisible) {
                    hasVisibleCardsInSection = true;
                }
            });

            const showSection = hasVisibleCardsInSection && (activeFilter === 'all' || activeFilter === sectionId);
            section.style.display = showSection ? 'block' : 'none';
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
    
    // =====================================================================
    // --- 3. LOGIC THEME (GIỮ NGUYÊN) ---
    // =====================================================================

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem('theme');

    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.querySelector('span').textContent = theme === 'dark' ? 'LIGHT' : 'DARK';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
        
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    loadExecutors();
});