/* ============================================
   AWA FAYE — PORTFOLIO GÉOMATIQUE
   ess.js — Version Finale Complète + Corrigée
   ============================================ */

// ===== DONNÉES PROJETS =====
const PROJETS = [
    {
        id: 1,
        
        titre: "Cartographie urbaine de Thiès",
        description: "Enquête terrain sur le trafic routier à Thiès. Collecte et analyse de données d'infrastructures routières.",
        tags: ["QGIS", "KoboToolBox", "Multi Counter"],
        categorie: "sig",
        lien: "#",
        image: "../image/trc.jpg"  // ← corrige le chemin
    },
    {
        id: 2,
        titre: "Qualité de l'air à Thiès",
        description: "Analyse des niveaux de pollution à partir de capteurs répartis en zones.",
        tags: ["RStudio"],
        categorie: "data",
        lien: "#",
        image: "images/projets/dynamique-urbaine.jpg"
    },
    {
        id: 3,
        titre: "Portfolio Personnel",
        description: "Vitrine en ligne pour présenter compétences, projets et formulaire de contact.",
        tags: ["VScode", "HTML5", "CSS3", "JavaScript"],
        categorie: "web",
        lien: "#",
        image: "../image/portf.png"
    },
    {
        id: 4,
        titre: "CV Responsive",
        description: "Réalisation d'un CV responsive avec HTML et CSS.",
        categorie: "web",
        tags: ["VSCode", "CSS", "HTML"],
        lien: "#",
        image: "../image/cv.png"
    }
];


// ===== DONNÉES COMPÉTENCES =====
// ===== DONNÉES COMPÉTENCES =====
const competences = [
    {
        categorie: "🗺️ SIG & Cartographie",
        description: "Maîtrise des outils de Systèmes d'Information Géographique pour la création de cartes thématiques et l'analyse spatiale.",
        skills: [
            { nom: "QGIS", pct: 85, niveau: "Avancé", levelClass: "level-advanced", desc: "Cartographie thématique, numérisation, analyses spatiales" },
            { nom: "ArcGIS", pct: 55, niveau: "Intermédiaire", levelClass: "level-intermediate", desc: "Notions de base numérisation, et analyses simples" },
            { nom: "Télédétection", pct: 60, niveau: "Intermédiaire", levelClass: "level-intermediate", desc: "Analyse d'images satellitaires" }
        ]
    },
    {
        categorie: "💻 Développement Web",
        description: "Création d'interfaces web modernes et d'applications cartographiques interactives accessibles à tous.",
        skills: [
            { nom: "HTML & CSS", pct: 90, niveau: "Avancé", levelClass: "level-advanced", desc: "Intégration, responsive design, animations" },
            { nom: "JavaScript", pct: 75, niveau: "Intermédiaire", levelClass: "level-intermediate", desc: "Interactivité, DOM, API, modules ES6+" },
            { nom: "Git & GitHub", pct: 45, niveau: "Débutant", levelClass: "level-beginner", desc: "Versionnage et collaboration" }
        ]
    },
    {
        categorie: "📊 Analyse de données",
        description: "Traitement statistique et analyse de données géographiques pour en extraire des informations pertinentes.",
        skills: [
            { nom: "RStudio", pct: 75, niveau: "Intermédiaire", levelClass: "level-intermediate", desc: "Statistiques spatiales, visualisation de données" },
            { nom: "Python", pct: 50, niveau: "Débutant", levelClass: "level-beginner", desc: "Manipulation de données géospatiales" },
            { nom: "Excel / Tableur", pct: 80, niveau: "Avancé", levelClass: "level-advanced", desc: "Analyse statistique, tableaux croisés" },
            { nom: "MySQL", pct: 55, niveau: "Intermédiaire", levelClass: "level-intermediate", desc: "Requêtes spatiales, Bases de données spatiales" }
        ]
    },
    {
        categorie: "🎨 Outils & Méthodes",
        description: "Utilisation d'outils complémentaires pour la production de documents professionnels et la gestion de projets.",
        skills: [
            { nom: "Design cartographique", pct: 85, niveau: "Avancé", levelClass: "level-advanced", desc: "Visualisation et communication" },
            { nom: "Méthodologie projet", pct: 75, niveau: "Avancé", levelClass: "level-advanced", desc: "Planification et gestion" },
            { nom: "KoboToolBox", pct: 80, niveau: "Avancé", levelClass: "level-advanced", desc: "Création de formulaires, collecte de données terrain" },
            { nom: "PowerPoint", pct: 95, niveau: "Avancé", levelClass: "level-advanced", desc: "Présentations, rapports cartographiques" }
        ]
    }
];
// ===== DONNÉES GALERIE =====
const galeriePhotos = [
    { src: "../image/galerie/trf1.png", alt: "Projets trafic", caption: "Carte de chaleur du trafic total" },
    { src: "../image/galerie/trf2.png", alt: "Projets trafic", caption: "Carte du trafic par période" },
    { src: "../image/galerie/trf3.png", alt: "Projets trafic", caption: "Carte du trafic par type de véhicule" },
    { src: "../image/galerie/trf4.png", alt: "Projets trafic", caption: "Carte du trafic total par carrefour" },
    { src: "../image/galerie/CARTO.jpg", alt: "Analyse spatiale", caption: "Numérisation" },
    { src: "../image/galerie/cartesen.png", alt: "carte", caption: "Carte du Sénégal" },
    { src: "../image/galerie/grp1.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/grp2.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/grp3.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/grp4.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/grp5.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/grp6.png", alt: "Graphique", caption: "Analyse de données" },
    { src: "../image/galerie/carte.png", alt: "Graphique", caption: "Région de Tamba " }
];

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initHamburger();
    initScrollSpy();
    renderProjets();
    renderCompetences();
    initFiltres();
    initReveal();
    initContact();
    initBackToTop();
    initAnimations();
    initDownloadCV();
    initQRCode();
    initShareButton();
    initViewToggle();
    initTypingAnimation();
    initStatsCounter();
    initSmoothScroll();
    initCustomCursor();
    initSocialLinks();
    initHeroGallery();
    initParticleBackground();
    initMouseParallax();
    initGlowEffect();
    initFloatingElements();
    animateGreetingWave();
    console.log("🎉 Portfolio Awa Faye — initialisé avec succès !");
});

// ===== THÈME CLAIR / SOMBRE =====
function initTheme() {
    const btn   = document.getElementById('themeBtn');
    const icon  = document.getElementById('tIcon');
    const label = document.getElementById('tLabel');
    const body  = document.body;

    const style = document.createElement('style');
    style.textContent = `
        .theme-grain {
            position:fixed; border-radius:50%; pointer-events:none; z-index:99999;
            animation:grainFall var(--dur) ease-in forwards;
        }
        @keyframes grainFall {
            0%   { transform:translate(0,0) scale(1) rotate(0deg); opacity:1; }
            70%  { opacity:0.8; }
            100% { transform:translate(var(--tx),var(--ty)) scale(var(--sf)) rotate(var(--rot)); opacity:0; }
        }
        .theme-icon.spinning {
            animation:iconSpin 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes iconSpin {
            0%   { transform:rotate(0deg) scale(1); }
            50%  { transform:rotate(180deg) scale(1.35); }
            100% { transform:rotate(360deg) scale(1); }
        }
        body.theme-transitioning * {
            transition:background-color 0.45s ease, color 0.45s ease,
                       border-color 0.45s ease, box-shadow 0.45s ease !important;
        }
    `;
    document.head.appendChild(style);

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme, icon, label);

    if (!btn) return;

    btn.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';

        // Grains qui tombent
        const rect    = btn.getBoundingClientRect();
        const originX = rect.left + rect.width  / 2;
        const originY = rect.top  + rect.height / 2;
        const colors  = next === 'dark'
            ? ['#a8c7fa','#7ba7f7','#4d87f5','#c9d8ff','#ffffff','#e0ecff']
            : ['#ffd166','#ffb347','#ff9a3c','#fff3b0','#ffffff','#ffe08a'];

        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                const grain = document.createElement('div');
                grain.className = 'theme-grain';
                const size  = Math.random() * 7 + 2;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const angle = Math.random() * 200 - 100;
                const rad   = angle * Math.PI / 180;
                const dist  = Math.random() * 120 + 60;
                const tx    = Math.sin(rad) * dist;
                const ty    = Math.cos(rad) * dist + 40;
                const rot   = (Math.random() - 0.5) * 720;
                const dur   = (Math.random() * 0.5 + 0.6).toFixed(2);
                const sf    = (Math.random() * 0.4 + 0.1).toFixed(2);
                grain.style.cssText = `
                    width:${size}px;height:${size}px;background:${color};
                    left:${originX - size/2}px;top:${originY - size/2}px;
                    --tx:${tx}px;--ty:${ty}px;--rot:${rot}deg;--dur:${dur}s;--sf:${sf};
                    box-shadow:0 0 ${size}px ${color}80;
                `;
                document.body.appendChild(grain);
                grain.addEventListener('animationend', () => grain.remove());
            }, i * 18);
        }

        // Rotation icône
        if (icon) {
            icon.classList.remove('spinning');
            void icon.offsetWidth;
            icon.classList.add('spinning');
            icon.addEventListener('animationend', () => icon.classList.remove('spinning'), { once: true });
        }

        // Transition douce
        body.classList.add('theme-transitioning');
        setTimeout(() => body.classList.remove('theme-transitioning'), 500);

        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeUI(next, icon, label);
    });
}

function updateThemeUI(theme, icon, label) {
    if (!icon || !label) return;
    if (theme === 'dark') { icon.textContent = '🌙'; label.textContent = 'Sombre'; }
    else                  { icon.textContent = '☀️'; label.textContent = 'Clair'; }
}

// ===== MENU HAMBURGER =====
function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== SCROLL SPY =====
function initScrollSpy() {
    const navbar   = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' }).observe
    // Fix : observer chaque section individuellement
    ;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => obs.observe(s));

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
}

// ===== RENDU PROJETS =====
function renderProjets(filtre = 'tous') {
    const container = document.getElementById('projets-container');
    if (!container) return;

    const liste = filtre === 'tous' ? PROJETS : PROJETS.filter(p => p.categorie === filtre);
    container.innerHTML = '';

    if (liste.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:var(--clr-text-muted);grid-column:1/-1;">Aucun projet dans cette catégorie.</p>`;
        return;
    }

    liste.forEach((projet, i) => {
        const carte = document.createElement('div');
        carte.className = 'projet-carte reveal';
        carte.style.animationDelay = `${i * 0.1}s`;
        
        // Gestion de l'image avec vérification
        let imageHtml = '';
        if (projet.image && projet.image !== '#') {
            imageHtml = `<img src="${projet.image}" alt="${projet.titre}" class="carte-img-real" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\"carte-img-fallback\"><i class=\"fas fa-image\"></i><span>Image non disponible</span></div>'">`;
        } else {
            imageHtml = `<div class="carte-img-fallback"><i class="fas fa-map"></i><span>${projet.titre}</span></div>`;
        }
        
        carte.innerHTML = `
            <div class="carte-img">
                ${imageHtml}
            </div>
            <div class="carte-body">
                <h3 class="carte-titre">${projet.titre}</h3>
                <p class="carte-desc">${projet.description}</p>
                <div class="carte-tags-wrapper">
                    <div class="carte-tags-title">
                        <i class="fas fa-tools"></i> Outils utilisés
                    </div>
                    <div class="carte-tags">
                        ${projet.tags.map(t => `<span class="carte-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <button class="carte-lien btn-voir-projet" data-id="${projet.id}">
                    Voir le projet <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        container.appendChild(carte);
    });

    requestAnimationFrame(() => {
        container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    });

    // Attacher les événements
    container.querySelectorAll('.btn-voir-projet').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const projet = PROJETS.find(p => p.id === id);
            if (projet) ouvrirProjetModal(projet);
        });
    });
}
// ===== FILTRES PROJETS =====
function initFiltres() {
    const btns = document.querySelectorAll('.filtre-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjets(btn.dataset.filtre);
        });
    });
}

// ===== MODAL DÉTAIL PROJET =====
function ouvrirProjetModal(projet) {
    // Créer les styles une seule fois
    if (!document.getElementById('style-projet-modal')) {
        const style = document.createElement('style');
        style.id = 'style-projet-modal';
        style.textContent = `
            #projet-modal {
                display:none; position:fixed; inset:0;
                background:rgba(0,0,0,0.88); backdrop-filter:blur(8px);
                z-index:4000; align-items:center; justify-content:center;
            }
            #projet-modal.show { display:flex; animation:fadeIn 0.3s ease; }
            .projet-modal-box {
                background:var(--clr-surface); border-radius:24px;
                max-width:620px; width:92%; max-height:90vh;
                overflow-y:auto; border:1px solid var(--clr-border);
                animation:scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
                box-shadow:0 32px 80px rgba(0,0,0,0.3);
            }
            .projet-modal-header {
                display:flex; justify-content:space-between; align-items:center;
                padding:1.5rem 1.8rem; background:var(--clr-bg-alt);
                border-bottom:1px solid var(--clr-border); position:sticky; top:0; z-index:1;
            }
            .projet-modal-header h3 {
                font-family:var(--font-display); font-size:1.6rem; margin:0;
                color:var(--clr-text); display:flex; align-items:center; gap:0.7rem;
            }
            .projet-modal-close {
                background:none; border:none; font-size:2rem; cursor:pointer;
                color:var(--clr-text-muted); line-height:1; transition:all 0.3s ease;
                padding:0.2rem 0.5rem; border-radius:8px;
            }
            .projet-modal-close:hover { transform:rotate(90deg); color:var(--clr-accent); }
            .projet-modal-body { padding:2rem 1.8rem; }
            .projet-modal-emoji {
                font-size:5rem; text-align:center; display:block;
                margin-bottom:1.5rem; animation:float 3s ease-in-out infinite;
            }
            .projet-modal-desc {
                color:var(--clr-text-muted); font-size:1.1rem;
                line-height:1.8; margin-bottom:1.5rem;
            }
            .projet-modal-tags-titre {
                font-size:1rem; font-weight:700; color:var(--clr-text);
                margin-bottom:0.8rem; display:flex; align-items:center; gap:0.5rem;
            }
            .projet-modal-tags {
                display:flex; flex-wrap:wrap; gap:0.6rem; margin-bottom:1.8rem;
            }
            .projet-modal-tag {
                padding:0.5rem 1.2rem; background:rgba(44,62,80,0.1);
                border-radius:25px; font-size:0.9rem; font-weight:600; color:var(--clr-accent);
            }
            .projet-modal-statut {
                display:flex; align-items:center; gap:0.8rem; padding:1rem 1.2rem;
                background:rgba(39,174,96,0.08); border-radius:12px;
                border:1px solid rgba(39,174,96,0.25); margin-bottom:1.5rem;
                font-size:1rem; color:var(--clr-success); font-weight:600;
            }
            .projet-modal-statut i { font-size:1.1rem; }
            .btn-projet-modal-lien {
                display:inline-flex; align-items:center; gap:0.8rem;
                padding:1rem 2rem; background:var(--clr-accent); color:white;
                border:none; border-radius:40px; cursor:pointer;
                font-size:1rem; font-weight:600; font-family:var(--font-body);
                transition:all 0.3s ease; text-decoration:none; width:100%;
                justify-content:center;
            }
            .btn-projet-modal-lien:hover { transform:translateY(-3px); filter:brightness(1.1); box-shadow:0 8px 24px rgba(44,62,80,0.3); }
            .btn-projet-modal-lien.disabled { opacity:0.6; cursor:not-allowed; background:var(--clr-text-muted); }
            .btn-projet-modal-lien.disabled:hover { transform:none; filter:none; box-shadow:none; }
        `;
        document.head.appendChild(style);
    }

    // Créer ou réutiliser la modal
    let modal = document.getElementById('projet-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projet-modal';
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('show'); });
    }

    const aLien    = projet.lien && projet.lien !== '#';
    const btnClass = aLien ? 'btn-projet-modal-lien' : 'btn-projet-modal-lien disabled';
    const btnAttr  = aLien ? `href="${projet.lien}" target="_blank" rel="noopener noreferrer"` : '';
    const btnTag   = aLien ? 'a' : 'button';

    modal.innerHTML = `
        <div class="projet-modal-box">
            <div class="projet-modal-header">
                <h3>${projet.emoji} ${projet.titre}</h3>
                <button class="projet-modal-close">&times;</button>
            </div>
            <div class="projet-modal-body">
                <span class="projet-modal-emoji">${projet.emoji}</span>
                <p class="projet-modal-desc">${projet.description}</p>
                <p class="projet-modal-tags-titre"><i class="fas fa-tools"></i> Outils utilisés</p>
                <div class="projet-modal-tags">
                    ${projet.tags.map(t => `<span class="projet-modal-tag">${t}</span>`).join('')}
                </div>
                <div class="projet-modal-statut">
                    <i class="fas fa-check-circle"></i> Projet réalisé — Catégorie : ${projet.categorie.toUpperCase()}
                </div>
                <${btnTag} ${btnAttr} class="${btnClass}">
                    <i class="fas fa-external-link-alt"></i>
                    ${aLien ? 'Voir le projet en ligne' : 'Projet en cours de mise en ligne'}
                </${btnTag}>
            </div>
        </div>
    `;

    modal.querySelector('.projet-modal-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.classList.add('show');
}

// ===== RENDU COMPÉTENCES =====
function renderCompetences() {
    const wrapper = document.getElementById('skills-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';

    competences.forEach((cat, ci) => {
        const block = document.createElement('div');
        block.className = 'skill-category reveal';
        block.style.animationDelay = `${ci * 0.15}s`;

        const skillsHTML = cat.skills.map((s, si) => `
            <div class="skill-item" style="animation-delay:${si * 0.1}s">
                <div class="skill-header">
                    <span class="skill-name">${s.nom}</span>
                    <span class="skill-level-badge ${s.levelClass}">${s.niveau}</span>
                </div>
                <div class="skill-info">
                    <span class="skill-pct">${s.pct}%</span>
                    <span class="skill-level-text">${s.niveau}</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" data-pct="${s.pct}" style="width:0%"></div>
                </div>
                <div class="skill-description">${s.desc}</div>
            </div>
        `).join('');

        block.innerHTML = `
            <div class="category-header">
                <span class="category-icon">${cat.categorie.split(' ')[0]}</span>
                <h3 class="skill-cat-title">${cat.categorie.substring(2)}</h3>
            </div>
            <p class="category-description">${cat.description}</p>
            <div class="skill-list">${skillsHTML}</div>
        `;
        wrapper.appendChild(block);
    });

    const barObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                    setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 200);
                });
                barObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    wrapper.querySelectorAll('.skill-category').forEach(el => barObs.observe(el));
}

// ===== REVEAL AU SCROLL =====
function initReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .colonne, .projet-carte, .skill-category, .contact-card, .contact-form')
        .forEach(el => obs.observe(el));
}

// ===== FORMULAIRE CONTACT =====
let isResetting = false; // flag pour bloquer la revalidation pendant le reset

function initContact() {
    const form     = document.getElementById('contact-form');
    const resetBtn = document.getElementById('reset-btn');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            isResetting = true;
            form.reset();
            clearErrors();

            // Afficher le message "Formulaire réinitialisé"
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = '<i class="fas fa-undo-alt"></i> Formulaire réinitialisé avec succès !';
                setTimeout(() => {
                    feedback.className   = 'form-feedback';
                    feedback.textContent = '';
                }, 3000);
            }

            setTimeout(() => { isResetting = false; }, 100);
        });
    }

    ['nom','email','message'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => { if (!isResetting) validateField(id); });
            input.addEventListener('blur',  () => { if (!isResetting) validateField(id); });
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.disabled  = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        }

        setTimeout(() => {
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = '✅ 💖 Message envoyé avec succès 💖! Merci!.';
            }
            isResetting = true;
            form.reset();
            clearErrors();
            isResetting = false;
            if (submitBtn) {
                submitBtn.disabled  = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
            }
            setTimeout(() => {
                if (feedback) { feedback.className = 'form-feedback'; feedback.textContent = ''; }
            }, 5000);
        }, 1800);
    });
}

function validateField(id) {
    if (isResetting) return true;
    const input   = document.getElementById(id);
    const errorEl = document.getElementById(`error-${id}`);
    if (!input || !errorEl) return true;
    const value = input.value.trim();
    let error = '';
    if (id === 'nom') {
        if (!value) error = 'Le nom est requis.';
        else if (value.length < 2) error = 'Le nom doit contenir au moins 2 caractères.';
    } else if (id === 'email') {
        if (!value) error = "L'email est requis.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Format d'email invalide.";
    } else if (id === 'message') {
        if (!value) error = 'Le message est requis.';
        else if (value.length < 10) error = 'Le message doit contenir au moins 10 caractères.';
    }
    errorEl.textContent = error;
    input.style.borderColor = error ? 'var(--clr-error)' : '';
    return !error;
}

function validateForm() {
    return ['nom','email','message'].map(id => validateField(id)).every(v => v);
}

function clearErrors() {
    ['nom','email','message'].forEach(id => {
        const err = document.getElementById(`error-${id}`);
        const inp = document.getElementById(id);
        if (err) err.textContent       = '';
        if (inp) inp.style.borderColor = '';
        if (inp) inp.style.boxShadow   = '';
    });
}

// ===== RETOUR EN HAUT =====
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== ANIMATIONS HERO =====
function initAnimations() {
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px)');
        card.addEventListener('mouseleave', () => card.style.transform = '');
    });

    ['.hero-greeting','.hero-name-wrapper','.hero-title-wrapper',
     '.hero-description','.hero-buttons','.hero-image','.hero-social'].forEach((sel, i) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.style.cssText += `opacity:0;transform:translateY(30px);transition:opacity 0.6s ease ${i*0.1}s,transform 0.6s ease ${i*0.1}s`;
        requestAnimationFrame(() => setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 100));
    });
}

// ===== TÉLÉCHARGEMENT CV =====
function initDownloadCV() {
    const btn = document.getElementById('download-cv-hero');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const toast = document.createElement('div');
        toast.style.cssText = `position:fixed;top:100px;right:20px;background:var(--clr-accent);color:white;padding:1rem 1.5rem;border-radius:12px;font-size:1rem;font-weight:600;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.2);`;
        toast.innerHTML = '<i class="fas fa-check" style="margin-right:8px"></i> Téléchargement du CV...';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    });
}

// ===== QR CODE — MODAL AU CLIC =====
function initQRCode() {
    const qrBtn = document.getElementById('qrBtn');
    if (!qrBtn) return;

    const style = document.createElement('style');
    style.textContent = `
        #qr-modal-full { display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);z-index:5000;align-items:center;justify-content:center; }
        #qr-modal-full.show { display:flex;animation:fadeIn 0.3s ease; }
        .qr-modal-box { background:var(--clr-surface);border-radius:28px;max-width:420px;width:90%;overflow:hidden;border:1px solid var(--clr-border);animation:scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 32px 80px rgba(0,0,0,0.3); }
        .qr-modal-box-header { display:flex;justify-content:space-between;align-items:center;padding:1.2rem 1.5rem;background:var(--clr-bg-alt);border-bottom:1px solid var(--clr-border); }
        .qr-modal-box-header h3 { font-family:var(--font-display);font-size:1.4rem;margin:0;color:var(--clr-text);display:flex;align-items:center;gap:0.6rem; }
        .qr-modal-box-header h3 i { color:var(--clr-accent); }
        .qr-modal-box-close { background:none;border:none;font-size:2rem;cursor:pointer;color:var(--clr-text-muted);line-height:1;transition:all 0.3s ease;padding:0.2rem 0.5rem;border-radius:8px; }
        .qr-modal-box-close:hover { transform:rotate(90deg);color:var(--clr-accent); }
        .qr-modal-box-body { padding:2rem;text-align:center; }
        .qr-modal-img-wrap { display:inline-flex;align-items:center;justify-content:center;background:white;border-radius:20px;padding:1.2rem;margin-bottom:1.2rem;box-shadow:0 8px 32px rgba(0,0,0,0.12);animation:float 4s ease-in-out infinite; }
        .qr-modal-img-wrap img { width:240px;height:240px;display:block;border-radius:8px; }
        .qr-modal-text { color:var(--clr-text-muted);font-size:1rem;margin-bottom:1.4rem;line-height:1.5; }
        .qr-modal-url { display:inline-flex;align-items:center;gap:0.5rem;padding:0.7rem 1.4rem;background:rgba(44,62,80,0.08);border-radius:30px;font-size:0.9rem;color:var(--clr-accent);font-weight:600;margin-bottom:1.4rem;word-break:break-all;cursor:pointer;border:1px solid var(--clr-border);transition:all 0.3s ease; }
        .qr-modal-url:hover { background:rgba(44,62,80,0.15);transform:translateY(-2px); }
        .qr-dl-btn { display:inline-flex;align-items:center;gap:0.7rem;padding:0.9rem 2rem;background:var(--clr-accent);color:white;border:none;border-radius:40px;cursor:pointer;font-size:1rem;font-weight:600;font-family:var(--font-body);transition:all 0.3s ease; }
        .qr-dl-btn:hover { transform:translateY(-3px);filter:brightness(1.1);box-shadow:0 8px 24px rgba(44,62,80,0.3); }
        @keyframes qrPulse { 0%{transform:scale(1)}40%{transform:scale(0.92)}100%{transform:scale(1)} }
        .qr-trigger.clicked { animation:qrPulse 0.4s ease; }
    `;
    document.head.appendChild(style);

    const portfolioUrl = window.location.href;
    const qrApiUrl     = `https://quickchart.io/qr?text=${encodeURIComponent(portfolioUrl)}&size=240&margin=2&format=png`;

    const modal = document.createElement('div');
    modal.id = 'qr-modal-full';
    modal.innerHTML = `
        <div class="qr-modal-box">
            <div class="qr-modal-box-header">
                <h3><i class="fas fa-qrcode"></i> QR Code du portfolio</h3>
                <button class="qr-modal-box-close">&times;</button>
            </div>
            <div class="qr-modal-box-body">
                <div class="qr-modal-img-wrap">
                    <img src="${qrApiUrl}" alt="QR Code portfolio Awa Faye">
                </div>
                <p class="qr-modal-text">Scannez ce QR code pour accéder<br>directement au portfolio via votre mobile</p>
                <div class="qr-modal-url" id="qr-url-copy" title="Cliquer pour copier">
                    <i class="fas fa-link"></i><span>${portfolioUrl}</span>
                </div>
                <br>
                <button class="qr-dl-btn" id="qr-dl-btn">
                    <i class="fas fa-download"></i> Télécharger le QR
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.qr-modal-box-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('show'); });

    modal.querySelector('#qr-url-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(portfolioUrl).then(() => {
            const el  = modal.querySelector('#qr-url-copy');
            const ori = el.innerHTML;
            el.innerHTML = '<i class="fas fa-check"></i> <span>Lien copié !</span>';
            setTimeout(() => { el.innerHTML = ori; }, 2000);
        });
    });

    modal.querySelector('#qr-dl-btn').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = qrApiUrl; a.download = 'qr-portfolio-awa-faye.png'; a.target = '_blank';
        a.click();
    });

    qrBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        qrBtn.classList.remove('clicked');
        void qrBtn.offsetWidth;
        qrBtn.classList.add('clicked');
        qrBtn.addEventListener('animationend', () => qrBtn.classList.remove('clicked'), { once: true });
        modal.classList.add('show');
    });
}

// ===== BOUTON PARTAGE =====
function initShareButton() {
    const shareBtn      = document.getElementById('share-btn');
    const modal         = document.getElementById('share-modal');
    const closeBtn      = modal ? modal.querySelector('.share-modal-close') : null;
    const shareFeedback = document.getElementById('share-feedback');
    if (!shareBtn || !modal) return;

    shareBtn.addEventListener('click', () => modal.classList.add('show'));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

    modal.querySelectorAll('.share-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            let shareUrl = '';
            switch (btn.dataset.platform) {
                case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`; break;
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
                case 'github':   shareUrl = `https://github.com`; break;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href)
                        .then(()  => showShareFeedback('✅ Lien copié !', 'success'))
                        .catch(() => showShareFeedback('❌ Impossible de copier.', 'error'));
                    return;
            }
            if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });

    function showShareFeedback(msg, type) {
        if (!shareFeedback) return;
        shareFeedback.textContent = msg;
        shareFeedback.className   = `share-feedback show ${type}`;
        setTimeout(() => { shareFeedback.className = 'share-feedback'; }, 3000);
    }
}

// ===== VUE RESPONSIVE =====
function initViewToggle() {
    const btns = document.querySelectorAll('.view-toggle-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.remove('view-desktop','view-tablet','view-mobile');
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (btn.dataset.view !== 'desktop') document.body.classList.add(`view-${btn.dataset.view}`);
        });
    });
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const el = document.getElementById('typing-title');
    if (!el) return;
    const phrases = [
        "Cartographe passionnée",
        "Géomaticienne en devenir",
        "Développeuse web SIG",
        "Analyste de données spatiales",
        "Étudiante en Géomatique"
    ];
    let pi = 0, ci = 0, deleting = false;
    function type() {
        const cur = phrases[pi];
        if (!deleting) {
            el.textContent = cur.slice(0, ci + 1); ci++;
            if (ci === cur.length) { deleting = true; setTimeout(type, 1800); return; }
        } else {
            el.textContent = cur.slice(0, ci - 1); ci--;
            if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
        }
        setTimeout(type, deleting ? 60 : 90);
    }
    setTimeout(type, 800);
}

// ===== COMPTEUR STATS =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el      = entry.target;
            const match   = el.textContent.match(/\d+/);
            if (!match) return;
            const target  = parseInt(match[0]);
            const hasPlus = el.textContent.includes('+');
            const pct     = el.querySelector('.percent-sign');
            let current   = 0;
            const step    = Math.ceil(target / 40);
            const timer   = setInterval(() => {
                current = Math.min(current + step, target);
                const txt = (hasPlus ? '+' : '') + current;
                if (pct) el.childNodes[0].textContent = txt;
                else el.textContent = txt;
                if (current >= target) clearInterval(timer);
            }, 35);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });
    stats.forEach(s => obs.observe(s));
}

// ===== SCROLL FLUIDE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href   = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const navH = document.querySelector('.navbar')?.offsetHeight || 80;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        });
    });
}

// ===== CURSEUR PERSONNALISÉ =====
function initCustomCursor() {
    let cursor = document.querySelector('.custom-cursor');
    if (!cursor) { cursor = document.createElement('div'); cursor.className = 'custom-cursor'; document.body.appendChild(cursor); }
    document.addEventListener('mousemove', (e) => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });
    const sel = 'a,button,.filtre-btn,.social-icon,.projet-carte,.skill-item,.carte-lien,.view-toggle-btn,.share-option,.nav-link';
    document.addEventListener('mouseover', (e) => { if (e.target.closest(sel)) cursor.classList.add('hover'); });
    document.addEventListener('mouseout',  (e) => { if (e.target.closest(sel)) cursor.classList.remove('hover'); });
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}

// ===== RÉSEAUX SOCIAUX =====
function initSocialLinks() {
    const map  = { github:'https://github.com/', linkedin:'https://www.linkedin.com/', instagram:'https://www.instagram.com/', email:'mailto:fawa12748@gmail.com' };
    const keys = Object.keys(map);
    document.querySelectorAll('.social-icon').forEach((el, i) => {
        const key = keys[i % keys.length];
        if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
            el.href = map[key];
            if (key !== 'email') { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
        }
        el.title = key.charAt(0).toUpperCase() + key.slice(1);
    });
}

// ===== GALERIE HERO =====
function initHeroGallery() {
    const btn = document.getElementById('open-galerie-hero');
    if (!btn) return;

    const style = document.createElement('style');
    style.textContent = `
        #galerie-modal { display:none;position:fixed;inset:0;background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);z-index:3000;align-items:center;justify-content:center; }
        #galerie-modal.show { display:flex;animation:fadeIn 0.3s ease; }
        .galerie-modal-content { background:var(--clr-surface);border-radius:24px;max-width:750px;width:92%;max-height:88vh;overflow:hidden;display:flex;flex-direction:column;border:1px solid var(--clr-border);animation:scaleIn 0.3s ease; }
        .galerie-modal-header { padding:1.2rem 1.6rem;border-bottom:1px solid var(--clr-border);display:flex;justify-content:space-between;align-items:center;background:var(--clr-bg-alt);flex-shrink:0; }
        .galerie-modal-header h3 { font-family:var(--font-display);font-size:1.5rem;margin:0;color:var(--clr-text);display:flex;align-items:center;gap:0.7rem; }
        .galerie-modal-header h3 i { color:var(--clr-accent); }
        .galerie-modal-close { background:none;border:none;font-size:2rem;cursor:pointer;color:var(--clr-text-muted);line-height:1;transition:all 0.3s ease;padding:0.2rem 0.5rem;border-radius:8px; }
        .galerie-modal-close:hover { transform:rotate(90deg);color:var(--clr-accent); }
        .galerie-modal-body { padding:1.5rem;overflow-y:auto;flex:1; }
        .galerie-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem; }
        .galerie-item { position:relative;border-radius:14px;overflow:hidden;aspect-ratio:1;border:2px solid transparent;transition:all 0.3s ease;background:var(--clr-bg-alt);cursor:pointer; }
        .galerie-item:hover { border-color:var(--clr-accent);transform:scale(1.03);box-shadow:var(--shadow-md); }
        .galerie-image-container { position:relative;width:100%;height:100%;overflow:hidden; }
        .galerie-image-container img { width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease; }
        .galerie-item:hover .galerie-image-container img { transform:scale(1.08); }
        .galerie-download-btn { 
            position:absolute; 
            bottom:10px; 
            right:10px; 
            background:#27ae60; 
            color:white; 
            border:none; 
            border-radius:30px; 
            padding:0.4rem 0.8rem; 
            font-size:0.7rem; 
            font-weight:600; 
            cursor:pointer; 
            display:flex; 
            align-items:center; 
            gap:0.3rem;
            opacity:0;
            transition:opacity 0.3s ease;
            z-index:10;
        }
        .galerie-item:hover .galerie-download-btn { opacity:1; }
        .galerie-download-btn:hover { background:#2ecc71; transform:scale(1.05); }
        .galerie-caption { 
            position:absolute; 
            bottom:0; 
            left:0; 
            right:0; 
            background:linear-gradient(transparent,rgba(0,0,0,0.7)); 
            color:white; 
            padding:1rem 0.8rem 0.6rem; 
            font-size:0.85rem; 
            font-weight:600; 
            opacity:0; 
            transition:opacity 0.3s ease; 
            z-index:1; 
        }
        .galerie-item:hover .galerie-caption { opacity:1; }
        #galerie-lightbox { display:none;position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:4000;align-items:center;justify-content:center;flex-direction:column;gap:1rem; }
        #galerie-lightbox.show { display:flex;animation:fadeIn 0.2s ease; }
        #galerie-lightbox img { max-width:90vw;max-height:80vh;border-radius:16px;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,0.5); }
        .lb-caption { color:white;font-size:1rem;font-weight:600;opacity:0.85; }
        .lb-close { position:fixed;top:20px;right:25px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:44px;height:44px;color:white;font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.3s ease; }
        .lb-close:hover { background:rgba(255,255,255,0.3); }
        @media(max-width:480px){ .galerie-grid{grid-template-columns:repeat(2,1fr);gap:0.7rem;} .galerie-modal-content{border-radius:16px;max-height:92vh;} .galerie-download-btn{padding:0.3rem 0.6rem;font-size:0.6rem;} }
    `;
    document.head.appendChild(style);

    // Modal galerie
    const modal = document.createElement('div');
    modal.id = 'galerie-modal';
    modal.innerHTML = `
        <div class="galerie-modal-content">
            <div class="galerie-modal-header">
                <h3><i class="fas fa-images"></i> Galerie photos</h3>
                <button class="galerie-modal-close">&times;</button>
            </div>
            <div class="galerie-modal-body">
                <div class="galerie-grid">
                    ${galeriePhotos.map((p, i) => `
                        <div class="galerie-item" data-index="${i}">
                            <div class="galerie-image-container">
                                <img src="${p.src}" alt="${p.alt}" loading="lazy">
                                <button class="galerie-download-btn" data-src="${p.src}" data-title="${p.caption}">
                                    <i class="fas fa-download"></i> Télécharger
                                </button>
                            </div>
                            <div class="galerie-caption">${p.caption}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'galerie-lightbox';
    lightbox.innerHTML = `<button class="lb-close">&times;</button><img src="" alt=""><p class="lb-caption"></p>`;
    document.body.appendChild(lightbox);

    // Événements pour les boutons de téléchargement
    const downloadBtns = modal.querySelectorAll('.galerie-download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const src = btn.getAttribute('data-src');
            const title = btn.getAttribute('data-title');
            telechargerImage(src, title);
        });
    });

    // Clic sur l'image → lightbox
    const items = modal.querySelectorAll('.galerie-item');
    items.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            // Ne pas ouvrir la lightbox si on clique sur le bouton de téléchargement
            if (e.target.classList.contains('galerie-download-btn')) return;
            const p = galeriePhotos[idx];
            lightbox.querySelector('img').src = p.src;
            lightbox.querySelector('img').alt = p.alt;
            lightbox.querySelector('.lb-caption').textContent = p.caption;
            lightbox.classList.add('show');
        });
    });

    lightbox.querySelector('.lb-close').addEventListener('click', () => lightbox.classList.remove('show'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('show'); });
    modal.querySelector('.galerie-modal-close').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { lightbox.classList.remove('show'); modal.classList.remove('show'); }
    });

    btn.addEventListener('click', () => modal.classList.add('show'));
}
// ===== TÉLÉCHARGER UNE IMAGE =====
function telechargerImage(src, titre) {
    console.log("Téléchargement de:", src);
    
    // Méthode avec fetch pour contourner les problèmes CORS
    fetch(src)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image non trouvée');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const nomFichier = titre.replace(/\s+/g, '-').toLowerCase();
            link.download = `awa-faye-${nomFichier}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            // Notification de succès
            const notif = document.createElement('div');
            notif.textContent = `📸 "${titre}" téléchargé avec succès !`;
            notif.style.cssText = `position:fixed; bottom:100px; left:50%; transform:translateX(-50%); background:#27ae60; color:white; padding:10px 20px; border-radius:40px; z-index:10002; animation:slideInUp 0.3s ease; font-size:14px;`;
            document.body.appendChild(notif);
            setTimeout(() => notif.remove(), 2000);
        })
        .catch(error => {
            console.error("Erreur:", error);
            // Fallback: ouvrir dans un nouvel onglet
            window.open(src, '_blank');
            const notif = document.createElement('div');
            notif.textContent = `📸 "${titre}" - L'image s'ouvre dans un nouvel onglet. Faites "Enregistrer sous..." pour la télécharger.`;
            notif.style.cssText = `position:fixed; bottom:100px; left:50%; transform:translateX(-50%); background:#e67e22; color:white; padding:10px 20px; border-radius:40px; z-index:10002; font-size:12px; text-align:center;`;
            document.body.appendChild(notif);
            setTimeout(() => notif.remove(), 3000);
        });
}
// ===== ANIMATION VAGUE =====
function animateGreetingWave() {
    // Géré en CSS via @keyframes wave
}

// ===== PARALLAXE SOURIS =====
function initMouseParallax() {
    const hero   = document.querySelector('.hero-section');
    const avatar = document.querySelector('.hero-avatar');
    if (!hero || !avatar) return;
    let ticking = false;
    hero.addEventListener('mousemove', (e) => {
        if (ticking) return; ticking = true;
        requestAnimationFrame(() => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width  / 2) / rect.width;
            const y = (e.clientY - rect.top  - rect.height / 2) / rect.height;
            avatar.style.transform = `translateY(-30px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
            ticking = false;
        });
    });
    hero.addEventListener('mouseleave', () => {
        avatar.style.transition = 'transform 0.6s ease';
        avatar.style.transform  = 'translateY(-30px)';
    });
}

// ===== PARTICULES QUI TOMBENT (CANVAS) =====
function initParticleBackground() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    hero.style.position = 'relative';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx   = canvas.getContext('2d');
    const COUNT = 80;
    let W, H, particles, animId;

    function resize() { W = canvas.width = hero.offsetWidth; H = canvas.height = hero.offsetHeight; }

    function newParticle(fromTop) {
        return {
            x: Math.random() * (W || 800),
            y: fromTop ? -10 : Math.random() * (H || 600),
            size:        Math.random() * 3 + 1,
            speedY:      Math.random() * 0.8 + 0.3,
            speedX:      (Math.random() - 0.5) * 0.4,
            opacity:     Math.random() * 0.45 + 0.08,
            opacityDir:  (Math.random() - 0.5) * 0.004,
            wobble:      Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.02 + 0.005,
        };
    }

    function getColor(op) {
        const dark = document.body.getAttribute('data-theme') === 'dark';
        const pool = dark
            ? [`rgba(168,199,250,${op})`,`rgba(255,255,255,${op})`,`rgba(125,168,247,${op})`,`rgba(200,220,255,${op})`]
            : [`rgba(44,62,80,${op})`,`rgba(90,110,130,${op})`,`rgba(52,84,110,${op})`,`rgba(44,62,80,${op*0.5})`];
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function init() { particles = Array.from({ length: COUNT }, () => newParticle(false)); }

    function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p, i) => {
            p.wobble  += p.wobbleSpeed;
            p.x       += p.speedX + Math.sin(p.wobble) * 0.3;
            p.y       += p.speedY;
            p.opacity += p.opacityDir;
            if (p.opacity > 0.55 || p.opacity < 0.05) p.opacityDir *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = getColor(p.opacity);
            ctx.fill();
            if (p.y > H + 10 || p.x < -10 || p.x > W + 10) particles[i] = newParticle(true);
        });
        animId = requestAnimationFrame(animate);
    }

    new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { if (!animId) animate(); }
            else { cancelAnimationFrame(animId); animId = null; }
        });
    }, { threshold: 0.05 }).observe(hero);

    window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
    resize(); init(); animate();
}

// ===== GLOW SUR LES CARTES =====
function initGlowEffect() {
    document.querySelectorAll('.projet-carte,.skill-category,.colonne').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
        });
    });
}

// ===== ÉLÉMENTS FLOTTANTS =====
function initFloatingElements() {
    document.querySelectorAll('.langue').forEach((el, i) => el.style.animationDelay = `${i * 0.2}s`);

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateX(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach((item, i) => {
        item.style.opacity    = '0';
        item.style.transform  = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
        obs.observe(item);
    });
}
