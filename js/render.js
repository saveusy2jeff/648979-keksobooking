'use strict';
// Файл render.js
(function () {
// запрос к месту где должны находиться метки
  var houseOfPins = document.querySelector('.map__pins');
// запрос к шаблону с разметкой метки
  var templatePin = document.querySelector('template').content.querySelector('.map__pin');
// создаем функцию для изменения веток
  var renderPin = function (dataObj) {
// копируем шаблон
    var clonedPin = templatePin.cloneNode(true);
  // вносим изменения в позиции расположение метки, добавляем аватарку, заголовок объявления
    clonedPin.style = 'left: ' + (dataObj.location.x - (window.util.MAP_PIN_WIDTH / 2)) +
    'px; top: ' + (dataObj.location.y - (window.util.MAP_PIN_HEIGHT)) + 'px';
    clonedPin.querySelector('img').src = dataObj.author.avatar;
    clonedPin.alt = dataObj.offer.title;
    return clonedPin;
  };
// создаем фрагмент
  var fragment = document.createDocumentFragment();
// далее в цикле
  for (var numberOfObj = 0; numberOfObj < windows.mainArr.length; numberOfObj++) {
  // добавляем метки в дом для пинс
    fragment.appendChild(renderPin(windows.mainArr[numberOfObj]));
  }
// добавляем фрагмент в map__pins
  houseOfPins.appendChild(fragment);
// запрос шаблона объявления
  var templateCard = document.querySelector('template').content.querySelector('.map__card');
// расположение блока map__filters-container, до которого нужно вставить наши элементы
  var blocMapFilters = document.querySelector('.map__filters-container');
// функция для отображения типа жилья на русском языке
  var typeOfferTranslate = function (dataObj) {
    if (dataObj.offer.type === 'palace') {
      return 'Дворец';
    }
    if (dataObj.offer.type === 'house') {
      return 'Дом';
    }
    if (dataObj.offer.type === 'bungalo') {
      return 'Бунгало';
    }
    if (dataObj.offer.type === 'flat') {
      return 'Квартира';
    }
    return 'Неизвестная постройка';
  };
// функция для добавления активных фичер
  var addFeature = function (amenities, clonedCard) {
    var requestFeature = clonedCard.querySelector('.popup__features');
    var featureTemplate = document.querySelector('template').content.querySelector('.popup__feature');
    while (requestFeature.firstChild) {
      requestFeature.removeChild(requestFeature.firstChild);
    }
    for (var numberFeature = 0; numberFeature < amenities.length; numberFeature++) {
      var clonedFeature = featureTemplate.cloneNode(true);
      clonedFeature.className = 'popup__feature popup__feature--' + amenities[numberFeature];
      requestFeature.appendChild(clonedFeature);
    }
    return requestFeature;
  };
// функция для добавления фотографий
  var addPhotos = function (photoParameter, clonedCard) {
    var photosList = clonedCard.querySelector('.popup__photos');
    var photo = photosList.querySelector('img');
    for (var numberPhoto = 0; numberPhoto < photoParameter.length; numberPhoto++) {
      var photoItem = photo.cloneNode(true);
      photoItem.src = photoParameter[numberPhoto];
      photosList.appendChild(photoItem);
    }
    photosList.firstElementChild.remove(photosList);
    return photosList;
  };
  // создаем функцию для объявлений
  var renderCard = function (dataObj) {
    var clonedCard = templateCard.cloneNode(true);
  // вносим изменения в позиции заголовок, адрес, цену, тип жилья, комнаты, гости, время заезда - выезда, удобства, описание, фотки
    clonedCard.querySelector('.popup__title').textContent = dataObj.offer.title;
    clonedCard.querySelector('.popup__text--address').textContent = dataObj.offer.address;
    clonedCard.querySelector('.popup__text--price').textContent = dataObj.offer.price + '₽/ночь';
    clonedCard.querySelector('.popup__type').textContent = typeOfferTranslate(dataObj);
    clonedCard.querySelector('.popup__text--capacity').textContent = dataObj.offer.rooms +
    ' комнаты для ' + dataObj.offer.guests + ' гостей';
    clonedCard.querySelector('.popup__text--time').textContent = 'Заезд после ' +
    dataObj.offer.checkin + ',выезд до ' + dataObj.offer.checkout;
    addFeature(dataObj.offer.features, clonedCard);
    addPhotos(dataObj.offer.photos, clonedCard);
    clonedCard.querySelector('.popup__avatar').src = dataObj.author.avatar;
    clonedCard.setAttribute('hidden', true);
    return clonedCard;
  };
// создаем фрагмент для объявлений
  var cardFragment = document.createDocumentFragment();
  for (var numberOfObjCard = 0; numberOfObjCard < windows.mainArr.length; numberOfObjCard++) {
    cardFragment.appendChild(renderCard(windows.mainArr[numberOfObjCard]));
  }
// добавляем фрагмент перед блоком.map__filters-container
  windows.blockMap.insertBefore(cardFragment, blocMapFilters);
})()