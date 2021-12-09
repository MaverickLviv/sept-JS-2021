// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function digitMin (dig1, dig2, dig3) {
//
//     if (dig1 < dig2 && dig1 < dig3) {
//         console.log(dig1);
//
//     } else if (dig2 < dig3 && dig2 < dig1) {
//
//         console.log(dig2);
//     } else {
//         console.log(dig3);
//     }
// }
// digitMin(3, 5, 10);
// ================================================================

// - створити функцію яка приймає три числа та
// виводить найбільше. (Без Math.max!)

// function digMax (dig1, dig2, dig3) {
//
//     if (dig1 > dig2 && dig1 > dig3) {
//         console.log(dig1);
//
//     } else if (num2 > num3 && dig2 > dig1) {
//         console.log(dig2);
//
//     } else {
//         console.log(dig3);
//
//     }
// }
// digMax (3, 5, 10);
// ================================================================


// - створити функцію яка повертає найбільше число з масиву
//
// let arrayMax = [1,2,3,4,5,6,7,8,9,10]
//
// function arrayMaximum () {
//     let max = arrayMax[0];
//     for (let digit of arrayMax) {
//         if(digit > max){
//             max = digit;
//         }
//     }
//     return max;
// }
// document.write(`${arrayMaximum(arrayMax)}`)

// ================================================================

// - створити функцію яка повертає найменьше число з масиву
//
// let arrayMin = [1,2,3,4,5,6,7,8,9,10]
//
// function arrayMinimum () {
//     let min = arrayMin[0];
//     for (let digit of arrayMin) {
//         if(digit < min){
//             min = digit;
//         }
//     }
//     return min;
// }
// document.write(`${arrayMinimum(arrayMin)}`)
// ================================================================


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arraySum = [1,2,3,4,5,6,7,8,9,10]
//
// function Sum() {
//     let sum = 0;
//     for (let argument of arraySum) {
//         sum +=argument;
//     }
//     console.log(sum);
// }
// Sum();
// ================================================================


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayAverage = [1,2,3,4,5,6,7,8,9,10]
//
// function Average (array) {
//     // let Average1 = 0;
//     let sum = 0;
//     for (let arrayRes of array) {
//         sum = arrayRes + sum;
//     }
//     return sum/array.length;
// }
//     document.write(`${Average(arrayAverage)}`)
// ================================================================


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function digit(res){
//     let min = res[0];
//     let max = res[0];
//     for (let element of res) {
//         if (element > max) max = element;
//         if (element < min) min = element;
//     }
//     console.log(max);
//     return min;
//         }
//
// digit([1, 2, 3, 5, 25, 100, 500]);
// ================================================================

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// array = [];
// function random(){
//
//     for (let i=0; i< 20; i++){
//         array.push(Math.round(Math.random()*100));
//     }
//     console.log(array);
// }
// random();
// ================================================================

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function random (limit) {
//     let array = [];
//     for (let i=0; i < limit; i++){
//         array.push(Math.round(Math.random()*100));
//     }
//     console.log(array);
// }
// random(10);
// ================================================================

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array1 = [1, 2, 3];
let reverseArray = [];

function reverse(array) {

    for (let i = array.length - 1; i >= 0; i--) {
    const arrayElement = array[i];
    reverseArray.push(arrayElement);
    }
    console.log(reverseArray);
}
    reverse(array1);