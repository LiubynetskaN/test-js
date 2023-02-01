// Task#1 В переменной лежит число от 0 до 60.
// Определить в какую четверть часа попадает это число - в первую, вторую, третью или четвертую

// const userInfo = Number(prompt("Введіть число від 0 до 60"));

// if (userInfo >= 0 && userInfo <= 15) {
//     alert("Ваше число знаходиться у 1-й чверті");
// } else if (userInfo >= 16 && userInfo <= 30) {
//     alert("Ваше число знаходиться у 2-й чверті");
// } else if (userInfo >= 31 && userInfo <= 45) {
//     alert("Ваше число знаходиться у 3-й чверті");
// } else if (userInfo >= 46 && userInfo <= 60) {
//     alert("Ваше число знаходиться у 4-й чверті");
// } else if (isNaN(userInfo)) {
//     alert( "Введіть, будь-ласка, число");
// } else {
//     alert("Ваші дані не валідні")};


// console.log(typeof userInfo);
// console.log(userInfo);

// Task#2
// варіант №1

// let userInput = Number(prompt("Введіть число більше 100"));
// let check;
//     do {
//         if ((isNaN(userInput)) || (userInput < 100)) {
//         check = true;
//         userInput = Number(prompt("Ваші дані не валідні. Введіть 100 або більше"));
//     } else {
//         check = false;
//         alert( "Молодець");
//     }
//     }
// while (check);

// варіант №2

// let userInput = Number(prompt("Введіть число більше 100"));
// let check;
//     do {   
//         if (userInput >= 100) {
//             check = false;
//             alert("Молодець");
//         } else if (isNaN(userInput)) {
//         check = true;
//         userInput = Number(prompt("Ваші дані не валідні. Введіть  число 100 або більше"));
//         } else {
//             check = true;
//             userInput = Number(prompt("Введене число меньше 100. Введіть  число 100 або більше"));
//     }
//     }
// while (check);

// TASK #3
// Напишите цикл для подсчета четных чисел, 
// которые ввел юзер от 0 до 100, 
// запрашиваем у юзера кол-во попыток. 
// Если введенное число четное  = добавляем в сумму, 
// если не четное - пропускаем. в конце выводим сумму. 

// let userIterr = Number(prompt("Введіть кількість ітерацій"));
// let total = 0;

// if (!isNaN(userIterr)) {
//     for (let i = 0; i < userIterr; i++) {
//         let userInput = Number(prompt("Введіть число"));
//         if (isNaN(userInput)){
//             alert("Ви ввели невідповідне число. Ітерація пройшла, дані не зараховані.");
//             continue;
//     } else if ((userInput % 2 !== 0)) {
//         alert("Ваше число непарне");
//         continue;
//     } else {
//         alert("Вітаю! Зараховано");
//         total += userInput;
//         console.log(total);
//     }
// } 
// } else {
//     alert("Ви ввели не валідні дані. Натисніть F5");
// }
// console.log(`Фінальний результат ${total}. Кількість ітерацій ${userIterr}`);