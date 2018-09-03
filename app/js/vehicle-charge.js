


// @codekit-prepend "data/vehicleCargesData.js"


function initVehicleCarges (data) {

  // local variables :
  var selectionQueue = [];
  var rangeSet = [];
  var NumberOfSegments = !!data.intervals ? data.intervals : 10;
  var currentSet = VehicleCargesData[data.location];


  document.querySelector('#graph-vehicle-charges-' + data.location + ' .contents').classList.add(data.location);

  var GraphContainer = document.querySelector(data.container);
  GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule #r-slider');
  sliderObject.classList.add('range-slider__range-' + data.location);

  sliderObject.setAttribute("min", !!data.start ? data.start : 1);
  sliderObject.setAttribute("value", !!data.start ? data.start : 1);
  sliderObject.setAttribute("max", !!data.end ? data.end : 99);


  var slider  = $(data.container + ' .sliderModule #r-slider');
  var range   = $(data.container + ' .sliderModule #r-slider');
  //var value   = $(data.container + ' .sliderModule #r-slider');

  
  var dotContainer = GraphContainer.querySelector(" .dotContainer");


  
  for (var i = 0; i < NumberOfSegments; i++) {
    var tempVal = Math.floor(currentSet.length/NumberOfSegments) * ( i  + 1 );
    rangeSet.push(tempVal);
  }

  slider.each(function(){  
  range.on('input', function(){

      hideHint ();

      console.log("what is the value selected: ", this.value);
      var valSel = this.value;

      for (var i = 0; i < NumberOfSegments; i++) {
        if ((valSel >= (currentSet.length / NumberOfSegments) * i ) && (valSel < (currentSet.length / (NumberOfSegments)) * (i+1))) {initiateVCanimation (i+1);}
      }   
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
      
      var tempWhichOne = Number(whichOne) - 1;
      selectionQueue.push(tempWhichOne);
     // var currentRange = rangeSet[tempWhichOne];


      function hideDotsWeDontNeedCurrently () {
        try {
          for (var i = rangeSet[tempWhichOne]; i < currentSet.length; i++ ){
            var tempDot = document.getElementById(data.container + "-" + i);
            TweenMax.to(tempDot,0.2,{
              delay:0.01 * i,
              alpha:0});
          }
        }
        catch (Error) { console.log(Error);}
     
      }

      function animateDotsWeNeedCurrently () {
        try {
          for (var i = 0; i < rangeSet[tempWhichOne]; i++ ){
            var tempDot = document.getElementById(data.container + "-" + i);
            TweenMax.to(tempDot, 0.05 ,{
              alpha:1,
              delay:0.01 * i,
            });
          }
        }
        catch (Error) { console.log(Error);}
      }

      animateDotsWeNeedCurrently ();
      hideDotsWeDontNeedCurrently ();

    }

    
    function drawDots (whichOne) {
      var eachDot = document.createElement('div');
      eachDot.className = 'dots';
      $('#graph-vehicle-charges-' + data.location + ' .dotContainer .dots').css('backgroundColor',colors[data.location]);
      eachDot.setAttribute("id",data.container + "-" + whichOne)
      dotContainer.appendChild(eachDot);
      eachDot.style.left = currentSet[whichOne][0] + "%";
      eachDot.style.top = currentSet[whichOne][1] + "%";
    }

    for (var i = 0; i < currentSet.length; i++) {drawDots(i);}

    $('#graph-vehicle-charges-' + data.location + ' .contents .legend .sample-dot').css('backgroundColor',colors[data.location]);
    document.querySelector('#graph-vehicle-charges-' + data.location + ' .dotContainer').classList.add("dotContainerPosition-" + data.location);
    initiateVCanimation (1);

}

  