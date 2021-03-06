import './sass/main.scss';

import img1small from './images/himilayan-blue-poppy-4202825__340.jpg';
import img1norm from './images/himilayan-blue-poppy-4202825_1280.jpg';
import img2small from './images/container-4203677__340.jpg';
import img2norm from './images/container-4203677_1280.jpg';
import img3small from './images/beach-4206785__340.jpg';
import img3norm from './images/beach-4206785_1280.jpg'; 
import img4small from './images/flowers-1835619__340.jpg';
import img4norm from './images/flowers-1835619_1280.jpg';  
import img5small from './images/mountains-3674334__340.jpg';
import img5norm from './images/mountains-3674334_1280.jpg'; 
import img6small from './images/landscape-4208571__340.jpg';
import img6norm from './images/landscape-4208571_1280.jpg';  
import img7small from './images/the-alps-4209272__340.jpg';
import img7norm from './images/the-alps-4209272_1280.jpg';  
import img8small from './images/landscape-4208255__340.jpg';
import img8norm from './images/landscape-4208255_1280.jpg';  
import img9small from './images/lighthouse-4208843__340.jpg';
import img9norm from './images/lighthouse-4208843_1280.jpg';

const galleryItems = [
    {
        preview: img1small,
        original: img1norm,
        description: 'Hokkaido Flower',
    },
    {
        preview: img2small,
        original: img2norm,
        description: 'Container Haulage Freight',
    },
    {
        preview: img3small,
        original: img3norm,
        description: 'Aerial Beach View',
    },
    {
        preview: img4small,
        original: img4norm,
        description: 'Flower Blooms',
    },
    {
        preview: img5small,
        original: img5norm,
        description: 'Alpine Mountains',
    },
    {
        preview: img6small,
        original: img6norm,
        description: 'Mountain Lake Sailing',
    },
    {
        preview: img7small,
        original: img7norm,
        description: 'Alpine Spring Meadows',
    },
    {
        preview: img8small,
        original: img8norm,
        description: 'Nature Landscape',
    },
    {
        preview: img9small,
        original: img9norm,
        description: 'Lighthouse Coast Sea',
    },
];

const refs = {
    galleryList: document.querySelector('.js-gallery'), //?????????? ???????????????? ????????????????
    modal: document.querySelector('.js-lightbox'), //?????????????????? ????????
    modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'), //???????????? ???????????????? ???????????????????? ????????
    modalImage: document.querySelector('.lightbox__image'),
    modalOverlay: document.querySelector('.lightbox__overlay'), //?????????? ?????? ?? ??????????????
};

// ???????????????? ?? ???????????? ???????????????? ???? ?????????????? ???????????? ?? ???????????????????????????????? ??????????????.

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(elements) {
    return elements
        .map(({ preview, original, description }) => {
            return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
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

// ???????????????????? ?????????????????????????? ???? ?????????????? ul.js-gallery ?? ?????????????????? url ???????????????? ??????????????????????.

refs.galleryList.addEventListener('click', onOpenModal);

function changeSrcAlt(argSrc, argAlt) {
    return (
        refs.modalImage.src = argSrc,
        refs.modalImage.alt = argAlt
    );
}

function onOpenModal(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault(); //???????????? ???????????????? ???? ????????????

    refs.modal.classList.add('is-open'); // ???????????????? ???????????????????? ???????? ???? ?????????? ???? ???????????????? ??????????????.

    changeSrcAlt(evt.target.dataset.source, evt.target.alt);

    //refs.modalImage.src = evt.target.dataset.source; // ?????????????? ???????????????? ???????????????? src ???????????????? img.lightbox__image.
    //refs.modalImage.alt = evt.target.alt;


    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('keydown', onArrowLeftPress);
    window.addEventListener('keydown', onArrowRightPress);
}

// ???????????????? ???????????????????? ???????? ???? ?????????? ???? ???????????? button[data-action="close-lightbox"].
refs.modalCloseBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
    refs.modal.classList.remove('is-open');

    changeSrcAlt('', '');

    //refs.modalImage.src = ''; // ?????????????? ???????????????? ???????????????? src ???????????????? img.lightbox__image.
    //refs.modalImage.alt = '';


    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onArrowLeftPress);
    window.removeEventListener('keydown', onArrowRightPress);
}

// ???????????????? ???????????????????? ???????? ???? ?????????? ???? div.lightbox__overlay.

refs.modalOverlay.addEventListener('click', onBOverlayClick);

function onBOverlayClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseModal();
    }
}

// ???????????????? ???????????????????? ???????? ???? ?????????????? ?????????????? ESC.

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}
