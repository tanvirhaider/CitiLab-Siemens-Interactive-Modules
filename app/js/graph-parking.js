

function initParkingGraph (data) {

    var ParkingGraphData = {
        "london": {
            "year2018": [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            "year2035": [0,2,2,1,2,1,2,0,2,2,2,2,2,1,2,0,2,2,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2],
            "year2050": [1,0,2,1,0,2,1,0,1,2,0,2,1,1,2,0,0,2,1,1,2,0,0,1,2,2,1,0,2,1,2,0,2,1,2,2,0,2,0,2,2,0,2,2,2,2,2,2,2,1]
        },
        "mumbai": {
            "year2018": [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            "year2035": [0,2,0,2,1,2,1,2,2,2,2,0,1,2,2,2,2,2,1,1,2,2,2,0,2,2,2,1,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2],
            "year2050": [0,0,1,2,0,1,2,1,2,0,2,1,2,2,1,2,2,2,0,2,0,2,1,2,0,2,1,0,2,0,2,1,1,2,0,2,1,2,0,0,2,1,2,1,0,1,2,2,2,2]
        },
        "la": {
            "year2018": [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            "year2035": [1,0,2,2,1,2,0,2,2,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2],
            "year2050": [0,1,2,2,1,1,2,1,2,2,2,1,2,2,2,2,1,2,2,1,2,0,2,2,2,0,0,1,2,2,0,2,0,2,1,2,2,0,0,2,2,0,2,2,2,0,2,0,2,2]
        }
    }

    // function trackEvent (_eventCategory, _eventAction, _eventLabel) {
    //     // console.log('Tracking', _eventCategory, _eventAction, _eventLabel);
    //      ga('send', 'event', _eventCategory, _eventAction, _eventLabel);
    // }

    function trackEvent (_eventCategory, _eventAction, _eventLabel) {
        gtag('event', _eventAction , {
          'event_category': _eventCategory,
          'event_label': _eventLabel
        });
    }

    var container = data.container;
    var numberOfParking = [];
    var numberOfHouse = [];
    var numberOfTree = [];
    var yearList = [
        "2018",
        "2035",
        "2050"
    ]
   
    var numberOfYear = document.querySelector(container + " #graph-content .nav").childElementCount;
    var para_2050 = document.querySelector(container + " #graph-copy #content-2050");

    var firstRun = false;

    for (var i = 0; i < numberOfYear; i++) {document.querySelector(container + " #graph-content #nav-" + i).addEventListener("click", navClicked);}

    function initialGridSetup () {
        for (var i = 0; i < 50; i++) {
            var div = document.createElement("div");
            div.setAttribute("id", "icon-" + i);
            div.classList.add("icon-car-" + data.location);
            var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
            TweenMax.fromTo(div,0.5, {alpha:0,scale:0},{delay:0.1,alpha:1,scale:1});            
        }
    }

    function navClicked(event) {
        var currentElement = document.querySelector(container + " #graph-content #nav-" + event.target.id);
        var currentID = this.id;
        var idIndex = currentID.substr(-1);
        
        this.classList.add("selected-" + data.location);
        for (var i = 0; i < numberOfYear; i++) { if (i != Number(idIndex)) { document.querySelector(container + " #graph-content #nav-" + i).classList.remove("selected-" + data.location); } }
        
        populateGrid (idIndex);
    }

    function populateGrid (whichSet) {
        var translateVariableIndex;
        if (whichSet == 0) {
            translateVariableIndex = "year2018";
            if (para_2050) {para_2050.style.display = "none";}
        }
        else if (whichSet == 1) {
            translateVariableIndex = "year2035";
            if (para_2050) {para_2050.style.display = "none";}
        }
        else if (whichSet == 2) {
            translateVariableIndex = "year2050";
            if (para_2050) {para_2050.style.display = "block";}
        }

      trackEvent('Parking-chart', 'Click', "Year-Selected-" + yearList[Number(whichSet)] + "-" + data.location);

       
        var numberOfIcons = document.querySelector(container + " #graph-content #grid");
        
            for (var i = 0; i < 50; i++) {
                var currentIndex = ParkingGraphData[data.location][translateVariableIndex][i];
    
                var div = document.createElement("div");
                div.setAttribute("id", "icon-" + i);
                div.classList.add("icon");

                if (!firstRun) {var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);}
                
            }

            firstRun = true;

            for (var n = 0; n < 50; n++) {
                var currentIndex = ParkingGraphData[data.location][translateVariableIndex][n];
                var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + n);
                if (currentIndex == 2) {
                    if (currentIcon.classList.contains("icon-car-" + data.location)) {

                    }
                    else {
        
                        TweenMax.to(currentIcon,0.5, {
                            delay:0.01 * n,
                            alpha:0,
                            scale:0, 
                            onComplete:replaceClass, 
                            onCompleteParams:[currentIcon]
                        });

                        function replaceClass (whichOne) {
                            if (whichOne.classList.contains("icon-tree-" + data.location)) {
                                whichOne.classList.remove("icon-tree-" + data.location);}
                            if (whichOne.classList.contains("icon-house-" + data.location)) {
                                whichOne.classList.remove("icon-house-" + data.location);}
                            whichOne.classList.add("icon-car-" + data.location);
                            TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
                        }
                    }
                }

                if (currentIndex == 1) {
                    if (currentIcon.classList.contains("icon-house-" + data.location)) {}
                    else {

                        TweenMax.to(currentIcon,0.5, {delay:0.01 * n,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});

                        function replaceClass (whichOne) {
                            if (whichOne.classList.contains("icon-tree-" + data.location)) {whichOne.classList.remove("icon-tree-" + data.location);}
                            if (whichOne.classList.contains("icon-car-" + data.location)) {whichOne.classList.remove("icon-car-" + data.location);}
                            whichOne.classList.add("icon-house-" + data.location);
                            TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
                        }
                    }
                }

                if (currentIndex == 0) {
                    if (currentIcon.classList.contains("icon-tree-" + data.location)) {

                    }
                    else {
                        TweenMax.to(currentIcon,0.5, {delay:0.01 * n,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});

                        function replaceClass (whichOne) {
                            if (whichOne.classList.contains("icon-house-" + data.location)) {whichOne.classList.remove("icon-house-" + data.location);}
                            if (whichOne.classList.contains("icon-car-" + data.location)) {whichOne.classList.remove("icon-car-" + data.location);}
                            whichOne.classList.add("icon-tree-" + data.location);
                            TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
                        }
                    }
                }
           }

    }

    function defaultSetting (whichOne) {
        populateGrid (whichOne);
        document.querySelector(container + " #graph-content #nav-" + whichOne).classList.add("selected-" + data.location);
    }
    defaultSetting (data.defaultindex);
}