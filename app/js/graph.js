


// @codekit-prepend "parkingGraphData.js"
// @codekit-prepend "graph-parking.js"



window.onload = function() {
    initParkingGraph ({
        container: "#graph-parking-LA",
        defaultindex: 0,
        data: ParkingGraphData
    });
};