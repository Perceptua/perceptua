// Applies to every post, so individual files only carry their own metadata.
// The permalink reproduces Jekyll's `:categories/:title:output_ext` scheme,
// keeping every published URL byte-identical to the old site.
export default {
  tags: "post",
  layout: "post",
  permalink: (data) => `${data.categories[0].toLowerCase()}/${data.page.fileSlug}.html`,
};
