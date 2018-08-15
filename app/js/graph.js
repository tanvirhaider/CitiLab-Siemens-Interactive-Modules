


// @codekit-prepend "parkingGraphData.js"
// @codekit-prepend "emmissionsGraphData.js"
// @codekit-prepend "graph-parking.js"
// @codekit-prepend "graph-emmissions.js"
// @codekit-prepend "vehicle-charge.js"



window.onload = function() {
    initParkingGraph ({
        container: "#graph-parking-LA",
        location: "la",
        defaultindex: 0,
        data: ParkingGraphData
    });


    initEmmissionsGraph ({
        container: "#graph-emissions-LA",
        location: "la",
        data: emmissonsGraphData_LA
    });

    rangeSlider();
};