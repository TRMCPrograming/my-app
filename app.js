/**
 * app.js
 * ─────────────────────────────────────────────────────────────
 * Youth Day Bible Verses — Application Logic
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  "use strict";

  /* ── Bible story background images (Unsplash — free to use) ── */
  const STORY_IMAGES = [
    "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80", // light through clouds
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80", // open road/path
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80", // starry sky
    "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=1200&q=80", // ocean/sea
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80", // sunrise landscape
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", // green valley
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&q=80", // person on mountain
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // rocky mountain
    "https://images.unsplash.com/photo-1444080748397-f442aa105c06?w=1200&q=80", // desert stars
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80", // golden wheat field
  ];

  /* ── DOM references ── */
  const grid        = document.getElementById("category-grid");
  const versePage   = document.getElementById("verse-page");
  const backBtn     = document.getElementById("back-btn");
  const pageIcon    = document.getElementById("page-icon");
  const pageTitle   = document.getElementById("page-title");
  const verseList   = document.getElementById("verse-list");
  const overlay     = document.getElementById("verse-overlay");
  const overlayBg   = document.getElementById("overlay-bg");
  const overlayRef  = document.getElementById("overlay-ref");
  const overlayText = document.getElementById("overlay-text");
  const overlayClose= document.getElementById("overlay-close");
  const welcomePopup= document.getElementById("welcome-popup");
  const welcomeBtn  = document.getElementById("welcome-btn");

  /* ── Welcome popup: show on load ── */
  setTimeout(function () {
    welcomePopup.classList.add("active");
  }, 300);

  welcomeBtn.addEventListener("click", function () {
    welcomePopup.classList.remove("active");
  });

  /* Close popup if clicking backdrop */
  welcomePopup.addEventListener("click", function (e) {
    if (e.target === welcomePopup) {
      welcomePopup.classList.remove("active");
    }
  });

  /* ── Build the category index grid ── */
  function buildGrid() {
    CATEGORIES.forEach(function (cat) {
      const card = document.createElement("div");
      card.className = "cat-card" + (cat.fullWidth ? " full-width" : "");
      card.style.setProperty("--cat-color", cat.color);
      card.setAttribute("data-id", cat.id);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "Open " + cat.title.replace(/&amp;/g, "&"));

      card.innerHTML =
        '<span class="cat-icon">' + cat.icon + '</span>' +
        '<div class="cat-name">' + cat.title + '</div>' +
        '<span class="cat-count">' + cat.verses.length + ' Verse' + (cat.verses.length !== 1 ? 's' : '') + '</span>';

      card.addEventListener("click", function () { openPage(cat.id); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openPage(cat.id);
      });

      grid.appendChild(card);
    });
  }

  /* ── Open a category verse page ── */
  function openPage(id) {
    const cat = CATEGORIES.find(function (c) { return c.id === id; });
    if (!cat) return;

    pageIcon.textContent  = cat.icon;
    pageTitle.innerHTML   = cat.title.replace(/&amp;/g, "&<br>");

    verseList.innerHTML = "";
    cat.verses.forEach(function (v, idx) {
      const card = document.createElement("div");
      card.className = "verse-card";
      card.setAttribute("data-num", v.num);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "Focus on " + v.ref);

      card.innerHTML =
        '<div class="verse-ref">' + v.ref + '</div>' +
        '<p class="verse-text">' + v.text + '</p>' +
        '<span class="verse-tap-hint">✦ Tap to focus</span>';

      /* Pick a background image for this verse */
      const imgUrl = STORY_IMAGES[idx % STORY_IMAGES.length];

      card.addEventListener("click", function () {
        openOverlay(v.ref, v.text, imgUrl);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openOverlay(v.ref, v.text, imgUrl);
      });

      verseList.appendChild(card);
    });

    versePage.classList.add("active");
    versePage.scrollTop = 0;
    document.body.style.overflow = "hidden";

    history.pushState({ page: id }, "", "#" + id);
  }

  /* ── Open full-screen verse overlay ── */
  function openOverlay(ref, text, imgUrl) {
    overlayBg.style.backgroundImage = "url('" + imgUrl + "')";
    overlayRef.textContent  = ref;
    overlayText.textContent = text;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  /* ── Close the verse overlay ── */
  function closeOverlay() {
    overlay.classList.remove("active");
  }

  overlayClose.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlay();
  });

  /* ── Close the verse page ── */
  function closePage() {
    versePage.classList.remove("active");
    document.body.style.overflow = "";
  }

  backBtn.addEventListener("click", function () {
    closePage();
    history.back();
  });

  window.addEventListener("popstate", function (e) {
    if (!e.state || !e.state.page) {
      closePage();
    }
  });

  function handleInitialHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) openPage(hash);
  }

  buildGrid();
  handleInitialHash();

})();
