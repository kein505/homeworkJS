function logName(name, surname) {
	console.log(`Моё имя ${name} ${surname}` )
}

logName('Александр', 'Костарев')


function countDeposite(depositInUSD , month, rate){
	const sum = depositInUSD * (1 + rate/12) ** month;
	return sum;
}

const example1 = countDeposite(1000, 24, 0.12);
console.log(example1);

console.log(countDeposite(1000, 48, 0.10));

///////////////
function powerOfTwo(num) {
	return num * num;
}
console.log(powerOfTwo(5));

const profit = function (num) {
	return num * num;
}
console.log(profit(6))

///////////////

function powerOfTwo(num) {
	return num * num;
}
console.log(powerOfTwo(5));

const proft = (num) =>  num * num;
console.log(proft(7));

const proft2 = (num) => {
	console.log(num);
	return num * num;
};
console.log(proft2(8));

/////////////////////
/*
Задача:
 * Преобразовать функцию, которая возводит число в степень, в стрелочную функцию.

Шаги: 
  * Возьмите обычную функцию, которая принимает два аргумента: число и степень.
  * Задача - переписать эту функцию как стрелочную и сохранить ее в константу (например, toPowerArrow).
  * Используйте получившуюся стрелочную функцию и проверьте ее работу, выводя результат в консоль.

*/
function toPower(num, power) {
	const res = num ** power;
	return res;
}
console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(3, 3));
///////////////////---------------------------
function toPower3(num, power  = 2) {
	const res = num ** power;
	return res;
}
console.log(toPower3(2, 3));
console.log(toPower3(2));
/////////////////////////////////
function canAccessWebsite(age){
	if (age <18)
		return 'No';
	return 	'Yes';
}
console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age <18 ? 'No' : 'Yes';
console.log(canAccessWebsite2(19))
/////////////////////////////////
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present){
	return present * KG_IN_USD;
}

function calculateKm(distance){
	return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance){
	const price1 = calculateW(present1);
	const price2 = calculateW(present2);
	const dictancePrice =  calculateKm(distance);
	return price1 + price2 + dictancePrice;
}
console.log(getExchangePrice(1, 2, 10))
///////////////////////////////////////////
/*
Пользователь:
* Возраст
* Наличие работы
* Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? 
Он может брать не только свои деньги, но и взять кредит. 
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 
100$ если ему просто больше 24-х лет и 0 в ином случае. 
Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/
const CREDIT = 500;
const PriceMacBook = 2000;

function canTakeCredit(age, isHaveJob = false){
	switch(true){
		case age>24 && isHaveJob:
			return 500;
		case age>24:
			return 100;
		default:
			return 0;	
	}
}

function canBuyMac(priceMacBook, age, money, isHaveJob = false){
	const creditMoney = canTakeCredit(age, isHaveJob);
	return priceMacBook <= money + creditMoney;
	/*if(money >= priceMacBook)
	{
		return true; 
	}
	else
	{
		const mayBuy = priceMacBook - money - canTakeCredit(age, isHaveJob);
		if (mayBuy<=0)
			return true;	
		else false;	
	}
	return false;
	*/
}

console.log(canBuyMac(2000, 25, 1500, true))

