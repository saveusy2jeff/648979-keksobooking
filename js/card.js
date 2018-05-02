'use strict';
// Файл card.js
(function () {
// делаем поля обьявлений неактивными
  var adFieldsetRequest = document.querySelector('.ad-form').querySelectorAll('fieldset');
  for (var fieldsetNumber = 0; fieldsetNumber < adFieldsetRequest.length; fieldsetNumber++) {
    adFieldsetRequest[fieldsetNumber].setAttribute('disabled', 'disabled');
  }
  var buttons = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  for (var adspinNumber = 0; adspinNumber <= buttons.length - 1; adspinNumber++) {
    buttons[adspinNumber].setAttribute('hidden', true);
  }
  var popupRequest = document.querySelectorAll('.map__card');
  // начальные координаты
  var MAP_HEIGHT = 750;
  var firstCoordinates = {
    x: Math.floor(window.util.MAP_WIDTH / 2),
    y: Math.floor(MAP_HEIGHT / 2 + window.util.MAP_MAIN_PIN_HEIGHT)
  };
  windows.currentAddress.value = firstCoordinates.x + ', ' + firstCoordinates.y;
  var activatePage = function () {
    windows.blockMap.classList.remove('map--faded');
    var adForm = document.querySelector('.ad-form');
    adForm.classList.remove('ad-form--disabled');
    for (var activatorObjectsNumber = 0; activatorObjectsNumber < adFieldsetRequest.length; activatorObjectsNumber++) {
      adFieldsetRequest[activatorObjectsNumber].removeAttribute('disabled');
    }
    for (var buttonsNumber = 0; buttonsNumber < buttons.length; buttonsNumber++) {
      buttons[buttonsNumber].removeAttribute('hidden');
    }
    var changeMapCoordinates = {
      x: Math.floor(window.util.MAP_WIDTH / 2),
      y: Math.floor(MAP_HEIGHT / 2 + window.util.MAP_MAIN_PIN_HEIGHT)
    };
    windows.currentAddress.value = changeMapCoordinates.x + ', ' + changeMapCoordinates.y;
  };
  windows.mainPinRequest.addEventListener('mouseup', activatePage);
  var ESC_KEYCODE = 27;
  var popupClose = document.querySelectorAll('.popup__close');
  var closePopup = function (evt) {
    var exitAd = evt.target.parentNode;
    exitAd.setAttribute('hidden', true);
  };
  var onActivateAddressClick = function (activateAddress, activateAd, buttonExit) {
    activateAddress.addEventListener('click', function () {
      windows.notHiddenCard = document.querySelector('.map__card:not([hidden])');
      if (windows.notHiddenCard !== null) {
        windows.notHiddenCard.setAttribute('hidden', true);
      }
      windows.currentAddress.value = Math.floor((parseInt(activateAddress.style.left, 10) + (window.util.MAP_PIN_WIDTH / 2))) + ', ' + Math.floor((parseInt(activateAddress.style.top, 10) + (window.util.MAP_PIN_HEIGHT)));
      // currentAddress.value = (parseInt(activateAddress.style.left, 10))+ ', ' + (parseInt(activateAddress.style.top, 10));
      activateAd.removeAttribute('hidden');
      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ESC_KEYCODE) {
          activateAd.setAttribute('hidden', true);
        }
      });
    });
    buttonExit.addEventListener('click', function (evt) {
      closePopup(evt);
    });
  };
  for (var buttonNumber = 0; buttonNumber < buttons.length; buttonNumber++) {
    var activateAddress = buttons[buttonNumber];
    var activateAd = popupRequest[buttonNumber];
    var buttonExit = popupClose[buttonNumber];
    onActivateAddressClick(activateAddress, activateAd, buttonExit);
  }
})();
