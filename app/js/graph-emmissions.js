



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



   

function initEmmissionsGraph (data) {

    function trackEvent (_eventCategory, _eventAction, _eventLabel) {
        gtag('event', _eventAction , {
          'event_category': _eventCategory,
          'event_label': _eventLabel
        });
    }
    
    console.group("emmissions-" + data.location);
    console.log(data.container);
    console.log("emmission location: " ,data.location);

    var electricSourceList = [
        "pm",
        "no",
        "ghg",
        "pm",
        "no",
        "ghg",
        "pm",
        "no",
        "ghg",
        "oil",
        "nuclear",
        "coal",
        "gas",
        "hydro",
        "solar",
        "wind",
        "oil",
        "nuclear",
        "coal",
        "gas",
        "hydro",
        "solar",
        "wind",
        "oil",
        "nuclear",
        "coal",
        "gas",
        "hydro",
        "solar",
        "wind"
    ];

    var boxElectricList = [
        "oil",
        "nuclear",
        "coal",
        "gas",
        "hydro",
        "solar",
        "wind"
    ];

    var boxEmissionList = [
        "pm",
        "no",
        "ghg"
    ];


    var barColor;

    if (data.location == "la") {
        barColor = "#3c7bcd";
    }
    else if (data.location == "london") {
        barColor = "#0e9111";
    }
    else if (data.location == "mumbai") {
        barColor = "#d14334";
    }


    var prefix = data.container + " .content ";
    var inTheMiddle = " #bar-gas-";
  

    function animateGraph (where) {
        var barData = [];

        // Emmissions Bars
        var Em_2018_0 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 0 + inTheMiddle + 0);
        var Em_2018_1 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 0 + inTheMiddle + 1);
        var Em_2018_2 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 0 + inTheMiddle + 2);

        var Em_2035_0 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 1 + inTheMiddle + 0);
        var Em_2035_1 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 1 + inTheMiddle + 1);
        var Em_2035_2 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 1 + inTheMiddle + 2);

        var Em_2050_0 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 2 + inTheMiddle + 0);
        var Em_2050_1 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 2 + inTheMiddle + 1);
        var Em_2050_2 = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"   + 2 + inTheMiddle + 2);


        // Electric Bars
        var El_2018_0 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 0);
        var El_2018_1 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 1);
        var El_2018_2 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 2);
        var El_2018_3 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 3);
        var El_2018_4 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 4);
        var El_2018_5 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 5);
        var El_2018_6 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 0 + inTheMiddle + 6);

        var El_2035_0 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 0);
        var El_2035_1 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 1);
        var El_2035_2 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 2);
        var El_2035_3 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 3);
        var El_2035_4 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 4);
        var El_2035_5 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 5);
        var El_2035_6 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 1 + inTheMiddle + 6);

        var El_2050_0 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 0);
        var El_2050_1 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 1);
        var El_2050_2 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 2);
        var El_2050_3 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 3);
        var El_2050_4 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 4);
        var El_2050_5 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 5);
        var El_2050_6 = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + 2 + inTheMiddle + 6);

        var barList = [
            Em_2018_0,
            Em_2018_1,
            Em_2018_2, 
            
            Em_2035_0,
            Em_2035_1, 
            Em_2035_2,
            
            Em_2050_0,
            Em_2050_1,
            Em_2050_2,
            
            El_2018_0,
            El_2018_1,
            El_2018_2,
            El_2018_3,
            El_2018_4, 
            El_2018_5, 
            El_2018_6,

            El_2035_0,
            El_2035_1, 
            El_2035_2,
            El_2035_3,
            El_2035_4,
            El_2035_5,
            El_2035_6,

            El_2050_0, 
            El_2050_1, 
            El_2050_2,
            El_2050_3,
            El_2050_4,
            El_2050_5,
            El_2050_6 
        ];

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
            barData = [
                Mumbai_2018_PM,
                Mumbai_2018_NO, 
                Mumbai_2018_GHG,
                
                Mumbai_2030_PM,
                Mumbai_2035_NO,
                Mumbai_2035_GHG,
               
                Mumbai_2050_PM,
                Mumbai_2050_NO,
                Mumbai_2050_GHG,
               
                Mumbai_2018_OIL,
                Mumbai_2018_NUCLEAR,
                Mumbai_2018_COAL,
                Mumbai_2018_NGAS,
                Mumbai_2018_HYDRO,
                Mumbai_2018_SOLAR,
                Mumbai_2018_WIND,

                Mumbai_2035_OIL,
                Mumbai_2035_NUCLEAR,
                Mumbai_2035_COAL,
                Mumbai_2035_NGAS,
                Mumbai_2035_HYDRO,
                Mumbai_2035_SOLAR,
                Mumbai_2035_WIND,

                Mumbai_2050_OIL,
                Mumbai_2050_NUCLEAR,
                Mumbai_2050_COAL,
                Mumbai_2050_NGAS,
                Mumbai_2050_HYDRO,
                Mumbai_2050_SOLAR,
                Mumbai_2050_WIND
            ];
         }

         else if (where == "london") {

            barData = [
                London_2018_PM,
                London_2018_NO, 
                London_2018_GHG,
               
                London_2030_PM,
                London_2035_NO,
                London_2035_GHG,
               
                London_2050_PM,
                London_2050_NO,
                London_2050_GHG,
               
                London_2018_OIL,
                London_2018_NUCLEAR,
                London_2018_COAL,
                London_2018_NGAS,
                London_2018_HYDRO,
                London_2018_SOLAR,
                London_2018_WIND,

                London_2035_OIL,
                London_2035_NUCLEAR,
                London_2035_COAL,
                London_2035_NGAS,
                London_2035_HYDRO,
                London_2035_SOLAR,
                London_2035_WIND,

                London_2050_OIL,
                London_2050_NUCLEAR,
                London_2050_COAL,
                London_2050_NGAS,
                London_2050_HYDRO,
                London_2050_SOLAR,
                London_2050_WIND
            ];

         }

         else if (where == "la") {
            barData = [
                La_2018_PM,
                La_2018_NO, 
                La_2018_GHG,
              
                La_2030_PM,
                La_2035_NO,
                La_2035_GHG,
               
                La_2050_PM,
                La_2050_NO,
                La_2050_GHG,
              
                La_2018_OIL,
                La_2018_NUCLEAR,
                La_2018_COAL,
                La_2018_NGAS,
                La_2018_HYDRO,
                La_2018_SOLAR,
                La_2018_WIND,

                La_2035_OIL,
                La_2035_NUCLEAR,
                La_2035_COAL,
                La_2035_NGAS,
                La_2035_HYDRO,
                La_2035_SOLAR,
                La_2035_WIND,

                La_2050_OIL,
                La_2050_NUCLEAR,
                La_2050_COAL,
                La_2050_NGAS,
                La_2050_HYDRO,
                La_2050_SOLAR,
                La_2050_WIND
            ];
         }


        //  $( document ).on( "mousemove", function( event ) {
        //     $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
        //   });


         

         for ( var i = 0; i < barList.length; i++) {
               // var theBar = barList[i].querySelector(".actual-bar");
                var theBar = barList[i];
                var className = "color-" + electricSourceList[i] + "-" + data.location;
               // console.log("class name: ", className, i, theBar);
                theBar.classList.add(className);
              //  theBar.classList.add("small-bar-color-" + data.location);
                TweenMax.fromTo(theBar,2, {height:"0%"},{height:barData[i] * 100 + "%" ,ease:Power3.easeInOut});
                var theBox =  $( theBar ).find( "span" );

            // $(barList[i])
            // .mouseover(function() {
            //    var theBox =  $( this ).find( "span" );
            //    $( theBox ).css("display", "block");
            //    var thisItem = event.currentTarget.parentElement.parentElement.parentElement.parentElement;
            //    var tooltip = thisItem.querySelector(".tooltip");
            //    console.log("section check: ", thisItem);
            //    tooltip.style.display = "block";

            // })
            // .mouseout(function() {
            //     var theBox =  $( this ).find( "span" );
            //     $( theBox ).css("display", "none");
            //     console.log("mtv out");
            //     var thisItem = event.currentTarget.parentElement.parentElement.parentElement.parentElement;
            //     var tooltip = thisItem.querySelector(".tooltip");
            //     tooltip.style.display = "none";
            // });
    

         }

    }

    animateGraph (data.location);

    var numberOfGEitems = document.querySelector(data.container + " .content " + ".electricity" + " .chart-container .legends").children.length;
    var numberOfEMitems = document.querySelector(data.container + " .content " + ".emmissions" + " .chart-container .legends").children.length;


    for (var i = 0; i < numberOfGEitems; i++) {
        var tempchild = document.querySelector(data.container + " .content " + ".electricity" + " .chart-container .legends").children[i];
       // console.log(tempchild);
        tempchild.addEventListener("mouseover", whenHoverElectric);
        tempchild.addEventListener("mouseout", whenHoverOutElectric);
        tempchild.classList.add("each-legend-" + data.location);
        tempchild.classList.add("box-" +  boxElectricList[i] + "-" +  data.location);
        // boxElectricList
    }

    for (var i = 0; i < numberOfEMitems; i++) {
        var tempchild = document.querySelector(data.container + " .content " + ".emmissions" + " .chart-container .legends").children[i];

        tempchild.addEventListener("mouseover", whenHoverEmmission);
        tempchild.addEventListener("mouseout", whenHoverOutEmmission);
        tempchild.classList.add("each-legend-" + data.location);
        tempchild.classList.add("box-" +  boxEmissionList[i] + "-" +  data.location);
        // boxEmissionList

       // console.log("items -- ", i);
    }

    function whenHoverElectric (event) {
        var currentTarget = event.currentTarget.id;
        var res = currentTarget.substr(-1);
        trackEvent('Emission-chart', 'Hover', 'Electricity-bar-' + data.location + "-" + res);
        for (var i = 0; i < 3; i++) {
            var tempObj = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + i + inTheMiddle + res);
            tempObj.classList.add("active");
            tempObj.classList.remove("small-bar");
        }
    }

    function whenHoverOutElectric (event) {
        var currentTarget = event.currentTarget.id;
        var res = currentTarget.substr(-1);

    
        for (var i = 0; i < 3; i++) {
            var tempObj = document.querySelector(prefix + ".electricity" + " .chart-container .chart .bar-sets .bar-content #bar-"  + i + inTheMiddle + res);
            tempObj.classList.remove("active");
            tempObj.classList.add("small-bar");
        }
    }

    function whenHoverEmmission (event) {
        var currentTarget = event.currentTarget.id;
        var res = currentTarget.substr(-1);

        trackEvent('Emission-chart', 'Hover', 'Emission-bar-' + data.location + "-" + res);

        for (var i = 0; i < 3; i++) {
            var tempObj = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"  + i + inTheMiddle + res);
            tempObj.classList.add("active");
            tempObj.classList.remove("small-bar");
        }
    }

    function whenHoverOutEmmission (event) {
        var currentTarget = event.currentTarget.id;
        var res = currentTarget.substr(-1);

        for (var i = 0; i < 3; i++) {
            var tempObj = document.querySelector(prefix + ".emmissions" + " .chart-container .chart .bar-sets .bar-content #bar-"  + i + inTheMiddle + res);
            tempObj.classList.remove("active");
            tempObj.classList.add("small-bar");
        }
    }
     
}


