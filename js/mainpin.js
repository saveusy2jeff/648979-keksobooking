'use strict';
// Файл util.js
(function () {
    var MIN_MAP_X = 0;
    var MIN_MAP_Y = 150 - window.util.MAP_MAIN_PIN_HEIGHT;
    var MAX_MAP_X = window.util.MAP_WIDTH - window.util.MAP_MAIN_PIN_WIDTH;
    var MAX_MAP_Y = 500 - window.util.MAP_MAIN_PIN_HEIGHT;
    var limitMapX = function (min, max, coord) {
        if (coord >= min && coord <= max) {
            windows.mainPinRequest.style.left = coord + 'px';
        } else if (coord < min) {
            windows.mainPinRequest.style.left = min + 'px';
        } else if (coord > max) {
            windows.mainPinRequest.style.left = max + 'px';
        }
    };
    var limitMapY = function (min, max, coord) {
        if (coord >= min && coord <= max) {
            windows.mainPinRequest.style.top = coord + 'px';
        } if (coord < min) {
            windows.mainPinRequest.style.top = min + 'px';
        } if (coord > max) {
            windows.mainPinRequest.style.top = max + 'px';
        }
    };
    windows.mainPinRequest.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };
        windows.notHiddenCard = document.querySelector('.map__card:not([hidden])');
        if (windows.notHiddenCard !== null) {
            windows.notHiddenCard.setAttribute('hidden', true);
        }
        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            limitMapX(MIN_MAP_X, MAX_MAP_X, (windows.mainPinRequest.offsetLeft - shift.x));
            limitMapY(MIN_MAP_Y, MAX_MAP_Y, (windows.mainPinRequest.offsetTop - shift.y));
            windows.mainPinRequest.style.top = (windows.mainPinRequest.offsetTop) + 'px';
            windows.mainPinRequest.style.left = (windows.mainPinRequest.offsetLeft) + 'px';
            windows.currentAddress.value = (Math.floor(parseInt(windows.mainPinRequest.style.left, 10) + window.util.MAP_MAIN_PIN_WIDTH / 2)) + ', ' + (Math.floor(parseInt(windows.mainPinRequest.style.top, 10) + window.util.MAP_MAIN_PIN_HEIGHT));
        };
        var onMouseUp = function (moveEvt) {
            moveEvt.preventDefault();
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            windows.currentAddress.value = (Math.floor(parseInt(windows.mainPinRequest.style.left, 10) + window.util.MAP_MAIN_PIN_WIDTH / 2)) + ', ' + (Math.floor(parseInt(windows.mainPinRequest.style.top, 10) + window.util.MAP_MAIN_PIN_HEIGHT));
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})()