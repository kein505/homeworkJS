const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Ane', 25];
console.log(roles);
console.log(roles[0]);

console.log(roles.length);
console.log(roles[roles.length-1]);

console.log(roles.at(0));
console.log(roles.at(-1));

const userAges = [2040 - 2022, 20 - '6'];
console.log(userAges);

const userAges2 = [2040 - 2022, 10 > 0 ? 5: 0];
console.log(userAges2);

const userNames = new Array('Vasya', 'Petya', 'Katya');
console.log(userNames);

function square(el) {
	
	return el * el;
}
console.log(square([1, 2, 3]));
////////////////////////
const users = ['Vasya', 'Petya', 'Katya'];
console.log(users);
users[2] = 'Kristina';
console.log(users);
//users[5] = 'Nikita';
//console.log(users);

const arrLength = users.push('Nikita');
console.log(users);
console.log(arrLength);

users.unshift('Cema');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);
////////////////////////////
const roles2 = ['user', 'admin', 'manager'];
const elIndex = roles2.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles2.indexOf('superUser');
console.log(elIndex2);

if (roles2.indexOf('admin') >= 0){
	console.log('Доступ есть');
}


console.log(roles2.includes('admin'));
console.log(roles2.includes('superUser'));
if (roles2.includes('admin') >= 0){
	console.log('Доступ есть');
}
//////////////////////////////////
const roles3 = ['user', 'admin', 'manager', 'superuser'];
const res = roles3.slice(2);
console.log(roles3);
console.log(res);

const res2 = roles3.slice(0, 2);
console.log(roles3);
console.log(res2);

const res3 = roles3.slice(-1);
console.log(res3);

const res4 = roles3.slice(1, -2);
console.log(res4);
console.log(roles3);

//const res5 = roles3.splice(2);
//console.log(res5);
//console.log(roles3);

//const res6 = roles3.splice(2, 1);
//console.log(res6);
//console.log(roles3);

//const res7 = roles3.splice(-1);
//console.log(res7);
//console.log(roles3);

const res8 = roles3.reverse();
console.log(res8);
console.log(roles3);

const newRoles = ['sysadmin', 'developer'];
const res9 = roles3.concat(newRoles);
console.log(res9);
////////////////////////////////////////////////////////////////////////Из строки и обратно - 5
console.log(5)
const roles4 = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res10 = url.split('/');
console.log(res10);

console.log(roles4.join('-'));
////////////////////////////////////////////////////////////////////////Упрожниение - 6
console.log(6)
/*
Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
	* Добавление задачи в конец
	* Удаление задачи по названию
	* Перенос задачи в начало списка по названию
! Всегда меняем исходный массив

*/
const tasks = ['Задача 1'];

function Add(newtask){    //Добавление задачи в конец
	tasks.push(newtask);
	//return tasks;
}

function Remove(deletetask){    //Удаление задачи по названию
	const indexOfTask = tasks.indexOf(deletetask);
	if(indexOfTask === -1){
		return;
	}
	return tasks.splice(indexOfTask, 1);
}

function Prioritize(searchtask){    //Перенос задачи в начало списка по названию
	const result = Remove(searchtask)
	if(!result) {
		return;
	}
	tasks.unshift(searchtask);
}

Add('Задача 2');
Add('Задача 3');
console.log(tasks);

Remove('Задача 2');
console.log(tasks);

Prioritize('Задача 3')
console.log(tasks);

///////////////////////////////////////////////Деструктуризация - 8
console.log(8)
const userData = ['Anton', 18, 'Moskow'];
function getData(){
	return ['Anton', 18, 'Moskow'];
}

//const userName = userData[0];
//const age = userData[1];
//const city = userData[2];

//const [userName, _, city] = getData();  //userData
//console.log(userName,  city)
//////////////////////////////////////////////////Rest - 9
console.log(9)
const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others)
///////////////////////////////////////////////////Упражнение -10
console.log(10)
/*
Дан произвольный url вида - <https://purpleschool.ru/course/javascript>

Нужно сделать функцию, которая выводит в консоль:
	* Протокол (https)
	* Доменное имя (purpleschool.ru)
	* Путь внутри сайта (/course/javascript)
*/
const url1 = 'https://purpleschool.ru/course/javascript';


function getUrlPatterns(url1){
	const [protocol, _,host, ...path]= url1.split('/');
	if(protocol === 'https:' || protocol === 'http:') {
		if(!host.includes('.')){
			return;
		}
	}
	console.log(protocol,host, path);
	console.log(`Протокол: ${protocol.split(':')[0]}`);
	console.log(`Доменное имя: ${host}`);
	console.log(`Путь внутри сайта: ${path.join('/')}`);
}

getUrlPatterns(url1);
//const protokol = url1.split(':');
//console.log(protokol[0]);
// const domenName = url1.split('/');
// console.log(domenName[2]);
// const path = 


let arr = ['1', '2', '3', '4'];
let [one1, , three] = ['1', '2', '3', '4'];
console.log(one1, three);