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

var emmissonsGraphData_LA = [[[10, 30, 100], [33, 30, 55], [10, 55, 22]], [[66, 11, 100], [10, 30, 22], [10, 30, 66]]];

var emmissonsGraphData_LONDON = [[40, 20, 50], [23, 55, 66]];

var emmissonsGraphData_MUMBAI = [[22, 66, 33], [99, 44, 22]];

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
                "Oil": 0,
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
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
                "Hydro": 0.3,
                "Nuclear": 0.05
            }
        },
        "year2050": {
            "emmission": {
                "GreenHouseGas": 0.1,
                "ParticleMatter": 0.3,
                "NitrousOxide": 0
            },
            "electric": {
                "Solar": 0.2,
                "Wind": 0.45,
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
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
                "Oil": 0,
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
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
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
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
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
                "Oil": 0,
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
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
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
                "Coal": 0,
                "NaturalGas": 0,
                "Oil": 0,
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

var alreadyAnimated = false;

var heroCoordinates = {
    "la": {
        top: "-70%",
        left: "0%"
    },
    "london": {
        top: "-30%",
        left: "-100%"
    },
    "mumbai": {
        top: "-160%",
        left: "-190%"
    }
};

function initHero(data) {
    var whichSection = data.location;

    if (!alreadyAnimated) {

        TweenMax.fromTo(".hero", 1, {
            width: "100%",
            height: "100%"
        }, {
            width: "300%",
            height: "300%",
            left: heroCoordinates[whichSection].left,
            top: heroCoordinates[whichSection].top,
            ease: Power3.easeInOut,
            onComplete: initHeroAnimation
        });
    } else {
        TweenMax.to(".hero", 1, {
            left: heroCoordinates[whichSection].left,
            top: heroCoordinates[whichSection].top,
            ease: Power3.easeInOut
        });
    }
}

function initHeroAnimation() {
    alreadyAnimated = true;
}
"use strict";

function initParkingGraph(data) {

    var container = data.container;
    console.group("graph-debug");
    console.log(data.location);
    //  console.log("yo MTV");

    //document.querySelector(data.container).classList.add("graph-parking");


    //container.classList.add("graph-parking");


    var numberOfYear = document.querySelector(container + " #graph-content .nav").childElementCount;

    for (var i = 0; i < numberOfYear; i++) {
        document.querySelector(container + " #graph-content #nav-" + i).addEventListener("click", navClicked);
    }

    function navClicked(event) {
        var currentElement = document.querySelector(container + " #graph-content #nav-" + event.target.id);
        var currentID = this.id;
        var idIndex = currentID.substr(-1);
        //  console.log(idIndex);
        this.classList.add("selected");
        for (var i = 0; i < numberOfYear; i++) {
            if (i != Number(idIndex)) {
                document.querySelector(container + " #graph-content #nav-" + i).classList.remove("selected");
            }
        }

        populateGrid(idIndex);
    }

    function populateGrid(whichSet) {

        console.log(whichSet);
        var translateVariableIndex;
        if (whichSet == 0) {
            translateVariableIndex = "year2018";
        } else if (whichSet == 1) {
            translateVariableIndex = "year2035";
        } else if (whichSet == 2) {
            translateVariableIndex = "year2050";
        }

        // console.log(ParkingGraphData[data.location][translateVariableIndex].length);


        var numberOfIcons = document.querySelector(container + " #graph-content #grid");

        if (numberOfIcons.childElementCount > 0) {
            while (numberOfIcons.hasChildNodes()) {
                numberOfIcons.removeChild(numberOfIcons.firstChild);
            }
        }

        for (var i = 0; i < ParkingGraphData[data.location][translateVariableIndex].length; i++) {
            var currentIndex = ParkingGraphData[data.location][translateVariableIndex][i];
            var div = document.createElement("div");
            div.classList.add("icon");
            switch (currentIndex) {
                case 0:
                    div.classList.add("icon-tree");
                    break;
                case 1:
                    div.classList.add("icon-house");
                    break;
                case 2:
                    div.classList.add("icon-car");
                    break;
                default:
                    div.classList.add("");
            }

            var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
        }
    }

    function defaultSetting(whichOne) {

        populateGrid(whichOne);
        document.querySelector(container + " #graph-content #nav-" + whichOne).classList.add("selected");
    }

    defaultSetting(data.defaultindex);
    console.groupEnd("graph-debug");
}
"use strict";

function initEmmissionsGraph(data) {
        console.group("emmissions");
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

        function animateGraph() {

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
                var COAL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 3);
                var COAL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 4);
                var COAL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 5);
                var COAL_2018 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 0 + inTheMiddle + 6);

                var WIND_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 0);
                var GAS_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 1);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 2);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 3);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 4);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 5);
                var COAL_2035 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 1 + inTheMiddle + 6);

                var WIND_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 0);
                var GAS_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 1);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 2);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 3);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 4);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 5);
                var COAL_2050 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-" + 2 + inTheMiddle + 6);

                var barList = [GHG_2018, PM_2018, NO_2018, GHG_2035, PM_2035, NO_2035, GHG_2050, PM_2050, NO_2050, WIND_2018, GAS_2018, COAL_2018, WIND_2035, GAS_2035, COAL_2035, WIND_2050, GAS_2050, COAL_2050];

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

                // for (var i = 0; i < 3; i++) {
                //     for (var j = 0; j < 3; j++) {
                //         var tempItem = document.querySelector(prefix + whichOne + " .chart-container .chart .bar-sets .bar-content #bar-" + i + inTheMiddle + j);
                //         tempItem.style.backgroundColor = barColor;
                //         TweenMax.fromTo(tempItem,2, {scaleY:0},{scaleY:( data.data[dataindex][i][j]/100) ,ease:Power3.easeInOut});
                //     }
                // }
        }

        animateGraph();
}
"use strict";

function initVehicleCarges(data) {

  var GraphContainer = document.querySelector(data.container);
  GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule .range-slider .range-slider__range');
  sliderObject.setAttribute("min", data.start);
  sliderObject.setAttribute("value", data.start);
  sliderObject.setAttribute("max", data.end);

  var slider = $(data.container + ' .sliderModule .range-slider');
  var range = $(data.container + ' .sliderModule .range-slider .range-slider__range');
  var value = $(data.container + ' .sliderModule .range-slider .range-slider__range');

  var initialValue = data.start;
  var finalValue = data.end;

  var tl = new TimelineMax({ repeat: 0, repeatDelay: 1 });
  tl.pause();

  // console.log("what is slider: " ,slider);
  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  slider.each(function () {
    range.on('input', function () {
      // console.log(this.value);
      var tempIndexVal = this.value - initialValue;
      // console.log("index: ", tempIndexVal);

      tl.seek(tempIndexVal, true);
      var currentDot = document.getElementById(data.container + "-" + this.value);
    });
  });

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function drawDots(whichOne) {
    var eachDot = document.createElement('div');
    eachDot.className = 'dots';
    eachDot.setAttribute("id", data.container + "-" + whichOne);
    dotContainer.appendChild(eachDot);
    var x = getRandomArbitrary(0, 100);
    var y = getRandomArbitrary(0, 100);

    eachDot.style.top = x + "%";
    eachDot.style.left = y + "%";

    tl.add(TweenLite.fromTo(eachDot, 1, { alpha: 0 }, { alpha: 1 }));
  }

  for (var i = initialValue; i <= finalValue; i++) {
    drawDots(i);
  }
}
"use strict";

// @codekit-prepend "data.js"
// @codekit-prepend "hero.js"
// @codekit-prepend "graph-parking.js"
// @codekit-prepend "graph-emmissions.js"
// @codekit-prepend "vehicle-charge.js"


window.onload = function () {
    initParkingGraph({
        container: "#graph-parking-LA",
        location: "la",
        defaultindex: 0
    });

    initEmmissionsGraph({
        container: "#graph-emissions-LA",
        location: "la",
        data: emmissonsGraphData_LA
    });

    initVehicleCarges({
        container: "#graph-vehicle-charges-LA",
        location: "mumbai",
        start: 2018,
        end: 2050,
        data: vehicleCargesLA
    });

    // initHero({
    //     location: "la"
    // })

    $("#temp-nav #nav-la").click(function () {
        initHero({ location: "la" });
    });

    $("#temp-nav #nav-london").click(function () {
        initHero({ location: "london" });
    });

    $("#temp-nav #nav-mumbai").click(function () {
        initHero({ location: "mumbai" });
    });
};
