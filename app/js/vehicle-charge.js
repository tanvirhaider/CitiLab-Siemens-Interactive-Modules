



function initVehicleCarges (data) {
  console.log("data location: ", data.location);
  var dataMultiplier = 30;
  var sampleData = [
    [50,50],
    [60,44],
    [43,46], 
    [66,66],
    [37,52],
    [58,58],
    [47,55],
    [55,47],
    [54,54],
    [66,41],
    [72,38],
    [31,42],
    [31,53],
    [43,51],
    [48,40],
    [44,59],
    [25,54],
    [18,55],
    [11,56],
    [49,45],
    [47,35],
    [62,62],
    [41,63],
    [46,29],
    [37,44],
    [25,40],
    [70,70],
    [38,67],
    [19,38],
    [12,36], 
    [45,23],
    [6,34],
    [35,71],
    [78,35],
    [74,74],
    [78,78],
    [32,75],
    [29,79],
    [44,18],
    [4,57],  // < this is 40
    [0,32],
    [82,82],
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


  var slider  = $(data.container + ' .sliderModule #r-slider');
  var range   = $(data.container + ' .sliderModule #r-slider');
  var value   = $(data.container + ' .sliderModule #r-slider');

//  $('input[type=range]').css("background","green");

  var initialValue = data.start;
  var finalValue = data.end;

  var selectionQueue = [];

  var tl = new TimelineMax({repeat:0, repeatDelay:1});
  tl.pause();

 // console.log("what is slider: " ,slider);
  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  //console.log(slider);

  //slider.style.background = "green";
      
      
    slider.each(function(){  
      range.on('input', function(){

        hideHint ();

     //   console.log("slider value: ",this.value);

      // if ((this.value == 1)||(this.value == 50) || (this.value == 99) ) {
        if (this.value < 50) {initiateVCanimation (1);}
        else if ((this.value >= 50) && (this.value < 99)) {initiateVCanimation (2);}
        else if (this.value == 99) {initiateVCanimation (3);}
       //}

       
       // var tempIndexVal = (this.value - initialValue);
        //this.style.background = "green";

       // tl.seek(tempIndexVal * dataMultiplier,true);
       // var currentDot = document.getElementById(data.container + "-" + this.value);
      });
    });


    function hideHint () {
      var hintCopy = document.querySelector(data.container + " .sliderModule .hint");
      hintCopy.style.visibility = "hidden";
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function initiateVCanimation (whichOne) {
      
      var rangeSet = [30,40,52];
      var tempWhichOne = Number(whichOne) - 1;
      selectionQueue.push(tempWhichOne);
      var currentRange = rangeSet[tempWhichOne];

      for (var i = 0; i < 52; i++) {
        var tempItem = document.getElementById(data.container + "-" + i);

        if (i <= currentRange) {
          if (selectionQueue.length > 1) {
            TweenMax.to(tempItem,0.1,{delay:0.02 * i,alpha:1});
          }
          else {
            TweenMax.fromTo(tempItem,0.1,{alpha:0},{delay:i*0.05,alpha:1});
          }          
        }
        else {
         // tempItem.style.opacity = "0";
          TweenMax.to(tempItem,0.5,{alpha:0});
        }
      }

    }

    

    function drawDots (whichOne) {
      var eachDot = document.createElement('div');
      eachDot.className = 'dots';
      console.log("color information: ",colors[data.location]);
      $('#graph-vehicle-charges-' + data.location + ' .dotContainer .dots').css('backgroundColor',colors[data.location]);
      eachDot.setAttribute("id",data.container + "-" + whichOne)
      dotContainer.appendChild(eachDot);
      //var x = getRandomArbitrary(0,100);
      //var y = getRandomArbitrary(0,100);

      eachDot.style.top = sampleData[whichOne][0] + "%";
      eachDot.style.left = sampleData[whichOne][1] + "%";

     // tl.add( TweenLite.fromTo(eachDot, 1, {alpha:0}, {alpha:1}) );
    }

   // for (var i = 0; i <= (finalValue * dataMultiplier); i++) 
    for (var i = 0; i <= 52; i++) 
    {
      drawDots(i);
    }


    $('#graph-vehicle-charges-' + data.location + ' .contents .legend .sample-dot').css('backgroundColor',colors[data.location]);
    initiateVCanimation (1);

    
   
}

  