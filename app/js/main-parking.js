

// @codekit-prepend "sprite.js"
// @codekit-prepend "data.js"
// @codekit-prepend "graph-parking.js"


window.onload = function() {
    initParkingGraph ({
        container: "#graph-parking-la",
        location: "la",
        defaultindex: 0
    });

    initParkingGraph ({
        container: "#graph-parking-london",
        location: "london",
        defaultindex: 0
    });

    initParkingGraph ({
        container: "#graph-parking-mumbai",
        location: "mumbai",
        defaultindex: 0
    });
}