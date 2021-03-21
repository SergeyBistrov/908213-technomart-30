
let servicesItem_delivery = document.querySelector('.services-item-delivery');
let servicesItem_security = document.querySelector('.services-item-security');
let servicesItem_credit = document.querySelector('.services-item-credit');
let servicesDescription_delivery = document.querySelector('.services-description-delivery');
let servicesDescription_security = document.querySelector('.services-description-security');
let servicesDescription_credit = document.querySelector('.services-description-credit');
let popup_map = document.querySelector('.popup-map');
let contactMap_link = document.querySelector('.contacts-map-link');
let popupMap_closeBtn = document.querySelector('.popup-map-btn');
let overLay_map_index = document.querySelector('.overlay-map');
let overLay_basket_index = document.querySelector('.overlay-basket');
let pageBody_index = document.querySelector('.page-body');

/* Card Products */

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

 /* slider */

let sliderBtn_Back = document.querySelector('.slider-btn-back');
let sliderBtn_Next = document.querySelector('.slider-btn-next');
let sliderImage_1 = document.querySelector('.promo-slider-gallery-item:first-child');
let sliderImage_2 = document.querySelector('.promo-slider-gallery-item:last-child');
let sliderDots_Items1 = document.querySelector('.promo-slider-dots-item:first-child');
let sliderDots_Items2 = document.querySelector('.promo-slider-dots-item:last-child');

if (!sliderDots_Items1.classList.contains('dots-item--selected')) {
  sliderDots_Items1.classList.add('dots-item--selected');
  sliderDots_Items2.classList.remove('dots-item--selected');
}

sliderBtn_Back.addEventListener('click', function(evt) {
  sliderDots_Items1.classList.add('dots-item--selected');
  sliderImage_2.classList.add('visually-hidden');
  sliderImage_1.classList.remove('visually-hidden');
  sliderDots_Items2.classList.remove('dots-item--selected');
});

sliderBtn_Next.addEventListener('click', function(evt) {
  sliderDots_Items2.classList.add('dots-item--selected');
  sliderImage_1.classList.add('visually-hidden');
  sliderImage_2.classList.remove('visually-hidden');
  sliderDots_Items1.classList.remove('dots-item--selected');
});

/* Basket modal */

let basketItem_index = document.querySelector('.navigation-basket-item');
let bookmarkstItem_index = document.querySelector('.navigation-bookmarks-item');
let catalogBuy_btns_index = document.querySelectorAll('.catalog-perforators-item-buy');
let catalogBookmark_btns_index = document.querySelectorAll('.catalog-perforators-item-bookmark');
let formBasket_index = document.querySelector('.popup-basket');
let formBasketCloseTextBtn_index = document.querySelector('.popup-basket-btn-text-close');
let formBasketCloseBtn_index = document.querySelector('.popup-basket-btn');

  for (let i = 0; i < catalogBuy_btns_index.length; i++) {
    let catalogBuy_btn_index = catalogBuy_btns_index[i];
    formBasket_index.classList.remove('modal-rise');
    catalogBuy_btn_index.onclick = function(evt) {
      evt.preventDefault();
      formBasket_index.classList.add('modal-rise');
      overLay_basket_index.style.display = 'block';
      pageBody_index.classList.add('page-body-fixed');
      formBasket_index.style.display = 'flex';

      basketItem_index.classList.add('link-change-color');
    };
  };

  for (let i = 0; i < catalogBookmark_btns_index.length; i++) {
    let catalogBookmark_btn_index = catalogBookmark_btns_index[i];
    formBasket_index.classList.remove('modal-rise');
    catalogBookmark_btn_index.onclick = function(evt) {
      evt.preventDefault();
      bookmarkstItem_index.classList.add('link-change-color');
    };
  };
formBasketCloseTextBtn_index.onclick = function(evt) {
  evt.preventDefault();
    formBasket_index.style.display = 'none';
    overLay_basket_index.style.display = 'none';
    pageBody_index.classList.remove('page-body-fixed');
};
formBasketCloseBtn_index.onclick = function(evt) {
  evt.preventDefault();
    formBasket_index.style.display = 'none';
    overLay_basket_index.style.display = 'none';
    pageBody_index.classList.remove('page-body-fixed');
};

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (formBasket_index.style.display == 'flex') {
      evt.preventDefault();
      formBasket_index.style.display = 'none';
      pageBody_index.classList.remove('page-body-fixed');
      overLay_basket_index.style.display = 'none';
    }
  }
});

/* Blocks - delivery, security, credut */

servicesItem_delivery.onclick = function(evt) {
    evt.preventDefault();
  if (!servicesItem_delivery.classList.contains('services-item-open')) {
    servicesItem_delivery.classList.add('services-item-open');
    servicesDescription_delivery.classList.remove('visually-hidden');
  }
  if (servicesItem_security.classList.contains('services-item-open')) {
    servicesItem_security.classList.remove('services-item-open');
    servicesDescription_security.classList.add('visually-hidden');
    }
  if (servicesItem_credit.classList.contains('services-item-open')) {
    servicesItem_credit.classList.remove('services-item-open');
    servicesDescription_credit.classList.add('visually-hidden');
    }
};

servicesItem_security.onclick = function(evt) {
    evt.preventDefault();
  if (!servicesItem_security.classList.contains('services-item-open')) {
    servicesItem_security.classList.add('services-item-open');
    servicesDescription_security.classList.remove('visually-hidden');
  }
  if (servicesItem_delivery.classList.contains('services-item-open')) {
    servicesItem_delivery.classList.remove('services-item-open');
    servicesDescription_delivery.classList.add('visually-hidden');
  }
  if (servicesItem_credit.classList.contains('services-item-open')) {
    servicesItem_credit.classList.remove('services-item-open');
    servicesDescription_credit.classList.add('visually-hidden');
    }
};

servicesItem_credit.onclick = function(evt) {
    evt.preventDefault();
  if (!servicesItem_credit.classList.contains('services-item-open')) {
    servicesItem_credit.classList.add('services-item-open');
    servicesDescription_credit.classList.remove('visually-hidden');
  }
  if (servicesItem_security.classList.contains('services-item-open')) {
    servicesItem_security.classList.remove('services-item-open');
    servicesDescription_security.classList.add('visually-hidden');
  }
  if (servicesItem_delivery.classList.contains('services-item-open')) {
    servicesItem_delivery.classList.remove('services-item-open');
    servicesDescription_delivery.classList.add('visually-hidden');
  }
};

/* Map modal */

contactMap_link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup_map.style.display = 'block';
});
popupMap_closeBtn.addEventListener('click', function(evt) {
  popup_map.style.display = 'none';
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup_map.style.display == 'block') {
      evt.preventDefault();
      popup_map.style.display = 'none';
      overLay_map_index.style.display = 'none';
      pageBody_index.classList.remove('page-body-fixed');
    }
  }
});

/* Search */

let search_icon_index = document.querySelector('.form-search-path');
let search_input_index = document.querySelector('.input-search');
let formSearch_index = document.querySelector('.form-search');
let labelSearch_index = document.querySelector('.label-search');

search_input_index.onblur = function() {
  labelSearch_index.style.visibility = 'visible';
  search_input_index.style.visibility = 'hidden';
};
formSearch_index.addEventListener('click', function(evt) {
  labelSearch_index.style.visibility = 'hidden';
  search_input_index.style.visibility = 'visible';
  search_input_index.focus();
});
search_input_index.addEventListener('focus', function(evt) {
  search_icon_index.style.fill = 'var(--basic-red)';
  formSearch_index.style.backgroundColor = 'var(--basic-white)';

});
search_input_index.addEventListener('focusout', function(evt) {
  search_icon_index.style.fill = 'white';
  formSearch_index.style.backgroundColor = 'transparent';
});

/* Fixed modal */

contactMap_link.addEventListener('click', function(evt) {
  overLay_map_index.style.display = 'block';
  pageBody_index.classList.add('page-body-fixed');
});
popupMap_closeBtn.addEventListener('click', function(evt) {
  overLay_map_index.style.display = 'none';
  pageBody_index.classList.remove('page-body-fixed');
});

/* Feedback modal */

let feedbackForm = document.querySelector('.popup-feedback');
let feedbackFormSubmit = document.querySelector('.popup-feedback-form');
let feedbackSubmitBtn = document.querySelector('.feedback-form-btn-send');
let feedbackOpenBtn = document.querySelector('.contacts-btn');
let feedbackCloseBtn = document.querySelector('.feedback-form-btn');
let form_name = feedbackForm.querySelector('[name=form-name]');
let form_email = feedbackForm.querySelector('[name=form-email]');
let FormText = feedbackForm.querySelector('[name=form-text]');
let isStorageSupport = true;
let storageQuantityName = '';
let storageQuantityEmail = '';

feedbackForm.classList.remove('modal-show');
form_name.removeAttribute('required');
form_email.removeAttribute('required');

try {
  storageQuantityName = localStorage.getItem('quantity_name');
  storageQuantityEmail = localStorage.getItem('quantity_email');
} catch(err) {
  isStorageSupport = false;
}

feedbackCloseBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
  feedbackForm.style.display = 'none';
	feedbackForm.classList.remove('modal-error');
});
feedbackOpenBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	feedbackForm.classList.add('modal-rise');
  feedbackForm.style.display = 'block';
	setTimeout(() => {form_name.focus();}, 1500);
	if (form_name && form_email) {
  	form_name.value = storageQuantityName;
    form_email.value = storageQuantityEmail;
	}
});
feedbackFormSubmit.addEventListener('submit', function(evt) {
  if (!form_name.value || !form_email.value) {
      evt.preventDefault();
      feedbackForm.classList.remove('modal-error');
      feedbackForm.classList.remove('modal-rise');
      feedbackForm.style.opacity = '1';
      feedbackForm.style.transform = 'none';
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
      if (!feedbackForm.classList.contains('modal-error')) {
        feedbackForm.classList.add('modal-error');
      }
  } else {
    if (isStorageSupport) {
      localStorage.setItem('quantity_name', form_name.value);
      localStorage.setItem('quantity_email', form_email.value);
    }
  }
});
feedbackSubmitBtn.addEventListener('click', function(evt) {
  if (feedbackForm.style.display == 'none') {
    feedbackForm.classList.remove('modal-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.style.display == 'block') {
      evt.preventDefault();
      feedbackForm.style.display = 'none';
      overLay_feedback_pop.style.display = 'none';
      pageBodyPop.classList.remove('page-body-fixed');
    }
  }
});

/* Fixed modal */

let overLay_feedback_pop = document.querySelector('.overlay-feedback');
let pageBodyPop = document.querySelector('.page-body');

feedbackOpenBtn.addEventListener('click', function(evt) {
  overLay_feedback_pop.style.display = 'block';
  pageBodyPop.classList.add('page-body-fixed');
});
feedbackCloseBtn.addEventListener('click', function(evt) {
  overLay_feedback_pop.style.display = 'none';
  pageBodyPop.classList.remove('page-body-fixed');
});
