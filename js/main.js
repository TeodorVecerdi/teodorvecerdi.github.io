function setLanguage(langCode) {
    localStorage.setItem("lang", langCode);
    console.log(langCode);
    var lang={};
    $.getJSON('../lang/'+langCode+'.json', function(data) {
        lang=data;
        console.log(data);
        console.log(lang);
    });
    $.each(lang, function (key, value) {
        $("#"+key).text(value);
        console.log(key + ": " + value);
    });
}

$(function () {

    var e = localStorage.getItem("lang");
    if(!e)
        e = "en";
    setLanguage(e);
    $("a.language").click(function (e) {
        e.preventDefault();
        var lang = $(this).prop("lang");
        console.log(lang);
        setLanguage(lang);
    });


});

function setAddress(b) {
    var a = history.state;
    history.pushState(a, "", b);
}


