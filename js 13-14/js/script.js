'use strict';

var test ={
        title: 'Тест по анатомии',
        questions: [
            {
                title: 'Позвоночник человека образован:',
                answers: ['30–31 позвонком', '33–34 позвонками', '36–37 позвонками', '39–40 позвонками'],
                correctAnswers: [2]
            },
            {
                title: 'Вид анатомического изгиба позвоночника назад',
                answers: ['Лордоз', 'Кифоз', 'Сколиоз', 'Деформация позвоночника'],
                correctAnswers: [2]
            },
            {
                title: 'Исключите лишнее (два варианта): ',
                answers: ['Большая берцовая кость', 'Бедренная кость', 'Лучевая кость', 'Грудная клетка','Малая берцовая кость'],
                correctAnswers: [3, 4]
            },
            {
              title: 'Противодействующая мышца: ',
              answers: ['Агонист ', 'Антагонист', 'Аддуктор', 'Синергист'],
                correctAnswers: [2]
            }
        ]
    };
window.localStorage.setItem("test", JSON.stringify(test));
test={};
console.log('объект "тест" пуст'+' test='+test.questions);
test = JSON.parse(localStorage.getItem("test"));
/////////////////////////////////////////////////////////
var ansArr = new Array(), ansIndex;
for (var a in test.questions){
        console.log(a);
    ansIndex=0;
    for (var b in test.questions[a].answers){
        ansIndex++;
        ansArr.push(false);
        for(let n=0; n<test.questions[a].correctAnswers.length; n++) {
            if (ansIndex == test.questions[a].correctAnswers[n]) {
                ansArr.pop();
                ansArr.push(true);
            }
        }
    }
}
console.log(ansArr);
/////////////////////////////////////////////////////////////////////
console.log('объект "тест" загружен из local storage'+' test='+test.questions);
var lsTemp ;
var template = document.getElementById("loTemplate").innerHTML;
var content;
content = _.template(template);
document.querySelector('.body').innerHTML = content(test);

var ansBtn = document.querySelector("#checkButton");
var popupD = document.querySelector('#dialog');
ansBtn.addEventListener("click", function() {
    let currentAns = document.querySelectorAll(".radio");
    let chek_sel;
    chek_sel = 0;

    console.log(currentAns);
    let curAnsArr = [];
    _.forEach(currentAns, function (item) {
        curAnsArr.push(item.checked);
        console.log(item.checked);
        if (item.checked == true) {
            chek_sel++;
        }
    });
    console.log();

    ////********* pop
    if (chek_sel < test.questions.length) {
        popupD.innerHTML = 'Ответьте на все вопросы';
        popupD.setAttribute("style", "background-color:red;");
        popup.setAttribute("style", "display:flex;");
        event.preventDefault();
    } else {

        if (!_.isEqual(curAnsArr, ansArr)) {
            popupD.innerHTML = "Тест не пройден <br>Попробуйте ещё";
            popupD.setAttribute("style", "background-color:red; font-size:15px; font-weight:400");
            popup.setAttribute("style", "display:flex;");
        } else {
            popupD.innerHTML = 'Тест пройден успешно';
            popupD.setAttribute("style", "background-color:green; font-size:15px; font-weight:400");
            popup.setAttribute("style", "display:flex;");


        }
    }

});
popup.addEventListener('click',function(){
    popup.setAttribute('style','');
});
