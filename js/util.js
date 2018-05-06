'use strict';
// Файл util.js
(function () {
  window.blockMap = document.querySelector('.map');
  window.mainPinRequest = document.querySelector('.map__pin--main');
  window.currentAddress = document.querySelector('fieldset.ad-form__element--wide input[id=address]');
  window.notHiddenCard;
  //
  // var makeRandomNumber = function (min, max) {
  //   var rand = min + Math.random() * (max + 1 - min);
  //   rand = Math.floor(rand);
  //   return rand;
  // };
  // var MIN_FEATURES = 1;
  // var MAX_FEATURES = 6;
  // var compareRandom = function () {
  //   return Math.random() - 0.5;
  // };
  // var typeOfApartaments = ['Большая уютная квартира', 'Маленькая неуютная квартира',
  //   'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик',
  //   'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  // var typeOfStructure = ['palace', 'flat', 'house', 'bungalo'];
  // var CheckTime = ['12:00', '13:00', '14:00'];
  // var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  // var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  //   'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  //   'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  window.util = {
    MAP_PIN_HEIGHT: 70,
    MAP_PIN_WIDTH: 50,
    MAP_WIDTH: 1200,
    MAP_MAIN_PIN_HEIGHT: 65,
    MAP_MAIN_PIN_WIDTH: 65,
  //   makeMainArr: function () {
  //     window.mainArr = [];
  //     for (var i = 0; i < typeOfApartaments.length; i++) {
  //       var _location = {
  //         x: makeRandomNumber(300, 900),
  //         y: makeRandomNumber(150, 500)
  //       };
  //       var randomLengthFeatures = function (array) {
  //         var arrayFeatures = [];
  //         var amountFeatures = makeRandomNumber(MIN_FEATURES, MAX_FEATURES);
  //         for (var featuresNumber = 0; featuresNumber < amountFeatures; featuresNumber++) {
  //           arrayFeatures.push(array[featuresNumber]);
  //         }
  //         return arrayFeatures;
  //       };
  //       var Data = {
  //         author: {
  //           avatar: 'img/avatars/user0' + (i + 1) + '.png'
  //         },
  //         offer: {
  //           title: typeOfApartaments[i],
  //           address: _location.x + ', ' + _location.y,
  //           price: makeRandomNumber(1000, 1000000),
  //           type: typeOfStructure[makeRandomNumber(0, typeOfStructure.length - 1)],
  //           rooms: makeRandomNumber(1, 5),
  //           guests: makeRandomNumber(1, 20),
  //           checkin: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
  //           checkout: CheckTime[makeRandomNumber(0, CheckTime.length - 1)],
  //           features: randomLengthFeatures(features),
  //           description: '',
  //           photos: photos.sort(compareRandom).slice()
  //         },
  //         location: {
  //           x: _location.x,
  //           y: _location.y
  //         }
  //       };
  //       window.mainArr.push(Data);
  //     }
  //   }
  // };
  // window.util.makeMainArr();
  }
}
)();
