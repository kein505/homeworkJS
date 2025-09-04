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