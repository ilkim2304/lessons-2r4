class Animal 
{
    constructor(tp, sx, yr, clr, nm) 
    {
        this.color = clr;
        this.year = yr;
        this.name = nm;
        this.sex = sx;
        this.user = {};
        this.type = tp;
    }
}
    getInfo: function() 
{
    {
        let age = 2020 - this.year;
        return `${this.type} ${this.name} с возрастом ${age} лет`;
    }
}

console.log(cat.user.name);

console.log(cat.getInfo())

let parrot = new Animal("Попугай", "м", "2018", "blue", "Кеша");

let dog = new Animal("Собака", "ж", "2010", "brown", "Эгей");

console.log(parrot.getInfo);
console.log(dog.getInfo);
