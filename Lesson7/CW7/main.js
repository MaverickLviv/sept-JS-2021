// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacture, year, maxSpeed, volume ) {
//     this.model = model;
//     this.manufacture = manufacture;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`Going with speed ${this.maxSpeed} per hour`);
//     };
//     this.info = function () {
//         console.log(`модель - ${this.model} виробник - ${this.manufacture} рік випуску - ${this.year}
//         максимальна швидкість - ${this.maxSpeed} об'єм двигуна - ${this.volume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(`newSpeed - ${this.maxSpeed}`);
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     };
// }
// ====================================================================================

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    class carClass {
        constructor(model, manufacture, year, maxSpeed, volume) {
            this.model = model;
            this.manufacture = manufacture;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.volume = volume;
        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.speedMax} на годину`)
        }
        info() {
            console.log(`model - ${this.model}, manufacture - ${this.manufacturer}, year - ${this.year}
        speedMax - ${this.speedMax}, volume - ${this.volume}`);
        }
        increaseMaxSpeed (newSpeed) {
            this.speedMax = this.speedMax + newSpeed;
            console.log(`newspeedMax = ${this.speedMax}`)
        }
        changeYear(newValue) {
            this.year = newValue;
            console.log(`${this.year}`);
        }
        addDriver (driver) {
            this.driver = driver;
            console.log(`driver = ${this.driver}`);
        }
    }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

    class Cinderella {
        constructor(name, age, legSize) {
            this.name = name;
            this.age = age;
            this.legSize = legSize;
        }
}
// ====================================================================================
let ladies = [
    new lady('olya', 15, 30),
    new lady('olya', 16, 31),
    new lady('olya', 17, 32),
    new lady('olya', 18, 33),
    new lady('olya', 19, 34),
    new lady('olya', 20, 35),
    new lady('olya', 21, 36),
    new lady('olya', 22, 37),
    new lady('olya', 21, 38),
    new lady('olya', 25, 39),
]
// ====================================================================================
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = legSize;
    }
}

let Prince = new prince('vasya', 35, 42);
// ====================================================================================
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let newGirl = function (girls, Prince) {
    for (let girl of girls) {
        if (girl.legSize === prince.size)
            return console.log(girl.name);
    }
}
newGirl(girls,Prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let wife = girls.find(value => value.legSize === Prince.size);
console.log(wife);
