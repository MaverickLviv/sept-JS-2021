// --створити масив з:
//     - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [1, 2, 3, 4, 5];
// let txt = ['aa', 'bb', 'cc', 'dd', 'ee'];
// let all = [123, 'asd', '13rt', false, true];
// console.log(num, txt, all);
// =======================================================
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 666;
// array[1] = 'we';
// array[2] = 'all';
// array[3] = 'die';
// array[4] = true;
// console.log(array);
// =======================================================

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i <= 10; i++) {
//     document.write('<div>text1</div>');
// }
//
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>text1</div>');
//     document.write(`<div>text1[${i}]</div>`);
// }

// let i=0;
// while(i<=20){
//     i++;
//     document.write(`<h1>text1</h1>`);
// }

// let i=0;
// while(i<20){
//     i++;
//     document.write(`<h1>text1${i}</h1>`);
// }
// =======================================================
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
//
// let array = [];
// for (i = 0; i <= 10; i++) {
//     array[0] = 666;
//     array[1] = 'we';
//     array[2] = true;
//     array[3] = 555;
//     array[4] = 's5s546464';
//     array[5] = true;
//     array[6] = 'sdada';
//     array[7] = 13131;
//     array[8] = true;
//     array[9] = false;
// }
// console.log(array);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// let array = [];
// for (i = 0; i < 10; i++)
// console.log(i);
// document.write(`<div>array[${i}]</div>`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++)
// console.log(i);
// document.write(`<div>array[${i}]</div>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i=i+2)
// console.log(i);
// document.write(`<div>array[${i}]</div>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 ===0)
//     console.log(i);
//     document.write(`<div>${i%2}</div>`);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++){
    if (i % 2 ===1)
    console.log(i);
    document.write(`<div>${i%2===1}</div>`);
}