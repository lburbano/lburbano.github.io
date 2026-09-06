# Academic Site

Plain HTML/CSS/JS personal academic site. No build step — open
`index.html` directly, or serve the folder with any static host.

## Structure

- `index.html` — page markup and section order (Bio, News, Papers, Education).
  The nav's "CV" link goes straight to `cv/CV.pdf` rather than a page section.
- `css/style.css` — all styling
- `js/data.js` — **edit this** to update your name, news items, and papers
- `js/render.js` — turns `data.js` into HTML (rarely needs changes)
- `cv/CV.pdf` — add your real CV file here (see `cv/README.md`)

## Editing content

1. **Name, title, bio, links** — edit directly in `index.html` inside the
   `<section id="bio">` block. Replace every `[bracketed placeholder]`.
2. **Photo** — drop a photo at `assets/photo.jpg` (that exact path). The
   circular avatar shows your initials until that file exists, then
   switches to the photo automatically — no code changes needed.
3. **Education** — edit the `EDUCATION` array in `js/data.js`.
4. **News** — add/edit entries in the `NEWS` array in `js/data.js`, newest first.
5. **Papers** — add/edit entries in the `PAPERS` array in `js/data.js`. Set
   `MY_NAME` at the top of that file to match how your name appears in
   author lists, and it'll be bolded automatically.
6. **CV** — drop your PDF at `cv/CV.pdf`. The nav's "CV" link downloads it
   directly; there's no separate CV section on the page.
7. **Contact/social links** (Email, Google Scholar, LinkedIn, GitHub,
   Twitter/X) — edit the `links-row` div directly in `index.html`, under
   the bio section.

## Preview locally

Just open `index.html` in a browser. If your browser blocks local
JavaScript module loading (it won't here — these are plain scripts, not
modules), run a tiny local server instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy for free

**GitHub Pages**
1. Push this folder to a GitHub repo (e.g. `yourusername.github.io` for a
   root domain, or any repo name for a project page).
2. In the repo settings, enable Pages, source = `main` branch, root folder.
3. Your site is live at `https://yourusername.github.io/` (or
   `/reponame/` for a project page).

**Netlify / Vercel**
Drag-and-drop this folder onto Netlify's deploy page, or connect the repo —
no build command needed (leave it blank / static site).
