function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function boldMyName(authors) {
  const escaped = escapeHtml(authors);
  const escapedName = escapeHtml(MY_NAME);
  return escaped.split(escapedName).join(`<span class="me">${escapedName}</span>`);
}

// Authors marked with a trailing "*" (e.g. "L. Zhang*, L. Burbano*, ...")
// are rendered with a superscript asterisk and a footnote below the list.
function renderAuthors(authors) {
  return boldMyName(authors).replace(/\*/g, "<sup>*</sup>");
}

const LINK_LABELS = { pdf: "PDF", code: "Code", project: "Project", doi: "DOI" };

function renderNews() {
  const list = document.getElementById("news-list");
  list.innerHTML = NEWS.map(item => `
    <li class="news-item">
      <span class="news-date">${escapeHtml(item.date)}</span>
      <span class="news-text">${escapeHtml(item.text)}</span>
    </li>
  `).join("");
}

function renderPapers() {
  const list = document.getElementById("paper-list");
  list.innerHTML = PAPERS.map(paper => {
    const links = Object.entries(paper.links || {})
      .map(([key, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${LINK_LABELS[key] || key}</a>`)
      .join("");
    const equalContribNote = paper.authors.includes("*")
      ? `<div class="equal-contrib-note"><sup>*</sup>Equal contribution.</div>`
      : "";
    return `
      <li class="paper-item">
        <span class="paper-title">${escapeHtml(paper.title)}</span>
        <div class="paper-authors">${renderAuthors(paper.authors)}</div>
        ${equalContribNote}
        <div class="paper-venue">${escapeHtml(paper.venue)}</div>
        <div class="paper-links">${links}</div>
      </li>
    `;
  }).join("");
}

function renderEducation() {
  const list = document.getElementById("education-list");
  list.innerHTML = EDUCATION.map(item => `
    <li class="education-item">
      <span class="education-degree">${escapeHtml(item.degree)}</span>
      <div class="education-meta">
        <span class="education-school">${escapeHtml(item.school)}</span>
        <span class="education-year">${escapeHtml(item.year)}</span>
      </div>
    </li>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderEducation();
renderNews();
renderPapers();

// Keeps anchor-jump targets (About/News/Papers/...) clear of the sticky
// header, whose height changes when the nav wraps to two lines on narrow
// screens. The 76px in CSS is just a no-JS fallback for the common case.
function updateScrollPadding() {
  const header = document.querySelector(".site-header");
  document.documentElement.style.scrollPaddingTop = `${header.offsetHeight + 12}px`;
}
updateScrollPadding();
window.addEventListener("resize", updateScrollPadding);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
