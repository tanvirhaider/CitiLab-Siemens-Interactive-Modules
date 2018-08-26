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

    // @codekit-prepend "graph-emmissions.js"


};window.onload = function () {
    initEmmissionsGraph({
        container: "#graph-emissions-london",
        location: "london"
    });

    initEmmissionsGraph({
        container: "#graph-emissions-la",
        location: "la"
    });

    initEmmissionsGraph({
        container: "#graph-emissions-mumbai",
        location: "mumbai"
    });
};
