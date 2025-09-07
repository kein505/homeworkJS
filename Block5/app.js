const money = 100;
const canBuy = money > 50;

if(money > 50)
{
	console.log('Может купить наш продукт');
}
else if (money>5){
	console.log('Куплен mini продукт');
}

else{
	console.log('не хватает баланса');
}

console.log('Итог');


/*
Задача: Рассчитать, сможет ли Вася купить дом стоимостью 13 500 долларов 
через 2 года, положив на счет 12 000 долларов под 7% годовых 
с ежемесячной капитализацией процентов.

Капитализация - добавление начисленных процентов к сумме вклада.
Формула сложных процентов: 
Итоговая сумма = Вклад * (1 + ставка/12) ^ срок(в месяцах).
*/

const costHome = 13500;
const vklad = 12000;
const percentInMonth = 0.07;

const itog = vklad * (1 + percentInMonth/12) ** 24;

if(itog > costHome)
{
	console.log(`Может купить дом за 13500. Остаток ${itog-costHome}`);
}

else{
	console.log('не хватает денег');
}

console.log('Накоплено денег за 2 года: ' + itog);


///////////////////////////

const secretNumber = '7';

if(Number(secretNumber) === 7){  // строгое сравнение, если
	console.log('Угадал строго');  // secretNumber - string -то не будет равенства
}

if(secretNumber == 7){  // не строгое равенство, если
	console.log('Угадал не строго');   // secretNumber - string -то  будет равенство
} 

///////////////////  switch
const role = 'admin';

if(role === 'manager'){  
	console.log('Менеджер');   
} else if (role === 'admin'){  
	console.log('Алминистратор');   
} else if (role === 'ceo'){  
	console.log('CEO');   
}  else {
	console.log('Мы тебя не знаем');
}

switch(role){
	case 'manager': // role === 'manager'
		console.log('Менеджер'); 
		break;
	case 'admin': // role === 'admin'
		console.log('Алминистратор'); 
		break;
	case 'ceo': // role === 'ceo'
		console.log('CEO'); 
		break;
	default:
		console.log('Мы тебя не знаем');
}

switch(role){
	case 'manager': // role === 'manager'
		console.log('Менеджер'); 
	case 'admin': // role === 'admin'
		console.log('Не руководитель'); 
		break;
	case 'ceo': // role === 'ceo'
		console.log('Руководитель'); 
		break;
	default:
		console.log('Мы тебя не знаем');
}

const num =1;

switch(true){
	case num >0:
		console.log('положительный');
		break;
	case num<0:
		console.log('Отрицатиельный');
		break;
	default:
		console.log('ноль');
}

/// 5.5. Тернарные операторы
const bmwX3 = 100000;
const fordFocus = 10000;
const budget = 20000;
let message = budget > bmwX3 
	? 'BmW' 
	: budget > fordFocus ? 'Ford' : 'велосипед';


console.log(`Я хочу купить ${message}`);

/*
Задача:
	Запросить у пользователя ответ на вопрос "сколько будет 7 плюс/минус 15?".
Метод реализации:
	* Использование метода prompt в браузере для запроса ввода от пользователя.
	* Обработка возможных ответов:
	* Приемлемые ответы: числа 22, -8, или строка "я не робот".
	* Неприемлемый ответ: любой другой ввод считается как робот.
*/
let res = prompt('Сколько будет 7 плюс/минус 15?');
switch(true){
	case Number(res) == 22:
	case Number(res) == -8:
	case res == 'я не робот':
		console.log('ты не робот');
		break;
	default:
		console.log('ты робот');
}