$(function () {
    $("a.language").click(function(e) {
        e.preventDefault();
        $.get(this.href + " body", function(data) {
            $("body").replaceWith(data, function () {
                $("#languagesDropdown").dropdown();
            });
        });
    });
});