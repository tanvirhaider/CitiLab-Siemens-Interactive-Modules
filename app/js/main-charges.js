
var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"
}

// @codekit-prepend "vehicle-charge.js"


window.onload = function() {


    initVehicleCarges({
        container: "#graph-vehicle-charges-la",         // required
        location: "la",                                 // required
        intervals: 10,                                  // optional 
        start: 1,                                       // optional 
        end: 99                                         // optional 
    });


    initVehicleCarges({
        container: "#graph-vehicle-charges-london",     // required
        location: "london",                             // required
        intervals: 10,                                  // optional 
        start: 1,                                       // optional 
        end: 99                                         // optional 
    });


    initVehicleCarges({
        container: "#graph-vehicle-charges-mumbai",     // required
        location: "mumbai",                             // required
        intervals: 10,                                  // optional 
        start: 1,                                       // optional 
        end: 99                                         // optional 
    });

}