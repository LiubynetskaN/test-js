const userInfo = Number(prompt("Введіть число від 0 до 60"));

if (userInfo >= 0 && userInfo <= 15) {
    alert("Ваше число знаходиться у 1-й чверті");
} else if (userInfo >= 16 && userInfo <= 30) {
    alert("Ваше число знаходиться у 2-й чверті");
} else if (userInfo >= 31 && userInfo <= 45) {
    alert("Ваше число знаходиться у 3-й чверті");
} else if (userInfo >= 46 && userInfo <= 60) {
    alert("Ваше число знаходиться у 4-й чверті");
} else if (isNaN(userInfo)) {
    alert( "Введіть, будь-ласка, число");
} else {
    alert("Ваші дані не валідні")};


console.log(typeof userInfo);
console.log(userInfo);