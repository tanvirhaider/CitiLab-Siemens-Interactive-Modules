



function initVehicleCarges (data) {

  var dataMultiplier = 30;
  var sampleData = [
    [50,50],
    [54,54],
    [58,58],
    [62,62],
    [66,66],
    [70,70],
    [55,47],
    [60,44],
    [66,41],
    [72,38],
    [43,51],
    [37,52],
    [31,53],
    [25,54],
    [18,55],
    [11,56],
    [49,45],
    [48,40],
    [47,35],
    [43,46],
    [46,29],
    [37,44],
    [31,42],
    [25,40],
    [19,38],
    [12,36],
    [47,55],
    [44,59],
    [41,63],
    [38,67],
    [45,23],
    [6,34],
    [35,71],
    [78,35],
    [74,74],
    [78,78],
    [82,82],
    [32,75],
    [29,79],
    [44,18],
    [4,57],
    [0,32],
    [43,13],
    [26,83],
    [84,32],
    [42,8],
    [23,87],
    [41,3],
    [90,29],
    [-3,58],
    [-6,30],
    [-10,59],
    [20,91],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50],
    [50,50]
  ];





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


  var slider  = $(data.container + ' .sliderModule #r-slider');
  var range   = $(data.container + ' .sliderModule #r-slider');
  var value   = $(data.container + ' .sliderModule #r-slider');

//  $('input[type=range]').css("background","green");

  var initialValue = data.start;
  var finalValue = data.end;

  var tl = new TimelineMax({repeat:0, repeatDelay:1});
  tl.pause();

 // console.log("what is slider: " ,slider);
  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  //console.log(slider);

  //slider.style.background = "green";
      
      
    slider.each(function(){  
      range.on('input', function(){
       // console.log(this.value);
        var tempIndexVal = (this.value - initialValue);
        //this.style.background = "green";

        tl.seek(tempIndexVal * dataMultiplier,true);
        var currentDot = document.getElementById(data.container + "-" + this.value);
      });
    });

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    

    function drawDots (whichOne) {
      var eachDot = document.createElement('div');
      eachDot.className = 'dots';
      $('.dots').css('backgroundColor',colors[data.location]);
      eachDot.setAttribute("id",data.container + "-" + whichOne)
      dotContainer.appendChild(eachDot);
      var x = getRandomArbitrary(0,100);
      var y = getRandomArbitrary(0,100);

      eachDot.style.top = sampleData[whichOne][0] + "%";
      eachDot.style.left = sampleData[whichOne][1] + "%";

      tl.add( TweenLite.fromTo(eachDot, 1, {alpha:0}, {alpha:1}) );
    }


    for (var i = 0; i <= (finalValue * dataMultiplier); i++) {
      drawDots(i);
    }

    
   
}

  