

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let i = 2;
let prime;

while (i < 100) {
    let j = 1;
    while (j < i) {
        if (i % j !== 0 || j == 1) prime = i; else { prime = 0; break; }
        j++;
    }
    if (prime !== 0) console.log(prime);
    i++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

let basket = [
    {
        product: "ручка",
        price: getNumber(50, 100)
    },
    {
        product: "карандаш",
        price: getNumber(50, 100)
    },
    {
        product: "бумага",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

// 3. Товары в корзине хранятся в массиве. Задачи:

// a) Организовать такой массив для хранения товаров в корзине;

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let prod of basket) {
        BasketPrice += prod.price;
    }
    return BasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for (let i = 0; i < 10; console.log(i++)) { }

// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx


let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}