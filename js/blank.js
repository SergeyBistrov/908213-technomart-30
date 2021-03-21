/* Card Products */

let pageBody = document.querySelector('.page-body');
let cardProductPopular_buttons = document.querySelectorAll('.catalog-popular-item, .catalog-perforators-item');
let cardProduct_buttons = document.querySelectorAll('.catalog-item-hover_buttons');
let cardProduct_images = document.querySelectorAll('.catalog-perforators-item-img-container');

  for (let i = 0; i < cardProductPopular_buttons.length; i++) {
    let cardProductPopular_button = cardProductPopular_buttons[i];
    let cardProduct_button = cardProduct_buttons[i];
    let cardProduct_image = cardProduct_images[i];

    cardProductPopular_button.onmouseover = function (evt) {
    cardProduct_button.classList.remove('visually-hidden');
    cardProduct_image.classList.add('hidden');
    }
 };
  for (let i = 0; i < cardProductPopular_buttons.length; i++) {
    let cardProductPopular_button = cardProductPopular_buttons[i];
    let cardProduct_button = cardProduct_buttons[i];
    let cardProduct_image = cardProduct_images[i];

    cardProductPopular_button.onmouseout = function (evt) {
    cardProduct_button.classList.add('visually-hidden');
    cardProduct_image.classList.remove('hidden');
    }
 };

/* Search */

let search_icon = document.querySelector('.form-search-path');
let search_input = document.querySelector('.input-search');
let formSearch = document.querySelector('.form-search');
let labelSearch = document.querySelector('.label-search');

search_input.onblur = function() {
  labelSearch.style.visibility = 'visible';
  search_input.style.visibility = 'hidden';
};
formSearch.addEventListener('click', function(evt) {
  labelSearch.style.visibility = 'hidden';
  search_input.style.visibility = 'visible';
  search_input.focus();
});
search_input.addEventListener('focus', function(evt) {
  search_icon.style.fill = 'var(--basic-red)';
  formSearch.style.backgroundColor = 'var(--basic-white)';

});
search_input.addEventListener('focusout', function(evt) {
  search_icon.style.fill = 'white';
  formSearch.style.backgroundColor = 'transparent';
});

/* Basket modal */

let basketItem = document.querySelector('.navigation-basket-item');
let bookmarkstItem = document.querySelector('.navigation-bookmarks-item');
let catalogBuy_btns = document.querySelectorAll('.catalog-perforators-item-buy');
let catalogBookmark_btns = document.querySelectorAll('.catalog-perforators-item-bookmark');
let formBasket = document.querySelector('.popup-basket');
let formBasketCloseTextBtn = document.querySelector('.popup-basket-btn-text-close');
let formBasketCloseBtn = document.querySelector('.popup-basket-btn');
let overLay_basket = document.querySelector('.overlay-basket');

  for (let i = 0; i < catalogBuy_btns.length; i++) {
    let catalogBuy_btn = catalogBuy_btns[i];
    formBasket.classList.remove('modal-rise');
    catalogBuy_btn.onclick = function(evt) {
      evt.preventDefault();
      formBasket.classList.add('modal-rise');
      overLay_basket.style.display = 'block';
      pageBody.classList.add('page-body-fixed');
      formBasket.style.display = 'flex';
      basketItem.classList.add('link-change-color');
    };
  };

  for (let i = 0; i < catalogBookmark_btns.length; i++) {
    let catalogBookmark_btn = catalogBookmark_btns[i];
    formBasket.classList.remove('modal-rise');
    catalogBookmark_btn.onclick = function(evt) {
      evt.preventDefault();
      bookmarkstItem.classList.add('link-change-color');
    };
  };

formBasketCloseTextBtn.onclick = function(evt) {
  evt.preventDefault();
    formBasket.style.display = 'none';
    overLay_basket.style.display = 'none';
    pageBody.classList.remove('page-body-fixed');
};
formBasketCloseBtn.onclick = function(evt) {
  evt.preventDefault();
    formBasket.style.display = 'none';
    overLay_basket.style.display = 'none';
    pageBody.classList.remove('page-body-fixed');
};
