



function initEmmissionsGraph (data) {
    console.group("emmissions");
    console.log(data.container);
    console.log(data.data);

    var barColor;

    if (data.location == "la") {
        barColor = "#3c7bcd";
    }
    else if (data.location == "london") {
        barColor = "#0e9111";
    }
    else if (data.location == "mumbai") {
        barColor = "#d14334";
    }


    var prefix = data.container + " .content ";
    var inTheMiddle = " #bar-gas-";
  

    function animateGraph (dataindex,whichOne) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var tempItem = document.querySelector(prefix + whichOne + " .chart-container .chart .bar-sets .bar-content #bar-" + i + inTheMiddle + j);
                tempItem.style.backgroundColor = barColor;
                TweenMax.fromTo(tempItem,2, {scaleY:0},{scaleY:(data.data[dataindex][i][j]/100),ease:Power3.easeInOut});
            }

          //  var box = document.querySelector(prefix + whichOne + " .chart-container .legends #box-" + i).style("::before","backgroundColor: pink");
         //   var beforeBox = box.querySelector("::before");
            //var color = window.getComputedStyle(document.querySelector(prefix + whichOne + " .chart-container .legends #box-" + i), ':before');
         //   console.log(box.style);
        }
    }

    animateGraph (0,".emmissions");
    animateGraph (1,".electricity");


}


