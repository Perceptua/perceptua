# Perceptua

### An Art Of Histories, A History Of Arts

Verse and short fiction, published at **[perceptua.blue](https://perceptua.blue)**.

This repository is the whole site: the writing lives in `_posts/` as markdown,
and a static build turns it into the pages you see. There is no database, no
CMS, and no runtime backend — publishing is a commit.

## Development

```sh
npm install
npm run serve    # local preview with live reload
npm run build    # writes _site/
```

Requires Node 20 or newer.

## How it works

Built with [Eleventy](https://www.11ty.dev). Posts are markdown files in
`_posts/`, named `YYYY-MM-DD-slug.md`. Front matter carries the metadata:

```yaml
---
title: October Sestina
categories: [Verse]
description: A few lines of verse on a website.
keywords: verse, poetry, sestina, October
---
```

`categories` does double duty — it sets the URL prefix and groups the piece on
the browse page. Two are in use, `Verse` and `Fiction`; adding a third needs no
code changes. Everything else is inferred: the date comes from the filename, the
layout and permalink from `_posts/_posts.11tydata.js`.

Posts are published at `/{category}/{slug}.html`, e.g.
`/verse/october-sestina.html`.

`browse.liquid` generates the listing pages, one per category and sort order,
from post front matter at build time:

| Path | Contents |
| --- | --- |
| `/` | everything, newest first |
| `/older/` | everything, oldest first |
| `/{category}/` | one category, newest first |
| `/{category}/older/` | one category, oldest first |

Images, video, and PDFs referenced by posts live in `static/media/`. Keep web
assets modest — GitHub caps individual files at 100 MB, and large video should
be re-encoded before it lands here rather than committed straight off a camera.

## Layout

```
_posts/       the writing
_layouts/     page shells
_includes/    head, header, footer
static/       css, media, and the site's only javascript
favicon/      icons and manifests
browse.liquid generates the listing pages
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `_site/` to GitHub Pages. The custom domain is pinned by
`CNAME`.

## License

[GPL-3.0](LICENSE).
