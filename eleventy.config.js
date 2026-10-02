// Formats a date consistently regardless of the build machine's timezone.
// Post dates come from the `YYYY-MM-DD-` filename prefix, i.e. UTC midnight.
const formatDate = (date, options) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...options }).format(date);

// A post's medium is its first category, lowercased for use in URLs.
const mediumOf = (post) => post.data.categories[0].toLowerCase();

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("CNAME");

  // "November 05, 2024" — matches the previous Jekyll `%B %d, %Y` format.
  eleventyConfig.addFilter("postDate", (date) =>
    formatDate(date, { month: "long", day: "2-digit", year: "numeric" }),
  );

  // "Nov 5, 2024" — matches AngularJS's default `date` filter on the cards.
  eleventyConfig.addFilter("cardDate", (date) =>
    formatDate(date, { month: "short", day: "numeric", year: "numeric" }),
  );

  eleventyConfig.addFilter("related", (posts, url, category) =>
    posts.filter((p) => p.url !== url && p.data.categories[0] === category).reverse(),
  );

  // One entry per browse page: every medium (plus "all") in both sort orders.
  // Replaces the Firestore query the AngularJS front end used to run per visit.
  eleventyConfig.addCollection("browse", (api) => {
    const posts = api.getFilteredByTag("post");
    const media = [...new Set(posts.map(mediumOf))].sort();

    return [null, ...media].flatMap((medium) => {
      const scoped = medium ? posts.filter((p) => mediumOf(p) === medium) : posts;

      return ["desc", "asc"].map((order) => {
        const sorted = [...scoped].sort((a, b) =>
          order === "desc" ? b.date - a.date : a.date - b.date,
        );

        return {
          medium,
          media,
          order,
          base: medium ? `/${medium}/` : "/",
          path: `${medium ? medium + "/" : ""}${order === "asc" ? "older/" : ""}index.html`,
          posts: sorted,
          surprise: sorted[Math.floor(Math.random() * sorted.length)],
        };
      });
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "liquid",
  };
}
