// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

// let contentID = document.getElementById('content');
// console.log(contentID.innerText);

// =======================================================================

// -- отримує текст з блоку з id "rules"

// let rules = document.getElementById('rules');
// console.log(rules.innerText);

// =======================================================================

// -- замініть текст параграфа з id 'content' на будь-який інший

// let text = document.getElementById('content');
// text.innerText = 'Snowing';

// =======================================================================

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let text2 = document.getElementById('rules');
// text2.innerText = 'Let it snow';

// =======================================================================

// -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'gold';
// }
// =======================================================================

// -- змініть кожному елементу колір тексту на синій

// let children = document.body.children;
// for (const child of children) {
//     child.style.color = 'blue';
// }
// =======================================================================

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(document.getElementById('rules').classList);

// =======================================================================

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName(fc_rules);
for (const fcRule of fc_rules) {
    fc_rules.style.background = 'red';
}