/* ═══════════════════════════════════════════════════════
   calculator.js — Calculadora de equivalencias de ingredientes
═══════════════════════════════════════════════════════ */

let EQ_DATA = null;

async function loadEquivalences() {
  try {
    const res = await fetch('./data/equivalences.json');
    EQ_DATA = await res.json();
    populateCalculatorSelects();
    renderQuickReference();
  } catch (e) {
    console.error('Error cargando equivalencias', e);
  }
}

function populateCalculatorSelects() {
  if (!EQ_DATA) return;
  const unitSel = document.getElementById('calcUnit');
  const ingSel = document.getElementById('calcIngredient');
  if (!unitSel || !ingSel) return;

  const lang = typeof getLang === 'function' ? getLang() : 'es';

  // Unidades de volumen
  unitSel.innerHTML = '';
  EQ_DATA.units.volume.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = lang === 'es' ? u.name_es : u.name_en;
    unitSel.appendChild(opt);
  });

  // Ingredientes
  ingSel.innerHTML = '';
  Object.entries(EQ_DATA.ingredients).forEach(([key, ing]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = lang === 'es' ? ing.name_es : ing.name_en;
    if (ing.common) opt.selected = key === 'harina';
    ingSel.appendChild(opt);
  });
}

function renderQuickReference() {
  const container = document.getElementById('calcQuickList');
  if (!container || !EQ_DATA) return;
  const lang = typeof getLang === 'function' ? getLang() : 'es';
  const list = EQ_DATA.quick_reference[lang] || [];

  container.innerHTML = list.map(item => `
    <li>
      <strong>${item.from}</strong>
      <span>→ ${item.to}</span>
    </li>
  `).join('');
}

function calculateEquivalence() {
  if (!EQ_DATA) return;

  const amount = parseFloat(document.getElementById('calcAmount').value) || 0;
  const unitId = document.getElementById('calcUnit').value;
  const ingKey = document.getElementById('calcIngredient').value;
  const resultEl = document.getElementById('calcResult');

  if (amount <= 0) {
    resultEl.innerHTML = '<p class="calc-error">Ingresá una cantidad válida.</p>';
    return;
  }

  const unit = EQ_DATA.units.volume.find(u => u.id === unitId);
  const ingredient = EQ_DATA.ingredients[ingKey];
  if (!unit || !ingredient) return;

  const ml = amount * unit.ml;
  const grams = ml * ingredient.density_g_per_ml;

  const lang = typeof getLang === 'function' ? getLang() : 'es';
  const notes = lang === 'es' ? ingredient.notes_es : ingredient.notes_en;

  // Formateo bonito
  let volumeStr = '';
  if (ml >= 1000) volumeStr = `${(ml / 1000).toFixed(2)} L`;
  else if (ml >= 1) volumeStr = `${ml.toFixed(1)} ml`;
  else volumeStr = `${(ml * 1000).toFixed(0)} µl`;

  let weightStr = '';
  if (grams >= 1000) weightStr = `${(grams / 1000).toFixed(2)} kg`;
  else weightStr = `${grams.toFixed(1)} g`;

  resultEl.innerHTML = `
    <div class="calc-result-card">
      <div class="calc-result-row">
        <span class="calc-label">${amount} ${lang === 'es' ? unit.name_es : unit.name_en}</span>
        <span class="calc-arrow">→</span>
        <span class="calc-value">${volumeStr}</span>
      </div>
      <div class="calc-result-row">
        <span class="calc-label">${lang === 'es' ? ingredient.name_es : ingredient.name_en}</span>
        <span class="calc-arrow">→</span>
        <span class="calc-value highlight">${weightStr}</span>
      </div>
      ${notes ? `<p class="calc-notes">${notes}</p>` : ''}
    </div>
  `;
}

// Escuchar cambio de idioma
document.addEventListener('langchange', () => {
  populateCalculatorSelects();
  renderQuickReference();
});

document.addEventListener('DOMContentLoaded', () => {
  loadEquivalences();

  const btn = document.getElementById('calcBtn');
  if (btn) btn.addEventListener('click', calculateEquivalence);

  // Calcular al cambiar selects también
  ['calcAmount', 'calcUnit', 'calcIngredient'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', calculateEquivalence);
    if (el && el.tagName === 'INPUT') el.addEventListener('input', calculateEquivalence);
  });
});
