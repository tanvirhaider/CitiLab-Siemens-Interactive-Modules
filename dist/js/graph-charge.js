"use strict";

var VehicleCargesData = {
    "london": [[60, 37], [51, 46], [55, 42], [48, 38], [67, 42], [58, 32], [58, 47], [63, 51], [57, 55], [53, 34], [52, 23], [62, 58], [62, 35], [60, 45], [45, 35], [66, 39], [60, 66], [47, 33], [63, 29], [38, 26], [72, 62], [60, 33], [48, 15], [64, 59], [45, 58], [55, 23], [53, 25], [63, 24], [69, 35], [66, 35], [41, 34], [61, 73], [55, 32], [60, 53], [44, 27], [72, 50], [76, 16], [79, 58], [71, 37], [53, 49], [67, 67], [61, 25], [43, 64], [80, 48], [66, 57], [79, 41], [70, 29], [52, 42], [42, 56], [36, 54], [53, 59], [63, 8], [59, 36], [64, 40], [67, 62], [57, 44], [49, 34], [44, 54], [55, 10], [51, 62], [82, 22], [43, 13], [55, 49], [56, 57], [67, 13], [84, 37], [87, 17], [56, 61], [68, 31], [38, 58], [87, 55], [33, 54], [90, 59], [78, 14], [34, 33], [88, 64], [86, 24], [41, 41], [94, 65], [92, 28], [33, 20], [34, 8], [66, 29], [53, 46], [65, 51], [73, 34], [80, 20], [61, 20], [46, 29], [85, 10], [36, 61], [44, 10], [50, 16], [55, 56], [62, 16], [57, 35], [50, 25], [81, 51], [63, 61], [71, 24]],
    "mumbai": [[31.5, 78], [32.5, 77], [32, 76.5], [32.5, 75], [33, 74], [34, 74], [33, 72], [34, 71], [36, 70], [35, 69], [37, 73], [35, 67], [37, 77], [36, 65], [37, 63], [34.5, 64], [34, 60], [35, 76], [39, 70], [40, 67], [36, 40], [43, 37], [41, 50], [39, 48], [37.5, 49], [37, 58], [39, 57], [37, 55], [35, 56], [36, 43], [40, 25], [40, 44], [36, 22], [41, 44], [42, 20], [43, 28], [39, 38], [38, 33], [36, 73], [44, 44], [46, 53], [38, 66], [37, 60], [38, 44], [37, 65], [39, 57], [36, 59], [36, 15], [49, 24], [35, 58], [50, 45], [42, 52], [40, 14], [35, 72], [40, 16], [45, 13], [38, 51], [38, 26], [46, 20], [37, 12], [38, 64], [47, 35], [39, 22], [45, 24], [38, 40], [42, 12], [37, 20], [50, 7], [51, 16], [45, 57], [37, 5], [39, 2], [49, 13], [45, 30], [42, 1], [38, 73], [36, 40], [41, 36], [41, 6], [37, 54], [52, 44], [51, 42], [53, 3], [36, 78], [44, 15], [48, 38], [42, 4], [36, 9], [37, 71], [52, 6], [50, 19], [50, 38], [39, 8], [48, 44], [36, 17], [40, 65], [41, 17], [53, 17], [39, 10], [42, 44]],
    "la": [[26, 34], [29, 25], [24, 43], [28, 33], [23, 36], [25, 25], [22, 30], [20, 40], [21, 32], [27, 40], [15, 31], [20, 36], [13, 21], [17, 32], [16, 40], [38, 22], [37, 34], [30, 30], [32, 32], [34, 21], [27, 16], [26, 18], [25, 22], [24, 55], [28, 58], [30, 57], [32, 58], [28, 40], [34, 34], [23, 22], [37, 39], [27, 55], [34, 26], [21, 34], [29, 22], [22, 22], [29, 46], [24, 52], [25, 54], [22, 24], [15, 29], [16, 18], [19, 24], [29, 32], [39, 35], [23, 40], [23, 5], [26, 27], [24, 41], [29, 50], [41, 46], [23, 26], [30, 2], [23, 49], [25, 53], [35, 56], [43, 10], [36, 62], [20, 65], [32, 42], [49, 22], [47, 6], [50, 3], [46, 49], [47, 45], [47, 67], [18, 67], [43, 59], [42, 34], [42, 65], [45, 37], [30, 54], [39, 55], [34, 61], [34, 12], [47, 51], [19, 51], [32, 50], [38, 50], [38, 28], [26, 16], [12, 16], [24, 16], [24, 56], [34, 56], [32, 18], [46, 18], [18, 18], [18, 39], [31, 39], [35, 52], [31, 57], [47, 57], [47, 18], [20, 18], [20, 46], [40, 57], [29, 28], [16, 11], [25, 3]]
};
'use strict';

// @codekit-prepend "vehicleCargesData.js"


var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

function initVehicleCarges(data) {

  function trackEvent(_eventCategory, _eventAction, _eventLabel) {
    gtag('event', _eventAction, {
      'event_category': _eventCategory,
      'event_label': _eventLabel
    });
  }

  var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"

    // local variables :
  };var selectionQueue = [];
  var rangeSet = [];
  var NumberOfSegments = data.intervals ? data.intervals : 10;
  var currentSet = VehicleCargesData[data.location];
  var mapHolder = document.querySelector(data.container + " .mapholder");
  mapHolder.classList.add("vchargesBG-" + data.location);
  //console.log(mapHolder);


  document.querySelector('#graph-vehicle-charges-' + data.location + ' .contents').classList.add(data.location);

  var GraphContainer = document.querySelector(data.container);
  //GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule #r-slider');
  sliderObject.classList.add('range-slider__range-' + data.location);

  sliderObject.setAttribute("min", data.start ? data.start : 1);
  sliderObject.setAttribute("value", data.start ? data.start : 1);
  sliderObject.setAttribute("max", data.end ? data.end : 99);

  var slider = $(data.container + ' .sliderModule #r-slider');
  var range = $(data.container + ' .sliderModule #r-slider');
  //var value   = $(data.container + ' .sliderModule #r-slider');


  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  for (var i = 0; i < NumberOfSegments; i++) {
    var tempVal = Math.floor(currentSet.length / NumberOfSegments) * (i + 1);
    rangeSet.push(tempVal);
  }

  slider.each(function () {

    range.on('input', function () {

      hideHint();

      //console.log("what is the value selected: ", this.value);

      var valSel = this.value;
      trackEvent('vehicle-charges', 'Slider', data.location + 'slider-bar-value-for-' + valSel);

      for (var i = 0; i < NumberOfSegments; i++) {
        if (valSel >= currentSet.length / NumberOfSegments * i && valSel < currentSet.length / NumberOfSegments * (i + 1)) {
          initiateVCanimation(i + 1);
        }
      }
    });

    // this is needed for IE 11 only
    if (isIE11) {
      range.change('input', function () {

        hideHint();

        console.log("input change value: ", this.value);

        var valSel = this.value;
        trackEvent('vehicle-charges', 'Slider', data.location + 'slider-bar-value-for-' + valSel);

        for (var i = 0; i < NumberOfSegments; i++) {
          if (valSel >= currentSet.length / NumberOfSegments * i && valSel < currentSet.length / NumberOfSegments * (i + 1)) {
            initiateVCanimation(i + 1);
          }
        }
      });
    }
  });

  function hideHint() {
    var hintCopy = document.querySelector(data.container + " .sliderModule .hint");
    hintCopy.style.visibility = "hidden";
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initiateVCanimation(whichOne) {

    var tempWhichOne = Number(whichOne) - 1;
    selectionQueue.push(tempWhichOne);
    // var currentRange = rangeSet[tempWhichOne];


    function hideDotsWeDontNeedCurrently() {
      try {
        for (var i = rangeSet[tempWhichOne]; i < currentSet.length; i++) {
          var tempDot = document.getElementById(data.container + "-" + i);
          TweenMax.to(tempDot, 0.2, {
            delay: 0.01 * i,
            alpha: 0 });
        }
      } catch (Error) {
        console.log(Error);
      }
    }

    function animateDotsWeNeedCurrently() {
      try {
        for (var i = 0; i < rangeSet[tempWhichOne]; i++) {
          var tempDot = document.getElementById(data.container + "-" + i);
          TweenMax.to(tempDot, 0.05, {
            alpha: 1,
            delay: 0.01 * i
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
