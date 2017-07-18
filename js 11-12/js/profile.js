
"use strict";
var jsonV = new XMLHttpRequest();
var names;
var htmlCon;
var context = {title: "handelbars",
    body: "This Gallery generate"
};
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
jsonV.open('GET', './data/dataUser.json');
jsonV.send();
jsonV.onloadend = function(){
    names = JSON.parse(jsonV.responseText);
    context['users'] = names.users[1];
    htmlCon    = template(context);
    document.querySelector('#content').innerHTML = htmlCon;
};
var i = 1;
$("#nextItem").on("click", function(){
    if(i<1){
        i++;
    }else{
        i=0;
    }
    context['users'] = names.users[i];
    htmlCon    = template(context);
    document.querySelector('#content').innerHTML = htmlCon;
});
