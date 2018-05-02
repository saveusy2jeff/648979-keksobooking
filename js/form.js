'use strict';
// Файл form.js
(function () {
  var formType = document.querySelector('#type');
  var formMinPrice = {
    'bungalo': 0,
    'flat': 1000,
    'house': 5000,
    'palace': 10000
  };
  var formTimeIn = document.querySelector('#timein');
  var formTimeOut = document.querySelector('#timeout');
  var formRooms = document.querySelector('#room_number');
  var formCapacity = document.querySelector('#capacity');
  var rulesForGuests = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['0']
  };
  var onFormTimeInTimeOutChange = function (time1, time2) {
    time1.addEventListener('change', function (evt) {
      time2.value = evt.target.value;
    });
    time2.addEventListener('change', function (evt) {
      time1.value = evt.target.value;
    });
  };
  var setMinPrice = function () {
    var formPrice = document.querySelector('#price');
    formPrice.min = formMinPrice[formType.value];
    formPrice.placeholder = formMinPrice[formType.value];
    return formPrice;
  };
  var syncNumberRoomsandGuests = function () {
    var roomNumber = formRooms.value;
    var currentCapacity = formCapacity.value;
    var checkRulesCapacity = rulesForGuests[roomNumber];
    if (checkRulesCapacity.includes(currentCapacity)) {
      formCapacity.setCustomValidity('');
    } else {
      formCapacity.setCustomValidity('Выбранное значение количества гостей не подходит под количество комнат!');
    }
  };
  onFormTimeInTimeOutChange(formTimeIn, formTimeOut);
  formType.addEventListener('change', setMinPrice);
  formRooms.addEventListener('change', syncNumberRoomsandGuests);
  formCapacity.addEventListener('change', syncNumberRoomsandGuests);
})();
