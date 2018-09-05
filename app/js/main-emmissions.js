


var EmmissionGraphData = {
    "london": {
        "year2018": {
            "emmission":{
                "GreenHouseGas": 0.6,
                "ParticleMatter": 1,
                "NitrousOxide": 0.9
            },
            "electric": {
                "Solar": 0.5,
                "Wind": 0.1,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.1,
                "Nuclear":0.05
            }
        },
        "year2035": {
            "emmission":{
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.6,
                "NitrousOxide": 0.5
            },
            "electric": {
                "Solar": 0.7,
                "Wind": 0.54,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.4,
                "Nuclear":0.10
            }
        },
        "year2050": {
            "emmission":{
                "GreenHouseGas": 0.1,
                "ParticleMatter": 0.3,
                "NitrousOxide": 0.01
            },
            "electric": {
                "Solar": 0.9,
                "Wind": 1.0,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.7,
                "Nuclear":0.15
            }
        }
    },
    "mumbai": {
        "year2018": {
            "emmission":{
                "GreenHouseGas": 0.6,
                "ParticleMatter": 1,
                "NitrousOxide": 1.0
            },
            "electric": {
                "Solar": 0.5,
                "Wind": 0.1,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.1,
                "Nuclear":0.05
            }
        },
        "year2035": {
            "emmission":{
                "GreenHouseGas": 0.4,
                "ParticleMatter": 0.8,
                "NitrousOxide": 0.6
            },
            "electric": {
                "Solar": 0.7,
                "Wind": 0.46,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.4,
                "Nuclear":0.1
            }
        },
        "year2050": {
            "emmission":{
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.5,
                "NitrousOxide": 0.3
            },
            "electric": {
                "Solar": 0.9,
                "Wind": 0.91,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.7,
                "Nuclear":0.15
            }
        }
    },
    "la": {
        "year2018": {
            "emmission":{
                "GreenHouseGas": 0.5,
                "ParticleMatter": 1,
                "NitrousOxide": 1.0
            },
            "electric": {
                "Solar": 0.05,
                "Wind": 0.1,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.1,
                "Nuclear":0.05
            }
        },
        "year2035": {
            "emmission":{
                "GreenHouseGas": 0.3,
                "ParticleMatter": 0.8,
                "NitrousOxide": 0.6
            }, 
            "electric": {
                "Solar": 0.25,
                "Wind": 0.54,
                "Coal": 0.01,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.4,
                "Nuclear":0.1
            }
        },
        "year2050": {
            "emmission":{
                "GreenHouseGas": 0.2,
                "ParticleMatter": 0.5,
                "NitrousOxide": 0.2
            },
            "electric": {
                "Solar": 0.45,
                "Wind": 1.0,
                "Coal": 0.25,
                "NaturalGas":0.45,
                "Oil":0.01,
                "Hydro":0.7,
                "Nuclear":0.15
            }
        }
    }
}



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