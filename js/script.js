// Модальное окно

const form = document.querySelector(".form__addition");
const modal = document.querySelector(".modal");

if (modal) {
const openModalSuccess = () => {
  modal.classList.remove("hidden");
}

const formSubmit = (evt) => {
  evt.preventDefault();
  openModalSuccess();
  newCard.renderCard();
}

form.addEventListener("submit", formSubmit)
}

// Классы для карточек 

class BankCard {
  constructor (img, alt, logo, logoAlt, number, parentSelector, ...classes) {
    this.img = img;
    this.alt = alt;
    this.logo = logo;
    this.logoAlt = logoAlt;
    this.number = number;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
  }

  renderCard() {
    const newElement = document.createElement("div");
     if(this.classes.length === 0) {
      this.newElement = "main__card";  // задаем дефолтный класс, если никаких классов в rest операторе нет
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
  <p class="main__card-number">${this.number}</p>`;
  this.parent.append(newElement);
  }
}

  const cardNumberInput = document.querySelector(".form__number");
  //const cardNumberInputValue = cardNumberInput.value;

  const newCard = new BankCard(
    "img/tinkoff.png",
    "логотип банка",
    "img/mastercard.jpg",
    "логотип",
    1,
    ".main__cards",
  );
 

  // Валидация
