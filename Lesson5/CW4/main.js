// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let digitMin = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//        else if (b < c && b < a){
//         console.log(b);
//     } else
//         console.log(c)
// }
// digitMin(3,5,10);
// =================================================================

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let digMax = (a,b,c) => {
//     if (a >b && a>c) {
//         console.log(a);
//     }
//         else if (b>c && b >a) {
//             console.log(b);
//     } else {
//             console.log(c)
//     }
//
// }
// digMax (3,5,10);
// =================================================================

// - створити функцію яка повертає найбільше число з масиву
//
// let arrayMax = [1,2,3,4,5,6,8,9,100]
//
//     let arrayMaximum = (array) => {
//     let max = arrayMax[0];
//      for (let digit of arrayMax) {
//          if (digit > max){
//              max = digit;
//          }
//      }
//      return max;
//     }
//     console.log(arrayMaximum(arrayMax));
// =================================================================

// - створити функцію яка повертає найменьше число з масиву
// let arrayMin = [1,2,3,4,5,6,8,9,100]
//
//     let arrayMinimun = (array) => {
//     let min = arrayMin[0];
//      for (let digit of arrayMin) {
//          if (digit < min){
//              min = digit;
//          }
//      }
//      return min;
//     }
//     console.log(arrayMinimun(arrayMin));
// =================================================================

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад [1,2,10]->13

    // let arraySum = [1,2,3,4,5,6,7,8,9,10]
    //
    //     let fn = (array) => {
    //     let sum =0;
    //     for (let argument of array) {
    //         sum += argument;
    //     }
    //     return sum;
    //     }
    //     console.log(fn(arraySum));
// =================================================================


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//     let arrayAverage = [1,2,3,4,5,6,7,8,9,10]
//
//     let average = (array) => {
//     let sum = 0;
//     for (let arrayRes of array) {
//         sum = arrayRes + sum;
//     }
//     return sum/array.length;
// }
// console.log(average(arrayAverage));
// =================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
//
// let digit = (...res) => {
//     let min = res[0];
//     let max = res[0];
//     for (let element of res) {
//         if(element > max) max = element;
//         if (element < min) min = element;
//     }
//     console.log(max);
//     return min;
// }
// digit([1, 3, 4, 5, 6, 7, 9, 10])
// =================================================================
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та
// виводить його.
//
// array = []
// let random = () => {
//     for (let i = 0; i < 20; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
// console.log(array);
// }
// random();
// =================================================================


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
// аргумент, який характеризує кінцеве значення діапазону.
//
// array = [];
// let random = (limit) => {
//     for (let i=0; i<limit; i++){
//         array.push(Math.round(Math.random()*100));
//     }
//     console.log(array);
// }
// random(20);
// =================================================================
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
// [1,2,3] -> [3, 2, 1].

let array1 = [1,2,3];
let reverseArray =[];

let reverse = (array) => {
    for (let i=array.length-1; 1 >=0; i--){
        const arrayElement =array[i];
        reverseArray.push(arrayElement);
    }
    console.log(reverseArray);
}
reverse(array1);
