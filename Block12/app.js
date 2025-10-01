////////////////////////////////////////////12.2. Базовые методы
console.log('-------12.2. Базовые методы-------');

let userName = 'Вася Пупкина';
console.log(userName[0] + userName[1]);
console.log(userName.charAt(2));
console.log(userName.length);

console.log(userName.indexOf('у'));
console.log(userName.lastIndexOf('а'));
console.log(userName.includes('а'));

console.log(userName.slice(4));
console.log(userName.slice(5, 8));

////////////////////////////////////////////12.3. Упражнение - выделение имени
console.log('-------12.3. Упражнение - выделение имени -------');

/*
 Из длинной строки, содержащей имя, фамилию пользователя и его никнейм, 
 необходимо выделить только имя и фамилию.
*/
userName = 'Вася aka Terminator Perdinator Пупкина';


// function getNameSecondNameNick(fullname){
// 	const [name, nickname1, nickname2, nickname3, secondName]= fullname.split(' ');
	
// 	console.log(`Имя: ${name}`);
// 	console.log(`фамилия: ${secondName}`);
// 	console.log(`никнейм: ${nickname1} ${nickname2} ${nickname3}`);
// }
// console.log(getNameSecondNameNick(userName));

const name  = userName.slice(0, userName.indexOf(' '));
console.log(`Имя: ${name}`);

const surName  = userName.slice(
	userName.lastIndexOf(' '), 
	userName.length + 1);
console.log(`фамилия: ${surName}`);

const nickName  = userName.slice(
	userName.indexOf(' '),
	userName.lastIndexOf(' '));
console.log(`никнейм: ${nickName}`);

//////////////////////////////////////////////////////////12.4. Преобразование строки
console.log('-------12.4. Преобразование строки--------');

const str = 'Вася Пупкин';
console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));
console.log(new String('Вася Пупкин').includes('а'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф'));
console.log(str.replace('П', 'Д'));
console.log(str.replaceAll('а', 'и'));
console.log(str.replace(/а/g, 'и'));

const str2 = ' Вася Пупкин        \n';
console.log(str2.trimStart());

//////////////////////////////////////////////////////////////////12.5. Упражнение - проверка номера
console.log('-------12.5. Упражнение - проверка номера--------');
/* Проверить являются ли это номером телефона России  */
// Верные:
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56   ';
// Не верные:
const num1Error = '89103235';
const num2Error = '+7d910323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

isNaN(Number)


function IsPhoneNumber(number){
	number = number.trim();
	number = number.replace('+7','8');
	if(!number.startsWith('8')){
		return false;
	}
	number = number.replaceAll('(','');
	number = number.replaceAll(')','');
	number = number.replaceAll(' ','');
	number = number.replaceAll('-','');
	if(number.length !=11){
		return false;
	}
	let onlyNumber= true;
	for(const char of number){
		if(isNaN(Number(char))){
			onlyNumber = false;
			break;
		}
	}
	return onlyNumber;
};

console.log(IsPhoneNumber(num1));
console.log(IsPhoneNumber(num2));
console.log(IsPhoneNumber(num3));
console.log(IsPhoneNumber(num4));
console.log(IsPhoneNumber(num5));
console.log(IsPhoneNumber(num1Error));
console.log(IsPhoneNumber(num2Error));
console.log(IsPhoneNumber(num3Error));
console.log(IsPhoneNumber(num4Error));

//////////////////////////////////////////////////////////////////12.6. Строки и массивы
console.log('-------12.6. Строки и массивы--------');

const userFullName = 'Вася Пупкин Васильевич';
console.log(userFullName.split(' '));
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);

const arr = ['Ты', 'значешь', 'js'];
 console.log(arr.join(' '));

/////////////////////////////////////////////////////////////////12.7. Дополнение строк
console.log('-------12.7. Дополнение строк--------');

const film = 'Звёздные войны';
console.log(film.padStart(50, '*'));
console.log(film.padEnd(50, '*'));
console.log(film.repeat(10));

/////////////////////////////////////////////////////////////////12.8. Упражнение - маскировка карты
console.log('-------12.8. Упражнение - маскировка карты--------');
/*
Исходные данные: Получена карта с номером, состоящим из 16 символов (примерно 4 группы по 4 символа).
Понимание задачи: Цель - маскировка номера карты для безопасности. 
Требуется скрыть все символы, кроме последних четырех.
*/

const card = '2342834503458353';
// console.log(card.length);
// let card2 = card.slice(card.length-4, card.length);
// console.log(card2.padStart(12, '*'));
console.log(card.slice(-4).padStart(16, '*'));



/////////////////////////////////////////////////////////////////
console.log('-------1--------');



/////////////////////////////////////////////////////////////////
console.log('-------1--------');



/////////////////////////////////////////////////////////////////
console.log('-------1--------');




///////////////////////////////////////////////////////////////// 
console.log('-------1--------');



/////////////////////////////////////////////////////////////////
console.log('-------10--------');

