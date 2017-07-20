
"use strict";
var jsonV = new XMLHttpRequest();
jsonV.open('GET', './data/data.json');
jsonV.send();
jsonV.onloadend = function(){
    var names = JSON.parse(jsonV.responseText);
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    context['users'] = names.users;
    var htmlCon    = template(context);
    document.querySelector('#hb').innerHTML = htmlCon;
};
