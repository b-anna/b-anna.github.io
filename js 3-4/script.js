var test = {
    data: {
        title: 'Тест по программированию',
        questions: [
            {
                title: 'Вопрос №1',
                answers: ['Вариант овтета №1', 'Вариант овтета №2', 'Вариант овтета №3']
            },
            {
                title: 'Вопрос №2',
                answers: ['Вариант овтета №1', 'Вариант овтета №2', 'Вариант овтета №3']
            },
            {
                title: 'Вопрос №3',
                answers: ['Вариант овтета №1', 'Вариант овтета №2','Вариант овтета №3' ]
            }
        ]
    },
    head: function () {
        var head = document.createElement('h3');
        var body = document.querySelector('.body');
        head.className = 'text-center';
        head.style.margin = '10px 0 30px 0';
        head.innerHTML = test.data.title;
        body.appendChild(head);
    },
    questions: function () {
        var newForm = document.createElement('form');
        var qBlock = [], qBlock_item = [[]];
        var body = document.querySelector('.body');
        newForm.className = 'newForm';
        newForm.setAttribute('action', 'post.php');
        newForm.setAttribute('method', 'POST');
        var q = 0;
        body.appendChild(newForm);

        for (var i in test.data.questions) {
            qBlock[i] = document.createElement('div');
            qBlock[i].className = 'col-12';
            qBlock[i].classList.add('offset-2');
            qBlock[i].style.marginBottom = '15px';
            qBlock[i].style.fontSize = '12px';
            qBlock[i].innerHTML = '<h4>'+Number(Number(i)+1)+'.'+' '+test.data.questions[i].title+'</h4>';
            newForm.appendChild(qBlock[i]);
            //qBlock_item[i]=[i];
//            qBlock_item[i][i]=[i];
            for (q in test.data.questions[i].answers){
                qBlock_item[q] = document.createElement('label');
                qBlock_item[q][q] = document.createElement('input');
                qBlock_item[q].className = 'label_item';
                qBlock_item[q][q].setAttribute('type', 'radio');
                qBlock_item[q][q].setAttribute('value', 'radio'+i+q);
                qBlock_item[q][q].className = 'radio'
                qBlock_item[q][q].setAttribute('name', 'r'+i);
                qBlock_item[q][q].setAttribute('id', 'rq'+i+q);
                qBlock_item[q][q].style.margin = '0 10px'
                qBlock_item[q].setAttribute('for', 'rq'+i+q);
                qBlock_item[q].innerHTML = test.data.questions[i].answers[q];
                qBlock[i].appendChild(qBlock_item[q][q]);
                qBlock[i].appendChild(qBlock_item[q]);
            }
        }
        var btn = document.createElement('input');
        btn.addEventListener('click',function(event){
            var chek = document.querySelectorAll('.radio');
            var chek_sel;
            chek_sel=0;
            for(var a in chek){
                if(chek[a].checked){
                    chek_sel++;
                }
            }
            if(chek_sel<3) {
                alert('Заполните все вопросы теста');
                event.preventDefault();
            }
            return false;
        });
        btn.setAttribute('type', 'submit');
        btn.value="Проверить мои результаты";
        btn.classList.add('btn');
        btn.classList.add('btn-success');
        btn.classList.add('col-2');
        btn.classList.add('offset-5');
        newForm.appendChild(btn);
    },
    contentOut: function (){
        this.head();
        this.questions();
    }
};

test. contentOut();
