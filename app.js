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