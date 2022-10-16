import throttle from 'lodash.throttle';

const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const formEl = document.querySelector('.feedback-form');
const formObj = {};

formEl.addEventListener('input', throttle(saveFormData, 500));
formEl.addEventListener('submit', submitForm);

formFilling();

function saveFormData(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  formObj.email = email.value;
  formObj.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
}

function formFilling() {
  if (localStorage.getItem('feedback-form-state')) {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(formData);
    emailEl.value = formData.email;
    messageEl.value = formData.message;
  }
  return;
}

function submitForm(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(formObj);
  emailEl.value = '';
  messageEl.value = '';
}
