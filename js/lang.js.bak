/* ═══════════════════════════════════════════════════════
   lang.js  —  Toggle de idioma ES / EN
   Compartido por index.html y recipes.html.

   Cómo funciona:
   1. Detecta en qué página está mirando la URL.
   2. Lee el idioma guardado en localStorage (o usa el
      idioma por defecto de cada página).
   3. Al llamar a applyLang(), recorre todos los elementos
      con data-i18n y les asigna el texto traducido.
   4. toggleLang() alterna entre ES y EN y persiste la elección.

   Agregar nuevas claves: añadirlas en ambos idiomas del
   objeto correspondiente a la página (index o recipes).
═══════════════════════════════════════════════════════ */

/* ─── TRADUCCIONES ──────────────────────────────────────
   Cada página tiene su propio objeto con dos idiomas.
   Las claves coinciden con los atributos data-i18n del HTML.
─────────────────────────────────────────────────────── */
const TRANSLATIONS = {

  /* ── INDEX.HTML ── */
  index: {
    es: {
      /* Navegación */
      nav_home:        "Inicio",
      nav_new:         "Novedades",
      nav_about:       "Nosotros",
      nav_fav:         "Favoritos",
      nav_location:    "Ubicación",
      nav_recipes:     "Recetario",
      /* Hero */
      hero_title:      "Elegí los mejores<br />panes de calidad",
      hero_btn:        "Ver panes",
      hero_recipes:    "Ver Recetario",
      /* Sección News */
      new_title:       "Panes nuevos",
      new_card1_title: "Pan de Centeno",
      new_card1_desc:  "Horneado con masa madre<br />saludable y sin gluten.",
      new_card2_title: "Pan Integral",
      new_card2_desc:  "Crujiente y artesanal,<br />con harina orgánica sin levadura.",
      new_card3_title: "Pan Multigrano",
      new_card3_desc:  "Sabroso y elaborado con<br />granos naturales del campo.",
      new_more:        "Ver más panes",
      /* Sección About */
      about_title:     "Nosotros",
      about_desc:      "Preparamos todo tipo de panes caseros, manteniendo la tradición de usar solo los mejores ingredientes con productos locales. Tenemos una extensa línea de productos de panadería y café recién preparados.",
      about_btn:       "Conocé más",
      /* Sección Favorites */
      fav_title:       "Favoritos de nuestros clientes",
      b1: "Integral",
      b2: "Centeno",
      b3: "Trigo",
      b4: "Multigrano",
      b5: "Masa Madre",
      b6: "Francés",

      /* Sección Visit */
      visit_title:     "Visitanos",
      visit_desc:      "Descubrí el mejor pan, te esperamos con las puertas abiertas.",
      visit_btn:       "Ver ubicación",
      /* Footer */
      footer_desc:     "Hacemos el mejor pan<br />de la ciudad.",
      footer_addr:     "Dirección",
      footer_contact:  "Contacto",
      footer_follow:   "Seguinos",
    },
    en: {
      /* Navegación */
      nav_home:        "Home",
      nav_new:         "News",
      nav_about:       "About Us",
      nav_fav:         "Favorites",
      nav_location:    "Location",
      nav_recipes:     "Recipe Book",
      /* Hero */
      hero_title:      "Select the best<br />quality breads",
      hero_btn:        "Select breads",
      hero_recipes:    "Recipe Book",
      /* Sección News */
      new_title:       "New breads",
      new_card1_title: "Rye Bread",
      new_card1_desc:  "Baked with healthy,<br />gluten-free sourdough.",
      new_card2_title: "Whole Grain Bread",
      new_card2_desc:  "Crispy and homemade,<br />from organic yeast-free flour.",
      new_card3_title: "Multigrain Bread",
      new_card3_desc:  "Tasty and made with<br />natural countryside grains.",
      new_more:        "See more breads",
      /* Sección About */
      about_title:     "About Us",
      about_desc:      "We prepare all types of bread that are made at home, maintaining the tradition of using only the best ingredients made with local products. We have an extensive line of freshly prepared bakery and coffee products.",
      about_btn:       "Know More",
      /* Sección Favorites */
      fav_title:       "Customer Favorites",
   

      /* Sección Visit */
      visit_title:     "Visit Us",
      visit_desc:      "Discover the best bread, we look forward to your visit.",
      visit_btn:       "See Location",
      /* Footer */
      footer_desc:     "We make the best bread<br />in the city.",
      footer_addr:     "Address",
      footer_contact:  "Contact Me",
      footer_follow:   "Follow Us",
    }
  },

  /* ── RECIPES.HTML ── */
  recipes: {
    es: {
      /* Header */
      nav_home:       "Inicio",
      nav_recipes:    "Recetario",
      /* Hero */
      hero_eyebrow:   "Recetario de panadería",
      hero_title:     "El arte del pan<br />artesanal",
      hero_sub:       "Recetas tradicionales y modernas para hornear en casa.",
      /* Toolbar */
      diff_label:     "Dificultad",
      diff_easy:      "Fácil",
      diff_med:       "Medio",
      diff_hard:      "Difícil",
      add_btn:        "Agregar receta",
      /* Chips */
      chip_all:       "Todas",
      /* Stats */
      fav_only:       "Solo favoritos",
      /* Modal detalle */
      lbl_total_time: "Tiempo total",
      lbl_servings:   "Porciones base",
      lbl_difficulty: "Dificultad",
      scale_lbl:      "Escalar receta:",
      ing_title:      "Ingredientes",
      steps_title:    "Pasos",
      /* Modal agregar */
      modal_title:    "Nueva receta",
      modal_sub:      "Compartí tu receta con la comunidad",
      f_name_lbl:     "Nombre de la receta *",
      f_emoji_lbl:    "Emoji / ícono",
      f_desc_lbl:     "Descripción corta",
      f_cat_lbl:      "Categoría *",
      f_diff_lbl:     "Dificultad",
      f_time_lbl:     "Tiempo total",
      f_servings_lbl: "Porciones / unidades",
      f_ing_lbl:      "Ingredientes *",
      f_add_ing:      "Añadir ingrediente",
      f_steps_lbl:    "Pasos *",
      f_add_step:     "Añadir paso",
      f_cancel:       "Cancelar",
      f_save:         "Guardar receta",
      /* Toasts */
      toast_fav_add:  "Agregado a favoritos",
      toast_fav_rem:  "Quitado de favoritos",
      toast_saved:    "¡Receta guardada con éxito!",
      toast_err_req:  "Completá al menos nombre y categoría",
      toast_err_ing:  "Agregá al menos un ingrediente y un paso",
      /* Empty state */
      empty_msg:      "No encontramos recetas con esos filtros.",
      /* Placeholders */
      ph_search:      "Buscar receta o ingrediente…",
      ph_name:        "Ej: Pan de campo",
      ph_emoji:       "🍞",
      ph_desc:        "Contá brevemente de qué se trata esta receta…",
      ph_cat:         "— Elegir —",
      ph_time:        "Ej: 1h 20min",
      ph_ingredient:  "Ingrediente",
      ph_qty:         "Cantidad",
      ph_step:        "Paso",
      /* Footer */
      footer_back:    "← Volver a la tienda",
    },
    en: {
      /* Header */
      nav_home:       "Home",
      nav_recipes:    "Recipe Book",
      /* Hero */
      hero_eyebrow:   "Bakery recipe book",
      hero_title:     "The art of<br />artisan bread",
      hero_sub:       "Traditional and modern recipes for baking at home.",
      /* Toolbar */
      diff_label:     "Difficulty",
      diff_easy:      "Easy",
      diff_med:       "Medium",
      diff_hard:      "Hard",
      add_btn:        "Add recipe",
      /* Chips */
      chip_all:       "All",
      /* Stats */
      fav_only:       "Favorites only",
      /* Modal detalle */
      lbl_total_time: "Total time",
      lbl_servings:   "Base servings",
      lbl_difficulty: "Difficulty",
      scale_lbl:      "Scale recipe:",
      ing_title:      "Ingredients",
      steps_title:    "Steps",
      /* Modal agregar */
      modal_title:    "New recipe",
      modal_sub:      "Share your recipe with the community",
      f_name_lbl:     "Recipe name *",
      f_emoji_lbl:    "Emoji / icon",
      f_desc_lbl:     "Short description",
      f_cat_lbl:      "Category *",
      f_diff_lbl:     "Difficulty",
      f_time_lbl:     "Total time",
      f_servings_lbl: "Servings / units",
      f_ing_lbl:      "Ingredients *",
      f_add_ing:      "Add ingredient",
      f_steps_lbl:    "Steps *",
      f_add_step:     "Add step",
      f_cancel:       "Cancel",
      f_save:         "Save recipe",
      /* Toasts */
      toast_fav_add:  "Added to favorites",
      toast_fav_rem:  "Removed from favorites",
      toast_saved:    "Recipe saved successfully!",
      toast_err_req:  "Please fill in at least name and category",
      toast_err_ing:  "Add at least one ingredient and one step",
      /* Empty state */
      empty_msg:      "No recipes found with those filters.",
      /* Placeholders */
      ph_search:      "Search recipe or ingredient…",
      ph_name:        "E.g.: Country bread",
      ph_emoji:       "🍞",
      ph_desc:        "Briefly describe what this recipe is about…",
      ph_cat:         "— Choose —",
      ph_time:        "E.g.: 1h 20min",
      ph_ingredient:  "Ingredient",
      ph_qty:         "Amount",
      ph_step:        "Step",
      /* Footer */
      footer_back:    "← Back to store",
    }
  }
};

/* ─── DETECCIÓN DE PÁGINA ────────────────────────────────
   Determina en qué archivo estamos para elegir el objeto
   de traducciones correcto.
─────────────────────────────────────────────────────── */
const PAGE = window.location.pathname.includes('recipes') ? 'recipes' : 'index';

/* Idioma por defecto según la página:
   index → inglés (como estaba originalmente)
   recipes → español */
const DEFAULT_LANG = PAGE === 'index' ? 'en' : 'es';

/* Lee la preferencia guardada o usa el default */
let currentLang = localStorage.getItem('bakery_lang') || DEFAULT_LANG;

/* ─── APLICAR TRADUCCIONES ───────────────────────────────
   Recorre todos los elementos marcados y les asigna
   el texto del idioma activo.
─────────────────────────────────────────────────────── */

/** Aplica el idioma dado al DOM de la página actual.
 *  - data-i18n="clave"    → asigna innerHTML
 *  - data-i18n-ph="clave" → asigna placeholder
 *  Luego actualiza la etiqueta del botón toggle. */
function applyLang(lang) {
  const t = TRANSLATIONS[PAGE][lang];

  /* Textos visibles */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholders de inputs y selects */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Actualiza el <html lang=""> para accesibilidad */
  document.documentElement.lang = lang;

  /* Etiqueta del botón: muestra el idioma al que vas a cambiar */
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? 'ES' : 'EN';

  currentLang = lang;
  localStorage.setItem('bakery_lang', lang);
}

/** Alterna entre ES y EN y persiste la preferencia. */
function toggleLang() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
}

/* Aplica el idioma guardado en cuanto el DOM esté listo */
document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));

/* Expone getLang() para que recipes.js pueda leer el idioma
   activo al construir mensajes dinámicos (toasts, empty state). */
function getLang() { return currentLang; }
