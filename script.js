document.addEventListener('DOMContentLoaded', () => {
    // =====================================================================
    // ---------------------------------------------------------------------
    // --- 1. DỮ LIỆU CÁC EXECUTOR (CHỈNH SỬA Ở ĐÂY ĐỂ UPDATE LINK/VERSION) ---
    // ---------------------------------------------------------------------
    // =====================================================================
    const EXECUTOR_DATA = {
        pc: [
            {
                name: "Volcano",
                logo: "https://files.catbox.moe/ucf3km.png",
                version: "version-e380c8edc8f6477c",
                status: "Online",
                links: [{ text: "Download", url: "https://volcano.wtf/", className: "btn-download-main" }]
            },
            {
                name: "Velocity",
                logo: "https://files.catbox.moe/tj6brv.png",
                version: "version-f6dd34ecac7b4642",
                status: "Offline",
                links: [{ text: "Download", url: "https://gofile.io/d/YDhJnQ", className: "btn-download-main" }]
            },
            {
                name: "Bunni",
                logo: "https://sf-static.upanhlaylink.com/img/image_20251107ec93fb41bcff1cb31ece2f29c4c3d623.jpg",
                version: "version-e380c8edc8f6477c",
                status: "Online",
                links: [{ text: "Download", url: "https://github.com/vmp0rblx/bunni-download/raw/refs/heads/main/latestbunni.zip", className: "btn-download-main" }]
            },
            {
                name: "Swift",
                logo: "https://files.catbox.moe/5krpqt.webp",
                version: "Chưa Up",
                status: "Offline",
                links: [{ text: "Download", url: "https://getswift.vip/download", className: "btn-download-main" }]
            },
            {
                name: "Trigon PC",
                logo: "https://sf-static.upanhlaylink.com/img/image_20251107e5b9a4a53af563430e8892ad618a40cd.jpg",
                version: "Chờ Cập Nhật",
                status: "Offline",
                links: [{ text: "Download", url: "https://volcano.wtf/", className: "btn-download-main" }]
            },
            {
                name: "Solara",
                logo: "https://files.catbox.moe/gjzzjt.png",
                version: "version-e380c8edc8f6477c",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/v0rhes4h8s6x8ta/Solara.Dir.zip/file", className: "btn-download-main" }]
            },
            {
                name: "Xeno",
                logo: "https://www.xeno.onl/images/xeno.png",
                version: "version-e380c8edc8f6477c",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/c4ok6d5n1yadix1/Xeno-v1.3.0a.zip/file", className: "btn-download-main" }]
            }
        ],
        ios: [
            {
                name: "Krnl iOS",
                logo: "https://cdn.wearedevs.net/images/thumbnails/krnl.jpeg",
                version: "2.695",
                status: "Online",
                links: [{ text: "Global", url: "https://krnl.filenetwork.vip/file/Krnl_release_695.ipa", className: "btn-download-main", statusText: "Global: Offline" },
                    { text: "VNG", url: "https://krnl.filenetwork.vip/file/Krnl_vng_release_685.ipa", className: "btn-download-alt", statusText: "VNG: Offline" }]
            },
            {
                name: "Arceus X Neo iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.694",
                status: "Offline",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/6lcgdmn244ta2n5/ArceusX_1.6.4_2.668.658.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }]
            },
            {
                name: "Codex iOS",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.694",
                status: "Offline",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/7afzer5xxo1110n/Codex_2.674.782.ipa/file", className: "btn-download-main", statusText: "Status: Offline" }]
            },
            {
                name: "Delta iOS",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.700",
                status: "Online",
                links: [{ text: "Download", url: "https://cdn.gloopup.net/file/Delta-2.700.937.ipa", className: "btn-download-main", statusText: "Status: Online" }]
            }
        ],
        android: [
            {
                name: "Arceus X NEO",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091341b69c6afa4e02709bf1ba299bdbafbd.jpg",
                version: "2.700",
                status: "Online",
                links: [{ text: "Global", url: "https://www.mediafire.com/file/09w82odqxa0pl2f/Roblox_Arceus_X_NEO_1.9.5.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/glclfeebbmhzxeq/Roblox_-_VNG_Arceus_X_NEO_1.9.0.apk/file", className: "btn-download-alt", statusText: "VNG: Offline" }]
            },
            {
                name: "Codex",
                logo: "https://codex.lol/static/icons/icon.svg",
                version: "2.700",
                status: "Online",
                links: [{ text: "Global", url: "https://www.mediafire.com/file/xrq7h1tmzcf5p4z/Codex+V2.700.937.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/3piv87u6044r554/Codex_v2.689_VNG.apk/file", className: "btn-download-alt", statusText: "VNG: Offline" }]
            },
            {
                name: "Delta",
                logo: "https://sf-static.upanhlaylink.com/img/image_2025091320b780aa4e49c945bdddf569984a41b6.jpg",
                version: "2.702",
                status: "Online",
                links: [{ text: "Download", url: "https://delta.filenetwork.vip/file/Delta-2.701.966.apk", className: "btn-download-main", statusText: "Status: Online" }]
            },
            {
                name: "Ronix",
                logo: "https://wearedevs.net/images/ronix/ronix-animated.gif",
                version: "2.702",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/iylc3zmrl0t8xi5/Ronix_64Bits.apk/file", className: "btn-download-main", statusText: "Status: Online" }]
            },
            {
                name: "Krnl",
                logo: "https://cdn.wearedevs.net/images/thumbnails/krnl.jpeg",
                version: "2.698",
                status: "Online",
                links: [{ text: "Global", url: "https://krnl.filenetwork.vip/file/krnl_release_2.697.926_2025.11.2_53.apk", className: "btn-download-main", statusText: "Global: Offline" },
                    { text: "VNG", url: "https://krnl.filenetwork.vip/android.html", className: "btn-download-alt", statusText: "VNG: Offline" }]
            },
            {
                name: "Trigon",
                logo: "https://trigonevo.com/wp-content/uploads/2021/09/cropped-New-Trigon-with-Shadow-300x300.png.webp",
                version: "2.700",
                status: "Online",
                links: [{ text: "Download", url: "https://www.mediafire.com/file/f64gdk82080cepo/Trigon_FIX_v2.700.937.apk/file", className: "btn-download-main", statusText: "Status Global: Online" }]
            },
            {
                name: "Vega X",
                logo: "https://vegax.gg/assets/img/V_logo_white.png",
                version: "2.700",
                status: "Online",
                links: [{ text: "Download", url: "https://github.com/1f0yt/community/releases/download/Vegax/Vega.X.apk", className: "btn-download-main", statusText: "Status: Online" }]
            },
            {
                name: "FluxusZ",
                logo: "https://files.catbox.moe/qt87ws.webp",
                version: "2.702",
                status: "Online",
                links: [{ text: "Global", url: "https://www.mediafire.com/file/7iizmrzio32qsve/FluxusZ+V3.0.6+ARM64.apk/file", className: "btn-download-main", statusText: "Global: Online" },
                    { text: "VNG", url: "https://www.mediafire.com/file/v2iuh5a7klnu84j/FluxusZ+V3.0.6+VNG+ARM64.apk/file", className: "btn-download-alt", statusText: "VNG: Online" }]
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