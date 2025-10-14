/*
13.14. Домашнее задание - Объекты

Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
{
    search: ‘Вася’,
    take: 10,
}

// search=Вася&take=10

Задание функции
    * Функция должна принимать объект с параметрами (например, {search: "Вася", take: 10}).
    * Возвращать строку с query-параметрами (например, "search=Вася&take=10").

*/
console.log('-------13.14. Домашнее задание - Объекты-------');

const obj = {
    search: 'Вася',
    take: 10,
}

function searchQuary(object){
    // return `search=${object.search}&take=${object.take}`;
    return Object.entries(object)
    .map(([key, value])=> `${key}=${value}`)
    .join('&');
}


console.log(searchQuary(obj));


 
















