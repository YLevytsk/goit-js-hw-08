const images = [
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
      },
    ];
    
    
  const galleryContainer = document.createElement('ul');
  galleryContainer.classList.add('gallery');
  
  images.forEach((image) => {
    const galleryItem = `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
          <img
            class="gallery-image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>
    `;
    galleryContainer.innerHTML += galleryItem;
  });
  document.body.appendChild(galleryContainer);
  
  import "basiclightbox/dist/basiclightbox.min.css";
  
  const lightbox = document.createElement('div');
  lightbox.classList.add('basicLightbox');
  document.body.appendChild(lightbox);
  
  document.addEventListener('DOMContentLoaded', () => {
    const galleryLinks = document.querySelectorAll('.gallery-link');
  
    galleryLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const imageSource = link.getAttribute('href');
        const lightboxImage = `
          <img
            class="lightbox-image"
            src="${imageSource}"
            alt="${link.querySelector('img').getAttribute('alt')}"
          />
        `;
        lightbox.innerHTML = lightboxImage;
        lightbox.classList.add('open');
        document.addEventListener('click', (e) => {
          if (e.target.classList.contains('basicLightbox')) {
            lightbox.classList.remove('open');
          }
        });
      });
    });
  });
  
  const gallery = document.querySelector('.gallery');
  
  gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-link')) {
      const imageSource = e.target.getAttribute('href');
      console.log(imageSource);
    }
  });