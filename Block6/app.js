function logName(name, surname) {
	console.log(`Моё имя ${name} ${surname}` )
}

logName('Александр', 'Костарев')


function countDeposite(depositInUSD , month, rate){
	const sum = depositInUSD * (1 + rate/12) ** month;
	return sum;
}

const example1 = countDeposite(1000, 24, 0.12);
console.log(example1);

console.log(countDeposite(1000, 48, 0.10));

///////////////
function powerOfTwo(num) {
	return num * num;
}

console.log(powerOfTwo(5));

const profit = function (num) {
	return num * num;
}
console.log(profit(6))