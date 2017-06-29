function pow( num, ext){
    var res=num, unNum=false;
    if(ext<0){
        unNum=true;
        ext=ext*(-1);
    }
    ext = ext - 1;
      for (ext; ext > 0; ext--) {
         res = num * res;
      }
    if(unNum){
       res=1/res;
    }
    return res;
}
function valueIsNaN(v) { return v !== v; }
var uNum, uExt;
var fNum = false;

while(!fNum){
    uNum = +prompt('Введите число для возведения');
    valueIsNaN(uNum)?alert(' Введите число'):fNum=true;
}
fNum = false;

while(!fNum){
    uExt = +prompt('Введите степень');
    valueIsNaN(uExt)?alert('Введите число'):fNum=true;
}
console.log("Результат: "+pow(uNum, uExt));
