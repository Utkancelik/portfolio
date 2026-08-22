/* ========================================
   UTKAN ÇELIK - PORTFOLIO SCRIPTS
   Game data, cards, carousel, lightbox,
   particle canvas, scroll animations, nav
   ======================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ========================================
   GAME DATA (single source of truth)
   Public-safe only — no internal/publisher
   metrics are surfaced on the live site.
   ======================================== */
const GAMES = [
    {
        id: 'boat-defense',
        name: 'Boat Defense: Bag Blast',
        featured: true,
        icon: 'assets/images/icons/boat-defense.jpg',
        accent: '56, 189, 248',            // blue
        role: 'Core Developer',
        studio: 'Brew Games · Voodoo partner',
        genre: 'Casual · Strategy',
        tags: ['Unity', 'C#', 'iOS', 'Live'],
        blurb: 'An endless wave-defense game built around a weapon-merging meta and strategic upgrade paths. Players merge weapons, scale firepower, and push deeper into each run — designed around first-session feel and long-term retention.',
        highlights: ['Weapon merging', 'Endless waves', 'Upgrade meta', 'Live ops ready'],
        appStore: 'https://apps.apple.com/us/app/boat-defense-bag-blast/id6751239129',
        screenshots: [
            'assets/images/screens/boat-2.jpg',
            'assets/images/screens/boat-5.jpg',
            'assets/images/screens/boat-1.jpg',
            'assets/images/screens/boat-3.jpg',
            'assets/images/screens/boat-4.jpg'
        ]
    },
    {
        id: 'fill-defense',
        name: 'Fill Defense: Bouncy Balls',
        featured: false,
        icon: 'assets/images/icons/fill-defense.jpg',
        accent: '16, 185, 129',            // green
        role: 'Core Mechanics Developer',
        studio: 'Brew Games',
        genre: 'Casual · Strategy',
        tags: ['Unity', 'C#', 'iOS', 'Live'],
        blurb: 'A physics-driven defense title where players arrange troops, charge them with bouncing balls, and hold the line across escalating waves and boss fights. I owned the core mechanics and gameplay systems.',
        highlights: ['Physics gameplay', 'Wave defense', 'Merge & charge'],
        appStore: 'https://apps.apple.com/us/app/fill-defense-bouncy-balls/id6753949871',
        screenshots: [
            'assets/images/screens/fill-1.jpg',
            'assets/images/screens/fill-2.jpg',
            'assets/images/screens/fill-3.jpg',
            'assets/images/screens/fill-4.jpg',
            'assets/images/screens/fill-5.jpg'
        ]
    },
    {
        id: 'dice-war',
        name: 'Dice War: Spawn & Battle',
        featured: false,
        icon: 'assets/images/icons/dice-war.jpg',
        accent: '167, 139, 250',           // purple
        role: 'Game Developer',
        studio: 'Brew Games',
        genre: 'Casual · Strategy',
        tags: ['Unity', 'C#', 'iOS', 'Live'],
        blurb: 'A strategy-combat game where dice-driven mechanics spawn units for fast, tactical auto-battles. Features multiple unit types, upgrade paths, and head-to-head matches.',
        highlights: ['Unit spawning', 'Auto-battles', 'Tactical upgrades'],
        appStore: 'https://apps.apple.com/us/app/dice-war-spawn-battle/id6747882869',
        screenshots: [
            'assets/images/screens/dice-1.jpg',
            'assets/images/screens/dice-3.jpg',
            'assets/images/screens/dice-2.jpg',
            'assets/images/screens/dice-4.jpg',
            'assets/images/screens/dice-5.jpg'
        ]
    },
    {
        id: 'softy-drop',
        name: 'Softy Drop',
        featured: false,
        icon: 'assets/images/icons/softy-drop.jpg',
        accent: '251, 191, 36',            // yellow
        role: 'Developer',
        studio: 'Brew Games',
        genre: 'Casual · Puzzle',
        tags: ['Unity', 'C#', 'iOS', 'Live'],
        blurb: 'A match-3 puzzle game I built end-to-end as my final internship project — from first prototype through to App Store release and live metric testing for publishing evaluation.',
        highlights: ['Match-3 core', 'Combo system', 'Shipped solo'],
        appStore: 'https://apps.apple.com/us/app/softy-drop/id6677052121',
        screenshots: [
            'assets/images/screens/softy-4.jpg',
            'assets/images/screens/softy-1.jpg',
            'assets/images/screens/softy-3.jpg',
            'assets/images/screens/softy-2.jpg'
        ]
    },
    {
        id: 'ufobeam',
        name: '@ufobeam',
        featured: false,
        mini: true,
        role: 'Developer',
        studio: 'Moralabs · Internship',
        tags: ['Unity', 'C#', 'Team Project'],
        blurb: 'A team-based UFO game built during my internship at Moralabs — my first taste of professional, cross-functional game development workflows.'
    }
];

/* ========================================
   CONTRIBUTIONS
   Titles I supported on other teams — marketing
   creative work and additional gameplay dev.
   ======================================== */
const CONTRIBUTIONS = [
    {
        id: 'fall-of-the-ages',
        name: 'Fall of the Ages',
        icon: 'assets/images/icons/fall-of-the-ages.jpg',
        studio: 'Brew Games',
        genre: 'Strategy',
        roles: [{ label: 'Game Developer', dev: true }, { label: 'Marketing Creatives' }],
        note: 'Worked on the team as a game developer building gameplay features, alongside marketing creative work for the title.',
        appStore: 'https://apps.apple.com/tr/app/fall-of-the-ages/id6756562405'
    },
    {
        id: 'battle-bag',
        name: 'Battle Bag: War Zone',
        icon: 'assets/images/icons/battle-bag.jpg',
        studio: 'Voodoo',
        genre: 'Strategy · Puzzle',
        roles: [{ label: 'Game Developer', dev: true }, { label: 'Marketing Creatives' }],
        downloads: '3M+',
        note: 'Worked across both sides of the title — a month on core gameplay development, alongside a longer run of marketing ad mechanics.',
        appStore: 'https://apps.apple.com/us/app/battle-bag-war-zone/id6746075769'
    },
    {
        id: 'drop-away',
        name: 'Drop Away: Color Puzzle',
        icon: 'assets/images/icons/drop-away.jpg',
        studio: 'Rollic Games',
        genre: 'Puzzle',
        roles: [{ label: 'Marketing Game Developer' }],
        downloads: '5M+',
        note: "Designed and built a large volume of watch-only marketing creative mechanics driving the title's user acquisition campaigns.",
        appStore: 'https://apps.apple.com/us/app/drop-away-color-puzzle/id6648791704'
    },
    {
        id: 'miner-tycoon',
        name: 'Miner Tycoon: Big Dynamite',
        icon: 'assets/images/icons/miner-tycoon.jpg',
        studio: 'Brew Games',
        genre: 'Simulation',
        roles: [{ label: 'Marketing Creatives' }],
        downloads: '1M+',
        note: "Developed marketing creatives and ad mechanics for one of the studio's longest-running simulation titles.",
        appStore: 'https://apps.apple.com/tr/app/miner-tycoon-big-dynamite/id1624886117'
    },
    {
        id: 'shopping-mall',
        name: 'Shopping Mall 3D',
        icon: 'assets/images/icons/shopping-mall.jpg',
        studio: 'Brew Games',
        genre: 'Simulation',
        roles: [{ label: 'Marketing Creatives' }],
        downloads: '10M+',
        note: 'Created marketing creatives for the title while it was a Brew Games property, translating its core loop into short, high-retention ad moments. The game was later acquired by Sunday.gg.',
        appStore: 'https://apps.apple.com/us/app/shopping-mall-3d/id1603053025'
    }
];

/* ========================================
   RENDER GAME CARDS
   ======================================== */
function renderGames() {
    const container = document.getElementById('gamesContainer');
    if (!container) return;

    const featured = GAMES.filter(g => g.featured);
    const shipped = GAMES.filter(g => !g.featured && !g.mini);
    const earlier = GAMES.filter(g => g.mini);

    let html = '';

    // Featured cards (full width)
    featured.forEach((g, i) => {
        html += gameCardMarkup(g, { featured: true, delay: i + 1 });
    });

    // Shipped grid (2 columns)
    if (shipped.length) {
        html += '<div class="games-row">';
        shipped.forEach((g, i) => {
            html += gameCardMarkup(g, { featured: false, delay: i + 1 });
        });
        html += '</div>';
    }

    // Earlier work (mini cards)
    if (earlier.length) {
        html += '<div class="games-row games-row--mini">';
        earlier.forEach((g, i) => {
            html += miniCardMarkup(g, i + 1);
        });
        html += '</div>';
    }

    container.innerHTML = html;
}

function carouselMarkup(g) {
    const slides = g.screenshots.map((src, i) => `
        <li class="carousel__slide">
            <button class="carousel__zoom" data-lightbox="${g.id}" data-index="${i}"
                aria-label="Open screenshot ${i + 1} of ${g.name} full screen">
                <img src="${src}" alt="${g.name} screenshot ${i + 1}" loading="lazy" decoding="async">
            </button>
        </li>`).join('');

    const dots = g.screenshots.map((_, i) => `
        <button class="carousel__dot${i === 0 ? ' is-active' : ''}" role="tab"
            aria-selected="${i === 0 ? 'true' : 'false'}"
            aria-label="Go to screenshot ${i + 1}" data-dot="${i}"></button>`).join('');

    return `
        <div class="carousel" data-game="${g.id}" style="--game-accent: ${g.accent};"
            aria-roledescription="carousel" aria-label="${g.name} screenshots">
            <div class="carousel__viewport">
                <ul class="carousel__track">${slides}</ul>
            </div>
            <button class="carousel__btn carousel__btn--prev" aria-label="Previous screenshot">&#8249;</button>
            <button class="carousel__btn carousel__btn--next" aria-label="Next screenshot">&#8250;</button>
            <div class="carousel__dots" role="tablist" aria-label="Choose screenshot">${dots}</div>
        </div>`;
}

function gameCardMarkup(g, { featured, delay }) {
    const tags = g.tags.map(t => `<span class="game-tag">${t}</span>`).join('');
    const pills = (g.highlights || []).map(h => `<li class="feature-pill">${h}</li>`).join('');
    const cls = `game-card${featured ? ' game-card--featured' : ''} reveal reveal-delay-${delay}`;

    return `
    <article class="${cls}" id="game-${g.id}" style="--game-accent: ${g.accent};">
        <div class="game-card__media">${carouselMarkup(g)}</div>
        <div class="game-card__body">
            <div class="game-card__head">
                <img class="game-card__icon" src="${g.icon}" alt="${g.name} app icon"
                    width="68" height="68" loading="lazy">
                <div class="game-card__heading">
                    <span class="badge badge--live"><span class="badge__dot"></span> Live on App Store</span>
                    <h3 class="game-card__name">${g.name}</h3>
                    <p class="game-card__role">${g.role} · ${g.studio}</p>
                </div>
            </div>
            <p class="game-card__blurb">${g.blurb}</p>
            <ul class="feature-pills">${pills}</ul>
            <div class="game-card__tags">${tags}</div>
            <div class="game-card__actions">
                <a class="btn btn-primary btn-sm" href="${g.appStore}" target="_blank" rel="noopener noreferrer">
                    View on App Store ↗
                </a>
                <button class="btn btn-secondary btn-sm" data-lightbox="${g.id}" data-index="0">
                    Screenshots
                </button>
            </div>
        </div>
    </article>`;
}

function miniCardMarkup(g, delay) {
    const tags = g.tags.map(t => `<span class="game-tag">${t}</span>`).join('');
    return `
    <article class="game-card game-card--mini reveal reveal-delay-${delay}" id="game-${g.id}">
        <div class="game-card__body">
            <span class="game-card__eyebrow">Earlier work</span>
            <h3 class="game-card__name">${g.name}</h3>
            <p class="game-card__role">${g.role} · ${g.studio}</p>
            <p class="game-card__blurb">${g.blurb}</p>
            <div class="game-card__tags">${tags}</div>
        </div>
    </article>`;
}

/* ========================================
   RENDER CONTRIBUTIONS
   ======================================== */
function renderContributions() {
    const container = document.getElementById('contribContainer');
    if (!container) return;

    container.innerHTML = CONTRIBUTIONS.map((c, i) => {
        const roles = c.roles
            .map(r => `<span class="contrib-role-tag${r.dev ? ' dev' : ''}">${r.label}</span>`)
            .join('');
        const dl = c.downloads
            ? `<span class="contrib-dl">↓ ${c.downloads} downloads</span>`
            : '';
        return `
        <a class="contrib-card reveal reveal-delay-${(i % 3) + 1}" href="${c.appStore}"
            target="_blank" rel="noopener noreferrer">
            <div class="contrib-icon">
                <img src="${c.icon}" alt="${c.name} app icon" width="62" height="62" loading="lazy">
            </div>
            <div class="contrib-body">
                <div class="contrib-name">${c.name}</div>
                <div class="contrib-publisher">${c.studio} · ${c.genre}</div>
                <p class="contrib-note">${c.note}</p>
                <div class="contrib-roles">${dl}${roles}</div>
            </div>
            <span class="contrib-arrow" aria-hidden="true">↗</span>
        </a>`;
    }).join('');
}

/* ========================================
   SCREENSHOT CAROUSEL
   ======================================== */
function initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel__track');
        const slides = carousel.querySelectorAll('.carousel__slide');
        const dots = carousel.querySelectorAll('.carousel__dot');
        const prev = carousel.querySelector('.carousel__btn--prev');
        const next = carousel.querySelector('.carousel__btn--next');
        let index = 0;
        const count = slides.length;
        if (!count) return;

        function go(i) {
            index = (i + count) % count;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, di) => {
                const active = di === index;
                d.classList.toggle('is-active', active);
                d.setAttribute('aria-selected', active ? 'true' : 'false');
            });
        }

        prev.addEventListener('click', () => go(index - 1));
        next.addEventListener('click', () => go(index + 1));
        dots.forEach((d, di) => d.addEventListener('click', () => go(di)));

        // Touch / pointer swipe
        let startX = null;
        carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        carousel.addEventListener('touchend', e => {
            if (startX === null) return;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            startX = null;
        }, { passive: true });

        // Keyboard when focused
        carousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') { go(index - 1); }
            else if (e.key === 'ArrowRight') { go(index + 1); }
        });

        if (count < 2) {
            prev.style.display = 'none';
            next.style.display = 'none';
            carousel.querySelector('.carousel__dots').style.display = 'none';
        }
    });
}

/* ========================================
   LIGHTBOX (shared, accessible)
   ======================================== */
function initLightbox() {
    const triggers = document.querySelectorAll('[data-lightbox]');
    if (!triggers.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Screenshot viewer');
    overlay.hidden = true;
    overlay.innerHTML = `
        <button class="lightbox__close" aria-label="Close screenshot viewer">&times;</button>
        <button class="lightbox__btn lightbox__btn--prev" aria-label="Previous screenshot">&#8249;</button>
        <figure class="lightbox__figure">
            <img class="lightbox__img" src="" alt="">
            <figcaption class="lightbox__caption"></figcaption>
        </figure>
        <button class="lightbox__btn lightbox__btn--next" aria-label="Next screenshot">&#8250;</button>`;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox__img');
    const captionEl = overlay.querySelector('.lightbox__caption');
    const closeBtn = overlay.querySelector('.lightbox__close');
    const prevBtn = overlay.querySelector('.lightbox__btn--prev');
    const nextBtn = overlay.querySelector('.lightbox__btn--next');

    let current = { shots: [], index: 0, name: '' };
    let lastFocused = null;

    function show(i) {
        const n = current.shots.length;
        current.index = (i + n) % n;
        imgEl.src = current.shots[current.index];
        imgEl.alt = `${current.name} screenshot ${current.index + 1}`;
        captionEl.textContent = `${current.name} · ${current.index + 1} / ${n}`;
    }

    function open(gameId, index) {
        const game = GAMES.find(g => g.id === gameId);
        if (!game || !game.screenshots) return;
        current = { shots: game.screenshots, index: index || 0, name: game.name };
        lastFocused = document.activeElement;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        show(current.index);
        closeBtn.focus();
    }

    function close() {
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    triggers.forEach(t => {
        t.addEventListener('click', e => {
            e.preventDefault();
            open(t.getAttribute('data-lightbox'), parseInt(t.getAttribute('data-index') || '0', 10));
        });
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => show(current.index - 1));
    nextBtn.addEventListener('click', () => show(current.index + 1));
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    document.addEventListener('keydown', e => {
        if (overlay.hidden) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') show(current.index - 1);
        else if (e.key === 'ArrowRight') show(current.index + 1);
        else if (e.key === 'Tab') {
            // simple focus trap across the three controls
            const focusables = [closeBtn, prevBtn, nextBtn];
            const i = focusables.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); focusables[focusables.length - 1].focus(); }
            else if (!e.shiftKey && i === focusables.length - 1) { e.preventDefault(); focusables[0].focus(); }
        }
    });
}

/* ========================================
   PARTICLE CANVAS (Hero Background)
   ======================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, particles, mouse;

    mouse = { x: null, y: null, radius: 150 };

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
            // colors matching our theme
            const colors = [
                '108, 99, 255',   // primary purple
                '167, 139, 250',  // secondary purple
                '56, 189, 248',   // blue
                '244, 114, 182',  // pink
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= dx * force * 0.02;
                    this.y -= dy * force * 0.02;
                }
            }

            // Wrap around
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    function createParticles() {
        const count = Math.min(Math.floor((width * height) / 8000), 150);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    const opacity = ((120 - dist) / 120) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function drawStaticFrame() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => p.draw());
        drawConnections();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    }

    // Mouse tracking
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        resize();
        createParticles();
        if (prefersReducedMotion) drawStaticFrame();
    });

    resize();
    createParticles();
    // Respect reduced-motion: render one calm static frame instead of animating.
    if (prefersReducedMotion) {
        drawStaticFrame();
    } else {
        animate();
    }
}

/* ========================================
   SCROLL REVEAL ANIMATIONS
   ======================================== */
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    // Reduced motion: just show everything, no observer needed.
    if (prefersReducedMotion) {
        revealEls.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve — keep observing for re-entry
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
}

/* ========================================
   NAVBAR SCROLL BEHAVIOR
   ======================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ========================================
   MOBILE MENU
   ======================================== */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderGames();        // build cards first so the rest can wire to them
    renderContributions();
    initCarousels();
    initLightbox();
    initParticleCanvas();
    initScrollReveal();   // observe AFTER cards are in the DOM
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
});
