var makeRandomNumber = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
var PictureWay = [];
var typeOfApartaments = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var Calculateprice = [];
var typeOfStructure = ['palace', 'flat', 'house', 'bungalo'];
var arrRandomTypeOfStructure = [];
var CheckTime = ['12:00', '13:00', '14:00'];
var arrCheckIn = [];
var arrCheckOut = [];
var arrRooms = [];
var arrGuest = [];
var arrfeatures = [];
var arrRandomSortListPhotos = [];
var arrLocationX = [];
var arrLocationY = [];
var data = {
  author : 
  {
  avatar : PictureWay[i]
  },
  offer :
  {
  title: typeOfApartaments[i],
  address: location.x[i] + ', ' + location.y[i],
  price: CalculatePrice[i],
  type: arrRandomTypeOfStructure[i],
  rooms: arrRooms[i],
  guests: arrGuest[i],
  checkin: arrCheckIn[i],
  checkout: arrCheckOut[i],
  features: arrfeatures[i],
  description: '',
  photos: arrRandomSortListPhotos[i]
  },
  location :
  {
    x: arrLocationX[i],
    y: arrLocationY[i]
  }
}
for (var i = 0; i<= 7; i++)
{
PictureWay[i] = 'img/avatars/user0' + (i + 1) + '.png'
  PictureWay.push(PictureWay[i])
  Calculateprice[i] = makeRandomNumber (1000, 1000000)
  Calculateprice.push(Calculateprice[i])
  arrRandomTypeOfStructure[i] = typeOfStructure[makeRandomNumber (0, typeOfStructure - 1)]
  arrRandomTypeOfStructure.push(arrRandomTypeOfStructure[i])
    arrCheckIn[i] = CheckTime[makeRandomNumber (0, CheckTime.length - 1)]
arrCheckIn.push(arrCheckIn[i])
arrCheckOut[i] = CheckTime[makeRandomNumber (0, CheckTime.length - 1)]
arrCheckOut.push(arrCheckOut[i])
  arrRooms[i] = makeRandomNumber (1, 5)
arrRooms.push(arrRooms[i])
  arrGuest[i] = makeRandomNumber (1,20)
arrGuest.push(arrGuest[i])
  var randomLengthOfString = makeRandomNumber (1, 6)
var possibleAmenities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
possibleAmenities.length = randomLengthOfString
arrfeatures[i] = possibleAmenities
  var photosList = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
function compareRandom(a, b)
{
return Math.random() - 0.5;
}
photosList.sort(compareRandom);
arrRandomSortListPhotos[i] = photosList
arrLocationX[i] = makeRandomNumber (300, 900)
arrLocationX.push(arrLocationX[i])
arrLocationY[i] = makeRandomNumber (150, 500)
arrLocationY.push(arrLocationY[i])
}
document.querySelector('.map')classList.remove('map-faded')

