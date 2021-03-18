
let servicesItem_delivery = document.querySelector('.services-item-delivery');
let servicesItem_security = document.querySelector('.services-item-security');
let servicesItem_credit = document.querySelector('.services-item-credit');

let servicesDescription_delivery = document.querySelector('.services-description-delivery');
let servicesDescription_security = document.querySelector('.services-description-security');
let servicesDescription_credit = document.querySelector('.services-description-credit');


let popup_map = document.querySelector('.popup-map');
let contactMap_link = document.querySelector('.contacts-map-link');
let popupMap_closeBtn = document.querySelector('.popup-map-btn');


let overLay_feedback_index = document.querySelector('.overlay-feedback');
let overLay_map_index = document.querySelector('.overlay-map');
let overLay_basket_index = document.querySelector('.overlay-basket');
let pageBody_index = document.querySelector('.page-body');



/* Дополнительные кнопки при наведении на популярные карточки товара */

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



/* Обратная связь поп-ап */


let feedbackForm = document.querySelector('.popup-feedback');
let feedbackSubmitBtn = document.querySelector('.feedback-form-btn-send');
let feedbackOpenBtn = document.querySelector('.contacts-btn');
let feedbackCloseBtn = document.querySelector('.feedback-form-btn');

let form_name = feedbackForm.querySelector('[name=form-name]');
let form_email = feedbackForm.querySelector('[name=form-email]');
let FormText = feedbackForm.querySelector('[name=form-text]');

let isStorageSupport = true;
let storageQuantityName = '';
let storageQuantityEmail = '';

feedbackForm.classList.remove('modal-rise');
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
  feedbackForm.classList.remove('modal-error');
	feedbackForm.classList.add('modal-rise');
  feedbackForm.style.display = 'block';
	setTimeout(() => {form_name.focus();}, 1500);

	if (form_name && form_email) {
  	form_name.value = storageQuantityName;
    form_email.value = storageQuantityEmail;
	}
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!form_name.value || !form_email.value) {
      evt.preventDefault();
      feedbackForm.classList.remove('modal-error');
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
      feedbackForm.classList.add('modal-error');
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



/* Модальное окно - корзина */

let basketItem_index = document.querySelectorAll('.basket-item-link');

let catalogBuy_btns_index = document.querySelectorAll('.catalog-perforators-item-buy');
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



/* Переключение блоков - доставка, гарантия, кредит */

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


/* Вызов карты */

contactMap_link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup_map.style.display = 'block';
});

popupMap_closeBtn.addEventListener('click', function(evt) {
  popup_map.style.display = 'none';
});



/* поиск */

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



/* Фиксация и затемнение модального окна */


feedbackOpenBtn.addEventListener('click', function(evt) {
  overLay_feedback_index.style.display = 'block';
  pageBody_index.classList.add('page-body-fixed');
});

feedbackCloseBtn.addEventListener('click', function(evt) {
  overLay_feedback_index.style.display = 'none';
  pageBody_index.classList.remove('page-body-fixed');
});

contactMap_link.addEventListener('click', function(evt) {
  overLay_map_index.style.display = 'block';
  pageBody_index.classList.add('page-body-fixed');
});

popupMap_closeBtn.addEventListener('click', function(evt) {
  overLay_map_index.style.display = 'none';
  pageBody_index.classList.remove('page-body-fixed');
});

