(function() {
    changeView = function(a) {
        return function() {
            this.parentNode.className += " hide";
            this.parentNode.parentNode.getElementsByClassName(a)[0].className = a;
        };
    };
    els = document.getElementsByClassName("prog-excer");
    for (var a = els.length - 1; a >= 0; a--) {
        els[a].getElementsByTagName("em")[0].addEventListener("click", changeView("prog-texto"));
    }
    els = document.getElementsByClassName("prog-texto");
    for (var a = els.length - 1; a >= 0; a--) {
        els[a].getElementsByTagName("em")[0].addEventListener("click", changeView("prog-excer"));
    }
})();