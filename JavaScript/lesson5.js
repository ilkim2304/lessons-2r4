/*
* Циклы
*/

let apples = 5;

while (apples) {
    console.log("Егор съел яблоко!");
    apples -= 1; // apples = apples -1 => итератор
}
/*
-=
+=
*=
/=
%/
*/

console.log("Яблок больше нет");

let dream = 3000000 // однушка в подмосковье
let cash = 0;
let salary = 15000;
let age = 18;
let daysPerMonth = 30;
let month = 12;
let housePay = 2343.86;
let branch = 200; // 200-240
// Каждый год зарплата растет на 10%;
// Во сколько лет осуществтся мечта

while (cash < dream) {
    let mn = 0; // промежуточный месяц
    while (mn < month) {
        let days = 0;
        while (days < daysPerMonth) {
            cash -= Math.floor(x: Math.random() * 41 + branch);
            days++;
        }
        mn += 1;
        cash += salary;
        cash -= housePay;
    }
    age += 1;
    salary = salary + 1000;
    salary = +salary.toFixed(fractionDigits2);
    cash = +cash.toFixed(fractionDigits2);
    // branch += 100;
}
console.log(`В ${age} лет Наруто зарабатывает ${salary} руб. и наконец накопил ${cash} руб. на однушку в подмосковье`);