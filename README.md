# Youth Day Bible Verses App
**Theme: Communion in Action — Global Youth Day Service**

A mobile-first web app displaying 50 Bible verses organized into 9 categories,
with a tap-to-navigate index and smooth slide-in verse pages.

---

## Folder Structure

```
youth-verses-app/
├── index.html          ← Main entry point (open this in a browser)
├── README.md           ← This file
├── css/
│   └── styles.css      ← All styling, layout, animations, and design tokens
├── js/
│   └── app.js          ← App logic: grid builder, page navigation, history API
└── data/
    └── verses.js       ← All 50 verses + category metadata (single source of truth)
```

---

## How to Run

### Option A — Open directly in a browser
Double-click `index.html` — it opens as a local file.
All assets are relative, so no server is needed.

### Option B — Local dev server (recommended for mobile testing)
If you have Node.js installed:
```bash
cd youth-verses-app
npx serve .
```
Then open the printed URL on your phone (same Wi-Fi network).

Or with Python:
```bash
cd youth-verses-app
python3 -m http.server 8080
```
Visit `http://localhost:8080` in your browser.

---

## How to Add or Edit Verses

All content lives in **`data/verses.js`**.

Each category follows this shape:
```js
{
  id:        "strength",          // slug — used in the URL hash
  title:     "Strength &amp; Courage",
  icon:      "⚔️",
  color:     "#F59E0B",           // accent bar color
  fullWidth: false,               // true = card spans both grid columns
  verses: [
    { num: 1, ref: "Joshua 1:9", text: "Have I not commanded you…" },
    // …
  ]
}
```

To add a new category, push a new object into the `CATEGORIES` array.
To edit a verse, find it by `num` or `ref` and update the `text` field.
No other files need to change.

---

## Categories & Verse Numbers

| # | Category               | Verses |
|---|------------------------|--------|
| 1 | Strength & Courage     | 1–5    |
| 2 | Identity & Purpose     | 6–10   |
| 3 | Guidance & Wisdom      | 11–15  |
| 4 | Hope & Faith           | 16–20  |
| 5 | Friendship & Relationships | 21–25 |
| 6 | Overcoming Challenges  | 26–30  |
| 7 | Staying Positive       | 31–35  |
| 8 | Love & Forgiveness     | 36–40  |
| 9 | Following God's Will   | 46–50  |

---

## Design Notes

- **Color palette**: Deep purple `#1A1025` / gold `#C9A84C` / cream `#F5EFE0`
- **Fonts**: Playfair Display (headings & verse text) + Lato (UI labels)
  — loaded from Google Fonts
- **Navigation**: CSS `transform: translateX` slide — no framework required
- **History**: `pushState` / `popstate` so the OS back gesture works naturally
- **No dependencies**: Pure HTML + CSS + vanilla JS. No build step required.

---

*Built for the Global Youth Day Service. May these words bring strength, hope, and guidance.*
