// main.js — Entry point dell'applicazione LegendaryDrives
// Includi in index.html come: <script type="module" src="./js/main.js"></script>

import { applyFilters } from './catalog.js';
import { renderFavorites, updateFavoriteButtons, showToast } from './features.js';
import { toggleNav, toggleTheme } from './ui.js';
import './form.js';

// Espone showToast globalmente per form.js
window.__showToast = showToast;

document.addEventListener('DOMContentLoaded', () => {

  // 1. Popola il catalogo iniziale con tutti i veicoli
  applyFilters();

  // 2. Popola la sezione preferiti
  renderFavorites();

  // 3. Segna i preferiti già salvati nelle card del catalogo
  updateFavoriteButtons();

  // 4. Hamburger menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleNav);
  }

  // 5. Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // 6. Anno dinamico nel footer
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  console.log('LegendaryDrives: app inizializzata ✓');
});
