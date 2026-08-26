// Sort/filter menu toggles. Each trigger's id maps to its menu's id:
// #filter -> #filter-menu, #medium -> #medium-menu, #date -> #date-menu.
document.addEventListener("click", (ev) => {
  const trigger = ev.target.closest("#filter, .filter-option");
  if (!trigger) return;

  document.getElementById(`${trigger.id}-menu`)?.classList.toggle("hidden");

  const caret = trigger.querySelector("i");
  caret?.classList.toggle("fa-caret-down");
  caret?.classList.toggle("fa-caret-up");
});

// Re-roll "Surprise Me" per click. The href is a build-time pick, so the link
// still works without JS.
document.getElementById("surprise")?.addEventListener("click", (ev) => {
  const links = document.querySelectorAll(".content-card > a");
  if (!links.length) return;

  ev.preventDefault();
  window.location.href = links[Math.floor(Math.random() * links.length)].href;
});
