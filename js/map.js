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
var typeOfApartaments = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var typeOfStructure = ['palace', 'flat', 'house', 'bungalo'];
var CheckTime = ['12:00', '13:00', '14:00'];
for (var i = 0; i <= 7; i++) {
  var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var randomLengthFeatures = features.splice(0, makeRandomNumber(1, 6));
  var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var Data = {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png'
    },
    offer: {
      title: typeOfApartaments[i],
      address: location.x + ', ' + location.y,
      price: makeRandomNumber(1000, 1000000),
      type: typeOfStructure[makeRandomNumber(0, typeOfStructure - 1)],
      rooms: makeRandomNumber(1, 5),
      guests: makeRandomNumber(1, 20),
      checkin: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
      checkout: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
      features: randomLengthFeatures,
      description: '',
      photos: photos.sort(compareRandom)
    },
    location: {
      x: makeRandomNumber(300, 900),
      y: makeRandomNumber(150, 500)
    }
  };
  mainArr.push(Data)
}
