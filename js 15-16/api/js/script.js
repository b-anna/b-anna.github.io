
(function() {
    var resultContainer = document.querySelectorAll(".search-result");
    var currentQuery = "", page = 1;
    function renderTemplate(data) {
        var blockRes = document.querySelector("#blockRes");
        blockRes.classList.remove("hidden-block");
        var source = document.querySelector("#entry-template").innerHTML;
        var template = Handlebars.compile(source);
        window.scrollTo(0, resultContainer["0"].offsetTop);
        console.log(resultContainer["0"].offsetTop);
        resultContainer["0"].innerHTML = template(data);
        return 1;
    }

    function pixaBayRequest(query, page = 1) {
        let serchRes = {};
        var key = "5780982-5f1903b9b55e403f26dbb04a1";
        var pixaBayHTTP = new XMLHttpRequest();
        pixaBayHTTP.open(
            "GET","https://pixabay.com/api/?key="+key+"&q="+query+"&page="+page+"&per_page=40&image_type=photo",
            true
        );
        pixaBayHTTP.onreadystatechange = function() {
            if (pixaBayHTTP.readyState == 4) {
                if (pixaBayHTTP.status == 200) {
                    renderTemplate(JSON.parse(pixaBayHTTP.responseText));
                }
            }
        };
        pixaBayHTTP.send("null");
        return serchRes;
    }

    var buttonSearch = document.querySelector("#btnSearch");
    var textInput = document.querySelector("#recText");
    var prevPage = document.querySelector("#prevPage");
    var nextPage = document.querySelector("#nextPage");

    prevPage.addEventListener("click", function(event){
        if(page>1 && currentQuery){
            page--;
            pixaBayRequest(currentQuery, page);
        }
        event.preventDefault();
        return false;
    });
    nextPage.addEventListener("click", function(event){
        if(currentQuery){
            page++;
            pixaBayRequest(currentQuery, page);
        }
        event.preventDefault();
        return false;
    });
    buttonSearch.addEventListener("click", function() {
        if (!textInput.value){
            alert("Enter your query");
        } else {
            currentQuery = textInput.value;
            pixaBayRequest(currentQuery);
        }
    });
})();
