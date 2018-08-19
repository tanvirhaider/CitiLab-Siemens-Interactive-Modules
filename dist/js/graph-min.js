"use strict";

var ParkingGraphData = [[2, 1, 0, 2, 0, 0, 1, 1, 0, 0, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 2, 1, 0, 2, 2, 1, 0, 1, 0, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 0, 2], [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 2, 2, 1, 0, 1, 0, 0, 1, 1, 0, 2, 1, 1, 1, 0, 2, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0]];
"use strict";

var emmissonsGraphData_LA = [[[10, 30, 100], [33, 30, 55], [10, 55, 22]], [[66, 11, 100], [10, 30, 22], [10, 30, 66]]];

var emmissonsGraphData_LONDON = [[40, 20, 50], [23, 55, 66]];

var emmissonsGraphData_MUMBAI = [[22, 66, 33], [99, 44, 22]];
"use strict";

var vehicleCargesLA = [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]];


// @codekit-prepend "data/parkingGraphData.js"
// @codekit-prepend "data/emmissionsGraphData.js"
// @codekit-prepend "data/vehicleCargesData.js"
"use strict";
"use strict";

function initParkingGraph(data) {

    var container = data.container;
    console.group("graph-debug");
    console.log("yo MTV");

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

        var numberOfIcons = document.querySelector(container + " #graph-content #grid");

        if (numberOfIcons.childElementCount > 0) {
            while (numberOfIcons.hasChildNodes()) {
                numberOfIcons.removeChild(numberOfIcons.firstChild);
            }
        }

        for (var i = 0; i < 50; i++) {
            var currentIndex = data.data[whichSet][i];
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
    console.log(data.data);

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

    function animateGraph(dataindex, whichOne) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var tempItem = document.querySelector(prefix + whichOne + " .chart-container .chart .bar-sets .bar-content #bar-" + i + inTheMiddle + j);
                tempItem.style.backgroundColor = barColor;
                TweenMax.fromTo(tempItem, 2, { scaleY: 0 }, { scaleY: data.data[dataindex][i][j] / 100, ease: Power3.easeInOut });
            }

            //  var box = document.querySelector(prefix + whichOne + " .chart-container .legends #box-" + i).style("::before","backgroundColor: pink");
            //   var beforeBox = box.querySelector("::before");
            //var color = window.getComputedStyle(document.querySelector(prefix + whichOne + " .chart-container .legends #box-" + i), ':before');
            //   console.log(box.style);
        }
    }

    animateGraph(0, ".emmissions");
    animateGraph(1, ".electricity");
}
"use strict";

function initVehicleCarges(data) {

  var sliderObject = document.querySelector(data.container + ' .sliderModule .range-slider .range-slider__range');
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

  console.log("what is slider: ", slider);
  var dotContainer = document.querySelector(data.container + " .dotContainer");

  slider.each(function () {

    // value.each(function(){
    //   var value = $(this).prev().attr('value');
    //   $(this).html(value);
    // });

    range.on('input', function () {
      // $(this).next(value).html(this.value);
      console.log(this.value);

      var tempIndexVal = this.value - initialValue;
      console.log("index: ", tempIndexVal);

      tl.seek(tempIndexVal, true);

      var currentDot = document.getElementById(data.container + "-" + this.value);
      //console.log("selectedDot: ", data.container + "-" + this.value);
      // currentDot.style.visibility = "visible";

      // #graph-vehicle-charges-LA-40
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

  //tl.add( TweenLite.to(element, 1, {top:50}) );
  //tl.add( TweenLite.to(element, 1, {opacity:0}) );


  for (var i = initialValue; i <= finalValue; i++) {
    drawDots(i);
  }
}
"use strict";

// @codekit-prepend "data.js"
// @codekit-prepend "graph-parking.js"
// @codekit-prepend "graph-emmissions.js"
// @codekit-prepend "vehicle-charge.js"


window.onload = function () {
    initParkingGraph({
        container: "#graph-parking-LA",
        location: "la",
        defaultindex: 0,
        data: ParkingGraphData
    });

    initEmmissionsGraph({
        container: "#graph-emissions-LA",
        location: "la",
        data: emmissonsGraphData_LA
    });

    initVehicleCarges({
        container: "#graph-vehicle-charges-LA",
        location: "la",
        start: 2018,
        end: 2050,
        data: vehicleCargesLA
    });
};
