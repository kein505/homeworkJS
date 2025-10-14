/*
12.11. Домашнее задание - Работа со строками

Написать функцию проверки номера карты алгоритмом Луна. В функцию передаётся карта: 4561-2612-1234-5464, 
а функция возвращает true, если карта проходит алгоритм и false, если нет.

https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0

1. Цифры проверяемой последовательности нумеруются справа налево.

2. Цифры, оказавшиеся на нечётных местах, остаются без изменений.

3. Цифры, стоящие на чётных местах, умножаются на 2.

4. Если в результате такого умножения возникает число больше 9, оно заменяется суммой 
    цифр получившегося произведения — однозначным числом, то есть цифрой.

5. Все полученные в результате преобразования цифры складываются. 
   Если сумма кратна 10, то исходные данные верны.

*/
console.log('-------12.11. Домашнее задание - Работа со строками-------');

let cardBankFalse = '4561-2612-1234-5464';

let cardBankTrue = '4561-2612-1234-5467';

console.log(IsCardValid(cardBankFalse));
console.log(IsCardValid(cardBankTrue));

 function IsCardValid(card){
    let newMas = [];
    card = card.replaceAll('-','');
    let cardMassive = card.split('');
    for(let i =0; i < cardMassive.length; i++){
        if(i % 2 === 0){
            let newChislo = cardMassive[i] * 2;
            if(newChislo < 9){
                newMas.push(newChislo);
            }
            else{
                newChislo = newChislo.toString().split('').reduce((sum, digit)=> sum+parseInt(digit),0);
                newMas.push(newChislo);
            }
        }
        else{
            newMas.push(cardMassive[i]);
        }
    }

    let summChisel = newMas.reduce((sum, digit)=> sum+parseInt(digit),0);

    return summChisel % 10 === 0;
 }

const str = 'AABBCCC';
const str2 = 'AABCCDDD';

 console.log(CheckStr(str));
 console.log(CheckStr(str2));

 console.log(CheckStr2(str));
 console.log(CheckStr2(str2));

function CheckStr2(string){
    let count = 1;
    let result = "";
    for(let i =0; i<string.length; i++){
        if(string[i]===string[i+1]){
            count++
        }
        else{
            result +=string[i]+count;
            count =1;
        }
    }
    return result;
}


 function CheckStr(string){
    let newMas = string.split('');
    let result = [];
    for(let i =0; i<newMas.length; i++){
        let schetchik =0;

        for(let j =i; j<newMas.length; j++){
            if(newMas[i]===newMas[j] ){
                schetchik++;
            }
            if(!result.includes(newMas[i]) && newMas[i] !== newMas[j] ){
                result.push(newMas[i]);
                result.push(schetchik);
            }
        }
    }

    let newMas2 = newMas.reverse();
    for(let i =0; i<newMas2.length; i++){
        let schetchik =0;

        for(let j =i; j<newMas2.length; j++){
            if(newMas2[i]===newMas2[j] ){
                schetchik++;
            }
            if(!result.includes(newMas2[i]) && newMas2[i] !== newMas2[j] ){
                result.push(newMas2[i]);
                result.push(schetchik);
            }
        }
    }

    
    return result.join('');
}

















