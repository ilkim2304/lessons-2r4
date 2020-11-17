let x = Math.floor(Math.random() * 11);
let s = Math.floor(Math.random() * 11);
let result = 1;

for (let power = 0; power <= s; power++) {
    result = x ** power;
    console.log(`${x} ** ${power} = ${result}`);
}