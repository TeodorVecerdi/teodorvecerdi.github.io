$(function () {
    $("a.language").click(function(e) {
        e.preventDefault();
        $("html").load(this.href, function() {
            //reset dropdown
            $("#languagesDropdown").dropdown();
        });
    });
});