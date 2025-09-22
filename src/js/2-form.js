let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    textarea.value = formData.message || '';
  }
}

function handlerSubmit(event) {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    console.log('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}
