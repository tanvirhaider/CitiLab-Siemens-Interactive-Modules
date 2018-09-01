"use strict";

var VehicleCargesData = {
    "london": [[60, 37], [51, 46], [55, 42], [48, 38], [67, 42], [58, 32], [58, 47], [63, 51], [57, 55], [53, 34], [52, 23], [62, 58], [62, 35], [60, 45], [45, 35], [66, 39], [60, 66], [47, 33], [63, 29], [38, 26], [72, 62], [60, 33], [48, 15], [64, 59], [45, 58], [55, 23], [53, 25], [63, 24], [69, 35], [66, 35], [41, 34], [61, 73], [55, 32], [60, 53], [44, 27], [72, 50], [76, 16], [79, 58], [71, 37], [53, 49], [67, 67], [61, 25], [43, 64], [80, 48], [66, 57], [79, 41], [70, 29], [52, 42], [42, 56], [36, 54], [53, 59], [63, 8], [59, 36], [64, 40], [67, 62], [57, 44], [49, 34], [44, 54], [55, 10], [51, 62], [82, 22], [43, 13], [55, 49], [56, 57], [67, 13], [84, 37], [87, 17], [56, 61], [68, 31], [38, 58], [87, 55], [33, 54], [90, 59], [78, 14], [34, 33], [88, 64], [86, 24], [41, 41], [94, 65], [92, 28], [33, 20], [34, 8], [66, 29], [53, 46], [65, 51], [73, 34], [80, 20], [61, 20], [46, 29], [85, 10], [36, 61], [44, 10], [50, 16], [55, 56], [62, 16], [57, 35], [50, 25], [81, 51], [63, 61], [71, 24]],
    "mumbai": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    "la": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
};
"use strict";

// @codekit-prepend "data/vehicleCargesData.js"


function initVehicleCarges(data) {
  console.log("data location: ", data.location);

  var currentSet = VehicleCargesData[data.location];
  var NumberOfSegments = 10;

  var GraphContainer = document.querySelector(data.container);
  GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule #r-slider');
  sliderObject.classList.add('range-slider__range-' + data.location);

  sliderObject.setAttribute("min", data.start);
  sliderObject.setAttribute("value", data.start);
  sliderObject.setAttribute("max", data.end);

  var slider = $(data.container + ' .sliderModule #r-slider');
  var range = $(data.container + ' .sliderModule #r-slider');
  //var value   = $(data.container + ' .sliderModule #r-slider');

  var selectionQueue = [];

  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  slider.each(function () {
    range.on('input', function () {

      hideHint();

      if (this.value < currentSet.length / NumberOfSegments) {
        initiateVCanimation(1);
      } else if (this.value >= currentSet.length / NumberOfSegments * 1 && this.value < currentSet.length / NumberOfSegments * 2) {
        initiateVCanimation(2);
      } else if (this.value >= currentSet.length / NumberOfSegments * 2 && this.value < currentSet.length / NumberOfSegments * 3) {
        initiateVCanimation(3);
      } else if (this.value >= currentSet.length / NumberOfSegments * 4 && this.value < currentSet.length / NumberOfSegments * 5) {
        initiateVCanimation(4);
      } else if (this.value >= currentSet.length / NumberOfSegments * 5 && this.value < currentSet.length / NumberOfSegments * 6) {
        initiateVCanimation(5);
      } else if (this.value >= currentSet.length / NumberOfSegments * 6 && this.value < currentSet.length / NumberOfSegments * 7) {
        initiateVCanimation(6);
      } else if (this.value >= currentSet.length / NumberOfSegments * 7 && this.value < currentSet.length / NumberOfSegments * 8) {
        initiateVCanimation(7);
      } else if (this.value >= currentSet.length / NumberOfSegments * 8 && this.value < currentSet.length / NumberOfSegments * 9) {
        initiateVCanimation(8);
      } else if (this.value >= currentSet.length / NumberOfSegments * 9 && this.value < currentSet.length / NumberOfSegments * 10) {
        initiateVCanimation(9);
      } else if (this.value >= currentSet.length / NumberOfSegments * 10) {
        initiateVCanimation(10);
      }
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

    var rangeSet = [currentSet.length / NumberOfSegments * 1, currentSet.length / NumberOfSegments * 2, currentSet.length / NumberOfSegments * 3, currentSet.length / NumberOfSegments * 4, currentSet.length / NumberOfSegments * 5, currentSet.length / NumberOfSegments * 6, currentSet.length / NumberOfSegments * 7, currentSet.length / NumberOfSegments * 8, currentSet.length / NumberOfSegments * 9, currentSet.length / NumberOfSegments * 10];

    var tempWhichOne = Number(whichOne) - 1;
    selectionQueue.push(tempWhichOne);
    // var currentRange = rangeSet[tempWhichOne];


    function hideDotsWeDontNeedCurrently() {
      try {
        for (var i = rangeSet[tempWhichOne]; i < currentSet.length; i++) {
          var tempDot = document.getElementById(data.container + "-" + i);
          TweenMax.set(tempDot, { alpha: 0 });
        }
      } catch (Error) {
        console.log(Error);
      }
    }

    function animateDotsWeNeedCurrently() {
      try {
        for (var i = 0; i < rangeSet[tempWhichOne]; i++) {
          var tempDot = document.getElementById(data.container + "-" + i);
          TweenMax.to(tempDot, 0.1, {
            alpha: 1,
            delay: 0.005 * i
          });
        }
      } catch (Error) {
        console.log(Error);
      }
    }

    animateDotsWeNeedCurrently();
    hideDotsWeDontNeedCurrently();
  }

  function drawDots(whichOne) {
    var eachDot = document.createElement('div');
    eachDot.className = 'dots';
    $('#graph-vehicle-charges-' + data.location + ' .dotContainer .dots').css('backgroundColor', colors[data.location]);
    eachDot.setAttribute("id", data.container + "-" + whichOne);
    dotContainer.appendChild(eachDot);
    eachDot.style.left = currentSet[whichOne][0] + "%";
    eachDot.style.top = currentSet[whichOne][1] + "%";
  }

  for (var i = 0; i < currentSet.length; i++) {
    drawDots(i);
  }

  $('#graph-vehicle-charges-' + data.location + ' .contents .legend .sample-dot').css('backgroundColor', colors[data.location]);
  document.querySelector('#graph-vehicle-charges-' + data.location + ' .dotContainer').classList.add("dotContainerPosition-" + data.location);
  initiateVCanimation(1);
}
"use strict";

var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"

    // @codekit-prepend "vehicle-charge.js"


};window.onload = function () {

    initVehicleCarges({
        container: "#graph-vehicle-charges-la",
        location: "la",
        start: 1,
        end: 99
    });

    initVehicleCarges({
        container: "#graph-vehicle-charges-london",
        location: "london",
        start: 1,
        end: 99
    });

    initVehicleCarges({
        container: "#graph-vehicle-charges-mumbai",
        location: "mumbai",
        start: 1,
        end: 99
    });
};
