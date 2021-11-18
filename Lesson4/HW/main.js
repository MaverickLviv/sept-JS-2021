// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleSquare (a, b) {
//     let square = a * b;
//     return square;
//     }
//     console.log(rectangleSquare(3,4));
// ===========================================================
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleSquare (r, π) {
//     let s = π * r**2;
//     return s;
// }
// console.log(circleSquare(4, 3.14));
// ===========================================================
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Sпол = 2π * r*r + 2π * r * h
//
// function circleCylinder (r, π, h) {
//     let sCyl = π*2 * r**2 + π*2 * r * h;
//     return sCyl;
// }
// console.log(circleCylinder(4, 3.14, 5));

// ===========================================================

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1, 2, 4, 'bad', 'day'];
//     function newArray(array) {
//     for (i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// newArray(array);
// ===========================================================
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraphText(something) {
//
//     document.write(`<h1>${something}</h1>`)
//     document.write(`<p>${something}</p>`)
// }
//
// paragraphText('something');
// ===========================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function newUl(lishechka) {
//     document.write(`<ul>`);
//         document.write(`<li>${lishechka}</li>`)
//         document.write(`<li>${lishechka}</li>`)
//         document.write(`<li>${lishechka}</li>`)
//     document.write(`</ul>`);
//
// }
// newUl('it"s a good day to die');
// ===========================================================

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.

// function newUl(lishechka) {
//     document.write(`<ul>`);
//         document.write(`<li>${lishechka}</li>`)
//         document.write(`<li>${lishechka}</li>`)
//         document.write(`<li>${lishechka}</li>`)
//     document.write(`</ul>`);
//
// }
// newUl('it"s a good day');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function newUl(lishechka, num) {
//     console.log(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         console.log(`<li>${lishechka}</li>`)
//     }
//     console.log(`</ul>`);
// }
// newUl('it"s a good day', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [12, 23, 'asd', true, 3, false];
// function elArray(array) {
//         console.log(`<ul>`);
//     for (let i = 0; i < 6; i++) {
//         console.log(`<li>${array[i]}</li>`)
//     }
//     console.log(`</ul>`);
// }
// elArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let array = [{id: 1, name: 'Vasya', age: 30}, {id: 2, name: 'Petya', age: 25}];

function newArray(array) {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);

    }
}

newArray(array);