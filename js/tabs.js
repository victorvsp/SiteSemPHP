(function() {
    var a = function() {
        var a = this.parentNode.getElementsByClassName("tab-temp")[0];
        var b = this.parentNode.parentNode.id.replace("-l", "-c");
        console.log(b);
        console.log(a);
        document.getElementById(b).innerHTML = a.innerHTML;
    };
    var b = document.getElementsByClassName("lista-tabs");
    for (var c = b.length - 1; c >= 0; c--) {
        var d = b[c].getElementsByClassName("tab-botao");
        for (var c = d.length - 1; c >= 0; c--) {
            d[c].addEventListener("click", a);
        }
    }
})();