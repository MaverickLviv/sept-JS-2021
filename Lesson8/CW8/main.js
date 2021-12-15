//    Взяти файл template_2.html та працювати в ньому
//    1) Напишіть код, який :
//    a) змінює класс який змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// document.getElementById('main_header');
// main_header.style.color = 'blue';
// main_header.innerText = 'september2021';

// ==================================================================
// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName('ul');
// elementsByTagName.style.with = '400 px';

// ==================================================================
// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const element of elementsByClassName) {
//     element.style = '50%';
// }
// ==================================================================
// d) отримує текст який зберігається в елементі  з класом listElement2
//
// function add (text) {
//     let element = document.getElementsByClassName('listElement2');
//     element.innerText = text;
// }
// ==================================================================
// e) отримує всі елементи li та змінює ім колір фону на сірий

// let listElement = document.getElementsByTagName('li');
// for (const listElementElement of listElement) {
//     listElement.style.background = 'silver';
// }
// ==================================================================
// f) отримує всі елементи 'a' та додає їм клас anchor

// let aElement = document.getElementsByTagName('a');
// for (const a of aElement) {
//     a.classList.add('anchor');
// }
// ==================================================================

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
//
// let aName = document.getElementsByTagName('a');
// for (const a of aName) {
//     if (a.innerText === 'link3') {
//         a.style.fontSize = '40px';
//     }
// }
// ==================================================================

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aList = document.getElementsByTagName('a');
// for (const a of aList) {
//     let classNew = a.innerText;
//     a.classList.add(classNew);
// }
// ==================================================================

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let subHeadersList = document.getElementsByClassName('sub-header');
// for (const header of subHeadersList) {
//     header.style.background = prompt('silver');
// }
// ==================================================================
// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeaders = document.getElementsByClassName('sub-header');
// for (const subHeader of subHeaders) {
//     if (subHeader.innerText === 'content 2 segment') {
//         subHeader.style.color = prompt('silver');
//     }
// }
// ==================================================================
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName('content_1').innerText = prompt('asd');
// ==================================================================
// l) отримати елементи p та змінити їм padding на 20px
//
// let paragraphs = document.getElementsByTagName('p');
// for (const p of paragraphs) {
//     p.style.padding = '20px';
// }

//==============================================================================================================
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

document.getElementsByClassName('text2').innerText = 'september - 2021';
