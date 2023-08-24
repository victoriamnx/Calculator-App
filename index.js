const themeLinks = {
  "default-theme": "default-theme.css",
  theme2: "theme2.css",
  theme3: "theme3.css",
};

const toggleInputs = document.querySelectorAll('input[name="toggle-state"]');

toggleInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      const selectedTheme = themeLinks[event.target.id];
      updateTheme(selectedTheme);
    }
  });
});

function updateTheme(theme) {
  document.getElementById("theme-link").href = theme;
}
