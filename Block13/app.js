////////////////////////////////////////////13.1. Знакомство с объектами
console.log('-------13.1. Знакомство с объектами-------');

const userArray = ['Вася', 'Пупкин', 24];
const user = {
	name:'Вася',
	surName: 'Пупкин', 
	age: 24,
	skills: [
		'Программирование',
		'Готовка'
	],
	eduBasik: 'Shkola 10',
	eduPro: 'МФТИ',
};

////////////////////////////////////////////13.2. Обращение к элементам
console.log('-------13.2. Обращение к элементам -------');

console.log(user);
console.log(user.name);
console.log(user.skills[0]);

console.log(user.skills);
console.log(user['skills']);

const levl = 'Pro';
console.log(user['edu' + levl]);

// const res = prompt('введите свойство');
user['city'] = 'Moskow';
console.log(user.city);
// console.log(user[res]);

user.age = 30;
user['age'] = 30;
console.log(user);

/////////////////////////////////////////////////////////3.3. Упражнение - сортировка пользователей
console.log('-------3.3. Упражнение - сортировка пользователей--------');
/*
1. Массивы объектов: чаще всего в реальных приложениях приходится работать не с отдельными объектами, 
	а с массивами объектов.
2. Основная задача: научиться сортировать массив пользователей по возрасту.
3. Метод sort: стандартный метод sort без дополнительных параметров 
	не подходит для сортировки объектов, так как воспринимает их как строки. 
	Необходимо использовать функцию сравнения.
4. Функция сравнения: для сортировки по возрасту пишем функцию, которая будет сравнивать 
	это свойство между двумя объектами. Пример кода: users.sort((a, b) => a.age - b.age);. 
	Это позволит сортировать элементы массива по возрастанию возраста.
5. Оптимизация кода: при желании, код функции сравнения можно минимализировать, 
	убрав лишние скобки и слова, сохраняя лаконичность и читаемость.
*/

const users = [
	{name: 'Вася', age: 30},
	{name: 'Катя', age: 18},
	{name: 'Аня', age: 40},
	{name: 'Петя', age: 25},
];
console.log(users.sort((a, b) => a.age - b.age));


////////////////////////////////////////////////////////////////// 13.4. Упражнение - преобразование объектов
console.log('-------13.4. Упражнение - преобразование объектов--------');
/*
Преобразовать пользователей до вида:
	{ fullname: 'Вася Пупкин', skillNum: 2 }
*/


const users2 = [
	{
		name:'Вася',
		surName: 'Пупкин', 
		age: 30,
		skills: [ 'Разработка', 'DevOps'],
	},
	{
		name:'Катя',
		surName: 'Булова', 
		age: 18,
		skills: [ 'Дизайн'],
	},
];

const userData = users2.map(user=>{
	return {
		fullname: `${user.name} ${user.surName}`,
		skillNum: user.skills.length
	}
});

console.log(userData);


/////////////////////////////////////////////////////////////////13.5. Методы объектов
console.log('-------13.5. Методы объектов--------');

const user2 = {
	name:'Вася',
	surName: 'Пупкин', 
	age: 24,
	getFullName: function(name, surName) {
		return this.name + ' ' + this.surName;
	}
};

console.log(user2.getFullName())


/////////////////////////////////////////////////////////////////13.6. Упражнение - кошелёк
console.log('-------13.6. Упражнение - кошелёк--------');

/*
1. Объект "Кошелек": Содержит начальный баланс (balance) и массив операций (operations).
2. Методы:
	increase(sum, reason): Увеличивает баланс на sum, добавляет операцию с reason в массив operations. 
							Возвращает true.
	decrease(sum, reason): Уменьшает баланс на sum если достаточно средств, иначе возвращает false. 
							Добавляет операцию с reason в массив operations при успехе.
	getOperationLength(): Возвращает количество выполненных операций.
*/

const wallet = {
	balance: 0,
	operations: [],
	increase: function(sum, reason) {
 			this.balance += sum;
			this.operations.push({
				reason,
				sum
			});
 			return true;
 		},
	decrease: function(sum, reason) {
 			if(this.balance < sum){
				console.log('Недостаточно баланса')
				return false;	
			}			
			this.balance -= sum;
			this.operations.push({
				reason,
				sum: -sum
			});
			return true;
			},		

	getOperationLength: function() {
		return this.operations.length;
	}	
};


console.log(wallet.increase(1000, 'зарплата'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000, 'покупка ноутбука'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, 'покупака телефона'));
console.log(wallet.getOperationLength());
console.log(wallet.balance);
console.log(wallet.operations);

/////////////////////////////////////////////////////////////////13.7. Enhance object literals
console.log('-------13.7. Enhance object literals--------');

const initialBalance = 7;

const wallet2 = {
	balance: initialBalance,
	operations: [],
};


/////////////////////////////////////////////////////////////////13.8. Итерирование по объекту
console.log('-------13.8. Итерирование по объекту--------');

const cities = {
	mak: {
		let: 200,
		temp: 25
	},
	spb: {
		let: 100,
		temp: 20
	},
} 

let sumTemp  = 0;
console.log(Object.keys(cities));
let citiesCount = Object.keys(cities).length;

// for (const key in cities){

// 	sumTemp += cities[key].temp;
// }
// console.log(sumTemp  / citiesCount);

for (const key of Object.keys(cities)){

	sumTemp += cities[key].temp;
}
console.log(sumTemp  / citiesCount);

/////////////////////////////////////////////////////////////////13.9. Деструктуризация и rest
console.log('-------13.9. Деструктуризация и rest--------');

const user3 = {
	name: 'Вася',
	age: 40,
	city: 'Moscow'
};

const {age, ...userWithoutAge } = user3;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Разработка', 'Дизайн'],
	creditCard: '2342-2445-2735-2256'
}

// user3 = {
// 	...user3,
// 	...additionalData
// }
user3.test = 'asdasda';

console.log(user3);

/////////////////////////////////////////////////////////////////13.10. Optional chaining
console.log('-------13.10. Optional chaining--------');

const cities2 = {
	msk: {
		temp: {
			celcius: 25
		}
	},
	spb: {

	},
}

const city2 = 'msk';

if (cities2[city2] != undefined && cities2.spb.temp != undefined)
{
	console.log(cities2[city2].temp.celcius);
}

console.log(cities2[city2]?.temp?.celcius);


///////////////////////////////////////////////////////////////// 13.11. Упражнение - склад
console.log('-------13.11. Упражнение - склад--------');
/*
Создаем объект warehouse с массивом товаров goods.
Товары имеют идентификатор и могут включать различные характеристики, в том числе вес.
Методы для управления складом:
	A. Добавление товара (addGoods):
	B. Поиск товара по идентификатору (findGoodById):
	C. Получение суммарного веса всех товаров (getTotalWeight):
*/

const warehouse = {
  goods: [],
  findGoodById: function (id) {
	return this.goods.find(g=> g.id == id);
  },
  addGood: function (good) {
	const existedGood = this.findGoodById(good.id);
	if(existedGood){
		console.log('этот товар уже н складе');
		return;
	}
	return this.goods.push(good);
  },
  getWeightKg: function () {
 	return this.goods.reduce((acc, el) =>
			acc += el.weight?.kg  ? el.weight.kg : 0, 
			0
		)
  },
};

/* Товары */
const car = {
  id: 1,
  weight: {
  	kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
  	kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}

warehouse.addGood(car);
console.log(warehouse.goods);
console.log('warehouse.goods');
warehouse.addGood(chair);
warehouse.addGood(paper);

console.log(warehouse.findGoodById(2)); //check findGoodById
console.log(warehouse.findGoodById(6)); //check findGoodById

//check addGood
const table = {
	id: 4,
	weight: {
  	kg: 2
  },
  color: 'white'
}
warehouse.addGood(table);
console.log(warehouse.goods);

//check getWeightKg
console.log(warehouse.getWeightKg());

/////////////////////////////////////////////////////////////////
console.log('-------1--------');

