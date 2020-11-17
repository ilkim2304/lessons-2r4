/*
    Функции
    f(x) = 2x +5;
*/

// rgb()
// URL()
// .toFixed
// .random


function cookEggs (eggs, sausage, cheese, tomato) {
    let recipe = "Берем сковороду и ставим на огонь.\n";
    recipe += `Яичница из ${eggs} яиц `;
    if (sausage) {
        recipe += "с колбасой ";
        if (tomato && cheese) {
            recipe += ", помидорами и сыром ";
        }
        else if (tomato) {
            recipe += "и помидорами";
        }
        else if (cheese) {
            recipe += " и сыром"
        }
    } else if (tomato) {
        recipe += "с помидорами";
        if (cheese) {
            recipe += " и сыром";
        }
    }
    else if (cheese) {
        recipe = "с сыром"
    }
    console.log(recipe);
}

cookEggs(1, 1, 1, 1);