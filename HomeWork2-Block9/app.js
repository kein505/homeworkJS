/*
Дан массив чисел: arr = [1, 40, -5, 10, 0]

Написать функцию, которая сортирует данный массив при помощи циклов.

Подсказка:
* Нужно использовать 2 цикла, вложенных друг в друга
* Нужно сравнивать и менять элементы

*/
const arr = [1, 40, -5, 10, 0]

function sortirovka(arr){
	for(let i=0; i < arr.length; i++){
		for(let j=i+1; j < arr.length; j++){
			if(arr[i]>arr[j]){
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}			
		}
	}
	return arr;
}

console.log(sortirovka(arr));






