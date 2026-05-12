// ui.js — Hamburger menu, dark/light mode, smooth scroll, navigazione attiva

const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');
const themeToggle  = document.getElementById('theme-toggle');

// ============================================================
// A) HAMBURGER MENU
// ============================================================

// Apre/chiude il menu mobile
const toggleNav = () => {
  if (!mainNav || !hamburgerBtn) return;
  const isOpen = mainNav.classList.toggle('nav-open');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
};

// Chiude il menu mobile
const closeNav = () => {
  if (!mainNav || !hamburgerBtn) return;
  mainNav.classList.remove('nav-open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
};

// Chiude il menu cliccando sui link interni
if (mainNav) {
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// Chiude con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Chiude cliccando fuori dall'header
document.addEventListener('click', (e) => {
  const header = document.getElementById('site-header');
  if (header && !header.contains(e.target)) closeNav();
});

// Chiude automaticamente su desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeNav();
});

// ============================================================
// B) DARK / LIGHT MODE
// ============================================================

// Aggiorna l'icona e l'aria-label del toggle in base al tema corrente
const updateThemeUI = () => {
  if (!themeToggle) return;
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isLight ? 'Attiva modalità scura' : 'Attiva modalità chiara');
};

// Alterna il tema e salva la preferenza
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
  const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  try {
    localStorage.setItem('legendarydrives_theme', currentTheme);
  } catch {
    /* localStorage non disponibile */
  }
  updateThemeUI();
};

// Al caricamento: ripristina tema salvato
const initTheme = () => {
  try {
    const saved = localStorage.getItem('legendarydrives_theme');
    if (saved === 'light') document.body.classList.add('light-mode');
  } catch {
    /* localStorage non disponibile */
  }
  updateThemeUI();
};

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

initTheme();

// ============================================================
// C) SMOOTH SCROLL
// ============================================================

// Intercetta tutti i link interni e applica lo scroll fluido
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// D) NAVIGAZIONE ATTIVA (IntersectionObserver)
// ============================================================

const sectionIds = ['Home', 'Catalogo', 'Preferiti', 'Contatti'];

const setActiveLink = (activeSectionId) => {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${activeSectionId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

const sections = sectionIds
  .map(id => document.getElementById(id))
  .filter(Boolean);

if (sections.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    { threshold: 0.30 }
  );

  sections.forEach(section => observer.observe(section));
}

export { toggleNav, toggleTheme };
