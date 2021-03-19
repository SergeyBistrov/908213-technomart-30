/* Обратная связь поп-ап */

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

feedbackFormSubmit.addEventListener('submit', function(evt) {
  if (!form_name.value || !form_email.value) {
      evt.preventDefault();
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

/* Фиксация и затемнение модального окна */

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
