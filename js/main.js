$(function () {
    $("a.language").click(function(e) {
        e.preventDefault();
        $("#page-top").load(this.href, function() {
        });
    });
});