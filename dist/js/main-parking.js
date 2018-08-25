'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//console.log("sprite is here ------- ");

var Sprite = function () {
    function Sprite(data) {
        _classCallCheck(this, Sprite);

        var obj = document.createElement('div');
        this.obj = obj;
        if (data.id) {
            obj.setAttribute('id', data.id);
        } else {
            obj.setAttribute('id', '');
        }

        if (data.class) {
            obj.className += data.class;
        }

        if (data.position) {
            obj.style.position = data.position;
        }

        if (data.display) {
            obj.style.display = data.display;
        }

        if (data.width) {
            obj.width = data.width;
            obj.style.width = data.width + 'px';
        } else {
            this.width = 0;
        }

        if (data.height) {
            obj.height = data.height;
            obj.style.height = data.height + 'px';
        } else {
            this.height = 0;
        }

        if (data.image) {
            var imgW = data.width + 'px';
            var imgH = data.height + 'px';

            var style = obj.style;
            style.width = imgW;
            style.height = imgH;
            style.backgroundImage = 'url(' + data.image + ')';
            style.backgroundRepeat = 'no-repeat';
            if (!data.cover) {
                style.backgroundSize = imgW + ' ' + imgH;
            }
        }

        if (data.button) {
            var btn = document.createElement("button");
            if (data.button.text) {
                btn.innerHTML = data.button.text;
            }
            obj.appendChild(btn);
        }

        // text: {content:"Read More",color:"white",size:"14px",width:"200px",lineHeight:"100px",fontFamily:"Arial"}

        if (data.text) {
            if (data.text.color) {
                obj.style.color = data.text.color;
            }
            if (data.text.fontSize) {
                obj.style.fontSize = data.text.fontSize;
            }
            if (data.text.fontFamily) {
                obj.style.fontFamily = data.text.fontFamily;
            }
            if (data.text.maxWidth) {
                obj.style.maxWidth = data.text.width;
            }
            if (data.text.lineHeight) {
                obj.style.lineHeight = data.text.lineHeight;
            }
            if (data.text.fontWeight) {
                obj.style.fontWeight = data.text.fontWeight;
            }
            obj.innerHTML = data.text.content;
        }

        if (data.color) {
            var imgW = data.width + 'px';
            var imgH = data.height + 'px';

            var style = obj.style;
            style.width = imgW;
            style.height = imgH;
            style.backgroundColor = data.color;
        }

        // gradient: {width:1024, height: 650, direction: "right", color1: "rgba(255,255,0,0)", color2: "rgba(255,10,0,1)" }

        if (data.gradient) {
            var style = this.obj.style;
            style.width = data.gradient.width + "px";
            style.height = data.gradient.height + "px";
            style.background = '-webkit-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
            style.background = '-o-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
            style.background = '-moz-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
            style.background = 'linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
        }

        if (data.container) {
            data.container.appendChild(obj);
        }

        if (data.border) {
            var borderObj = document.createElement('div');
            borderObj.setAttribute('id', data.id + "-Border");
            borderObj.style.width = data.width + 'px';
            borderObj.style.height = data.height + 'px';
            borderObj.style.position = 'absolute';
            borderObj.style.margin = '0px';
            borderObj.style.zIndex = 999999;
            borderObj.style.border = data.border.thickness + "px solid " + data.border.color + "";
            borderObj.style.boxSizing = "border-box";
            borderObj.style.pointerEvents = "none";
            if (data.border.radius) {
                borderObj.style.borderRadius = data.border.radius;
            }
            obj.appendChild(borderObj);
        }

        if (data.click) {
            var obj = this.obj;
            obj.addEventListener('click', data.click.function, false);
            obj.style.cursor = "pointer";
        }

        if (data.over) {
            var obj = this.obj;
            obj.addEventListener('mouseover', data.over.function, false);
            obj.style.cursor = "pointer";
        }

        if (data.out) {
            var obj = this.obj;
            obj.addEventListener('mouseout', data.out.function, false);
            obj.style.cursor = "pointer";
        }

        if (data.mousemove) {
            var obj = this.obj;
            obj.addEventListener('mousemove', data.mousemove.function, false);
            // obj.style.cursor="pointer";
        }

        var xval = 0;
        var yval = 0;
        // var rotationval = 0;

        if (data.x) {
            xval = data.x;
        }
        if (data.y) {
            yval = data.y;
        }
        if (data.z) {
            var style = obj.style;
            style.zIndex = data.z;
        }

        if (data.x || data.y) {
            obj.style.transform = "translate(" + xval + "px," + yval + "px)";
        }

        if (data.mask) {
            obj.style.clip = 'rect(' + data.mask.y + 'px,' + (data.mask.x + data.mask.width) + 'px,' + (data.mask.y + data.mask.height) + 'px,' + data.mask.x + 'px)';
        }
    }

    _createClass(Sprite, [{
        key: 'click',
        value: function click(f) {
            var obj = this.obj;
            obj.addEventListener('click', f);
            obj.style.cursor = "pointer";
        }
    }, {
        key: 'over',
        value: function over(func) {
            var obj = this.obj;
            obj.addEventListener('mouseover', func);
            obj.style.cursor = "pointer";
        }
    }, {
        key: 'out',
        value: function out(func) {
            var obj = this.obj;
            obj.addEventListener('mousemove', func);
        }
    }]);

    return Sprite;
}();
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

// var emmissonsGraphData_LA = [
//     [[10,30,100],[33,30,55],[10,55,22]],
//     [[66,11,100],[10,30,22],[10,30,66]]
// ];

// var emmissonsGraphData_LONDON = [
//     [40,20,50],
//     [23,55,66]
// ];

// var emmissonsGraphData_MUMBAI = [
//     [22,66,33],
//     [99,44,22]
// ];


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

// @codekit-prepend "sprite.js"
// @codekit-prepend "data.js"
// @codekit-prepend "graph-parking.js"


window.onload = function () {
    initParkingGraph({
        container: "#graph-parking-la",
        location: "la",
        defaultindex: 0
    });

    initParkingGraph({
        container: "#graph-parking-london",
        location: "london",
        defaultindex: 0
    });

    initParkingGraph({
        container: "#graph-parking-mumbai",
        location: "mumbai",
        defaultindex: 0
    });
};
