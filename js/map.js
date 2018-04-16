'use strict';
var mainArr = [];
var makeRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};
var compareRandom = function () {
  return Math.random() - 0.5;
};
var typeOfApartaments = ['Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик',
  'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var typeOfStructure = ['palace', 'flat', 'house', 'bungalo'];
var CheckTime = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
for (var i = 0; i <= 7; i++) {
  var _location = {
    x: makeRandomNumber(300, 900),
    y: makeRandomNumber(150, 500)
  };
  var randomLengthFeatures = features.slice(0, makeRandomNumber(1, 6));
  var Data = {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png'
    },
    offer: {
      title: typeOfApartaments[i],
      address: _location.x + ', ' + _location.y,
      price: makeRandomNumber(1000, 1000000),
      type: typeOfStructure[makeRandomNumber(0, typeOfStructure.length - 1)],
      rooms: makeRandomNumber(1, 5),
      guests: makeRandomNumber(1, 20),
      checkin: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
      checkout: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
      features: randomLengthFeatures,
      description: '',
      photos: photos.sort(compareRandom).slice()
    },
    location: {
      x: _location.x,
      y: _location.y
    }
  };
  mainArr.push(Data);
}
// запрос к всему блоку мэп
var blockMap = document.querySelector('.map');
// запрос к месту где должны находиться метки
var houseOfPins = document.querySelector('.map__pins');
// убираем класс map-faded
blockMap.classList.remove('map--faded');
// копируем тег img для отображения нескольких картинок в обьявлении
// создаю функцию для создания одного img с неизвестным src
var addPhotos = function (addressElement) {
  var newPhotoElement = document.createElement('img');
  newPhotoElement.src = addressElement;
  newPhotoElement.alt = 'Фотография';
  newPhotoElement.width = 45;
  newPhotoElement.heigth = 40;
  newPhotoElement.classList.add('popup_photo');
  return newPhotoElement;
};
// запрос к шаблону с разметкой метки
var templatePin = document.querySelector('template').content.querySelector('.map__pin');
// создаем функцию для изменения веток
var renderPin = function (dataObj) {
// копируем шаблон
  var clonedPin = templatePin.cloneNode(true);
  // вносим изменения в позиции расположение метки, добавляем аватарку, заголовок объявления
  clonedPin.style = 'left: ' + (dataObj.location.x + 20) +
  'px; top: ' + (dataObj.location.y + 40) + 'px';
  clonedPin.querySelector('img').src = dataObj.author.avatar;
  clonedPin.alt = dataObj.offer.title;
  return clonedPin;
};
// создаем фрагмент
var fragment = document.createDocumentFragment();
// далее в цикле
for (var numberOfObj = 0; numberOfObj <= mainArr.length - 1; numberOfObj++) {
  // добавляем метки в дом для пинс
  fragment.appendChild(renderPin(mainArr[numberOfObj]));
}
// добавляем фрагмент в map__pins
houseOfPins.appendChild(fragment);
// запрос шаблона объявления
var templateCard = document.querySelector('template').content.querySelector('.map__card');
// расположение блока map__filters-container, до которого нужно вставить наши элементы
var blocMapFilters = document.querySelector('.map__filters-container');
// функция для отображения типа жилья на русском языке
var typeOfferTranslate = function (dataObj) {
  if (dataObj.offer.type = 'palace') {
    return 'Дворец';
  }
  if (dataObj.offer.type = 'house') {
    return 'Дом';
  }
  if (dataObj.offer.type = 'bungalo') {
    return 'Бунгало';
  }
  if (dataObj.offer.type = 'flat') {
    return 'Квартира';
  }
  return 'Неизвестная постройка';
};
// функция для добавление активных фичер
var addFeature = function (features, clonedCard) {
  var requestFeature = clonedCard.querySelector('.popup__features');
  var featureTemplate = document.querySelector('template').content.querySelector('.popup__feature');
  for (var numberFeature = 0; numberFeature <= numberFeature.length - 1; numberFeature++) {
    var clonedFeature = featureTemplate.cloneNode(true);
    clonedFeature.className = 'popup__feature popup__feature--' + features[numberFeature];
    requestFeature.appendChild(clonedFeature);
  }
};
// функция для добавления фотографий
var addPhotos = function (photos, clonedCard) {
var photosList = clonedCard.querySelector('.popup__photos');
var photo = photosList.querySelector('img');
  for (var numberPhoto = 0; numberPhoto <= photos.length - 1; numberPhoto++) {
     var photoItem = photo.cloneNode(true);
     photoItem.src = photos[numberPhoto];
    photoList.appendChild(photo);
  };
  photosList.firstElementChild.remove(photosList)
  return photosList;
};
  // создаем функцию для объявлений
var renderCard = function (dataObj) {
  // копируем шаблон
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
  addFeature (dataObj.offer.features, clonedCard);
  addPhotos (dataObj.offer.photos, clonedCard);
  clonedCard.querySelector('.popup__avatar').src = dataObj.author.avatar;
  return clonedCard;
};
// создаем фрагмент для объявлений
var cardFragment = document.createDocumentFragment();
for (var numberOfObjCard = 0; numberOfObjCard <= mainArr.length - 1; numberOfObjCard++) {
  cardFragment.appendChild(renderCard(mainArr[numberOfObjCard]));
}
// добавляем фрагмент перед блоком.map__filters-container
blockMap.insertBefore(cardFragment, blocMapFilters);


