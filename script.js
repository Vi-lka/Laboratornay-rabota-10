let Ans = ['Байкал','Наруто','Язык','Гоголь','Гессе','Пушкин','Чай','Улан-Удэ','Обито','Польша'];
let user_Ans = ['','','','','','','','','',''];
let check = false;
let count = 0;


function getResult() {
    for (let i = 0; i < Ans.length; i++) {
        user_Ans[i] = document.getElementsByTagName("input")[i].value;
    }
    for (let j = 0; j < Ans.length; j++) {
        let m = Ans[j];
        let n = user_Ans[j];
        if (m === n) {
            count++;
        }
        if (count == 10) {
            check = true;
        }
    }
    if (check === true) {
        alert("Поздравляю! Верно.");
    }
    else {
        alert("Поздравляю, Не верно!"); 
    }
}
