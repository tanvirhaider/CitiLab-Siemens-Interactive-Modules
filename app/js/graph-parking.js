


function initParkingGraph (data) {

    var container = data.container;
    console.group("graph-debug");
    console.log(data.location);

    var numberOfParking = [];
    var numberOfHouse = [];
    var numberOfTree = [];
   
    var numberOfYear = document.querySelector(container + " #graph-content .nav").childElementCount;

    var firstRun = false;

    for (var i = 0; i < numberOfYear; i++) {
        document.querySelector(container + " #graph-content #nav-" + i).addEventListener("click", navClicked);
    }


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
      //  console.log(idIndex);
        this.classList.add("selected-" + data.location);
        for (var i = 0; i < numberOfYear; i++) { if (i != Number(idIndex)) { document.querySelector(container + " #graph-content #nav-" + i).classList.remove("selected-" + data.location); } }
        
        populateGrid (idIndex);
    }

    function populateGrid (whichSet) {
        console.group("populate");

        console.log(whichSet);
        var translateVariableIndex;
        if (whichSet == 0) {translateVariableIndex = "year2018";}
        else if (whichSet == 1) {translateVariableIndex = "year2035";}
        else if (whichSet == 2) {translateVariableIndex = "year2050";}

       
        var numberOfIcons = document.querySelector(container + " #graph-content #grid");
        
           // for (var i = 0; i < ParkingGraphData[data.location][translateVariableIndex].length; i++) 
            for (var i = 0; i < 50; i++) 
            {
                var currentIndex = ParkingGraphData[data.location][translateVariableIndex][i];
    
                var div = document.createElement("div");
                div.setAttribute("id", "icon-" + i);
    
                
                div.classList.add("icon");
                //div.classList.add("icon-car-" + data.location);

                // switch(currentIndex) {
                //     case 0:
                //         numberOfTree.push(i);
                //         //div.classList.add("icon-tree-" + data.location);
                //         break;
                //     case 1:
                //         numberOfHouse.push(i);
                //        // div.classList.add("icon-house-" + data.location);
                //         break;
                //     case 2:
                //         numberOfParking.push(i);
                //         //div.classList.add("icon-car-" + data.location);
                //         break;
                //     default:
                //         div.classList.add("");
                // }

                if (!firstRun) {
                    var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
                   
                }
    
                
               // TweenMax.fromTo(div,0.5, {alpha:0,scale:0},{delay:0.1,alpha:1,scale:1});
                
            }

            firstRun = true;

           // 



           for (var n = 0; n < 50; n++) {
                var currentIndex = ParkingGraphData[data.location][translateVariableIndex][n];
                var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + n);
                if (currentIndex == 2) {
                    if (currentIcon.classList.contains("icon-car-" + data.location)) {

                    }
                    else {
                        

                        TweenMax.to(currentIcon,0.5, {delay:0.01 * n,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});

                        function replaceClass (whichOne) {
                            if (whichOne.classList.contains("icon-tree-" + data.location)) {whichOne.classList.remove("icon-tree-" + data.location);}
                            if (whichOne.classList.contains("icon-house-" + data.location)) {whichOne.classList.remove("icon-house-" + data.location);}
                            whichOne.classList.add("icon-car-" + data.location);
                            TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
                        }
                    }
                   // console.log(currentIcon.classList.contains("icon-car-" + data.location));
                }

                if (currentIndex == 1) {
                    if (currentIcon.classList.contains("icon-house-" + data.location)) {

                    }
                    else {

                        TweenMax.to(currentIcon,0.5, {delay:0.01 * n,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});

                        function replaceClass (whichOne) {
                            if (whichOne.classList.contains("icon-tree-" + data.location)) {whichOne.classList.remove("icon-tree-" + data.location);}
                            if (whichOne.classList.contains("icon-car-" + data.location)) {whichOne.classList.remove("icon-car-" + data.location);}
                            whichOne.classList.add("icon-house-" + data.location);
                            TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
                        }


                        
                    }
                   // console.log(currentIcon.classList.contains("icon-car-" + data.location));
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


                       // if (currentIcon.classList.contains("icon-house-" + data.location)) {currentIcon.classList.remove("icon-house-" + data.location);}
                      //  if (currentIcon.classList.contains("icon-car-" + data.location)) {currentIcon.classList.remove("icon-car-" + data.location);}
                      //  currentIcon.classList.add("icon-tree-" + data.location);
                    }
                   // console.log(currentIcon.classList.contains("icon-car-" + data.location));
                }


                console.log("current index #: ",currentIndex);
           }
        


        // for (var i = 0; i < numberOfParking.length; i++) {
        //     console.log("run parking");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfParking[i]);
        //     currentIcon.classList.add("icon-car-" + data.location);
        //     TweenMax.fromTo(currentIcon,0.5, {scale:0},{delay:0,alpha:1,scale:1});
        // }

        
        // for (var j = 0; j < numberOfHouse.length; j++) {
        //     console.log("run house");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfHouse[j]);
        //     currentIcon.classList.add("icon-car-" + data.location);
        //     TweenMax.to(currentIcon,0.5, {delay:1,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});
        //     function replaceClass (whichOne) {
        //        // console.log(whichOne);
        //         whichOne.classList.remove("icon-car-" + data.location); 
        //         whichOne.classList.add("icon-house-" + data.location); 
        //         TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
        //     }
        // }

        // for (var k = 0; k < numberOfTree.length; k++) {
        //     console.log("run tree");
        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfTree[k]);
        //     currentIcon.classList.add("icon-car-" + data.location);ujhju
        //     TweenMax.to(currentIcon,0.5, {delay:1,alpha:0,scale:0, onComplete:replaceClass, onCompleteParams:[currentIcon]});
        //     function replaceClass (whichOne) {
        //        // console.log(whichOne);
        //         whichOne.classList.remove("icon-car-" + data.location); 
        //         whichOne.classList.add("icon-tree-" + data.location); 
        //         TweenMax.fromTo(whichOne,0.5, {alpha:0},{scale:1,alpha:1});
        //     }
        // }

        // for (var i = 0; i < numberOfTree.length; i++) {

        //     var currentIcon = document.querySelector(container + " #graph-content #grid #icon-" + numberOfTree[i]);
        //     currentIcon.classList.add("icon-car-" + data.location);

        //     TweenMax.delayedCall(1, replaceCarToTree, [currentIcon]); 

        //     function replaceCarToTree (item) {
        //         console.log(item);
        //         item.classList.remove("icon-car-" + data.location); 
        //         item.classList.add("icon-tree-" + data.location); 
        //     }
        // }

     //   console.log("parking: ",numberOfParking);
     //   console.log("house: ",numberOfHouse);
     //   console.log("tree: ",numberOfTree);

     console.groupEnd("populate");

    }

    function defaultSetting (whichOne) {
        
        populateGrid (whichOne);
        document.querySelector(container + " #graph-content #nav-" + whichOne).classList.add("selected-" + data.location);
    }

    defaultSetting (data.defaultindex);
    console.groupEnd("graph-debug");

}