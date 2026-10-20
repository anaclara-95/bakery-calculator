/* ═══════════════════════════════════════════════════════
   lang.js — Sistema de idiomas cargado desde JSON
   Detecta la página (index / recipes) y aplica traducciones.
═══════════════════════════════════════════════════════ */

window.TRANSLATIONS = null;
let currentLang = localStorage.getItem('bakery_lang') || 'es';

function getLang() {
  return currentLang;
}
window.getLang = getLang;

function detectPage() {
  const path = window.location.pathname;
  if (path.includes('recipes')) return 'recipes';
  return 'index';
}

async function loadTranslations() {
  try {
    const res = await fetch('./data/translations.json');
    window.TRANSLATIONS = await res.json();
    applyTranslations();
  } catch (e) {
    console.error('Error cargando traducciones', e);
  }
}

function t(key) {
  const page = detectPage();
  if (!window.TRANSLATIONS || !window.TRANSLATIONS[page]) return key;
  const dict = window.TRANSLATIONS[page][currentLang] || window.TRANSLATIONS[page]['es'] || {};
  return dict[key] !== undefined ? dict[key] : key;
}
window.t = t;

function applyTranslations() {
  if (!window.TRANSLATIONS) return;
  const page = detectPage();
  const dict = (window.TRANSLATIONS[page] && window.TRANSLATIONS[page][currentLang])
    || (window.TRANSLATIONS[page] && window.TRANSLATIONS[page]['es'])
    || {};

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  }

  document.documentElement.lang = currentLang;
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('bakery_lang', currentLang);
  applyTranslations();
}
window.toggleLang = toggleLang;

document.addEventListener('DOMContentLoaded', () => {
  loadTranslations();

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', toggleLang);
  }
});
