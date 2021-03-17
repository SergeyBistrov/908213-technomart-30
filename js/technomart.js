let cardProductPopular_buttons = document.querySelectorAll('.catalog-popular-item, .catalog-perforators-item');


let cardProduct_buttons = document.querySelectorAll('.catalog-item-hover_buttons');
let cardProduct_images = document.querySelectorAll('.catalog-perforators-item-img-container');

let servicesItem_delivery = document.querySelector('.services-item-delivery');
let servicesItem_security = document.querySelector('.services-item-security');
let servicesItem_credit = document.querySelector('.services-item-credit');

let servicesDescription_delivery = document.querySelector('.services-description-delivery');
let servicesDescription_security = document.querySelector('.services-description-security');
let servicesDescription_credit = document.querySelector('.services-description-credit');

let search_icon = document.querySelector('.form-search-path');
let search_input = document.querySelector('.input-search');

let popup_map = document.querySelector('.popup-map');
let contactMap_link = document.querySelector('.contacts-map-link');
let popupMap_closeBtn = document.querySelector('.popup-map-btn');


/* Дополнительные кнопки при наведении на популярные карточки товара */

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
  feedbackForm.classList.remove('modal-show');
	feedbackForm.classList.remove('modal-error');
});


feedbackOpenBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
  feedbackForm.classList.remove('modal-error');
	feedbackForm.classList.add('modal-show');
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
  if (!feedbackForm.classList.contains('modal-show')) {
    feedbackForm.classList.remove('modal-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackSubmitBtn.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackSubmitBtn.classList.toggle('modal-show');
    }
  }
});




/* поп-ап корзины */

/*
let catalogBuy_btns = document.querySelectorAll('.catalog-perforators-item-buy');
let FormBasket = document.querySelector('.popup-basket');
let FormBasketCloseTextBtn = document.querySelector('.popup-basket-btn-text-close');
let FormBasketCloseBtn = document.querySelector('.popup-basket-btn');


  for (let i = 0; i < catalogBuy_btns.length; i++) {
    let catalogBuy_btn = catalogBuy_btns[i];

    catalogBuy_btn.onclick = function(evt) {
      evt.preventDefault();
      FormBasket.classList.add('modal-show');
    };
  };

FormBasketCloseTextBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  FormBasket.classList.remove('modal-show');
});

FormBasketCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  FormBasket.classList.remove('modal-show');
}); */


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
  popup_map.classList.add('modal-show');
});

popupMap_closeBtn.addEventListener('click', function(evt) {
  popup_map.classList.remove('modal-show');
});



/* Изменение цвета кнопок при фокусе поиска */

let formSearch = document.querySelector('.form-search');
let labelSearch = document.querySelector('.label-search');

search_input.onblur = function() {
  labelSearch.classList.remove('hidden');
  search_input.classList.add('hidden');
};

formSearch.addEventListener('click', function(evt) {
  labelSearch.classList.add('hidden');
  search_input.classList.remove('hidden');
  search_input.focus();
});



search_input.addEventListener('focus', function(evt) {
  search_icon.style.fill = 'var(--basic-red)';


});

search_input.addEventListener('focusout', function(evt) {
  search_icon.style.fill = 'white';
});


