// Tab Group Functionality
let tab_buttons = document.querySelectorAll('.tab-button');
let all_contents = document.querySelectorAll('.tab-content');
tab_buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tab_buttons.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    button.classList.add('active-tab');

    all_contents.forEach((content) => {
      content.classList.remove('active-content');
    });
    all_contents[index].classList.add('active-content');
  });
});

// Quantity selector functionality
let quant_cards = document.querySelectorAll('.quant-card');
quant_cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    quant_cards.forEach((card) => card.classList.remove('active-quant'));
    quant_cards[index].classList.add('active-quant');
  });
});

// Change price based on subscription type
let oneTimePrice = document.getElementById('one-time-price');
let subSavePrice = document.getElementById('sub-save-price');
let quantRadioButtons = document.querySelectorAll('.quant-radio');
quantRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', () => {
    if (radioButton.id == 'one-set') {
      oneTimePrice.textContent = '$37';
      subSavePrice.textContent = '$33.30';
    } else if (radioButton.id == 'two-sets') {
      oneTimePrice.textContent = '$69';
      subSavePrice.textContent = '$64.17';
    } else if (radioButton.id == 'three-sets') {
      oneTimePrice.textContent = '$102';
      subSavePrice.textContent = '$94.86';
    } else if (radioButton.id == 'four-sets') {
      oneTimePrice.textContent = '$199';
      subSavePrice.textContent = '$185.07';
    }
  });
});
let submitButton = document.getElementById('submit-button');
let subTypeRadioInputs = document.querySelectorAll('.sub-radio-input');
let subRadioChecks = document.querySelectorAll('.sub-type-check');
let discounts = document.querySelectorAll('.discount');
subTypeRadioInputs.forEach((input, index) => {
  input.addEventListener('click', () => {
    // change checkbox color and discount values based on subscription type
    if (input.checked) {
      subRadioChecks.forEach((check) => check.classList.remove('active-sub'));
      subRadioChecks[index].classList.add('active-sub');

      if (input.id == 'one-time') {
        submitButton.textContent = 'Add to Cart';
        discounts[0].textContent = '';
        discounts[1].textContent = '7% Off';
        discounts[2].textContent = '9% Off';
        discounts[3].textContent = '11% Off';
      } else if (input.id == 'subscribe') {
        submitButton.textContent = 'Subscribe';
        discounts[0].textContent = '10% Off';
        discounts[1].textContent = '14% Off';
        discounts[2].textContent = '15% Off';
        discounts[3].textContent = '17% Off';
      }
    }
  });
});

var emblaNode = document.querySelector('.embla');
var options = { loop: false };
var emblaAPI = EmblaCarousel(emblaNode, options);
console.log(emblaAPI); // Access API

let carouselButtons = document.querySelectorAll('.img-btn');
carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'img-btn-1') emblaAPI.scrollTo(0);
    else if (button.id == 'img-btn-2') emblaAPI.scrollTo(1);
    else if (button.id == 'img-btn-3') emblaAPI.scrollTo(2);
    else if (button.id == 'img-btn-4') emblaAPI.scrollTo(3);
    else if (button.id == 'img-btn-5') emblaAPI.scrollTo(4);
    else if (button.id == 'img-btn-6') emblaAPI.scrollTo(5);
  });
});
