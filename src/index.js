import './sass/main.scss';

const galleryItems = [
    {
        preview:
            'images/himilayan-blue-poppy-4202825_340.jpg',
        original:
            'images/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'images/container-4203677__340.jpg',
        original:
            'images/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'images/beach-4206785__340.jpg',
        original:
            'images/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'images/flowers-1835619__340.jpg',
        original:
            'images/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'images/mountains-3674334__340.jpg',
        original:
            'images/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'images/landscape-4208571__340.jpg',
        original:
            'images/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'images/the-alps-4209272__340.jpg',
        original:
            'images/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'images/landscape-4208255__340.jpg',
        original:
            'images/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'images/lighthouse-4208843__340.jpg',
        original:
            'images/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];


const refs = {
    galleryList: document.querySelector('.js-gallery'), //общий родитель картинок
    modal: document.querySelector('.js-lightbox'), //модальное окно
    modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'), //кнопка закрытия модального окна
    modalImage: document.querySelector('.lightbox__image'),
    modalOverlay: document.querySelector('.lightbox__overlay'), //серый фон в модалке
};

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

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

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

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
    evt.preventDefault(); //отмена перехода по ссылке

    refs.modal.classList.add('is-open'); // Открытие модального окна по клику на элементе галереи.

    changeSrcAlt(evt.target.dataset.source, evt.target.alt);

    //refs.modalImage.src = evt.target.dataset.source; // Подмена значения атрибута src элемента img.lightbox__image.
    //refs.modalImage.alt = evt.target.alt;


    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('keydown', onArrowLeftPress);
    window.addEventListener('keydown', onArrowRightPress);
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
refs.modalCloseBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
    refs.modal.classList.remove('is-open');

    changeSrcAlt('', '');

    //refs.modalImage.src = ''; // Очистка значения атрибута src элемента img.lightbox__image.
    //refs.modalImage.alt = '';


    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onArrowLeftPress);
    window.removeEventListener('keydown', onArrowRightPress);
}

// Закрытие модального окна по клику на div.lightbox__overlay.

refs.modalOverlay.addEventListener('click', onBOverlayClick);

function onBOverlayClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseModal();
    }
}

// Закрытие модального окна по нажатию клавиши ESC.

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}
