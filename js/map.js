'use strict';
var mainArr = [];
var makeRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};
//функция для отображения типа жилья на русском языке
var typeOfferTranslate = function ()
{
  if (mainArr[i].Data.offer.type = 'palace') {
    return 'Дворец'
  }
  if (mainArr[i].Data.offer.type = 'house') { 
    return 'Дом'
  }
  if (mainArr[i].Data.offer.type = 'bungalo') { 
    return 'Бунгало'
  }
  if (mainArr[i].Data.offer.type = 'flat') { 
    return 'Квартира'
  }
}
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
  }

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
//запрос к всему блоку мэп
var blockMap = document.querySelector('.map');
// запрос к месту где должны находиться метки
var houseOfPins = document.querySelector('.map__pins');
// убираем класс map-faded
blockMap.classList.remove('map-faded');
// копируем тег img для отображения нескольких картинок в обьявлении
// создаю функцию для создания одного img с неизвестным src
var addPhotos = function(adressElement) {
  var newPhotoElement = document.createElement('img');
  newPhotoElement.src = adressElement;
  newPhotoElement.alt = 'Фотография';
  newPhotoElement.width = 45;
  newPhotoElement.heigth = 40;
  newPhotoElement.classList.add('popup_photo');
  return newPhotoElement;
  };
  // создаю функцию которая формирует фрагмент создания новых фото элементов
var createPhotoFragment = function (functionAddElement, array) {
  var fragment = document.createDocumentFragment();
  for (var numberPhoto = 0; numberPhoto < array.length; numberPhoto++) {
    fragment.appendChild(functionAddElement(array[numberPhoto]))
  }
}
// функция удаления элементов
var removePhotoElement = function () {
  var parent = document.querySelector('.popup__photos')
  var child = document.querySelector('.popup__photo')
  parent.removeChild(child)
}
// запрос к шаблону с разметкой метки
var templatePin = document.querySelector('template').content.querySelector('.map__pin')
/// создаем функцию для изменения веток
var renderPin = function () {
  // копируем шаблон
var clonedPin = templatePin.cloneNode(true);
// вносим изменения в позиции расположение метки, добавляем аватарку, заголовок объявления
clonedPin.style = 'left: ' + (mainArr[i].Data._location.x + 20) + 
'px; top: '+ (mainArr[i].Data._location.y + 40) + 'px';
clonedPin.querySelector('img').src = mainArr[i].Data.author.avatar;
clonedPin.alt = mainArr[i].Data.offer.title;
return clonedPin;
};
// создаем фрагмент
var fragment = document.createDocumentFragment();
//далее в цикле
for (var i = 0; i<= mainArr.length - 1; i++) {
//добавляем метки в дом для пинс
fragment.appendChild(renderPin());
}
//добавляем фрагмент в map__pins
houseOfPins.appendChild(fragment);
// запрос шаблона объявления 
var templateCard = document.querySelector('template').content.querySelector('.map__card');
// расположение блока map__filters-container, до которого нужно вставить наши элементы
var blocMapFilters = document.querySelector('.map__filters-container');
// создаем функцию для объявлений
var renderCard = function ()
{
  // копируем шаблон
  var clonedCard = templateCard.cloneNode(true);
  var adressPhoto = mainArr[i].Data.offer.photos
  // вносим изменения в позиции заголовок, адрес, цену, тип жилья, комнаты, гости, время заезда - выезда, удобства, описание, фотки
clonedCard.querySelector('.popup__title').textContent = mainArr[i].Data.offer.title;
clonedCard.querySelector('.popup__text--adress').textContent = mainArr[i].Data.offer.address;
clonedCard.querySelector('.popup__text--price').textContent = mainArr[i].Data.offer.price + ' р/ночь';
clonedCard.querySelector('.popup__type').textContent = typeOfferTranslate();
clonedCard.querySelector('.popup__text--capacity').textContent = mainArr[i].Data.offer.rooms + 
' комнаты для ' + mainArr[i].Data.offer.guests + ' гостей';
clonedCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + 
mainArr[i].Data.offer.checkin + ',выезд до ' + mainArr[i].Data.offer.checkout;
clonedCard.querySelector('.popup__features') = mainArr[i].Data.offer.features;
removePhotoElement();
clonedCard.querySelector('.popup__photos').appendChild(createPhotoFragment(addPhotos(adressPhoto[numberPhoto]), adressPhoto))
querySelector('.popup__avatar').src = mainArr[i].Data.author.avatar;
return clonedCard;
}
//создаем фрагмент для объявлений
var fragment = document.createDocumentFragment();
for (var i = 0; i<= mainArr.length - 1; i++) {
fragment.appendChild(renderCard())
}
// добавляем фрагмент перед блоком.map__filters-container
blockMap.insertBefore(fragment, blocMapFilters);