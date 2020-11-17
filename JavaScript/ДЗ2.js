let x = Math.floor(Math.random() * 11);
let y = Math.floor(Math.random() * 11);
let number = Math.floor(Math.random() * 21);
for (let start = 1; start <= 10; start++) {
    if (number >= x && number % y == 0) {
    number = number + y;
    }
    console.log(`${x} ${y} ${number}`);
}