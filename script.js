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
                version: "version-bd08027bb04e4045",
                status: "Online",
                links: [
                    { text: "Download", url: "https://gofile.io/d/biQGwp", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Bunni",
                logo: "https://sf-static.upanhlaylink.com/img/image_20251107ec93fb41bcff1cb31ece2f29c4c3d623.jpg",
                version: "version-db4634f0e27d4d36",
                status: "Offline",
                links: [
                    { text: "Download", url: "https://bunni-static.online/files/2c772d84-9dd7-4068-87d8-22ea5ee8704c", className: "btn-download-main", statusText: "Status: Offline" }
                ]
            },
            {
                name: "Solara",
                logo: "https://files.catbox.moe/gjzzjt.png",
                version: "version-bd08027bb04e4045",
                status: "Online",
                links: [
                    { text: "Download", url: "https://getsolara.dev/download/static/files/Solara.Dir.zip", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Xeno",
                logo: "https://www.xeno.onl/images/xeno.png",
                version: "version-bd08027bb04e4045",
                status: "Online",
                links: [
                    { text: "Download", url: "https://xeno.onl/33054e6324afae35e63859ba1f6b492f/98000f2a/bdf367db6b50b0b2?hash=egDUI5nKm0EBGCQ95Ff4Nqvfq3A8rHv01uyoCt1p9PjdfwGe3kZrBrkPQbOJ8bBsBpGbdoGpUPV08A4f0zm", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Ronix PC",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "version-bd08027bb04e4045",
                status: "Online",
                links: [
                    { text: "Download", url: "https://wrdcdn.net/r/154522/1769203129478/RonixInstaller_NEW.exe", className: "btn-download-main", statusText: "Status: Online" }
                ]
            }
        ],
        android: [
            {
                name: "Arceus X NEO",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.707",
                status: "Online",
                links: [
                    { text: "Global", url: "https://spdmteam.com/neo#downloads", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://spdmteam.com/neo#downloads", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            {
                name: "Codex",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.706",
                status: "Partial",
                links: [
                    { text: "Global", url: "https://www.mediafire.com/file/f17wgcyt0nznss9/Codex+v2.706.750+FIXED.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/8dxf37l1y6xtcct/Codex+v2.701.apk/file", className: "btn-download-alt", statusText: "VNG: Offline" }
                ]
            },
            {
                name: "Delta",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.706",
                status: "Online",
                links: [
                    { text: "Download", url: "https://delta.filenetwork.vip/file/Delta-2.706.750.apk", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Ronix",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "2.707",
                status: "Online",
                links: [
                    { text: "Global", url: "https://wearedevs.net/d/Ronix", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://wearedevs.net/d/Ronix", className: "btn-download-alt", statusText: "VNG: Online" }
                ]
            },
            {
                name: "Trigon",
                logo: "https://trigonevo.com/wp-content/uploads/2021/09/cropped-New-Trigon-with-Shadow-300x300.png.webp",
                version: "2.706",
                status: "Online",
                links: [
                    { text: "Download", url: "https://www.mediafire.com/file/tdss3e8s9cn2lkd/Trigon_2.706.750_FIX.apk/file", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Vega X",
                logo: "https://vegax.gg/assets/img/V_logo_white.png",
                version: "2.706",
                status: "Online",
                links: [
                    { text: "Download", url: "https://github.com/1f0yt/community/releases/download/Vegax/Vega.X.apk", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "FluxusZ",
                logo: "https://files.catbox.moe/qt87ws.webp",
                version: "2.704",
                status: "Offline",
                links: [
                    { text: "Global", url: "https://fluxusz.com/download", className: "btn-download-main", statusText: "Global: Offline" },
                    { text: "VNG", url: "https://fluxusz.com/download", className: "btn-download-alt", statusText: "VNG: Offline" }
                ]
            },
            {
                name: "Cryptic",
                logo: "https://getcryptic.net/logo.png",
                version: "2.707",
                status: "Online",
                links: [
                    { text: "Global", url: "https://getcryptic.net/", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://getcryptic.net/", className: "btn-download-alt", statusText: "VNG: Online" }
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
                version: "2.705",
                status: "Online",
                links: [
                    { text: "Download", url: "https://deltaexploits.gg/delta-executor-ios", className: "btn-download-main", statusText: "Status: Online" }
                ]
            },
            {
                name: "Ronix IOS",
                logo: "https://obj.wearedevs.net/images/software/ronix/ronix-020426.webp",
                version: "2.708",
                status: "Online",
                links: [
                    { text: "Global", url: "https://ronixstudios.io/#/download?platform=ios", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://ronixstudios.io/#/download?platform=vng-ios", className: "btn-download-alt", statusText: "VNG: Online" }
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