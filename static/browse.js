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
