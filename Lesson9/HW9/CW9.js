// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let elDiv = document.createElement('div');
//
// elDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// elDiv.style.background = 'silver';
// elDiv.style.fontSize = '40px';
// elDiv.style.color = 'red';
// elDiv.innerText = 'Okten';
// document.appendChild('div');
//
// let node = elDiv.cloneNode('true');
// document.body.appendChild(node);

// ==================================================================================
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу
// масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let menuDiv = document.getElementsByClassName('menu')[0];
// array.forEach(item=>{
//     let li = document.createElement('li');
//     li.innerText = item;
//     menuDiv.appendChild(li);
// })
// ==================================================================================

// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(value => {
//     let div = document.createElement('div');
//     let text = '';
//     for (let key in value) {
//         text += `${key} ${value[key]}`;
//     }
//     div.innerText = text.slice(2);
//     document.body.appendChild(div);
//
// })
// ==================================================================================
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.forEach(value => {
//     let div = document.createElement('div')
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.classList.add('description');
//     h1.innerText = value.title;
//     p.innerText = value.monthDuration;
//     div.append(h1,p);
//     document.body.appendChild(div);
//
// })
// ==================================================================================
