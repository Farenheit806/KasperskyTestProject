function setStars(rate) {
  const stars = document.querySelector(".rating__stars");
  for (let i = 0; i < Math.floor(rate); i++) {
    const star = new Image();
    star.src = "/img/star_filled.svg";
    star.alt = "filled-star";
    stars.appendChild(star);
  }
  if (!Number.isInteger(rate)) {
    const halfFilledStar = new Image();
    halfFilledStar.src = "/img/star_half-filled.svg";
    halfFilledStar.alt = "half-filled-star";
    stars.appendChild(halfFilledStar);
  }
  const condition = !Number.isInteger(rate)
    ? 4 - Math.floor(rate)
    : 5 - Math.floor(rate);
  for (let i = 0; i < condition; i++) {
    const unfilledStar = new Image();
    unfilledStar.src = "/img/star_unfilled.svg";
    unfilledStar.alt = "unfilled-star";
    stars.appendChild(unfilledStar);
  }
}

function setReviews(reviews) {
  const num = document.querySelector(".rating__reviews span");
  num.innerText = reviews;
}

// numbers is an array including all four covered values
function setNumbers(numbers) {
  const targets = ["users", "media-storage", "phones", "passwords"];
  numbers.forEach((value, i) => {
    setValue(value, targets[i]);
  });
}
function setValue(value, target) {
  const number = document.querySelector(`#${target}`);
  const info = document.querySelector(`#popup__${target} strong`);
  if (Number.isInteger(value) && value > 0) {
    if (value < 10) {
      number.innerText = "00";
    } else if (value < 100) {
      number.innerText = "0";
    } else if (value === 100) {
      number.innerText = "";
    }
    number.innerText += value;
    info.innerText = `x${value}`;
  }
}

setStars(4.5);
setReviews(7266);

setNumbers([1, 1, 5, 5]);

const coversButton = document.querySelector(
  ".fixed-bar__additional-content .question-btn"
);
var isPopupShown = false;
coversButton.addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  isPopupShown = !isPopupShown;
  popup.style.display = isPopupShown ? "block" : "none";
});

const button = document.querySelector(".buy-btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
});

const fixedBar = document.querySelector(".fixed-bar");

window.addEventListener("scroll", function () {
  const el = document.querySelector(".fixed-bar");
  var viewportWidth = window.visualViewport.width;

  var viewportOffset = el.getBoundingClientRect();
  var condition = viewportWidth > 751 && viewportOffset.top === 0;
  // var conditionForPhones = viewportWidth <= 751 && viewportOffset.top === 0;
  fixedBar.toggleAttribute("stuck", condition);
  // fixedBar.toggleAttribute("closed", conditionForPhones);
});

const phoneArrow = document.querySelector(".phone-arrow");
var isClosed = true;
phoneArrow.addEventListener("click", (e) => {
  isClosed = !isClosed;
  e.target.parentElement.toggleAttribute("open", !isClosed);
  e.target.parentElement.toggleAttribute("closed", isClosed);
  e.target.innerHTML = isClosed ? "&darr;" : "&uarr;";
});
