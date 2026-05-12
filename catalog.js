// catalog.js — Rendering dinamico del catalogo, filtri, ricerca e ordinamento

import vehicles from './data.js';

// Riferimenti agli elementi DOM
const searchInput    = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortSelect     = document.getElementById('sort-select');
const resetBtn       = document.getElementById('reset-btn');
const catalogGrid    = document.getElementById('catalog-grid');
const resultsCount   = document.getElementById('results-count');

// Formatta un numero in stile europeo (punto migliaia, nessun decimale)
const formatEUR = (number) => {
  return new Intl.NumberFormat('it-IT', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
};

// Crea un singolo elemento card veicolo
const createCard = (vehicle) => {
  const article = document.createElement('article');
  article.className = 'vehicle-card';
  article.dataset.id = vehicle.id;

  // Wrapper immagine + badge
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'card-image-wrapper';

  const img = document.createElement('img');
  img.src = vehicle.image;
  img.alt = `${vehicle.name} - ${vehicle.year}`;
  img.loading = 'lazy';
  // Fallback per immagini non disponibili
  img.onerror = () => {
    img.src = 'https://placehold.co/400x225/222/c9a84c?text=Foto+non+disponibile';
    img.alt = `${vehicle.name} - immagine non disponibile`;
  };

  const badge = document.createElement('span');
  badge.className = 'card-badge';
  badge.textContent = `${formatEUR(vehicle.units)} esemplari`;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(badge);

  // Info card
  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  const category = document.createElement('span');
  category.className = 'card-category';
  category.textContent = vehicle.category;

  const name = document.createElement('h3');
  name.className = 'card-name';
  name.textContent = vehicle.name;

  const yearBrand = document.createElement('p');
  yearBrand.className = 'card-year-brand';
  yearBrand.textContent = `${vehicle.brand} · ${vehicle.year}`;

  const value = document.createElement('p');
  value.className = 'card-value';
  value.textContent = `Valore stimato: €${formatEUR(vehicle.estimatedValueEUR)}`;

  const btnDetail = document.createElement('button');
  btnDetail.className = 'btn-detail';
  btnDetail.dataset.id = vehicle.id;
  btnDetail.setAttribute('aria-label', `Vedi dettagli ${vehicle.name}`);
  btnDetail.textContent = 'Dettagli';

  const btnFavorite = document.createElement('button');
  btnFavorite.className = 'btn-favorite';
  btnFavorite.dataset.id = vehicle.id;
  btnFavorite.setAttribute('aria-label', `Aggiungi ${vehicle.name} ai preferiti`);
  btnFavorite.textContent = '♡ Preferiti';

  cardInfo.appendChild(category);
  cardInfo.appendChild(name);
  cardInfo.appendChild(yearBrand);
  cardInfo.appendChild(value);
  cardInfo.appendChild(btnDetail);
  cardInfo.appendChild(btnFavorite);

  article.appendChild(imageWrapper);
  article.appendChild(cardInfo);

  return article;
};

// Renderizza l'array di veicoli nella griglia e aggiorna il contatore
const renderCatalog = (filteredArray) => {
  if (!catalogGrid) return;

  // Svuota la griglia
  catalogGrid.innerHTML = '';

  // Aggiorna il contatore
  if (resultsCount) {
    resultsCount.textContent = filteredArray.length;
  }

  // Messaggio se nessun risultato
  if (!filteredArray || filteredArray.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'catalog-empty-msg';
    msg.textContent = 'Nessun veicolo trovato con questi filtri.';
    catalogGrid.appendChild(msg);
    return;
  }

  // Crea e appende le card
  filteredArray.forEach(vehicle => {
    const card = createCard(vehicle);
    catalogGrid.appendChild(card);
  });
};

// Legge i filtri dal DOM, filtra e ordina, poi chiama renderCatalog
const applyFilters = () => {
  if (!vehicles || vehicles.length === 0) {
    renderCatalog([]);
    return;
  }

  const searchTerm     = searchInput     ? searchInput.value.trim().toLowerCase()     : '';
  const categoryValue  = categoryFilter  ? categoryFilter.value                        : 'all';
  const sortValue      = sortSelect      ? sortSelect.value                             : 'name-asc';

  let result = [...vehicles];

  // Filtro ricerca testuale
  if (searchTerm) {
    result = result.filter(v => {
      const haystack = `${v.name} ${v.brand} ${(v.tags || []).join(' ')}`.toLowerCase();
      return haystack.includes(searchTerm);
    });
  }

  // Filtro categoria
  if (categoryValue !== 'all') {
    result = result.filter(v => v.category === categoryValue);
  }

  // Ordinamento
  result.sort((a, b) => {
    switch (sortValue) {
      case 'name-asc':
        return a.name.localeCompare(b.name, 'it');
      case 'year-asc':
        return a.year - b.year;
      case 'year-desc':
        return b.year - a.year;
      case 'value-desc':
        return b.estimatedValueEUR - a.estimatedValueEUR;
      default:
        return 0;
    }
  });

  renderCatalog(result);

  // Aggiorna i pulsanti preferiti dopo ogni re-render
  if (typeof window.__updateFavoriteButtons === 'function') {
    window.__updateFavoriteButtons();
  }
};

// Event listeners filtri
if (searchInput)    searchInput.addEventListener('input', applyFilters);
if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
if (sortSelect)     sortSelect.addEventListener('change', applyFilters);

// Reset filtri
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (searchInput)    searchInput.value    = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (sortSelect)     sortSelect.value     = 'name-asc';
    applyFilters();
  });
}

export { renderCatalog, applyFilters, formatEUR };
