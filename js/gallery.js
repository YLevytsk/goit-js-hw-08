const images = [
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/14/16/43 /rchids- 420282 0__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/14/16/43 /rchids- 420282 0_ 1280 .jpg',
        описание: 'Hokkaido Flower',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/14/22/05 /container- 420367 7__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/14/22/05 /container- 420367 7_ 1280 .jpg',
        описание: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/16/09/47 /beach- 420678 5__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/16/09/47 /beach- 420678 5_ 1280 .jpg',
        описание: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2016/11/18/16/19 /flowers- 183561 9__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2016/11/18/16/19 /flowers- 183561 9_ 1280 .jpg',
        описание: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2018/09/13/10/36 /mountains- 367433 4__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2018/09/13/10/36 /mountains- 367433 4_ 1280 .jpg',
        описание: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/16/23/04 /landscape- 420857 1__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/16/23/04 /landscape- 420857 1_ 1280 .jpg',
        описание: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/17/09/27 /the-alps- 420927 2__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/17/09/27 /the-alps- 420927 2_ 1280 .jpg',
        описание: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/16/21/10 /landscape- 420825 5__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/16/21/10 /landscape- 420825 5_ 1280 .jpg',
        описание: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/ 2019/05/17/04/35 /lighthouse- 420884 3__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/ 2019/05/17/04/35 /lighthouse- 420884 3_ 1280 .jpg',
        описание: 'Lighthouse Coast Sea',
      },
    ];
   // Находим контейнер галереи
const galleryContainer = document.querySelector('.gallery');

// Создаем разметку элементов галереи
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

// Добавляем разметку в DOM
galleryContainer.innerHTML = galleryMarkup;

// Делегирование: слушаем клики по ul.gallery
galleryContainer.addEventListener('click', (event) => {
  // Предотвращаем стандартное поведение ссылок
  event.preventDefault();

  // Проверяем, был ли клик по изображению
  const target = event.target;
  if (target.nodeName === 'IMG') {
    const largeImageURL = target.dataset.source; // Получаем ссылку на большое изображение
    console.log('Ссылка на большое изображение:', largeImageURL);

    // Здесь можно добавить функционал открытия модального окна
  }
});
 