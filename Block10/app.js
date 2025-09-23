////////////////////////////////////////////10.2. Callback
console.log('-------10.2. Callback-------');

function add(a,b){
	return a+b;
}

function subtract(a,b){
	return a-b;
}

function power(a,b){
	return a*b;
}

// функция высшего порядка
function calculate(a, b, fn){
	console.log(fn.name);
	const res = fn(a, b);
	return res;
}

let res = calculate(3, 5, add);
console.log(res);
res = calculate(3, 5, subtract);
console.log(res);
res = calculate(3, 5, power);
console.log(res);

//////////////////////////////////////////////////////////10.3. Возврат функции
console.log('-------10.3. Возврат функции--------');

function stepen(pow){
	return function(num){
		return num**pow;
	}
}

const powerOfTwo = stepen(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = stepen(3);
console.log(powerOfThree(5));

console.log(stepen(5)(4));


//////////////////////////////////////////////////////////////////10.4. Упражнение - Стрелочные функции
console.log('-------10.4. Упражнение - Стрелочные функции--------');
/*
function stepen(pow){
	return function(num){
		return num**pow;
	}
}
*/
const stepen2 = pow => num => num**pow;

console.log(stepen2(5)(4));

//////////////////////////////////////////////////////////////////
console.log('-------5--------');


/////////////////////////////////////////////////////////////////
console.log('-------6--------');


/////////////////////////////////////////////////////////////////
console.log('-------7--------');

