// Array

let colors = ["red", 256, true, "ololo", "black"];

// console.log(colors[3]);
// console.log(colors.indexOf("black"));
// console.log("Длина массива: " + colors.length);

let fruits = ["груша", "яблоко", "апельсин", "ананас"];

/*
    Методы массивы:
    push(el) - добавить элемент в конец массива
    pop() - забрать последний элемент массива 
    shift() - забрать первый элемент массива
    unshift()
*/
fruits.push(("B" + "a" + + "a").toLowerCase());
fruits.pop();

console.log(fruits);

/*

*/
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}