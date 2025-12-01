// Select the drawer element
const drawerEl = document.querySelector('#drawer');

function openDrawer(imgElement) {
  
  const imgSrc = imgElement.getAttribute('src');
  const caption = imgElement.getAttribute('alt');

  
  const template = `
    <header>
      <button class="close-btn" aria-label="Close Drawer" onclick="closeDrawer()">&times;</button>
    </header>
    <div class="drawer-content">
      <img src="${imgSrc}" alt="${caption}">
      <p>${caption}</p>
    </div>
  `;

  
  drawerEl.innerHTML = template;
  drawerEl.classList.add('open');
  drawerEl.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  drawerEl.classList.remove('open');
  drawerEl.setAttribute('aria-hidden', 'true');
}
