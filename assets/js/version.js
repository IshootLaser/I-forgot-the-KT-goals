// Edit the application version here.
const __version__ = "0.1.2";

document.querySelectorAll("[data-app-version]").forEach((element) => {
  element.textContent = `VER ${__version__}`;
});
