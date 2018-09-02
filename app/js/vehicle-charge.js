


// @codekit-prepend "data/vehicleCargesData.js"


function initVehicleCarges (data) {
  console.log("data location: ", data.location);

  document.querySelector('#graph-vehicle-charges-' + data.location + ' .contents').classList.add(data.location);

  var currentSet = VehicleCargesData[data.location];
  var NumberOfSegments = 10;

  var GraphContainer = document.querySelector(data.container);
  GraphContainer.classList.add("vchargesBG-" + data.location);

  var sliderObject = GraphContainer.querySelector(' .sliderModule #r-slider');
  sliderObject.classList.add('range-slider__range-' + data.location);

  sliderObject.setAttribute("min", data.start);
  sliderObject.setAttribute("value", data.start);
  sliderObject.setAttribute("max", data.end);


  var slider  = $(data.container + ' .sliderModule #r-slider');
  var range   = $(data.container + ' .sliderModule #r-slider');
  //var value   = $(data.container + ' .sliderModule #r-slider');

  var selectionQueue = [];

  var dotContainer = GraphContainer.querySelector(" .dotContainer");

  var rangeSet = [
    Math.floor(currentSet.length/NumberOfSegments) * 1, 
    Math.floor(currentSet.length/NumberOfSegments) * 2,
    Math.floor(currentSet.length/NumberOfSegments) * 3,
    Math.floor(currentSet.length/NumberOfSegments) * 4,
    Math.floor(currentSet.length/NumberOfSegments) * 5,
    Math.floor(currentSet.length/NumberOfSegments) * 6,
    Math.floor(currentSet.length/NumberOfSegments) * 7,
    Math.floor(currentSet.length/NumberOfSegments) * 8,
    Math.floor(currentSet.length/NumberOfSegments) * 9,
    Math.floor(currentSet.length/NumberOfSegments) * 10
  ];

    slider.each(function(){  
    range.on('input', function(){

        hideHint ();

        console.log("what is the value selected: ", this.value);
        var valSel = this.value;

        for (var i = 0; i < NumberOfSegments; i++) {
          if ((valSel >= (currentSet.length / NumberOfSegments) * i ) && (valSel < (currentSet.length / (NumberOfSegments)) * (i+1))) {initiateVCanimation (i+1);}
        }

        // if (valSel < currentSet.length/NumberOfSegments) {initiateVCanimation (1);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*1 ) && (valSel < (currentSet.length/NumberOfSegments)*2)) {initiateVCanimation (2);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*2 ) && (valSel < (currentSet.length/NumberOfSegments)*3)) {initiateVCanimation (3);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*4 ) && (valSel < (currentSet.length/NumberOfSegments)*5)) {initiateVCanimation (4);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*5 ) && (valSel < (currentSet.length/NumberOfSegments)*6)) {initiateVCanimation (5);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*6 ) && (valSel < (currentSet.length/NumberOfSegments)*7)) {initiateVCanimation (6);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*7 ) && (valSel < (currentSet.length/NumberOfSegments)*8)) {initiateVCanimation (7);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*8 ) && (valSel < (currentSet.length/NumberOfSegments)*9)) {initiateVCanimation (8);}
        // else if ((valSel >= (currentSet.length/NumberOfSegments)*9 ) && (valSel < (currentSet.length/NumberOfSegments)*10)) {initiateVCanimation (9);}
        // else if (valSel >= (currentSet.length/NumberOfSegments)*10) {initiateVCanimation (10);}
   
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
            TweenMax.set(tempDot,{alpha:0});
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
              delay:0.005 * i,
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

  