var nameArr=[], colName, accesName, accesConf;
colName=5;
accesConf=false;
for(var i=0; i<colName; i++){
    nameArr[i]=prompt('Введите имя '+Number(i+1)+'/'+colName,'');
}
alert('Введите имя');
accesName=prompt('Введите имя','');
for(var i=0; i<nameArr.length; i++){
    if(accesName==nameArr[i] && accesName!= null){
        alert('Вы успешно вошли '+accesName);
        accesConf=true;
        break
    }
}
if(accesConf==false || accesConf==null ){
    alert('Войти не удалось, '+accesName);
}
