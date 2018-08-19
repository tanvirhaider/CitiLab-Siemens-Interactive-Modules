



function initVehicleCarges (data) {

  var sliderObject = document.querySelector(data.container + ' .sliderModule .range-slider .range-slider__range');
  sliderObject.setAttribute("min", data.start);
  sliderObject.setAttribute("value", data.start);
  sliderObject.setAttribute("max", data.end);


  var slider  = $(data.container + ' .sliderModule .range-slider');
  var range   = $(data.container + ' .sliderModule .range-slider .range-slider__range');
  var value   = $(data.container + ' .sliderModule .range-slider .range-slider__range');

  var initialValue = data.start;
  var finalValue = data.end;

  var tl = new TimelineMax({repeat:0, repeatDelay:1});
  tl.pause();

  console.log("what is slider: " ,slider);
  var dotContainer = document.querySelector(data.container + " .dotContainer");
      
      
    slider.each(function(){
  
      // value.each(function(){
      //   var value = $(this).prev().attr('value');
      //   $(this).html(value);
      // });
  
      range.on('input', function(){
       // $(this).next(value).html(this.value);
        console.log(this.value);

        var tempIndexVal = (this.value - initialValue);
        console.log("index: ", tempIndexVal);

        tl.seek(tempIndexVal,true);

        var currentDot = document.getElementById(data.container + "-" + this.value);
        //console.log("selectedDot: ", data.container + "-" + this.value);
       // currentDot.style.visibility = "visible";

       // #graph-vehicle-charges-LA-40
      });
    });

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    

    function drawDots (whichOne) {
      var eachDot = document.createElement('div');
      eachDot.className = 'dots';
      eachDot.setAttribute("id",data.container + "-" + whichOne)
      dotContainer.appendChild(eachDot);
      var x = getRandomArbitrary(0,100);
      var y = getRandomArbitrary(0,100);

      eachDot.style.top = x + "%";
      eachDot.style.left = y + "%";

      tl.add( TweenLite.fromTo(eachDot, 1, {alpha:0}, {alpha:1}) );
    }


    

//tl.add( TweenLite.to(element, 1, {top:50}) );
//tl.add( TweenLite.to(element, 1, {opacity:0}) );


    for (var i = initialValue; i <= finalValue; i++) {
      drawDots(i);
    }

    
   
}

  