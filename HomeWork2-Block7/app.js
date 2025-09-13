/*
Написать функцию, которая получает на вход 3 параметра:
* суммой средств - 1000
* валютой средств - руб
* целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, 
или null, если нет. Ставки конвертации хранятся внутри функции.



*/
function converRubleInDollar(money, currencyHome,  targetCurrency){
	if(currencyHome=='rub' && targetCurrency=='$')
		return money * 0.012;
	else return money * 83.75; 
}

function converRubleInEUR(money, currencyHome,  targetCurrency){
	if(currencyHome=='rub' && targetCurrency=='eur')
		return money * 0.01;
	else return money * 97.77; 
}

function converRubleInTeng(money, currencyHome,  targetCurrency){
	if(currencyHome=='rub' && targetCurrency=='teng')
		return money * 6.46;
	else return money * 0.15; 
}



function convertation(money, currencyHome,  targetCurrency){
	switch(true)
	{
		case currencyHome=='rub' && targetCurrency=='$' || currencyHome=='$' && targetCurrency=='rub':
			return converRubleInDollar(money, currencyHome,  targetCurrency);
		case currencyHome=='rub' && targetCurrency=='eur' || currencyHome=='eur' && targetCurrency=='rub':
			return converRubleInEUR(money, currencyHome,  targetCurrency);
		case currencyHome=='rub' && targetCurrency=='teng' || currencyHome=='teng' && targetCurrency=='rub':
			return converRubleInTeng(money, currencyHome,  targetCurrency);
		default:
			 return null;
	}
}

console.log(convertation(100,'rub','$'))
console.log(convertation(100,'eur','rub'))
console.log(convertation(100,'asds','sad'))



