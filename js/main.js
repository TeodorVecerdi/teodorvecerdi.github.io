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
    })
});

function setAddress(b) {
    var a = history.state;
    history.pushState(a, "", b);
}

function setLanguage(langCode) {
    localStorage.setItem("lang", langCode);
    var lang={};
    $.getJSON('../lang/'+langCode+'.json', function(data) {
        lang=data;
    });
    $.each(lang, function (key, value) {
       $("#"+key).text(value);
       console.log(key + ": " + value);
    });
}
