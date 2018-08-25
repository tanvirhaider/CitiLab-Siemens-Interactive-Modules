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

function initVehicleCarges(data) {
  console.log("data location: ", data.location);
  var dataMultiplier = 30;
  var sampleData = [[50, 50], [60, 44], [43, 46], [66, 66], [37, 52], [58, 58], [47, 55], [55, 47], [54, 54], [66, 41], [72, 38], [31, 42], [31, 53], [43, 51], [48, 40], [44, 59], [25, 54], [18, 55], [11, 56], [49, 45], [47, 35], [62, 62], [41, 63], [46, 29], [37, 44], [25, 40], [70, 70], [38, 67], [19, 38], [12, 36], [45, 23], [6, 34], [35, 71], [78, 35], [74, 74], [78, 78], [82, 82], [32, 75], [29, 79], [44, 18], [4, 57], [0, 32], [43, 13], [26, 83], [84, 32], [42, 8], [23, 87], [41, 3], [90, 29], [-3, 58], [-6, 30], [-10, 59], [20, 91], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50], [50, 50]];

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

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initiateVCanimation(whichOne) {

    var rangeSet = [30, 40, 52];
    var tempWhichOne = Number(whichOne) - 1;
    selectionQueue.push(tempWhichOne);
    var currentRange = rangeSet[tempWhichOne];

    // console.log("initiate vc animation: ", whichOne, typeof whichOne);

    // if (selectionQueue.length <= 1) {
    //   for (var i = 0; i <= 52; i++) {
    //     var tempItem = document.getElementById(data.container + "-" + i);
    //     tempItem.style.opacity = "0";
    //     console.log(tempItem);
    //    }
    // }
    // else {
    //   var startVal = selectionQueue[tempWhichOne];
    //   var endValue = selectionQueue[selectionQueue.length - 1];

    //   if (startVal > endValue) {
    //     for (var i = endValue; i <= startVal; i++) {
    //       var tempItem = document.getElementById(data.container + "-" + i);
    //       tempItem.style.opacity = "0";
    //       console.log(tempItem);
    //      }
    //   }
    //   else {
    //     for (var i = startVal; i <= endValue; i++) {
    //       var tempItem = document.getElementById(data.container + "-" + i);
    //       tempItem.style.opacity = "0";
    //       console.log(tempItem);
    //      }
    //   }

    // }

    // console.log("current value: ", selectionQueue[selectionQueue.length - 1]);
    //  console.log("length of values: ",selectionQueue.length );

    for (var i = 0; i < 52; i++) {
      var tempItem = document.getElementById(data.container + "-" + i);

      if (i <= currentRange) {
        if (selectionQueue.length > 1) {
          TweenMax.to(tempItem, 0.5, { alpha: 1 });
        } else {
          TweenMax.fromTo(tempItem, 0.5, { alpha: 0 }, { delay: i * 0.05, alpha: 1 });
        }
      } else {
        // tempItem.style.opacity = "0";
        TweenMax.to(tempItem, 0.5, { alpha: 0 });
      }
    }

    // for (var i = 0; i <= currentRange; i++) {
    //   var tempItem = document.getElementById(data.container + "-" + i);
    //   TweenMax.fromTo(tempItem,0.5,{alpha:0},{delay:i*0.05,alpha:1});
    //  }

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

  initiateVCanimation(1);
}
"use strict";

var colors = {
    mumbai: "#009999",
    la: "#ff2466",
    london: "#0e6ce5"

    // @codekit-prepend "sprite.js"
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
