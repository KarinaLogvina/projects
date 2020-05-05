import Swiper from 'swiper';
import { loadOmdbQuery } from './app/loader';
import { createCard } from './app/helper';

let currentPage = 0;
const params = new URLSearchParams(window.location.search);

async function loadPage(page) {
  const elems = await loadOmdbQuery(params.get('s'), page).then((res) => {
    if (Array.isArray(res)) {
      return res
        .map((obj) => createCard(obj.Title, obj.Poster, obj.Year, obj.Rating, obj.imdbID));
    }
    return [];
  });
  return elems;
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    reachEnd() {
      currentPage += 1;
      loadPage(currentPage).then((res) => this.appendSlide(res));
    },
  },
});
