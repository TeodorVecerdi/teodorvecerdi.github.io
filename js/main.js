$(function () {
    setAddress("");
});

function setAddress(b) {
    var a = history.state;
    history.pushState(a, "", b);
}
