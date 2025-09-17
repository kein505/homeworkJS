/*
Написать 2 функции:
	* шифратор пароля - функция принимает пароль, разбивает по символам, 
	   меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
	* проверка пароля - принимает зашифрованный пароль и второй пароль. 
	Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false

Шифратор пароля:
	* Функция принимает строку (пароль) для шифрования.
	* По заданному алгоритму происходит перестановка символов в строке.
	* Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
	* Важно: шифрование должно быть обратимым.

Проверка пароля:
	* Функция сравнивает зашифрованное слово с исходным паролем.
	* Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
	* В противном случае — false.

*/

function revers(arr, number){
	const index = arr.length-number;
	const temp = arr[number];
	arr[number] = arr[index];
	arr[index] = temp;
}

function crypto(password){
	const arr =  password.split("");
	let index = arr.length/2;
	let temp = arr[0];
	arr[0] = arr[index];
	arr[index] = temp;
	revers(arr, 1);
	revers(arr, 2);
	revers(arr, 3);

	return arr.join('');
}

function check(wrap, checkWord){
	const unwrap = crypto(wrap);
	
	return unwrap === checkWord;
}


const password = 'password';
const shifr = crypto(password)
console.log(shifr);
console.log(check(shifr, 'wrong'));





