/**
 * app.js
 * ─────────────────────────────────────────────────────────────
 * Youth Day Bible Verses — Application Logic
 *
 * Responsibilities:
 *  1. Build the category index grid from CATEGORIES data
 *  2. Handle opening / closing the verse page
 *  3. Populate the verse page with the selected category's verses
 *  4. Manage back-button & browser history (pushState)
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  "use strict";

  /* ── DOM references ── */
  const grid      = document.getElementById("category-grid");
  const versePage = document.getElementById("verse-page");
  const backBtn   = document.getElementById("back-btn");
  const pageIcon  = document.getElementById("page-icon");
  const pageTitle = document.getElementById("page-title");
  const verseList = document.getElementById("verse-list");

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

    /* Populate header */
    pageIcon.textContent  = cat.icon;
    pageTitle.innerHTML   = cat.title.replace(/&amp;/g, "&<br>");

    /* Populate verse cards */
    verseList.innerHTML = "";
    cat.verses.forEach(function (v) {
      const card = document.createElement("div");
      card.className = "verse-card";
      card.setAttribute("data-num", v.num);

      card.innerHTML =
        '<div class="verse-ref">' + v.ref + '</div>' +
        '<p class="verse-text">' + v.text + '</p>';

      verseList.appendChild(card);
    });

    /* Animate in */
    versePage.classList.add("active");
    versePage.scrollTop = 0;
    document.body.style.overflow = "hidden";

    /* Push history state so the browser back button works */
    history.pushState({ page: id }, "", "#" + id);
  }

  /* ── Close the verse page ── */
  function closePage() {
    versePage.classList.remove("active");
    document.body.style.overflow = "";
  }

  /* ── Back button (in-page) ── */
  backBtn.addEventListener("click", function () {
    closePage();
    history.back();
  });

  /* ── Browser / OS back gesture ── */
  window.addEventListener("popstate", function (e) {
    if (!e.state || !e.state.page) {
      closePage();
    }
  });

  /* ── Handle deep-link on load (e.g. index.html#strength) ── */
  function handleInitialHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash) openPage(hash);
  }

  /* ── Initialise ── */
  buildGrid();
  handleInitialHash();

})();
