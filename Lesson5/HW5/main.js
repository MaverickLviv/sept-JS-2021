// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
//
// let rectangleSq = (w, h, action)=> {
//     if (action === '*'){
//         return w * h;
//     } else {
//         return 0;
//     }
// };
// console.log(rectangleSq(5,10,'*'));
// ====================================================================

// - створити функцію яка обчислює та повертає площу кола
//
// let circleSq = (p, r, action) => {
//     if (action === '*') {
//         return p * r * r;
//     } else {
//         return 0;
//     }
// };
// console.log(circleSq(3.14,10,'*'));
// ====================================================================

// - створити функцію яка обчислює та повертає площу циліндру
//
// let cylinderSq = (p, r, h, action1, action2) => {
//     if (action1 === '*', action2 === '+') {
//         return 2*p*r*(h+r);
//     } else {
//         return 0;
//     }
// };
// console.log(cylinderSq(3.14,5,10, '*', '+'));
// ====================================================================

// - створити функцію яка приймає масив та виводить кожен його елемент


// let array1 = [22,33,44,'snow'];
//
//     let finalArray = (array1) => {
//         for (let i=0; i < array1.length; i++) {
//         console.log(array1[i]);
//         }
//     }
//     finalArray(array1);
// +++++++
// let array = (...xxx) => {
//     console.log(xxx);
// };
// array(1,2,3);

// ====================================================================

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let something = (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<h2>${text}</h2>`);
// }
//
// something('snow');
// ====================================================================

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//     let something = (text) =>{
//         document.write(`<h1>`);
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`);
//         document.write(`</h1>`);
//     }
// something('snow');
// ====================================================================

// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

// let something = (text, a) => {
//     for (let i=0; i < a; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//
// }
// something('snow', 3);
// ====================================================================

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = ['happy', 'new', 2022, 'year', true];
//
//     let fnArray = (array) => {
//         // for (let i=0; i < array.length; i++) {
//         document.write(`<ul>`);
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//             }
//         document.write(`</ul>`);
//     }
//
// fnArray(array);
// ====================================================================

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objArray = [{id:1, name:'Pavlo', age:39}];

let finalArray = (array)=> {
    for (let element of array) {

        document.write(`<div><ul><h4>
                      <li><div>${element.id}</div></li>
                      <li><div>${element.name}</div></li>
                      <li><div>${element.age}</div></li>
                      </h4></ul></div>`);
    }
}
    finalArray(objArray);