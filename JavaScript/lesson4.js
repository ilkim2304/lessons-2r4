let x1 = Math.random() * 61 - 30;
x1 = Math.floor(x1);
let y1 = Math.random() * 61 - 30;
y1 = Math.floor(y1);
let x2 = Math.random() * 61 - 30;
x2 = Math.floor(x2);
let y2 = Math.random() * 61 - 30;
y2 = Math.floor(y2);
let x3 = Math.random() * 61 - 30;
x3 = Math.floor(x3);
let y3 = Math.random() * 61 - 30;
y3 = Math.floor(y3);

let AB = (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** (1 / 2);
let BC = (((x3 - x2) ** 2) + ((y3 - y2) ** 2)) ** (1 / 2);
let AC = (((x3 - x1) ** 2) + ((y3 - y1) ** 2)) ** (1 / 2);

console.log(`${AB} - Длина AB`);
console.log(`${BC} - Длина BC`);
console.log(`${AC} - Длина AC`);

if (AB < BC + AC) {
    console.log("Это треугольник");
}
else if (BC < AB + AC) {
    console.log("Это треугольник");
}
else if (AC < AB + BC) {
    console.log("Это треугольник");
}
else {
    console.log("Это не треугольник");
}

let P = AB + BC + AC;
let S = ((P / 2) * ((P / 2) - AB) * ((P / 2) - BC) * ((P / 2) - AC)) ** (1 / 2);
if (AB < BC + AC) {
    console.log(`Периметр треугольника: ${P}, Площадь треугольника: ${S}`);
}
else if (BC < AB + AC) {
    console.log(`Периметр треугольника: ${P}, Площадь треугольника: ${S}`);
}
else if (AC < AB + BC) {
    console.log(`Периметр треугольника: ${P}, Площадь треугольника: ${S}`);
}
else {
    console.log("Невозможно посчитать");
}