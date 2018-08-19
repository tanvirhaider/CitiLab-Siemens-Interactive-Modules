

// @codekit-prepend "data.js"
// @codekit-prepend "hero.js"
// @codekit-prepend "graph-parking.js"
// @codekit-prepend "graph-emmissions.js"
// @codekit-prepend "vehicle-charge.js"




window.onload = function() {
    initParkingGraph ({
        container: "#graph-parking-LA",
        location: "la",
        defaultindex: 0
    });


    initEmmissionsGraph ({
        container: "#graph-emissions-LA",
        location: "la",
        data: emmissonsGraphData_LA
    });

    initVehicleCarges({
        container: "#graph-vehicle-charges-LA",
        location: "la",
        start: 2018,
        end: 2050,
        data: vehicleCargesLA
    });

    // initHero({
    //     location: "la"
    // })

    $( "#temp-nav #nav-la" ).click(function() {
        initHero({location: "la"});
    });

    $( "#temp-nav #nav-london" ).click(function() {
        initHero({location: "london"});
    });

    $( "#temp-nav #nav-mumbai" ).click(function() {
        initHero({location: "mumbai"});
    });

};