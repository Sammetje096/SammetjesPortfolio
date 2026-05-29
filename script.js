<<<<<<< HEAD
const scene = document.getElementById('scene');
const topbar = document.querySelector('.topbar');

/* ================================= */
/* ZOOMFUNCTIE */
/* ================================= */

function zoomToElement(el, popupId, scale = 2.0) {

  const sceneRect = scene.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  const hotspotCenterX =
    (elRect.left - sceneRect.left) + elRect.width / 2;

  const hotspotCenterY =
    (elRect.top - sceneRect.top) + elRect.height / 2;

  const sceneCenterX = sceneRect.width / 2;
  const sceneCenterY = sceneRect.height / 2;

  const originXpercent =
    (hotspotCenterX / sceneRect.width) * 100;

  const originYpercent =
    (hotspotCenterY / sceneRect.height) * 100;

  scene.style.transformOrigin =
    `${originXpercent}% ${originYpercent}%`;

  const tx = (sceneCenterX - hotspotCenterX) / scale;
  const ty = (sceneCenterY - hotspotCenterY) / scale;

  scene.style.transform =
    `scale(${scale}) translate(${tx}px, ${ty}px)`;

  setTimeout(() => {
    document.getElementById(popupId).classList.add('active');
  }, 500);
}

/* ================================= */
/* SLUIT POPUP */
/* ================================= */

function closePopup(id) {
  document.getElementById(id).classList.remove('active');
  scene.style.transform = '';
}

/* ================================= */
/* CONTACT */
/* ================================= */

function scrollToContact() {
  scene.style.transform = '';
  document.getElementById('contactSection')
    .scrollIntoView({ behavior: 'smooth' });
}

/* ================================= */
/* ESC SLUIT POPUPS */
/* ================================= */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document
      .querySelectorAll('.popup.active')
      .forEach(p => p.remove());

    document
      .querySelectorAll('#about.popup, #projects.popup')
      .forEach(p => p.classList.remove('active'));

    scene.style.transform = '';
  }
});

/* ================================= */
/* PROJECT DETAIL POPUP */
/* ================================= */

function openWorkDetail(
  title,
  mainImg,
  usedMedia,
  assignment,
  designText,
  extraImages = []
) {

  const popup = document.createElement('div');
  popup.className = 'popup active';

  popup.onclick = (e) => {
    if (e.target === popup) popup.remove();
  };

  let galleryHTML = '';

  extraImages.forEach(img => {
    galleryHTML += `<img src="${img}" class="project-gallery-img">`;
  });

  popup.innerHTML = `
    <div class="popup-content notebook-popup">

      <h2>${title}</h2>

      <img src="${mainImg}" class="work-detail-img">

      <div class="project-detail-text">

        <h3>Gebruikte media:</h3>
        <p>${usedMedia}</p>
        <div class="about-line"></div>

      
        <h3> De opdracht:</h3>
        <p>${assignment}</p>
        <div class="about-line"></div>

        <h3>Mijn ontwerp:</h3>
        <p>${designText}</p>
        <div class="about-line"></div>

      </div>

      <div class="project-gallery">
        ${galleryHTML}
      </div>

      <button class="close-btn"
        onclick="this.closest('.popup').remove()">
        Sluiten
      </button>

    </div>
  `;

  document.body.appendChild(popup);
}
=======
const scene = document.getElementById('scene');
const topbar = document.querySelector('.topbar');

/* Zoomfunctie */
function zoomToElement(el, popupId, scale = 2.0) {
  scene.style.transition = 'transform 1s cubic-bezier(.2,.9,.2,1)';
  scene.style.willChange = 'transform, transform-origin';

  const sceneRect = scene.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  const hotspotCenterX = (elRect.left - sceneRect.left) + elRect.width / 2;
  const hotspotCenterY = (elRect.top - sceneRect.top) + elRect.height / 2;

  const sceneCenterX = sceneRect.width / 2;
  const sceneCenterY = sceneRect.height / 2;

  const originXpercent = (hotspotCenterX / sceneRect.width) * 100;
  const originYpercent = (hotspotCenterY / sceneRect.height) * 100;
  scene.style.transformOrigin = `${originXpercent}% ${originYpercent}%`;

  const tx = (sceneCenterX - hotspotCenterX) / scale;
  const ty = (sceneCenterY - hotspotCenterY) / scale;

  scene.style.transform = `scale(${scale}) translate(${tx}px, ${ty}px)`;

  topbar.classList.add('zoom-active');

  setTimeout(() => { document.getElementById(popupId).classList.add('active'); }, 500);
}

/* Sluit popup */
function closePopup(id) {
  document.getElementById(id).classList.remove('active');
  scene.style.transform = '';
  topbar.classList.remove('zoom-active');
  setTimeout(() => scene.style.transformOrigin = '', 300);
}

/* Scroll naar contact */
function scrollToContact() {
  scene.style.transform = '';
  topbar.classList.remove('zoom-active');
  setTimeout(() => scene.style.transformOrigin = '', 300);
  document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
}

/* Escape sluit popup */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.popup.active').forEach(p => p.classList.remove('active'));
    scene.style.transform = '';
    topbar.classList.remove('zoom-active');
    setTimeout(() => scene.style.transformOrigin = '', 300);
  }
});

/* Open project detail popup */
function openWorkDetail(title, imgSrc, description) {
  const popup = document.createElement('div');
  popup.className = 'popup active';
  popup.innerHTML = `
    <div class="popup-content notebook-popup">
      <h2>${title}</h2>
      <img src="${imgSrc}" alt="${title}" class="work-detail-img"/>
      <p>${description}</p>
      <button class="close-btn" onclick="document.body.removeChild(this.parentElement.parentElement)">Sluiten</button>
    </div>
  `;
  document.body.appendChild(popup);
}
>>>>>>> f4489273afc9b68c90c5ef1f38a45cce0041e346
