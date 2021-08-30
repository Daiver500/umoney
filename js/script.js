

// Классы для карточек 

class MenuCard {
  constructor (img, alt, title, text, price, parentSelector, ...classes) {
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.currency = 75;
    this.changeToRub();
  }

  changeToRub() {
    this.price = this.price * this.currency;
  }

  render() {
    const newElement = document.createElement("div");
    if(this.classes.length === 0) {
      this.newElement = "menu__item";  // задаем дефолтный класс, если никаких классов в rest операторе нет
      newElement.classList.add(this.newElement);
    } else {
      this.classes.forEach((item) => {
        newElement.classList.add(item);
      });
    }
     newElement.innerHTML = 
    `<img src=${this.img} alt=${this.alt}>
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">${this.text}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
    </div>`;
  this.parent.append(newElement);
  }
}

  const newCard = new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",  // классы, которы идут в rest оператор
    "big"
  );
  newCard.render();

  
  let Ivan = () => {newCard.render()}
  const test = () => {
    const btn = document.querySelector(".btn__test");
    btn.addEventListener("click", Ivan)
  }
  test()


  const newCardSecond = new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    9,
    ".menu .container",
    "menu__item"
  );
  newCardSecond.render();

  const newCardThird = new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    9,
    ".menu .container",
    "menu__item"
  );
  newCardThird.render();

  


  // альтернативный вариант new MenuCard().render()
