
var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"
}

// @codekit-prepend "vehicle-charge.js"



window.onload = function() {


    initVehicleCarges({
        container: "#graph-vehicle-charges-la",
        location: "la",
        start: 1,
        end: 99
    });


    initVehicleCarges({
        container: "#graph-vehicle-charges-london",
        location: "london",
        start: 1,
        end: 99
    });


    initVehicleCarges({
        container: "#graph-vehicle-charges-mumbai",
        location: "mumbai",
        start: 1,
        end: 99
    });

}