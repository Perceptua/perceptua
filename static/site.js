// Header controls on every page: the light/dark theme toggle and post search.

// Theme: flip whichever theme is showing and remember the choice. Until the
// visitor picks one, the page follows their system setting (see main.css).
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const current = root.dataset.theme ?? (systemDark.matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";

  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
});


// Search: matches every word of the query against post titles and text, using
// /search.json (built by search.11ty.js), which is fetched on first open.
const panel = document.getElementById("search");
const toggle = document.getElementById("search-toggle");
const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

// Lowercase, strip accents and straighten quotes one character at a time, so
// folded text keeps the original's indices for snippets and highlighting.
const fold = (s) =>
  s.toLowerCase().replace(/[^\x00-\x7e]/g, (c) =>
    ({ "‘": "'", "’": "'", "“": '"', "”": '"' })[c] ?? c.normalize("NFD")[0],
  );

let index;
const loadIndex = () =>
  (index ??= fetch("/search.json")
    .then((res) => res.json())
    .then((posts) => posts.map((p) => ({ ...p, foldedTitle: fold(p.title), foldedText: fold(p.text) })))
    .catch((err) => {
      index = undefined; // retry on the next keystroke
      throw err;
    }));

const setOpen = (open) => {
  panel.classList.toggle("hidden", !open);
  toggle.setAttribute("aria-expanded", String(open));
  if (open) {
    loadIndex();
    input.focus();
    input.select();
  }
};

toggle?.addEventListener("click", () => setOpen(panel.classList.contains("hidden")));

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && !panel.classList.contains("hidden")) {
    setOpen(false);
    toggle.focus();
  }
});

// Appends text to el, wrapping each query word's occurrences in <mark>.
const appendHighlighted = (el, text, words) => {
  const folded = fold(text);
  const hits = [];
  for (const w of words) {
    for (let i = folded.indexOf(w); i !== -1; i = folded.indexOf(w, i + w.length)) {
      hits.push([i, i + w.length]);
    }
  }
  hits.sort((a, b) => a[0] - b[0]);

  let pos = 0;
  for (const [start, end] of hits) {
    if (start < pos) continue;
    el.append(text.slice(pos, start));
    const mark = document.createElement("mark");
    mark.textContent = text.slice(start, end);
    el.append(mark);
    pos = end;
  }
  el.append(text.slice(pos));
};

// About a line of text around the first match, cut at word boundaries.
const snippetOf = (post, words) => {
  const hit = Math.min(...words.map((w) => post.foldedText.indexOf(w)).filter((i) => i !== -1));
  if (!Number.isFinite(hit)) return post.text.slice(0, 100).replace(/\s\S*$/, "") + " …";

  let start = Math.max(0, hit - 40);
  let end = Math.min(post.text.length, hit + 80);
  if (start > 0) start = post.text.indexOf(" ", start) + 1;
  if (end < post.text.length) end = post.text.lastIndexOf(" ", end);

  return (start > 0 ? "… " : "") + post.text.slice(start, end) + (end < post.text.length ? " …" : "");
};

const render = async () => {
  const query = input.value;
  const words = fold(query).split(/\s+/).filter(Boolean);
  results.replaceChildren();
  if (words.join("").length < 2) return;

  const posts = await loadIndex();
  if (input.value !== query) return; // a newer keystroke has its own render

  const matches = posts
    .filter((p) => words.every((w) => p.foldedTitle.includes(w) || p.foldedText.includes(w)))
    .sort((a, b) => words.some((w) => b.foldedTitle.includes(w)) - words.some((w) => a.foldedTitle.includes(w)));

  if (!matches.length) {
    const li = document.createElement("li");
    li.className = "search-empty";
    li.textContent = "No results";
    results.append(li);
    return;
  }

  for (const post of matches) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = post.url;
    appendHighlighted(link, post.title, words);

    const medium = document.createElement("span");
    medium.className = "medium";
    medium.textContent = ` · ${post.medium}`;

    const snippet = document.createElement("p");
    snippet.className = "snippet";
    appendHighlighted(snippet, snippetOf(post, words), words);

    li.append(link, medium, snippet);
    results.append(li);
  }
};

input?.addEventListener("input", render);

// Enter opens the first result.
input?.addEventListener("keydown", (ev) => {
  const first = results.querySelector("a");
  if (ev.key === "Enter" && first) window.location.href = first.href;
});
