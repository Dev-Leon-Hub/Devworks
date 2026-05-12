// features.js — Modale dettaglio, sistema preferiti con localStorage, notifiche toast

import vehicles from './data.js';
import { formatEUR } from './catalog.js';

const LS_KEY = 'legendarydrives_favorites';
const MAX_TOASTS = 3;

// Elementi DOM
const modalOverlay   = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');
const modalClose     = document.getElementById('modal-close');
const modalContent   = document.getElementById('modal-content');
const favoritesGrid  = document.getElementById('favorites-grid');
const favoritesEmpty = document.getElementById('favorites-empty');
const toastContainer = document.getElementById('toast-container');

// ============================================================
// MODALE DETTAGLIO
// ============================================================

// Apre la modale e popola il contenuto per il veicolo con vehicleId
const openModal = (vehicleId) => {
  const id = parseInt(vehicleId, 10);
  const vehicle = vehicles.find(v => v.id === id);
  if (!vehicle || !modalContent || !modalOverlay) return;

  // Svuota il contenuto precedente
  modalContent.innerHTML = '';

  const name = document.createElement('h2');
  name.className = 'modal-vehicle-name';
  name.id = 'modal-title';
  name.textContent = vehicle.name;

  const meta = document.createElement('p');
  meta.className = 'modal-vehicle-meta';
  meta.textContent = `${vehicle.brand} · ${vehicle.year} · ${vehicle.category}`;

  const desc = document.createElement('p');
  desc.className = 'modal-vehicle-desc';
  desc.textContent = vehicle.description;

  const specsTitle = document.createElement('p');
  specsTitle.className = 'modal-specs-title';
  specsTitle.textContent = 'Specifiche tecniche';

  const specsGrid = document.createElement('div');
  specsGrid.className = 'modal-specs-grid';

  const specsDef = [
    { label: 'Motore',   value: vehicle.specs.engine   },
    { label: 'Potenza',  value: vehicle.specs.power    },
    { label: 'Velocità', value: vehicle.specs.topSpeed },
    { label: 'Peso',     value: vehicle.specs.weight   }
  ];

  specsDef.forEach(({ label, value }) => {
    const item = document.createElement('div');
    item.className = 'modal-spec-item';

    const lbl = document.createElement('span');
    lbl.className = 'modal-spec-label';
    lbl.textContent = label;

    const val = document.createElement('span');
    val.className = 'modal-spec-value';
    val.textContent = value;

    item.appendChild(lbl);
    item.appendChild(val);
    specsGrid.appendChild(item);
  });

  const footer = document.createElement('div');
  footer.className = 'modal-footer-info';

  const unitsBlock = document.createElement('div');
  const unitsLabel = document.createElement('span');
  unitsLabel.className = 'modal-info-label';
  unitsLabel.textContent = 'Esemplari prodotti';
  const unitsValue = document.createElement('span');
  unitsValue.className = 'modal-info-value';
  unitsValue.textContent = formatEUR(vehicle.units);
  unitsBlock.appendChild(unitsLabel);
  unitsBlock.appendChild(unitsValue);

  const valueBlock = document.createElement('div');
  const valueLabel = document.createElement('span');
  valueLabel.className = 'modal-info-label';
  valueLabel.textContent = 'Valore stimato';
  const valueVal = document.createElement('span');
  valueVal.className = 'modal-info-value';
  valueVal.textContent = `€${formatEUR(vehicle.estimatedValueEUR)}`;
  valueBlock.appendChild(valueLabel);
  valueBlock.appendChild(valueVal);

  footer.appendChild(unitsBlock);
  footer.appendChild(valueBlock);

  modalContent.appendChild(name);
  modalContent.appendChild(meta);
  modalContent.appendChild(desc);
  modalContent.appendChild(specsTitle);
  modalContent.appendChild(specsGrid);
  modalContent.appendChild(footer);

  // Mostra la modale
  modalOverlay.classList.remove('hidden');

  // Focus sul pulsante di chiusura
  if (modalClose) modalClose.focus();
};

// Chiude la modale
const closeModal = () => {
  if (modalOverlay) modalOverlay.classList.add('hidden');
};

// Listener chiusura modale
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    // Chiudi solo se il click è sull'overlay, non sul box interno
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});

// Delegazione eventi per .btn-detail
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-detail');
  if (btn) openModal(btn.dataset.id);
});

// ============================================================
// SISTEMA PREFERITI
// ============================================================

// Legge i preferiti da localStorage
const getFavorites = () => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Salva i preferiti in localStorage
const saveFavorites = (favArray) => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(favArray));
  } catch {
    console.warn('LegendaryDrives: impossibile salvare preferiti in localStorage');
  }
};

// Crea una card per la sezione preferiti (senza pulsante Dettagli)
const createFavCard = (vehicle) => {
  const article = document.createElement('article');
  article.className = 'vehicle-card';
  article.dataset.id = vehicle.id;

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'card-image-wrapper';

  const img = document.createElement('img');
  img.src = vehicle.image;
  img.alt = `${vehicle.name} - ${vehicle.year}`;
  img.loading = 'lazy';
  img.onerror = () => {
    img.src = 'https://placehold.co/400x225/222/c9a84c?text=Foto+non+disponibile';
  };

  const badge = document.createElement('span');
  badge.className = 'card-badge';
  badge.textContent = `${formatEUR(vehicle.units)} esemplari`;

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(badge);

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

  const btnFavorite = document.createElement('button');
  btnFavorite.className = 'btn-favorite is-favorite';
  btnFavorite.dataset.id = vehicle.id;
  btnFavorite.setAttribute('aria-label', `Rimuovi ${vehicle.name} dai preferiti`);
  btnFavorite.textContent = '♥ Preferiti';

  cardInfo.appendChild(category);
  cardInfo.appendChild(name);
  cardInfo.appendChild(yearBrand);
  cardInfo.appendChild(value);
  cardInfo.appendChild(btnFavorite);

  article.appendChild(imageWrapper);
  article.appendChild(cardInfo);

  return article;
};

// Renderizza la sezione preferiti
const renderFavorites = () => {
  if (!favoritesGrid) return;
  favoritesGrid.innerHTML = '';

  const favIds = getFavorites();
  const favVehicles = vehicles.filter(v => favIds.includes(String(v.id)) || favIds.includes(v.id));

  if (favoritesEmpty) {
    favoritesEmpty.style.display = favVehicles.length === 0 ? 'block' : 'none';
  }

  favVehicles.forEach(vehicle => {
    const card = createFavCard(vehicle);
    favoritesGrid.appendChild(card);
  });
};

// Aggiunge/rimuove un veicolo dai preferiti
const toggleFavorite = (vehicleId) => {
  const id = String(vehicleId);
  let favs = getFavorites().map(String);
  const isAlreadyFav = favs.includes(id);

  if (isAlreadyFav) {
    favs = favs.filter(f => f !== id);
    showToast('Rimosso dai preferiti');
  } else {
    favs.push(id);
    showToast('Aggiunto ai preferiti!');
  }

  saveFavorites(favs);

  // Aggiorna tutti i bottoni corrispondenti nel DOM
  document.querySelectorAll(`.btn-favorite[data-id="${vehicleId}"]`).forEach(btn => {
    if (isAlreadyFav) {
      btn.classList.remove('is-favorite');
      btn.textContent = '♡ Preferiti';
      btn.setAttribute('aria-label', `Aggiungi ${btn.closest('.vehicle-card')?.querySelector('.card-name')?.textContent || ''} ai preferiti`);
    } else {
      btn.classList.add('is-favorite');
      btn.textContent = '♥ Preferiti';
      btn.setAttribute('aria-label', `Rimuovi ${btn.closest('.vehicle-card')?.querySelector('.card-name')?.textContent || ''} dai preferiti`);
    }
  });

  renderFavorites();
};

// Aggiorna i pulsanti preferiti in tutte le card del catalogo
const updateFavoriteButtons = () => {
  const favIds = getFavorites().map(String);
  document.querySelectorAll('.btn-favorite').forEach(btn => {
    const id = String(btn.dataset.id);
    if (favIds.includes(id)) {
      btn.classList.add('is-favorite');
      btn.textContent = '♥ Preferiti';
    } else {
      btn.classList.remove('is-favorite');
      btn.textContent = '♡ Preferiti';
    }
  });
};

// Espone updateFavoriteButtons globalmente per catalog.js (chiamata dopo renderCatalog)
window.__updateFavoriteButtons = updateFavoriteButtons;

// Delegazione eventi per .btn-favorite
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-favorite');
  if (btn) toggleFavorite(btn.dataset.id);
});

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

// Mostra una notifica toast temporanea
const showToast = (message, type = 'success') => {
  if (!toastContainer) return;

  // Limite di 3 toast contemporanei: rimuove il più vecchio
  const existingToasts = toastContainer.querySelectorAll('.toast');
  if (existingToasts.length >= MAX_TOASTS) {
    existingToasts[0].remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

export { openModal, closeModal, toggleFavorite, renderFavorites, showToast, updateFavoriteButtons };
