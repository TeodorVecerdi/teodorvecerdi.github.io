/**
 * Created by Teodor Vecerdi on 13/08/17.
 */
$(function () {
    if (history.replaceState) {
        window.history.replaceState("object or string", "Teodor Vecerdi", "");
    } else {
        document.location.href = "";
    }
});