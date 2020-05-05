import Swiper from 'swiper';
import { loadOmdbQuery } from './app/loader';
import { createCard } from './app/helper';

let currentPage = 0;
let currentQuery = 'dream';
const params = new URLSearchParams(window.location.search);

async function loadPage(page, query) {
  const loadResult = await loadOmdbQuery(query, page);
  if (Array.isArray(loadResult)) {
    const cards = loadResult
      .map((obj) => createCard(obj.Title, obj.Poster, obj.Year, obj.Rating, obj.imdbID));
    return {
      Result: 'Success',
      data: cards,
    };
  }

  return {
    Result: 'Failure',
    Error: loadResult,
  };
}

// currentPage += 1;
// loadPage(currentPage, currentQuery).then((pageResult) => {
//   if (pageResult.Result === 'Success') {
//     document.querySelector('.swiper-wrapper').append(...pageResult.data);
//   } else {
//     document.querySelector('.error').textContent = pageResult.Error;
//   }
// });

document.querySelector('.search').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const searchData = new URLSearchParams(formData);
  currentQuery = searchData.get('s');
  loadPage(1, currentQuery).then((pageResult) => {
    if (pageResult.Result === 'Success') {
      document.querySelector('.swiper-container').swiper.removeAllSlides();
      document.querySelector('.swiper-container').swiper.appendSlide(pageResult.data);
      document.querySelector('.error').textContent = '';
    } else {
      document.querySelector('.error').textContent = pageResult.Error;
    }
  });
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 0,
  observer: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    860: {
      slidesPerView: 4,
    },
  },
  on: {
    reachEnd: () => {
      currentPage += 1;
      loadPage(currentPage, currentQuery).then((pageResult) => {
        if (pageResult.Result === 'Success') {
          document.querySelector('.swiper-wrapper').append(...pageResult.data);
        } else {
          document.querySelector('.error').textContent = pageResult.Error;
        }
      });
      console.log('reachEnd');
    },
  },
});
swiper.slideTo(0);
