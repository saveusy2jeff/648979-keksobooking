'use strict';
// Файл backend.js
(function () {
  window.load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/keksobooking/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        window.mainArr = xhr.response;
      } else if (xhr.status === 401) {
        onError('Ошибка! Статус ответа: Пользователь не авторизован ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 404) {
        onError('Ошибка! Статус ответа: Ресурс не найден ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 400) {
        onError('Ошибка! Статус ответа: Неверный запрос ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 403) {
        onError('Ошибка! Статус ответа: Нет прав выполнить запрос ' + xhr.status + ' ' + xhr.statusText);
      } else {
        onError('Ошибка! Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; // 10 sec
    xhr.open('GET', URL);
    xhr.send();
    window.mainArr = xhr.response;
  };
  window.upload = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/keksobooking';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else if (xhr.status === 401) {
        onError('Ошибка! Статус ответа: Пользователь не авторизован ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 404) {
        onError('Ошибка! Статус ответа: Ресурс не найден ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 400) {
        onError('Ошибка! Статус ответа: Неверный запрос ' + xhr.status + ' ' + xhr.statusText);
      } else if (xhr.status === 403) {
        onError('Ошибка! Статус ответа: Нет прав выполнить запрос ' + xhr.status + ' ' + xhr.statusText);
      } else {
        onError('Ошибка! Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
