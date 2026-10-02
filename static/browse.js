// Re-roll "Surprise" per click. The href is a build-time pick, so the link
// still works without JS.
document.getElementById("surprise")?.addEventListener("click", (ev) => {
  const links = document.querySelectorAll(".content-card > a");
  if (!links.length) return;

  ev.preventDefault();
  window.location.href = links[Math.floor(Math.random() * links.length)].href;
});

// Close the medium dropdown on a click outside it or on Escape.
const dropdown = document.querySelector(".dropdown");

document.addEventListener("click", (ev) => {
  if (dropdown?.open && !dropdown.contains(ev.target)) dropdown.open = false;
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && dropdown?.open) {
    dropdown.open = false;
    dropdown.querySelector("summary").focus();
  }
});
