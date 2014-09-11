initialize = function() {};

(function() {
    initialize = function() {
        myLatlng = new google.maps.LatLng(-23.559339, -46.731497);
        var a = {
            zoom: 18,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var b = new google.maps.Map(document.getElementById("map_canvas"), a);
        var c = new google.maps.Marker({
            position: myLatlng,
            map: b,
            title: "Encontro BCC"
        });
    };
    var a = function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCE49rWV5GFqmPYg6-omMWOdW3QdlatFMo&sensor=TRUE&callback=initialize";
        document.body.appendChild(a);
    };
    window.onload = a;
})();