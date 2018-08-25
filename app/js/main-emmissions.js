

// @codekit-prepend "sprite.js"
// @codekit-prepend "data.js"
// @codekit-prepend "graph-emmissions.js"



window.onload = function() {
    initEmmissionsGraph ({
        container: "#graph-emissions-london",
        location: "london"
    });

    initEmmissionsGraph ({
        container: "#graph-emissions-la",
        location: "la"
    });

    initEmmissionsGraph ({
        container: "#graph-emissions-mumbai",
        location: "mumbai"
    });



}