/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 
5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы.
Сейчас понедельник. 
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const payRateUsd = 80;
const hourInDay = 5;
const dayInWeek = 5;
const projectHour = 40;
const needGoWayInDay = 11; 
const availableHours = (needGoWayInDay - 2)*hourInDay;

let workIsDone = availableHours > projectHour;
let manyFromJob =  projectHour * payRateUsd;

console.log('Успеет сделать работу до поездки? ' +  workIsDone);  //Boolean переменную успеете ли вы взяться за работу
console.log('Сколько получится за работу: ' + manyFromJob + '$'); //Сколько вы за неё попросите?


const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';
const template  = author + ' заказал ' + projectName + ' по цене ' + price;
console.log(template);

const template2  = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2); // Василий Пупкин заказал Сайт магазина по цене 2000$

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);
// Проект 
// Цена: 2000$

const template4 = `Проект 
Цена: ${price}$`;
console.log(template4);
// Проект 
// Цена: 2000$

/*
Написать код, рассчитывающий дистанцию о объекта: 
- addressLat - адрес назначения lat (например: 10)
- addressLong - адрес назначения long
- positionLat - текущее положение пользователя lat
- positionLong - текущее положение пользователя long
В результате на основе этих координат нужно посчитать 
расстояние от текущего месторасположения до назначения.

Цель Задания:
Разработать функционал простого навигатора для тренировки навыков программирования на JavaScript,
включающий в себя основы математики.

Задача:
Рассчитать дистанцию от текущего местоположения пользователя до желаемой точки назначения.
Местоположения задаются через координаты (широта и долгота), 
обозначаемые как latitude (широта) и longitude (долгота).

Входные Данные:
1. Текущее местоположение пользователя (Position Latitude, Position Longitude)
2. Местоположение точки назначения (Destination Latitude, Destination Longitude)

Задача Программирования:
- Написать код, который рассчитывает расстояние от текущей точки до точки назначения, представляя расчет как нахождение диагонали прямоугольника (используя основы тригонометрии или геометрии).
- Для расчетов можно воспользоваться приемами математики, вспомнить знания из школы или найти формулу в интернете.
*/

const addressLat = 5;
const addressLong = 4;
const positionLat = 1;
const positionLong = 1;

const lat = addressLat - positionLat;
const long = addressLong - positionLong;
const distination = Math.sqrt(lat*lat + long * long);

const temp = `Дистанция от пользователя до точки назначения = ${distination}`;

console.log(temp);