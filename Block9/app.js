////////////////////////////////////////////////////////////////////////Цикл for - 1
console.log('-------1-------');

for(let i = 1; i<10;i++){
	console.log(`Наш баланс ${i}$`)
}

////////////////////////////////////////////////////////////////////////Break и continue - 2
console.log('-------2-------');
const tasks = ['задача 1', 'задача 2', 'задача 3'];

for(let i=0; i<tasks.length; i++){
	if (tasks[i] === 'задача 2')
	{
		continue;
	}
	console.log(tasks[i]);
}
console.log('-----------------');
for(let i=0; i<tasks.length; i++){
	if (tasks[i] === 'задача 2')
	{
		break;
	}
	console.log(tasks[i]);
}
//////////////////////////////////////////////////////////Цикл в обратном порядке - 3
console.log('-------3--------');
/*
Необходимо написать цикл, который проходит по исходному массиву в обратном порядке
и формирует новый массив с обратным порядком элементов.
Исходный массив: ["!", "js", "люблю", "я"].
Цель: Получить строку "я люблю js !".
*/
const arr = ["!", "js", "люблю", "я"];
const resultArr= [];
for(let i = arr.length-1; i>=0; i--){
	resultArr.push(arr[i]);
}
console.log(resultArr.join(' '));

console.log(arr.reverse().join(' '));
//////////////////////////////////////////////////////////////////Цикл в цикле- 4
console.log('-------4--------');

// for(let i = 1; i<5; i++){
// 	console.log(`Цикл 1 - ${i}`)
// 	for(let j =1; j<5; j++)	{
// 		console.log(`Цикл 2 - ${j}`)
// 	}
// }

const tasks2 = [[1, 'задача 1'], [2, 'задача 2']];

for(let i = 0; i<tasks2.length; i++){
	for(let j =0; j<tasks2[i].length; j++)	{
		console.log(tasks2[i][j]);
	}
}
//////////////////////////////////////////////////////////////////9.5. Цикл while
console.log('-------5--------');

let i =1;
while(i<5){
	console.log(`Вывод - ${i}`);
	i++;
}


const arr2 = [1,4,8,7];
let j =0;
while(arr2[j] <=5 && j < arr2.length){
	console.log(arr2[j]);
	j++;
}

let y=0;
do {
	console.log(y);
	y++;
} while(y<0)

//////////////////////////////////////////////////////////////////9.6. Циклы for of и for in
console.log('-------6--------');

const arr3 = [1,4,8,7];
for(let i = 0; i < arr3.length; i++){
	console.log(arr3[i]);
}
console.log('-----');

for(let element of arr3){
	console.log(element);
}

console.log('-----');
for(let index in arr3){
	console.log(arr3[index]);
}
//////////////////////////////////////////////////////////////////9.7. Упражнение - Расчёт итогового баланса
console.log('-------7--------');
/*
1. Расчёт итогового баланса getBalance
 * Принимает массив операций и начальный баланс.
 * Считает итоговый баланс, учитывая все операции.
 * Возвращает итоговый баланс.
2. Проверка на наличие отрицательного баланса checkOperations
 * Принимает массив операций и начальный баланс.
 * Проверяет, не уходит ли баланс в минус после каждой операции.
 * Возвращает true (если баланс не уходит в минус) или false (если баланс уходит в минус).
3. Расчёт средних значений averageOperations
 * Принимает массив операций.
 * Рассчитывает средний доход (среднее положительных значений) и 
 средний расход (среднее отрицательных значений).
 * Возвращает массив из двух значений: средний доход и средний расход.

Примеры использования:
 * Чтобы узнать итоговый баланс, применяем функцию getBalance, 
передавая операции и начальный баланс.
 * Для проверки возможности ухода баланса в минус используем checkOperations.
 * Средние значения дохода и расхода вычисляем через averageOperations.

*/
function getBalance(arrayOfOpperrations, initialBalance){
	let balance = initialBalance;
	for(const element of arrayOfOpperrations){
	 	balance += element;
	 }
	return balance;
}

function checkOperations(arrayOfOpperrations, initialBalance){
	// const newBalance = getBalance(arr, balance);
	// if(newBalance<0)
	let balance = initialBalance;
	let isOk = true;
	for(element of arrayOfOpperrations){
		balance += element;
		if (balance < 0){
			isOk = false;
			break;
		}
	}
	return isOk;
}

function averageOperations(arrayOfOpperrations){
	// const arrDohodAndRashod = [];
	let positiveCount = 0;
	let positiveSum =0;
	let negativeCount =0;
	let negativeSum =0;

	for(element of arrayOfOpperrations){
		if (element > 0){
			positiveCount++;
			positiveSum += element;
		}
		if (element < 0){
			negativeCount++;
			negativeSum += element;
		}
	}
	return [positiveSum/positiveCount, negativeSum/negativeCount];
}

const opperrations = [1000, -700, 300, -500, 10000];
const startBalance = 100;
// const result11 = getBalance(opperrations, startBalance);
console.log(getBalance(opperrations, startBalance));
console.log(checkOperations(opperrations, startBalance));
console.log(averageOperations(opperrations));
