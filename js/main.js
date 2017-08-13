/**
 * Created by Teodor Vecerdi on 13/08/17.
 */
$(function () {
    $("a.language").click(function(e) {
        e.preventDefault(); //so the browser doesn't follow the link

        $("#page-top").load(this.href, function() {
            //execute here after load completed
        });
    });
});