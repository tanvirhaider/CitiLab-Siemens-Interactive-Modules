"use strict";

// 0 == urban parkland
// 1 == house
// 2 == parking


var ParkingGraphData = {
    "london": {
        "year2018": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2035": [0, 2, 2, 1, 2, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2050": [1, 0, 2, 1, 0, 2, 1, 0, 1, 2, 0, 2, 1, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 1, 2, 2, 1, 0, 2, 1, 2, 0, 2, 1, 2, 2, 0, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 1]
    },
    "mumbai": {
        "year2018": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2035": [0, 2, 0, 2, 1, 2, 1, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2050": [0, 0, 1, 2, 0, 1, 2, 1, 2, 0, 2, 1, 2, 2, 1, 2, 2, 2, 0, 2, 0, 2, 1, 2, 0, 2, 1, 0, 2, 0, 2, 1, 1, 2, 0, 2, 1, 2, 0, 0, 2, 1, 2, 1, 0, 1, 2, 2, 2, 2]
    },
    "la": {
        "year2018": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2035": [1, 0, 2, 2, 1, 2, 0, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        "year2050": [0, 1, 2, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 0, 2, 2, 2, 0, 0, 1, 2, 2, 0, 2, 0, 2, 1, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2]
    }
};
"use strict";

var EmmissionGraphData = {
    "london": {
        "year2018": {
            "emmission": {
                "GreenHouseGas": 0.6,
                "ParticleMatter": 1,
                "NitrousOxide": 0.9
            },
            "electric": {
                "Solar": 0.5,
                "Wind": 0.1,
                "Coal": 0.25,
                "NaturalGas": 0.45,
                "Oil": 0.01,
                "Hydro": 0.1,
                "Nuclear": 0.05
            }
        },
        "year2035": {
            "emmission": {
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.6,
                "NitrousOxide": 0.5
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        },
        "year2050": {
            "emmission": {
                "GreenHouseGas": 0.1,
                "ParticleMatter": 0.3,
                "NitrousOxide": 0.01
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        }
    },
    "mumbai": {
        "year2018": {
            "emmission": {
                "GreenHouseGas": 0.6,
                "ParticleMatter": 1,
                "NitrousOxide": 1.0
            },
            "electric": {
                "Solar": 0.5,
                "Wind": 1.0,
                "Coal": 0.25,
                "NaturalGas": 0.45,
                "Oil": 0.01,
                "Hydro": 0.1,
                "Nuclear": 0.05
            }
        },
        "year2035": {
            "emmission": {
                "GreenHouseGas": 0.4,
                "ParticleMatter": 0.8,
                "NitrousOxide": 0.6
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        },
        "year2050": {
            "emmission": {
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.5,
                "NitrousOxide": 0.3
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        }
    },
    "la": {
        "year2018": {
            "emmission": {
                "GreenHouseGas": 0.5,
                "ParticleMatter": 1,
                "NitrousOxide": 1.0
            },
            "electric": {
                "Solar": 0.05,
                "Wind": 0.1,
                "Coal": 0.25,
                "NaturalGas": 0.45,
                "Oil": 0.01,
                "Hydro": 0.1,
                "Nuclear": 0.05
            }
        },
        "year2035": {
            "emmission": {
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.8,
                "NitrousOxide": 0.6
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        },
        "year2050": {
            "emmission": {
                "GreenHouseGas": 0.2,
                "ParticleMatter": 0.5,
                "NitrousOxide": 0.2
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0.01,
                "NaturalGas": 0.01,
                "Oil": 0.01,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        }
    }
};
"use strict";

var vehicleCargesLA = [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]];

var VehicleCargesData = {
    "london": {
        "year2018": 983.67949034,
        "year2035": 12353.4413005,
        "year2050": 8837.783086
    },
    "mumbai": {
        "year2018": 577.40199967,
        "year2035": 8299.998314,
        "year2050": 6431.1260159
    },
    "la": {
        "year2018": 581.03369075,
        "year2035": 9336.8797536,
        "year2050": 7209.7674594
    }
};


// @codekit-prepend "data/parkingGraphData.js"
// @codekit-prepend "data/emmissionsGraphData.js"
// @codekit-prepend "data/vehicleCargesData.js"
"use strict";
"use strict";

function initParkingGraph(data) {

    var container = data.container;
    console.group("graph-debug");
    console.log(data.location);

    var numberOfParking = [];
    var numberOfHouse = [];
    var numberOfTree = [];

    var numberOfYear = document.querySelector(container + " #graph-content .nav").childElementCount;

    var firstRun = false;

    for (var i = 0; i < numberOfYear; i++) {
        document.querySelector(container + " #graph-content #nav-" + i).addEventListener("click", navClicked);
    }

    function initialGridSetup() {
        for (var i = 0; i < 50; i++) {
            var div = document.createElement("div");
            div.setAttribute("id", "icon-" + i);
            div.classList.add("icon-car-" + data.location);
            var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
            TweenMax.fromTo(div, 0.5, { alpha: 0, scale: 0 }, { delay: 0.1, alpha: 1, scale: 1 });
        }
    }

    function navClicked(event) {
        var currentElement = document.querySelector(container + " #graph-content #nav-" + event.target.id);
        var currentID = this.id;
        var idIndex = currentID.substr(-1);
        //  console.log(idIndex);
        this.classList.add("selected-" + data.location);
        for (var i = 0; i < numberOfYear; i++) {
            if (i != Number(idIndex)) {
                document.querySelector(container + " #graph-content #nav-" + i).classList.remove("selected-" + data.location);
            }
        }

        populateGrid(idIndex);
    }

    function populateGrid(whichSet) {
        console.group("populate");

        console.log(whichSet);
        var translateVariableIndex;
        if (whichSet == 0) {
            translateVariableIndex = "year2018";
        } else if (whichSet == 1) {
            translateVariableIndex = "year2035";
        } else if (whichSet == 2) {
            translateVariableIndex = "year2050";
        }

        var numberOfIcons = document.querySelector(container + " #graph-content #grid");

        // for (var i = 0; i < ParkingGraphData[data.location][translateVariableIndex].length; i++) 
        for (var i = 0; i < 50; i++) {
            var currentIndex = ParkingGraphData[data.location][translateVariableIndex][i];

            var div = document.createElement("div");
            div.setAttribute("id", "icon-" + i);

            div.classList.add("icon");
            //div.classList.add("icon-car-" + data.location);

            // switch(currentIndex) {
            //     case 0:
            //         numberOfTree.push(i);
            //         //div.classList.add("icon-tree-" + data.location);
            //         break;
            //     case 1:
            //         numberOfHouse.push(i);
            //        // div.classList.add("icon-house-" + data.location);
            //         break;
            //     case 2:
            //         numberOfParking.push(i);
            //         //div.classList.add("icon-car-" + data.location);
            //         break;
            //     default:
            //         div.classList.add("");
            // }

            if (!firstRun) {
                var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
            }

            // TweenMax.fromTo(div,0.5, {alpha:0,scale:0},{delay:0.1,alpha:1,scale:1});
        }

        firstRun = true;

        // 


        for (var n = 0; n < 50; n++) {
            var currentIndex = ParkingGraphData[data.location][translateVariableIndex][n];
            var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + n);
            if (currentIndex == 2) {
                if (currentIcon.classList.contains("icon-car-" + data.location)) {} else {
                    var replaceClass = function replaceClass(whichOne) {
                        if (whichOne.classList.contains("icon-tree-" + data.location)) {
                            whichOne.classList.remove("icon-tree-" + data.location);
                        }
                        if (whichOne.classList.contains("icon-house-" + data.location)) {
                            whichOne.classList.remove("icon-house-" + data.location);
                        }
                        whichOne.classList.add("icon-car-" + data.location);
                        TweenMax.fromTo(whichOne, 0.5, { alpha: 0 }, { scale: 1, alpha: 1 });
                    };

                    TweenMax.to(currentIcon, 0.5, { delay: 0.01 * n, alpha: 0, scale: 0, onComplete: replaceClass, onCompleteParams: [currentIcon] });
                }
                // console.log(currentIcon.classList.contains("icon-car-" + data.location));
            }

            if (currentIndex == 1) {
                if (currentIcon.classList.contains("icon-house-" + data.location)) {} else {
                    var _replaceClass = function _replaceClass(whichOne) {
                        if (whichOne.classList.contains("icon-tree-" + data.location)) {
                            whichOne.classList.remove("icon-tree-" + data.location);
                        }
                        if (whichOne.classList.contains("icon-car-" + data.location)) {
                            whichOne.classList.remove("icon-car-" + data.location);
                        }
                        whichOne.classList.add("icon-house-" + data.location);
                        TweenMax.fromTo(whichOne, 0.5, { alpha: 0 }, { scale: 1, alpha: 1 });
                    };

                    TweenMax.to(currentIcon, 0.5, { delay: 0.01 * n, alpha: 0, scale: 0, onComplete: _replaceClass, onCompleteParams: [currentIcon] });
                }
                // console.log(currentIcon.classList.contains("icon-car-" + data.location));
            }

            if (currentIndex == 0) {
                if (currentIcon.classList.contains("icon-tree-" + data.location)) {} else {
                    var _replaceClass2 = function _replaceClass2(whichOne) {
                        if (whichOne.classList.contains("icon-house-" + data.location)) {
                            whichOne.classList.remove("icon-house-" + data.location);
                        }
                        if (whichOne.classList.contains("icon-car-" + data.location)) {
                            whichOne.classList.remove("icon-car-" + data.location);
                        }
                        whichOne.classList.add("icon-tree-" + data.location);
                        TweenMax.fromTo(whichOne, 0.5, { alpha: 0 }, { scale: 1, alpha: 1 });
                    };

                    // if (currentIcon.classList.contains("icon-house-" + data.location)) {currentIcon.classList.remove("icon-house-" + data.location);}
                    //  if (currentIcon.classList.contains("icon-car-" + data.location)) {currentIcon.classList.remove("icon-car-" + data.location);}
                    //  currentIcon.classList.add("icon-tree-" + data.location);


                    TweenMax.to(currentIcon, 0.5, { delay: 0.01 * n, alpha: 0, scale: 0, onComplete: _replaceClass2, onCompleteParams: [currentIcon] });
                }
                // console.log(currentIcon.classList.contains("icon-car-" + data.location));
            }

            console.log("current index #: ", currentIndex);
        }

        // for (var i = 0; i < numberOfParking.length; i++) {
        //     console.log("run parking");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfParking[i]);
        //     currentIcon.classList.add("icon-car-" + data.location);
        //     TweenMax.fromTo(currentIcon,0.5, {scale:0},{delay:0,alpha:1,scale:1});
        // }


        // for (var j = 0; j < numberOfHouse.length; j++) {
        //     console.log("run house");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfHouse[j]);
        //     currentIcon.classList.add("icon-car-" + data.location);
        //     TweenMax.to(currentIcon,0.5, {delay:1,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});
        //     function replaceClass (whichOne) {
        //        // console.log(whichOne);
        //         whichOne.classList.remove("icon-car-" + data.location); 
        //         whichOne.classList.add("icon-house-" + data.location); 
        //         TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
        //     }
        // }

        // for (var k = 0; k < numberOfTree.length; k++) {
        //     console.log("run tree");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfTree[k]);
        //     currentIcon.classList.add("icon-car-" + data.location);ujhju
        //     TweenMax.to(currentIcon,0.5, {delay:1,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});
        //     function replaceClass (whichOne) {
        //        // console.log(whichOne);
        //         whichOne.classList.remove("icon-car-" + data.location); 
        //         whichOne.classList.add("icon-tree-" + data.location); 
        //         TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
        //     }
        // }

        // for (var i = 0; i < numberOfTree.length; i++) {

        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfTree[i]);
        //     currentIcon.classList.add("icon-car-" + data.location);

        //     TweenMax.delayedCall(1, replaceCarToTree, [currentIcon]); 

        //     function replaceCarToTree (item) {
        //         console.log(item);
        //         item.classList.remove("icon-car-" + data.location); 
        //         item.classList.add("icon-tree-" + data.location); 
        //     }
        // }

        //   console.log("parking: ",numberOfParking);
        //   console.log("house: ",numberOfHouse);
        //   console.log("tree: ",numberOfTree);

        console.groupEnd("populate");
    }

    function defaultSetting(whichOne) {

        populateGrid(whichOne);
        document.querySelector(container + " #graph-content #nav-" + whichOne).classList.add("selected-" + data.location);
    }

    defaultSetting(data.defaultindex);
    console.groupEnd("graph-debug");
}
"use strict";

function initEmmissionsGraph(data) {
        console.group("emmissions-" + data.location);
        console.log(data.container);
        console.log("emmission location: ", data.location);

        var barColor;

        if (data.location == "la") {
                barColor = "#3c7bcd";
        } else if (data.location == "london") {
                barColor = "#0e9111";
        } else if (data.location == "mumbai") {
                barColor = "#d14334";
        }

        var prefix = data.container + " .content ";
        var inTheMiddle = " #bar-gas-";

        function animateGraph(where) {
                var barData = [];

                var GHG_2018 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 0);
                var PM_2018 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 1);
                var NO_2018 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 2);

                var GHG_2035 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 0);
                var PM_2035 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 1);
                var NO_2035 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 2);

                var GHG_2050 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 0);
                var PM_2050 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 1);
                var NO_2050 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 2);

                var WIND_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 0);
                var GAS_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 1);
                var COAL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 2);
                var NGAS_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 3);
                var OIL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 4);
                var HYDRO_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 5);
                var NUK_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 6);

                var WIND_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 0);
                var GAS_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 1);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 2);
                var NGAS_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 3);
                var OIL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 4);
                var HYDRO_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 5);
                var NUK_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 6);

                var WIND_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 0);
                var GAS_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 1);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 2);
                var NGAS_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 3);
                var OIL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 4);
                var HYDRO_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 5);
                var NUK_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 6);

                var barList = [GHG_2018, PM_2018, NO_2018, GHG_2035, PM_2035, NO_2035, GHG_2050, PM_2050, NO_2050, WIND_2018, GAS_2018, COAL_2018, NGAS_2018, OIL_2018, HYDRO_2018, NUK_2018, WIND_2035, GAS_2035, COAL_2035, NGAS_2035, OIL_2035, HYDRO_2035, NUK_2035, WIND_2050, GAS_2050, COAL_2050, NGAS_2050, OIL_2050, HYDRO_2050, NUK_2050];

                // console.log(EmmissionGraphData['london']['year2018']['emmission']['GreenHouseGas']);


                // LONDON DATA

                var London_2018_GHG = EmmissionGraphData['london']['year2018']['emmission']['GreenHouseGas'];
                var London_2035_GHG = EmmissionGraphData['london']['year2035']['emmission']['GreenHouseGas'];
                var London_2050_GHG = EmmissionGraphData['london']['year2050']['emmission']['GreenHouseGas'];

                var London_2018_PM = EmmissionGraphData['london']['year2018']['emmission']['ParticleMatter'];
                var London_2030_PM = EmmissionGraphData['london']['year2035']['emmission']['ParticleMatter'];
                var London_2050_PM = EmmissionGraphData['london']['year2050']['emmission']['ParticleMatter'];

                var London_2018_NO = EmmissionGraphData['london']['year2018']['emmission']['NitrousOxide'];
                var London_2035_NO = EmmissionGraphData['london']['year2035']['emmission']['NitrousOxide'];
                var London_2050_NO = EmmissionGraphData['london']['year2050']['emmission']['NitrousOxide'];

                var London_2018_SOLAR = EmmissionGraphData['london']['year2018']['electric']['Solar'];
                var London_2035_SOLAR = EmmissionGraphData['london']['year2035']['electric']['Solar'];
                var London_2050_SOLAR = EmmissionGraphData['london']['year2050']['electric']['Solar'];

                var London_2018_WIND = EmmissionGraphData['london']['year2018']['electric']['Wind'];
                var London_2035_WIND = EmmissionGraphData['london']['year2035']['electric']['Wind'];
                var London_2050_WIND = EmmissionGraphData['london']['year2050']['electric']['Wind'];

                var London_2018_COAL = EmmissionGraphData['london']['year2018']['electric']['Coal'];
                var London_2035_COAL = EmmissionGraphData['london']['year2035']['electric']['Coal'];
                var London_2050_COAL = EmmissionGraphData['london']['year2050']['electric']['Coal'];

                var London_2018_NGAS = EmmissionGraphData['london']['year2018']['electric']['NaturalGas'];
                var London_2035_NGAS = EmmissionGraphData['london']['year2035']['electric']['NaturalGas'];
                var London_2050_NGAS = EmmissionGraphData['london']['year2050']['electric']['NaturalGas'];

                var London_2018_OIL = EmmissionGraphData['london']['year2018']['electric']['Oil'];
                var London_2035_OIL = EmmissionGraphData['london']['year2035']['electric']['Oil'];
                var London_2050_OIL = EmmissionGraphData['london']['year2050']['electric']['Oil'];

                var London_2018_HYDRO = EmmissionGraphData['london']['year2018']['electric']['Hydro'];
                var London_2035_HYDRO = EmmissionGraphData['london']['year2035']['electric']['Hydro'];
                var London_2050_HYDRO = EmmissionGraphData['london']['year2050']['electric']['Hydro'];

                var London_2018_NUCLEAR = EmmissionGraphData['london']['year2018']['electric']['Nuclear'];
                var London_2035_NUCLEAR = EmmissionGraphData['london']['year2035']['electric']['Nuclear'];
                var London_2050_NUCLEAR = EmmissionGraphData['london']['year2050']['electric']['Nuclear'];

                // LA DATA

                var La_2018_GHG = EmmissionGraphData['la']['year2018']['emmission']['GreenHouseGas'];
                var La_2035_GHG = EmmissionGraphData['la']['year2035']['emmission']['GreenHouseGas'];
                var La_2050_GHG = EmmissionGraphData['la']['year2050']['emmission']['GreenHouseGas'];

                var La_2018_PM = EmmissionGraphData['la']['year2018']['emmission']['ParticleMatter'];
                var La_2030_PM = EmmissionGraphData['la']['year2035']['emmission']['ParticleMatter'];
                var La_2050_PM = EmmissionGraphData['la']['year2050']['emmission']['ParticleMatter'];

                var La_2018_NO = EmmissionGraphData['la']['year2018']['emmission']['NitrousOxide'];
                var La_2035_NO = EmmissionGraphData['la']['year2035']['emmission']['NitrousOxide'];
                var La_2050_NO = EmmissionGraphData['la']['year2050']['emmission']['NitrousOxide'];

                var La_2018_SOLAR = EmmissionGraphData['la']['year2018']['electric']['Solar'];
                var La_2035_SOLAR = EmmissionGraphData['la']['year2035']['electric']['Solar'];
                var La_2050_SOLAR = EmmissionGraphData['la']['year2050']['electric']['Solar'];

                var La_2018_WIND = EmmissionGraphData['la']['year2018']['electric']['Wind'];
                var La_2035_WIND = EmmissionGraphData['la']['year2035']['electric']['Wind'];
                var La_2050_WIND = EmmissionGraphData['la']['year2050']['electric']['Wind'];

                var La_2018_COAL = EmmissionGraphData['la']['year2018']['electric']['Coal'];
                var La_2035_COAL = EmmissionGraphData['la']['year2035']['electric']['Coal'];
                var La_2050_COAL = EmmissionGraphData['la']['year2050']['electric']['Coal'];

                var La_2018_NGAS = EmmissionGraphData['la']['year2018']['electric']['NaturalGas'];
                var La_2035_NGAS = EmmissionGraphData['la']['year2035']['electric']['NaturalGas'];
                var La_2050_NGAS = EmmissionGraphData['la']['year2050']['electric']['NaturalGas'];

                var La_2018_OIL = EmmissionGraphData['la']['year2018']['electric']['Oil'];
                var La_2035_OIL = EmmissionGraphData['la']['year2035']['electric']['Oil'];
                var La_2050_OIL = EmmissionGraphData['la']['year2050']['electric']['Oil'];

                var La_2018_HYDRO = EmmissionGraphData['la']['year2018']['electric']['Hydro'];
                var La_2035_HYDRO = EmmissionGraphData['la']['year2035']['electric']['Hydro'];
                var La_2050_HYDRO = EmmissionGraphData['la']['year2050']['electric']['Hydro'];

                var La_2018_NUCLEAR = EmmissionGraphData['la']['year2018']['electric']['Nuclear'];
                var La_2035_NUCLEAR = EmmissionGraphData['la']['year2035']['electric']['Nuclear'];
                var La_2050_NUCLEAR = EmmissionGraphData['la']['year2050']['electric']['Nuclear'];

                // Mumbai DATA

                var Mumbai_2018_GHG = EmmissionGraphData['mumbai']['year2018']['emmission']['GreenHouseGas'];
                var Mumbai_2035_GHG = EmmissionGraphData['mumbai']['year2035']['emmission']['GreenHouseGas'];
                var Mumbai_2050_GHG = EmmissionGraphData['mumbai']['year2050']['emmission']['GreenHouseGas'];

                var Mumbai_2018_PM = EmmissionGraphData['mumbai']['year2018']['emmission']['ParticleMatter'];
                var Mumbai_2030_PM = EmmissionGraphData['mumbai']['year2035']['emmission']['ParticleMatter'];
                var Mumbai_2050_PM = EmmissionGraphData['mumbai']['year2050']['emmission']['ParticleMatter'];

                var Mumbai_2018_NO = EmmissionGraphData['mumbai']['year2018']['emmission']['NitrousOxide'];
                var Mumbai_2035_NO = EmmissionGraphData['mumbai']['year2035']['emmission']['NitrousOxide'];
                var Mumbai_2050_NO = EmmissionGraphData['mumbai']['year2050']['emmission']['NitrousOxide'];

                var Mumbai_2018_SOLAR = EmmissionGraphData['mumbai']['year2018']['electric']['Solar'];
                var Mumbai_2035_SOLAR = EmmissionGraphData['mumbai']['year2035']['electric']['Solar'];
                var Mumbai_2050_SOLAR = EmmissionGraphData['mumbai']['year2050']['electric']['Solar'];

                var Mumbai_2018_WIND = EmmissionGraphData['mumbai']['year2018']['electric']['Wind'];
                var Mumbai_2035_WIND = EmmissionGraphData['mumbai']['year2035']['electric']['Wind'];
                var Mumbai_2050_WIND = EmmissionGraphData['mumbai']['year2050']['electric']['Wind'];

                var Mumbai_2018_COAL = EmmissionGraphData['mumbai']['year2018']['electric']['Coal'];
                var Mumbai_2035_COAL = EmmissionGraphData['mumbai']['year2035']['electric']['Coal'];
                var Mumbai_2050_COAL = EmmissionGraphData['mumbai']['year2050']['electric']['Coal'];

                var Mumbai_2018_NGAS = EmmissionGraphData['mumbai']['year2018']['electric']['NaturalGas'];
                var Mumbai_2035_NGAS = EmmissionGraphData['mumbai']['year2035']['electric']['NaturalGas'];
                var Mumbai_2050_NGAS = EmmissionGraphData['mumbai']['year2050']['electric']['NaturalGas'];

                var Mumbai_2018_OIL = EmmissionGraphData['mumbai']['year2018']['electric']['Oil'];
                var Mumbai_2035_OIL = EmmissionGraphData['mumbai']['year2035']['electric']['Oil'];
                var Mumbai_2050_OIL = EmmissionGraphData['mumbai']['year2050']['electric']['Oil'];

                var Mumbai_2018_HYDRO = EmmissionGraphData['mumbai']['year2018']['electric']['Hydro'];
                var Mumbai_2035_HYDRO = EmmissionGraphData['mumbai']['year2035']['electric']['Hydro'];
                var Mumbai_2050_HYDRO = EmmissionGraphData['mumbai']['year2050']['electric']['Hydro'];

                var Mumbai_2018_NUCLEAR = EmmissionGraphData['mumbai']['year2018']['electric']['Nuclear'];
                var Mumbai_2035_NUCLEAR = EmmissionGraphData['mumbai']['year2035']['electric']['Nuclear'];
                var Mumbai_2050_NUCLEAR = EmmissionGraphData['mumbai']['year2050']['electric']['Nuclear'];

                if (where == "mumbai") {
                        barData = [Mumbai_2018_GHG, Mumbai_2018_PM, Mumbai_2018_NO, Mumbai_2035_GHG, Mumbai_2030_PM, Mumbai_2035_NO, Mumbai_2050_GHG, Mumbai_2050_PM, Mumbai_2050_NO, Mumbai_2018_SOLAR, Mumbai_2018_WIND, Mumbai_2018_COAL, Mumbai_2018_NGAS, Mumbai_2018_OIL, Mumbai_2018_HYDRO, Mumbai_2018_NUCLEAR, Mumbai_2035_SOLAR, Mumbai_2035_WIND, Mumbai_2035_COAL, Mumbai_2035_NGAS, Mumbai_2035_OIL, Mumbai_2035_HYDRO, Mumbai_2035_NUCLEAR, Mumbai_2050_SOLAR, Mumbai_2050_WIND, Mumbai_2050_COAL, Mumbai_2050_NGAS, Mumbai_2050_OIL, Mumbai_2050_HYDRO, Mumbai_2050_NUCLEAR];
                } else if (where == "london") {

                        barData = [London_2018_GHG, London_2018_PM, London_2018_NO, London_2035_GHG, London_2030_PM, London_2035_NO, London_2050_GHG, London_2050_PM, London_2050_NO, London_2018_SOLAR, London_2018_WIND, London_2018_COAL, London_2018_NGAS, London_2018_OIL, London_2018_HYDRO, London_2018_NUCLEAR, London_2035_SOLAR, London_2035_WIND, London_2035_COAL, London_2035_NGAS, London_2035_OIL, London_2035_HYDRO, London_2035_NUCLEAR, London_2050_SOLAR, London_2050_WIND, London_2050_COAL, London_2050_NGAS, London_2050_OIL, London_2050_HYDRO, London_2050_NUCLEAR];
                } else if (where == "la") {
                        barData = [La_2018_GHG, La_2018_PM, La_2018_NO, La_2035_GHG, La_2030_PM, La_2035_NO, La_2050_GHG, La_2050_PM, La_2050_NO, La_2018_SOLAR, La_2018_WIND, La_2018_COAL, La_2018_NGAS, La_2018_OIL, La_2018_HYDRO, La_2018_NUCLEAR, La_2035_SOLAR, La_2035_WIND, La_2035_COAL, La_2035_NGAS, La_2035_OIL, La_2035_HYDRO, La_2035_NUCLEAR, La_2050_SOLAR, La_2050_WIND, La_2050_COAL, La_2050_NGAS, La_2050_OIL, La_2050_HYDRO, La_2050_NUCLEAR];
                }

                for (var i = 0; i < barList.length; i++) {
                        // var theBar = barList[i].querySelector(".actual-bar");
                        var theBar = barList[i];
                        theBar.classList.add("small-bar-color-" + data.location);
                        TweenMax.fromTo(theBar, 2, { height: "0%" }, { height: barData[i] * 100 + "%", ease: Power3.easeInOut });

                        var theBox = $(theBar).find("span");
                        $(theBox).text(barData[i] * 100 + "%");

                        $(barList[i]).mouseover(function () {
                                // i += 1;
                                var theBox = $(this).find("span");
                                $(theBox).css("display", "block");
                                // theBox.style.display = "block";
                                //  $( theBox ).text( "over");
                                //   console.log("yo MTV");
                        }).mouseout(function () {
                                var theBox = $(this).find("span");
                                //theBox.style.display = "none";
                                $(theBox).css("display", "none");
                                //  $( theBox ).text( "out" );
                                console.log("mtv out");
                        });
                }
        }

        animateGraph(data.location);

        var numberOfGEitems = document.querySelector(data.container + " .content " + ".electricity" + " .chart-container .legends").children.length;
        var numberOfEMitems = document.querySelector(data.container + " .content " + ".emmissions" + " .chart-container .legends").children.length;

        for (var i = 0; i < numberOfGEitems; i++) {
                var tempchild = document.querySelector(data.container + " .content " + ".electricity" + " .chart-container .legends").children[i];
                tempchild.classList.add("each-legend-" + data.location);
        }

        for (var i = 0; i < numberOfEMitems; i++) {
                var tempchild = document.querySelector(data.container + " .content " + ".emmissions" + " .chart-container .legends").children[i];
                tempchild.classList.add("each-legend-" + data.location);

                console.log("items -- ", i);
        }
}
"use strict";

function initVehicleCarges(data) {
  console.log("data location: ", data.location);
  var dataMultiplier = 30;
  var sampleData = [[50, 50], [60, 44], [43, 46], [66, 66], [37, 52], [58, 58], [47, 55], [55, 47], [54, 54], [66, 41], [72, 38], [31, 42], [31, 53], [43, 51], [48, 40], [44, 59], [25, 54], [18, 55], [11, 56], [49, 45], [47, 35], [62, 62], [41, 63], [46, 29], [37, 44], [25, 40], [70, 70], [38, 67], [19, 38], [12, 36], [45, 23], [6, 34], [35, 71], [78, 35], [74, 74], [78, 78], [32, 75], [29, 79], [44, 18], [4, 57], // < this is 40
  [0, 32], [82, 82], [43, 13], [26, 83], [84, 32], [42, 8], [23, 87], [41, 3], [90, 29], [-3, 58], [-6, 30], [-10, 59], [20, 91], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50]];

  // var sampleData = [
  //   [50,50],
  //   [54,54],
  //   [58,58],
  //   [62,62],
  //   [66,66],
  //   [70,70],
  //   [55,47],
  //   [60,44],
  //   [66,41],
  //   [72,38],
  //   [43,51],
  //   [37,52],
  //   [31,53],
  //   [25,54],
  //   [18,55],
  //   [11,56],
  //   [49,45],
  //   [48,40],
  //   [47,35],
  //   [43,46],
  //   [46,29],
  //   [37,44],
  //   [31,42],
  //   [25,40],
  //   [19,38],
  //   [12,36],
  //   [47,55],
  //   [44,59],
  //   [41,63],
  //   [38,67],
  //   [45,23],
  //   [6,34],
  //   [35,71],
  //   [78,35],
  //   [74,74],
  //   [78,78],
  //   [82,82],
  //   [32,75],
  //   [29,79],
  //   [44,18],
  //   [4,57],
  //   [0,32],
  //   [43,13],
  //   [26,83],
  //   [84,32],
  //   [42,8],
  //   [23,87],
  //   [41,3],
  //   [90,29],
  //   [-3,58],
  //   [-6,30],
  //   [-10,59],
  //   [20,91],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50],
  //   [50,50]
  // ];


  var GraphContainer = document.querySelector(data.container);
  GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule #r-slider');
  sliderObject.classList.add('range-slider__range-' + data.location);

  sliderObject.setAttribute("min", data.start);
  sliderObject.setAttribute("value", data.start);
  sliderObject.setAttribute("max", data.end);

  //$(data.container +' .sliderModule .range-slider .range-slider__range::-webkit-slider-thumb').css('background',colors[data.location]);


  //$('input[type=range]').addClass('.charge-dot-' + data.location);

  //.range-slider__range::-webkit-slider-thumb


  var slider = $(data.container + ' .sliderModule #r-slider');
  var range = $(data.container + ' .sliderModule #r-slider');
  var value = $(data.container + ' .sliderModule #r-slider');

  //  $('input[type=range]').css("background","green");

  var initialValue = data.start;
  var finalValue = data.end;

  var selectionQueue = [];

  var tl = new TimelineMax({ repeat: 0, repeatDelay: 1 });
  tl.pause();

  // console.log("what is slider: " ,slider);
  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  //console.log(slider);

  //slider.style.background = "green";


  slider.each(function () {
    range.on('input', function () {

      hideHint();

      //   console.log("slider value: ",this.value);

      // if ((this.value == 1)||(this.value == 50) || (this.value == 99) ) {
      if (this.value < 50) {
        initiateVCanimation(1);
      } else if (this.value >= 50 && this.value < 99) {
        initiateVCanimation(2);
      } else if (this.value == 99) {
        initiateVCanimation(3);
      }
      //}


      // var tempIndexVal = (this.value - initialValue);
      //this.style.background = "green";

      // tl.seek(tempIndexVal * dataMultiplier,true);
      // var currentDot = document.getElementById(data.container + "-" + this.value);
    });
  });

  function hideHint() {
    var hintCopy = document.querySelector(data.container + " .sliderModule .hint");
    hintCopy.style.visibility = "hidden";
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initiateVCanimation(whichOne) {

    var rangeSet = [30, 40, 52];
    var tempWhichOne = Number(whichOne) - 1;
    selectionQueue.push(tempWhichOne);
    var currentRange = rangeSet[tempWhichOne];

    for (var i = 0; i < 52; i++) {
      var tempItem = document.getElementById(data.container + "-" + i);

      if (i <= currentRange) {
        if (selectionQueue.length > 1) {
          TweenMax.to(tempItem, 0.1, { delay: 0.02 * i, alpha: 1 });
        } else {
          TweenMax.fromTo(tempItem, 0.1, { alpha: 0 }, { delay: i * 0.05, alpha: 1 });
        }
      } else {
        // tempItem.style.opacity = "0";
        TweenMax.to(tempItem, 0.5, { alpha: 0 });
      }
    }
  }

  function drawDots(whichOne) {
    var eachDot = document.createElement('div');
    eachDot.className = 'dots';
    console.log("color information: ", colors[data.location]);
    $('#graph-vehicle-charges-' + data.location + ' .dotContainer .dots').css('backgroundColor', colors[data.location]);
    eachDot.setAttribute("id", data.container + "-" + whichOne);
    dotContainer.appendChild(eachDot);
    //var x = getRandomArbitrary(0,100);
    //var y = getRandomArbitrary(0,100);

    eachDot.style.top = sampleData[whichOne][0] + "%";
    eachDot.style.left = sampleData[whichOne][1] + "%";

    // tl.add( TweenLite.fromTo(eachDot, 1, {alpha:0}, {alpha:1}) );
  }

  // for (var i = 0; i <= (finalValue * dataMultiplier); i++) 
  for (var i = 0; i <= 52; i++) {
    drawDots(i);
  }

  $('#graph-vehicle-charges-' + data.location + ' .contents .legend .sample-dot').css('backgroundColor', colors[data.location]);
  initiateVCanimation(1);
}
"use strict";

var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"

    // @codekit-prepend "data.js"
    // @codekit-prepend "graph-parking.js"
    // @codekit-prepend "graph-emmissions.js"
    // @codekit-prepend "vehicle-charge.js"


};function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

window.onload = function () {

    // var location = getUrlVars()["location"];
    var location = "london";

    console.log("whats the location: ", location);

    initParkingGraph({
        container: "#graph-parking-LA",
        location: location,
        defaultindex: 0
    });

    initEmmissionsGraph({
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
        end: 99
    });

    //   initHero({location: location});

    // initHero({
    //     location: "la"
    // })

    // $( "#temp-nav #nav-la" ).click(function() {
    //     initHero({location: "la"});
    // });

    // $( "#temp-nav #nav-london" ).click(function() {
    //     initHero({location: "london"});
    // });

    // $( "#temp-nav #nav-mumbai" ).click(function() {
    //     initHero({location: "mumbai"});
    // });
};
