(function() {
    var a = function() {
        var a = {};
        a.root = document.getElementById("slideshow");
        a.ind = 0;
        a.slides = a.root.getElementsByClassName("slide-frame");
        a.total = a.slides.length;
        return a;
    }();
    var b = function() {
        var b = a.ind;
        var c = (a.ind + 1) % a.total;
        a.slides[b].className = "slide-frame slide-set";
        a.slides[c].className = "slide-frame slide-active";
        a.ind++;
        a.ind %= a.total;
    };
    a.interval = setInterval(b, 8e3);
})();