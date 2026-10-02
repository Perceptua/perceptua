// Generates the favicon set in favicon/ with no dependencies: `npm run favicon`.
//
// The figure is the two crosses from static/images/aph_cloud.png on a unit L.
// Cross 1 runs from L above the crossing to 2L below, with a 2L crossbar (3:2,
// crossing at 1/3). Cross 2 is the same cross at 2/3 scale turned 90 degrees,
// sharing the crossbar: its bar sits L/3 right of the crossing, spanning
// +-2L/3. Arcs of radius L join the top of the vertical to the crossbar's left
// end, and its right end to the vertical L below the crossing.
//
// Sizes up to 48px are one-bit pixel art with the three bars only; larger
// sizes add the arcs, with square-ended strokes 6 wide per L = 100.
import { writeFileSync } from "node:fs";
import { crc32, deflateSync } from "node:zlib";

const OUT = new URL("../favicon/", import.meta.url);

const BRAND = [0x31, 0x5a, 0x87];
const SITE_BG = [0xec, 0xf1, 0xf2];
const COLORS = { brand: "#315A87", accent: "#5A85A7" };

// Pixel-aligned rects [x, y, w, h]: vertical, crossbar, cross 2 bar.
const BARS = {
  16: [[7, 0, 1, 16], [2, 5, 11, 1], [9, 2, 1, 7]], // L = 5
  32: [[15, 0, 1, 31], [5, 10, 21, 1], [18, 3, 1, 15]], // L = 10
  48: [[23, 1, 1, 46], [8, 16, 31, 1], [28, 6, 1, 21]], // L = 15
};

// RGBA rows for the bars-only design, every pixel fully on or off.
function barsPixels(size) {
  const px = Buffer.alloc(size * size * 4);
  for (const [rx, ry, rw, rh] of BARS[size]) {
    for (let y = ry; y < ry + rh; y++) {
      for (let x = rx; x < rx + rw; x++) {
        px.set([...BRAND, 255], (y * size + x) * 4);
      }
    }
  }
  return px;
}

const seg = (x1, y1, x2, y2) => ({ seg: [x1, y1, x2, y2] });
// Angles in degrees with y down, so increasing angles run clockwise on screen.
const arc = (cx, cy, r, a0, a1) => ({ arc: [cx, cy, r, (a0 * Math.PI) / 180, (a1 * Math.PI) / 180] });

const figure = (L, ox, oy) => [
  seg(ox, oy - L, ox, oy + 2 * L),
  seg(ox - L, oy, ox + L, oy),
  seg(ox + L / 3, oy - (2 * L) / 3, ox + L / 3, oy + (2 * L) / 3),
  arc(ox - L, oy - L, L, 0, 90),
  arc(ox + L, oy + L, L, 180, 270),
];

function inside(shape, x, y, half) {
  if (shape.seg) {
    const [x1, y1, x2, y2] = shape.seg;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t < 0 || t > 1) return false; // butt ends
    return (x - x1 - t * dx) ** 2 + (y - y1 - t * dy) ** 2 <= half * half;
  }
  const [cx, cy, r, a0, a1] = shape.arc;
  if (Math.abs(Math.hypot(x - cx, y - cy) - r) > half) return false;
  const a = (Math.atan2(y - cy, x - cx) + 2 * Math.PI) % (2 * Math.PI);
  return a0 <= a && a <= a1;
}

// The full design, supersampled. `canvas` is the square's side in units where
// L = 100; the figure (x -100..100, y -100..200 about the crossing) is centered.
function figurePixels(size, canvas, { bg, ss = 4 } = {}) {
  const k = size / canvas;
  const shapes = figure(100 * k, size / 2, size / 2 - 50 * k);
  const half = 3 * k;
  const px = Buffer.alloc(size * size * 4);

  for (let py = 0; py < size; py++) {
    for (let pxl = 0; pxl < size; pxl++) {
      let hits = 0;
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const x = pxl + (sx + 0.5) / ss;
          const y = py + (sy + 0.5) / ss;
          if (shapes.some((s) => inside(s, x, y, half))) hits++;
        }
      }
      const cov = hits / (ss * ss);
      const rgba = bg
        ? [...BRAND.map((c, i) => Math.round(c * cov + bg[i] * (1 - cov))), 255]
        : [...BRAND, Math.round(cov * 255)];
      px.set(rgba, (py * size + pxl) * 4);
    }
  }
  return px;
}

function png(px, size) {
  const chunk = (type, data) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body));
    return Buffer.concat([len, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr.set([8, 6, 0, 0, 0], 8); // 8-bit RGBA
  const rows = [];
  for (let y = 0; y < size; y++) {
    rows.push(Buffer.from([0]), px.subarray(y * size * 4, (y + 1) * size * 4));
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(Buffer.concat(rows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ICO container with PNG-encoded entries.
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(([size, data]) => {
    const e = Buffer.alloc(16);
    e.set([size % 256, size % 256], 0);
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map(([, data]) => data)]);
}

const barsSvg = (style) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${style}` +
  BARS[16].map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`).join("") +
  "</svg>\n";

const write = (name, data) => writeFileSync(new URL(name, OUT), data);

write("favicon.ico", ico([16, 32, 48].map((s) => [s, png(barsPixels(s), s)])));

// Home-screen and tile icons get padding: canvas 420 puts the figure at ~70% height.
// iOS fills transparency with black, so the touch icon sits on the site background.
write("apple-touch-icon.png", png(figurePixels(180, 420, { bg: SITE_BG }), 180));
write("android-chrome-192x192.png", png(figurePixels(192, 420), 192));
write("android-chrome-512x512.png", png(figurePixels(512, 420, { ss: 3 }), 512));
write("mstile-150x150.png", png(figurePixels(270, 420), 270));

// Tab-size SVG: --brand on light browser themes, --accent on dark ones.
write("favicon.svg", barsSvg(
  `<style>rect{fill:${COLORS.brand}}@media (prefers-color-scheme:dark){rect{fill:${COLORS.accent}}}</style>`,
));
// Pinned-tab mask: Safari takes only the shape and applies the mask-icon color.
write("safari-pinned-tab.svg", barsSvg(""));
