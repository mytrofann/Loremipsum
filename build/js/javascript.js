'use strict';

var HEADER__COLORS = ['#fc8950', '#fcc150', '#1da7c0'];
var ENTER_KEYCODE = 13;

var photoHeader = document.querySelector('.photo__header');
var photoImage = document.querySelector('.photo__image');
var choice = document.querySelector('.choice');
var choiceCircleOne = choice.querySelector('.choice__circle-one');
var choiceHeart = choice.querySelector('.choice__heart');
var start = document.querySelector('.start');
var startSecond = document.querySelector('.start-second');
var startBtn = start.querySelector('.start__btn');

startBtn.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[0];
  photoImage.style.backgroundColor = HEADER__COLORS[0];
  choice.style.backgroundColor = HEADER__COLORS[0];
  choice.style.boxShadow = '0 -10px 50px 0' + HEADER__COLORS[0];
  choiceHeart.style.fill = HEADER__COLORS[0];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[0];
  start.style.display = "none";
  startSecond.style.display = "block";
});

var photoItem = document.querySelector('.photo-item');
var photoItemOptionFirst = photoItem.querySelector('.photo-item__option-first');
var photoItemOptionSecond = photoItem.querySelector('.photo-item__option-second');
var photoItemOptionThird = photoItem.querySelector('.photo-item__option-third');
var startSecondBtnFirst = startSecond.querySelector('.start-second__btn-first');
var startSecondBtnSecond = startSecond.querySelector('.start-second__btn-second');
var startSecondBtnThird = startSecond.querySelector('.start-second__btn-third');
var startSecondBtnFourth = startSecond.querySelector('.start-second__btn-fourth');
var startSecondChose = startSecond.querySelectorAll('.start-second__chose');

var buttonRemoveClickHandler = function () {
  photoItemOptionFirst.style.display = 'none';
  photoItemOptionSecond.style.display = 'none';
  photoItemOptionThird.style.display = 'none';
};

var buttonClickHandler = function (evt) {
  startSecondBtnFourth.style.display = 'block';
  startSecond.style.paddingBottom = '21px';
  photoItem.style.display = 'block';

  if (evt.target === startSecondBtnFirst) {
    buttonRemoveClickHandler();
    photoItemOptionFirst.style.display = 'block';
  } else if (evt.target === startSecondBtnSecond) {
    buttonRemoveClickHandler();
    photoItemOptionSecond.style.display = 'block';
  } else if (evt.target === startSecondBtnThird) {
    buttonRemoveClickHandler();
    photoItemOptionThird.style.display = 'block';
  }
};

startSecondChose.forEach(function (element) {
  element.onclick = function () {
    startSecondChose.forEach(function (el) {
      el.classList.remove('start-second__btn--active');
      event.target.classList.add('start-second__btn--active');
    })
  }
});

startSecondBtnFirst.addEventListener('click', buttonClickHandler);
startSecondBtnSecond.addEventListener('click', buttonClickHandler);
startSecondBtnThird.addEventListener('click', buttonClickHandler);

var startThird = document.querySelector('.start-third');

startSecondBtnFourth.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[1];
  photoImage.style.backgroundColor = HEADER__COLORS[1];
  choice.style.backgroundColor = HEADER__COLORS[1];
  choice.style.boxShadow = '0 -10px 50px 0' + HEADER__COLORS[1];
  choiceHeart.style.fill = HEADER__COLORS[1];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[1];
  photoItem.style.display = 'none';
  startSecond.style.display = "none";
  startThird.style.display = "block";
});

var photoItemSecond = document.querySelector('.photo-item-second');
var startThirdBtnFirst = startThird.querySelector('.start-third__btn-first');
var startThirdBtnSecond = startThird.querySelector('.start-third__btn-second');
var startThirdBtnThird = startThird.querySelector('.start-third__btn-third');
var photoItemSecondOptionFirst = photoItemSecond.querySelector('.photo-item-second__option-first');
var photoItemSecondOptionSecond = photoItemSecond.querySelector('.photo-item-second__option-second');
var startThirdChose = startThird.querySelectorAll('.start-third__chose');

var startThirdRemoveButtonClickHandler = function () {
  photoItemSecondOptionFirst.style.display = 'none';
  photoItemSecondOptionSecond.style.display = 'none';
};

var startThirdButtonClickHandler = function (evt) {
  startThirdBtnThird.style.display = 'block';
  startThird.style.paddingBottom = '22px';
  photoItemSecond.style.display = 'block';

  if (evt.target === startThirdBtnFirst) {
    startThirdRemoveButtonClickHandler();
    photoItemSecondOptionFirst.style.display = 'block';
  } else if (evt.target === startThirdBtnSecond) {
    startThirdRemoveButtonClickHandler();
    photoItemSecondOptionSecond.style.display = 'block';
  }
};

startThirdChose.forEach(function (element) {
  element.onclick = function () {
    startThirdChose.forEach(function (el) {
      el.classList.remove('start-third__btn--active');
      event.target.classList.add('start-third__btn--active');
    })
  }
});

startThirdBtnFirst.addEventListener('click', startThirdButtonClickHandler);
startThirdBtnSecond.addEventListener('click', startThirdButtonClickHandler);

var checkin = document.querySelector('.checkin');

startThirdBtnThird.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[2];
  photoImage.style.backgroundColor = HEADER__COLORS[2];
  choice.style.backgroundColor = HEADER__COLORS[2];
  choice.style.boxShadow =  '0 -10px 50px 0' + HEADER__COLORS[2];
  choiceHeart.style.fill = HEADER__COLORS[2];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[2];
  photoItemSecond.style.display = 'none';
  startThird.style.display = "none";
  checkin.style.display = "block";
  choice.style.top = '-96px';
  choice.style.left = '0px';
  checkin.style.top = '-96px';
  checkin.style.left = '0px';
});

var checkinCont = document.querySelector('.checkin__item');

var inputs = [].slice.call(checkinCont.querySelectorAll('input'));
var submitBtn = document.querySelector('.checkin__btn--submit');

inputs.forEach(function(el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function(el) {
    return el.value.trim() === '';
  }).length;
  submitBtn.disabled = empty !== 0;
}
checkInputs();
