// Builds /search.json: every post's title, URL, medium and plain text, for the
// header search in static/site.js. Loaded on first use, not on every page.
const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", numero: "№" };

const toPlainText = (html) =>
  html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) =>
      e[0] !== "#" ? (ENTITIES[e.toLowerCase()] ?? m)
      : String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)),
    )
    .replace(/\s+/g, " ")
    .trim();

export const data = {
  permalink: "/search.json",
  eleventyExcludeFromCollections: true,
  eleventyImport: { collections: ["post"] },
};

export function render({ collections }) {
  const posts = [...collections.post].sort((a, b) => b.date - a.date);

  return JSON.stringify(
    posts.map((post) => ({
      title: post.data.title,
      url: post.url,
      medium: post.data.categories[0],
      text: toPlainText(post.content),
    })),
  );
}
