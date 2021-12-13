// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User (id, name, surname, email, phone) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// =========================================================================================
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User('11', 'vasya','pupkin','pop@pop.com',380670000001 ),
    new User('22', 'petya','ivupkin','pet@pop.com',380670000002 ),
    new User('12', 'olya','popova','plya@pop.com',380670000003 ),
    new User('13', 'john','doe','john@pop.com',380670000004 ),
    new User('14', 'greg','smith','greg@pop.com',380670000005 ),
    new User('15', 'lenny','kravez','lenny@pop.com',380670000006 ),
    new User('144', 'ivan','vasilyev','ivan@pop.com',380670000007 ),
    new User('123', 'joe','biden','joe@pop.com',380670000008 ),
    new User('110', 'donald','trimp','don@pop.com',380670000009 ),
    new User('1332', 'barak','obama','barak@pop.com',380670000010 ),
]
console.log(users);
// =========================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

users.filter(value => value.id%2===0);
// =========================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((a,b) => a.id - b.id);
console.log(sortUsers);
// =========================================================================================

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// =========================================================================================

// створити пустий масив, наповнити його 10 об'єктами Client

let Client = [
    new Client ('11', 'vasya1','pupki','pop1@pop.com',380670000001, ['rothmans', 'marlboro', 'chiesterfield', 'HB'] ),
    new Client ('22', 'vasya2','pupin','pop2@pop.com',380670000002, ['rothmans', 'marlboro', 'HB'] ),
    new Client ('12', 'vasya3','pukin','pop3@pop.com',380670000003, ['rothmans'] ),
    new Client ('13', 'vasya4','pushkin','pop4@pop.com',380670000004, ['HB'] ),
    new Client ('14', 'vasya5','MArlos','pop5@pop.com',380670000005, ['chiesterfield', 'HB'] ),
    new Client ('28', 'vasya6','pumpoc','pop6@pop.com',380670000006, ['marlboro', 'chiesterfield', 'HB'] ),
    new Client ('23', 'vasya7','pupss','pop7@pop.com',380670000007, ['rothmans', 'marlboro', 'chiesterfield', 'HB'] ),
    new Client ('31', 'vasya8','puuu','pop8@pop.com',380670000008, ['rothmans', 'marlboro', 'chiesterfield', 'HB'] ),
    new Client ('88', 'vasya9','pupkopop','pop9@pop.com',380670000009, ['rothmans','chiesterfield'] ),
    new Client ('100', 'vasya0','ololoev','pop10@pop.com',3806700000010, ['rothmans', 'marlboro', 'HB'] ),
]
console.log(Client);
// =========================================================================================

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі
// order по зростанню. (sort)

let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortCLients)
// =========================================================================================