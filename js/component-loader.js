// Load an external HTML file into a container
function loadComponent(path, targetSelector) {
  return fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
      }
      return response.text();
    })
    .then(html => {
      const target = document.querySelector(targetSelector);
      if (target) {
        target.innerHTML = html;
      }
    });
}
