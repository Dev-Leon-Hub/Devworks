// form.js — Validazione form contatti (auto-inizializzato all'import)

// ============================================================
// VALIDATORS
// ============================================================

// Valida il nome: almeno 2 caratteri, solo lettere e spazi
const validateName = (value) => {
  return /^[A-Za-zÀ-ÿ\s]{2,}$/.test(value.trim());
};

// Valida l'email con regex standard
const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

// Valida il messaggio: almeno 10 caratteri
const validateMessage = (value) => {
  return value.trim().length >= 10;
};

// ============================================================
// UI HELPERS
// ============================================================

// Mostra l'errore per un campo
const showFieldError = (fieldId, errorId, message) => {
  const field = document.getElementById(fieldId);
  const errorSpan = document.getElementById(errorId);
  if (!field || !errorSpan) return;

  field.classList.add('invalid');
  field.setAttribute('aria-invalid', 'true');
  errorSpan.textContent = message;
  errorSpan.style.display = 'block';
};

// Rimuove l'errore per un campo
const clearFieldError = (fieldId, errorId) => {
  const field = document.getElementById(fieldId);
  const errorSpan = document.getElementById(errorId);
  if (!field || !errorSpan) return;

  field.classList.remove('invalid');
  field.removeAttribute('aria-invalid');
  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
};

// ============================================================
// VALIDAZIONE DEI SINGOLI CAMPI
// ============================================================

const validateNameField = () => {
  const value = document.getElementById('input-name')?.value || '';
  if (!validateName(value)) {
    showFieldError('input-name', 'error-name', 'Inserisci un nome valido (almeno 2 lettere, solo caratteri alfabetici).');
    return false;
  }
  clearFieldError('input-name', 'error-name');
  return true;
};

const validateEmailField = () => {
  const value = document.getElementById('input-email')?.value || '';
  if (!validateEmail(value)) {
    showFieldError('input-email', 'error-email', 'Inserisci un indirizzo email valido.');
    return false;
  }
  clearFieldError('input-email', 'error-email');
  return true;
};

const validateMessageField = () => {
  const value = document.getElementById('input-message')?.value || '';
  if (!validateMessage(value)) {
    showFieldError('input-message', 'error-message', 'Il messaggio deve contenere almeno 10 caratteri.');
    return false;
  }
  clearFieldError('input-message', 'error-message');
  return true;
};

// ============================================================
// INIZIALIZZAZIONE FORM
// ============================================================

const contactForm    = document.getElementById('contact-form');
const inputName      = document.getElementById('input-name');
const inputEmail     = document.getElementById('input-email');
const inputMessage   = document.getElementById('input-message');

// Validazione live su blur
if (inputName)    inputName.addEventListener('blur', validateNameField);
if (inputEmail)   inputEmail.addEventListener('blur', validateEmailField);
if (inputMessage) inputMessage.addEventListener('blur', validateMessageField);

// Validazione e submit del form
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameOk    = validateNameField();
    const emailOk   = validateEmailField();
    const messageOk = validateMessageField();

    if (nameOk && emailOk && messageOk) {
      // Form valido: mostra toast e resetta
      if (typeof window.__showToast === 'function') {
        window.__showToast('Messaggio inviato! Ti risponderemo presto 😊', 'success');
      }
      contactForm.reset();
      clearFieldError('input-name', 'error-name');
      clearFieldError('input-email', 'error-email');
      clearFieldError('input-message', 'error-message');
    } else {
      // Porta il focus al primo campo invalido
      if (!nameOk && inputName)         inputName.focus();
      else if (!emailOk && inputEmail)  inputEmail.focus();
      else if (!messageOk && inputMessage) inputMessage.focus();
    }
  });
}

// Nessun export: questo file si auto-inizializza
