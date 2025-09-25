////////////////////////////////////////////11.1. forEach
console.log('-------11.1. forEach-------');

const score = [5, 10, 0, 15];

// for(const [i, el] of score.entries()){
// 	console.log(`Раунд ${i + 1}: ${el}`)
// }

score.forEach((el, i) =>{
	console.log(`Раунд ${i + 1}: ${el}`)
})


////////////////////////////////////////////11.2. map
console.log('-------11.2. map-------');


const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRub = [];
for(const transaction of transactionInUSD){
	transactionInRub.push(transaction * 60);
}

// console.log(transactionInUSD);
// console.log(transactionInRub);

const transactionInRub2 = transactionInUSD
	.map((transaction, i) =>{
		console.log(i);
		return transaction * 60;
})

console.log(transactionInUSD);
console.log(transactionInRub2);

//////////////////////////////////////////////////////////11.3. filter
console.log('-------11.3. filter--------');

const operations = [10, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations){
// 	if(operation > 0){
// 		positiveOperations.push(operation);
// 	}
// }
// console.log(positiveOperations);

const positiveOperations = operations.filter(operation => {
	return operation>0;
});
console.log(positiveOperations);

const positiveRubOperations = operations
	.filter(operation => {
		return operation > 0;
	})
	.map(operation => operation * 60)
console.log(positiveRubOperations);


//////////////////////////////////////////////////////////////////10.4. Упражнение - Стрелочные функции
console.log('-------11.4--------');
/*
Задача:
Имеется массив цен товаров в два различных момента времени. 
Необходимо обработать эти данные для получения массива, 
содержащего только положительные изменения цен.

Исходные данные:
Массив prices содержит цены товаров в момент времени x и y для каждого товара.

Цель:
Преобразовать исходные данные в массив положительных дельт цен, 
т.е., разниц между ценой в момент y и ценой в момент x для товаров, которые подорожали.

Результат:
Получаем массив, содержащий только положительные изменения цен. 
В примере, представленном в видео, результатом будет массив [100, 150], 
показывающий увеличение цен на товары.

Заключение:
Методы map и filter позволяют эффективно преобразовывать и фильтровать данные. 
Эти методы особенно полезны при обработке массивов и объектов для получения необходимых результатов.
*/
const prices = [[100, 200], [120, 100], [200, 350]];

// const deltaPrices = prices.filter(price =>{
// 	return price[0]<price[1];
// })
// .map(product => product[1]-product[0]);


const deltaPrices = prices
	.map(product => product[1]-product[0])
	.filter(price => price>0);


console.log(deltaPrices);
//////////////////////////////////////////////////////////////////11.5. reduce
console.log('-------11.5. reduce--------');


const operations2 =  [100, -20, 7, -30, 50];
let balance = 0;
for (const operation of operations2){
	balance += operation;
}
console.log(balance);

const finalBalance = operations2.reduce((acc, operation, i) => {
	console.log(`Итерация ${i} acc: ${acc}, operation: ${operation}`)
	return acc += operation;
}, 0);
console.log(balance);

const minElement = operations2.reduce((acc, operation) => {
	if(operation > acc){
		return acc;
	} else {
		return operation
	}
}, 0);
console.log(minElement);
// 0 - acc = 0, value = 100
// 1 - acc = 0, value = 100

/////////////////////////////////////////////////////////////////1.6. Упражнение - среднее значение
console.log('-------11.6. Упражнение - среднее значение--------');
/*
Найти среднее значение последоватедьности чисел с помощью reduce
const arr = [1, 4, 4, 10];

Обычный Подход:
1. Суммировать все элементы массива.
2. Разделить сумму на количество элементов.
Решение с Reduce:
* Рассмотрим использование reduce для упрощения этой задачи.
Шаги Решения:
1. Использовать reduce для суммирования элементов, включая условие для обработки последнего элемента.
2. В условии, если элемент не последний - возвращаем накопительную сумму.
3. Если элемент последний - возвращаем сумму, разделённую на длину массива.
*/
const arr = [2, 4, 4, 10];
const avg = arr.reduce((acc, operation, i) =>{
	acc += operation;
	if (i === arr.length-1){
		return acc/arr.length;
	} else {
		return acc;
	}	
}, 0);
console.log(avg);

/////////////////////////////////////////////////////////////////11.7. find и findIndex
console.log('-------11.7. find и findIndex--------');

const arr2 = [2, 4, 4, 10];
let elGT5 = arr2.find(el => el<5);
console.log(elGT5);

let indexGT5 = arr2.findIndex(el => el>5);
console.log(indexGT5);  // index = 3

indexGT5 = arr2.findIndex(el => el<0);
console.log(indexGT5);   // index = -1

/////////////////////////////////////////////////////////////////11.8. Упражнение - реализация some
console.log('-------11.8. Упражнение - реализация some--------');

const arr3 = [2, 4, 4, 10, 20];

function some(arr, chislo){
	let searching = arr.find(el => el === chislo)
	return searching == undefined ? false : true;
}

console.log(some(arr3, 3));  

console.log(arr3.some(el => el === 4));


/////////////////////////////////////////////////////////////////11.9. flat и flatMap
console.log('-------11.9. flat и flatMap--------');

const prices2 = [[2, 4], [3, 4], [10, [20, 50]]];
const res = prices2.flat(10);
const res2 = prices2.flatMap(el => el.concat([1]));
console.log(res);
console.log(res2);

/////////////////////////////////////////////////////////////////11.10. sort
console.log('-------11.10. sort--------');

const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);

const operations3= [100, -300, -100, 50, 480];
console.log(operations3);

// <0 - a,b  - сохраняем порядок
// > 0 - b,a - меняем порядок
operations3.sort((a, b) => {
	if(a > b) {
		return 1;
	}
	if(a < b) {
		return -1;
	}
});

console.log(operations3);

operations3.sort((a, b) => {
	if(a < b) {
		return 1;
	}
	if(a > b) {
		return -1;
	}
});

console.log(operations3);

// короткая запись
operations3.sort((a, b) => a-b);

console.log(operations3);


///////////////////////////////////////////////////////////////// 11.11. Быстрое создание массивов
console.log('-------11.11. Быстрое создание массивов--------');

const array = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5));
const array2 = new Array(5);
console.log(array2);
console.log(array2.map(el => el + 1));
array2.fill(1, 0, 3);
array2.fill(2, 3, 5);
console.log(array2);

const array3 = Array.from({ length: 5}, (cur, i) => i + 1);
console.log(array3);

/////////////////////////////////////////////////////////////////
console.log('-------10--------');

let arr5 = [1, 2, 10, 15];
arr5.sort()
console.log(arr5);
