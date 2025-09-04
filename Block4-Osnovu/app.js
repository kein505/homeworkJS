/*
const a = 1;
console.log(a);
a = 'test';
console.log(a);
*/

// Базовые арифмитические операции
const width = 10;
const height = 5;
const space = width * height;
const newWigth = width - 4;
const newWigth2 = width + 4;
const division = newWigth / newWigth2;
const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume);

// строки
const city = 'Moscow';
const street = 'Новосибирская';
console.log(city + ', ' + street + ' ' + 5); // Moscow, Новосибирская 5

// Операторы присваивания
let age = 18 + 5;
age +=2;  // age = age +2
age -=3; // age = age - 2
age *=2; // age = age  * 2
age /=2; // age = age / 2

age++; //age = age + 1;
age--; // age = age - 1

console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

// Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);  // true

// 100 -(12) 10 >(10) 90 -(12) 5;

const a = (6 +10) /2;
console.log(a);  // 8

let b;
let c;
c = b = 100 + 50;
console.log(c);  // 150
console.log(b);  // 150

///////////
let aa = 5;
let bb =5.6;
console.log(typeof aa);  // number
console.log(typeof bb); // number
aa = 'ctroka';
console.log(typeof aa); // string

let isAdmin = false;
console.log(typeof isAdmin); // boolean

let cc;
console.log(typeof cc);  // undefined
cc = 5;
console.log(typeof cc); // number

let dd = null;
console.log(typeof dd); // object
console.log(typeof dd==null); // false
console.log(typeof (dd==null)); // boolean

///
const age2= '18';
console.log(Number(age2) + 5);
console.log(age2 - 3);

const userName = 'Вася';
console.log(Number(userName) + 5);  // NaN  - not a number
console.log(typeof NaN)
console.log(String(4) + 7)  // 47
console.log(Boolean('das')) // true
console.log(Boolean('')) // false
console.log(Boolean('') + 10) // 10
console.log(true+ 2) // 3

const aaa = 2 + '10';
console.log(aaa - 10);  // 200 

 const g = '10' - 5;
console.log(g);  // 200 
console.log(typeof g);  // 200 

console.log(Number('10-1'));

console.log(String('10') - 5 + Boolean('') + '1');

////////////
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined));   // false
console.log(Boolean(null));  // false
console.log(Boolean(Number('sx')));  // false
console.log(Boolean(NaN));  // false