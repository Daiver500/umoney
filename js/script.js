// Модальное окно

const openFormButton = document.querySelector(".main__button");
const formWindow = document.querySelector(".form");
const formCancelButton = document.querySelector(".form__button-cancel");
const submitButton = document.querySelector(".form__button-submit");
const form = document.querySelector(".form__addition");
const modal = document.querySelector(".modal");
const modalButton = modal.querySelector(".modal__button");
const cardNumberInput = document.querySelector(".form__number");
const cardCvcInput = document.querySelector(".form__cvc")

const formWindowCloseButtonHandler = () => {
  formWindow.classList.add("hidden");
}

const escPressHandler = (evt) => {
  if (evt.code === `Escape` && formWindow) {
    closeFormWindow();
    cardNumberInput.value = ``;
    submitButton.disabled = true;
    cardCvcInput.value = ``;
  }
  if (evt.code === `Escape` && !modal.classList.contains("hidden")) {
    closeModalSuccess();
  }
}

const windowPressHandler = (evt) => {
  const target = evt.target;
  if (target === formWindow) {
    closeFormWindow();
  }
  if (target === modal && !modal.classList.contains("hidden")) {
    closeModalSuccess();
  }
}

const openFormWindow = () => {
  formWindow.classList.remove("hidden");
  formCancelButton.addEventListener("click", formWindowCloseButtonHandler);
  document.addEventListener("keydown", escPressHandler);
  document.addEventListener("click", windowPressHandler);
  cardNumberInput.addEventListener("keyup", validateCardNumber)
  cardNumberInput.addEventListener("keydown", validateCardNumber)
  cardNumberInput.addEventListener("keyup", mask);
  cardCvcInput.addEventListener("keyup", validateCvcCardNumber)
  cardCvcInput.addEventListener("keydown", validateCvcCardNumber)
  form.addEventListener("submit", submitForm);
}

const closeFormWindow = () => {
  formWindow.classList.add("hidden");
  formCancelButton.removeEventListener("click", formWindowCloseButtonHandler);
  document.removeEventListener("keydown", escPressHandler);
  document.removeEventListener("click", windowPressHandler);
  cardNumberInput.removeEventListener("keyup", validateCardNumber)
  cardNumberInput.removeEventListener("keydown", validateCardNumber)
  cardNumberInput.removeEventListener("keyup", mask);
  cardCvcInput.removeEventListener("keyup", validateCvcCardNumber)
  cardCvcInput.removeEventListener("keydown", validateCvcCardNumber)
  form.removeEventListener("submit", submitForm);
}

const submitForm = (evt) => {
  evt.preventDefault();
  openModalSuccess();
  newCard.renderCard();
  cardNumberInput.value = ``;
  submitButton.disabled = true;
  cardCvcInput.value = ``;
};

const openModalSuccess = () => {
  closeFormWindow();
  modal.classList.remove("hidden");
  document.addEventListener("keydown", escPressHandler);
  document.addEventListener("click", windowPressHandler);
}

const closeModalSuccess = () => {
  modal.classList.add("hidden");
  document.removeEventListener("keydown", escPressHandler);
  document.removeEventListener("click", windowPressHandler);
}

openFormButton.addEventListener("click", openFormWindow)
formCancelButton.addEventListener("click", closeFormWindow)
modalButton.addEventListener("click", closeModalSuccess);

// Создаем новую карточку
class BankCard {
  constructor (img, alt, logo, logoAlt, parentSelector, ...classes) {
    this.img = img;
    this.alt = alt;
    this.logo = logo;
    this.logoAlt = logoAlt;
    this.parent = document.querySelector(parentSelector);
    this.classes = classes;
  }

  renderCard() {
    const cardNumberInput = document.querySelector(".form__number");
    const cardNumberInputValue = cardNumberInput.value;
    const newElement = document.createElement("div");
     if(this.classes.length === 0) {
      this.newElement = "main__card";  
      newElement.classList.add(this.newElement);
    } else {
      this.classes.forEach((item) => {
        newElement.classList.add(item);
      });
    }
     newElement.innerHTML = 
    ` <div class="main__pictures">
    <img class="main__image" src=${this.img} alt=${this.alt} width="100px" height="50px">
    <img class="main__image-logo" src=${this.logo} alt=${this.logoAlt} width="30px" height="10px">
  </div>
  <p class="main__card-number">${cardNumberInputValue}</p>`;
  this.parent.append(newElement);
  }
}

const newCard = new BankCard(
    "img/tinkoff.png",
    "логотип банка",
    "img/mastercard.jpg",
    "логотип",
    ".main__cards",
  );

// Валидация

const REG_EXP = /^([0-9])$/;
const MAX_CHARS = 19;
let isValid = false;
const MAX_CVC_CHARS = 3;

const validateCardNumber = () => {

  if (cardNumberInput.value.length > MAX_CHARS) {
    cardNumberInput.value = cardNumberInput.value.substr(0, MAX_CHARS);
  }

  if (cardNumberInput.value.length > MAX_CHARS) {
    cardNumberInput.value = cardNumberInput.value.substr(0, MAX_CHARS);
  }

  if (cardNumberInput.value.length === MAX_CHARS && cardCvcInput.value.length === MAX_CVC_CHARS) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }

  if (REG_EXP.test(cardNumberInput.value)) {
    isValid = true;
  } 

  if(isValid) {
    cardNumberInput.setCustomValidity(``);
  } else {
    cardNumberInput.value = ``;
    cardNumberInput.setCustomValidity(`пожалуйста, введите 16 цифр карты`);
  }

  cardNumberInput.reportValidity();
}

const validateCvcCardNumber = () => {
  
  if (cardCvcInput.value.length > MAX_CVC_CHARS) {
    cardCvcInput.value = cardCvcInput.value.substr(0, MAX_CVC_CHARS);
  }

  if (cardCvcInput.value.length > MAX_CVC_CHARS) {
    cardCvcInput.value = cardCvcInput.value.substr(0, MAX_CVC_CHARS);
  }

  if (cardCvcInput.value.length === MAX_CVC_CHARS && cardNumberInput.value.length === MAX_CHARS) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Ввод инпута через пробел

const mask = () => {
  let val = cardNumberInput.value.replace(/[^0-9]/g, '');
  val = val !== '' ? val.match(/.{1,4}/g).join` ` : ` `;
  cardNumberInput.value = val;
}

