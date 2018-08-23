

var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"
}

// @codekit-prepend "data.js"
// @codekit-prepend "hero.js"
// @codekit-prepend "graph-parking.js"
// @codekit-prepend "graph-emmissions.js"
// @codekit-prepend "vehicle-charge.js"


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}




window.onload = function() {

    var location = getUrlVars()["location"];
    //var location = "london";

    console.log("whats the location: ", location);


    initParkingGraph ({
        container: "#graph-parking-LA",
        location: location,
        defaultindex: 0
    });


    initEmmissionsGraph ({
        container: "#graph-emissions-LA",
        location: location
    });

    // initVehicleCarges({
    //     container: "#graph-vehicle-charges-LA",
    //     location: "mumbai",
    //     start: 2018,
    //     end: 2050,
    //     data: vehicleCargesLA
    // });

    initVehicleCarges({
        container: "#graph-vehicle-charges-LA",
        location: location,
        start: 1,
        end: 3
    });

    initHero({location: location});

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