import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const imgGallery = createImgCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgGallery);

function createImgCard(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `;
    })
    .join('');
}

function onImgOriginslCard(event) {
event.preventDefault();

if (event.target.nodeName !== 'IMG') {
    return;
}

const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
    onShow: () => document.addEventListener('keydown', onCloseModal),
    onClose: () => document.removeEventListener('keydown', onCloseModal),
    }
);

instance.show();

function onCloseModal(event) {
    if (event.code === 'Escape') {
    instance.close();
    }
}
}

galleryEl.addEventListener('click', onImgOriginslCard);
