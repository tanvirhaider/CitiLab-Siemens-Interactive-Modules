
// @codekit-prepend "parkingGraphData.js"


function initParkingGraph (data) {



    var container = data.container;
    console.group("graph-debug");
    console.log("yo MTV");
   

    var numberOfYear = document.querySelector(container + " #graph-content .nav").childElementCount;

    for (var i = 0; i < numberOfYear; i++) {
        document.querySelector(container + " #graph-content #nav-" + i).addEventListener("click", navClicked);
    }

    function navClicked(event) {
        var currentElement = document.querySelector(container + " #graph-content #nav-" + event.target.id);
        var currentID = this.id;
        var idIndex = currentID.substr(-1);
      //  console.log(idIndex);
        this.classList.add("selected");
        for (var i = 0; i < numberOfYear; i++) { if (i != Number(idIndex)) { document.querySelector(container + " #graph-content #nav-" + i).classList.remove("selected"); } }

        populateGrid (idIndex);
    }

    function populateGrid (whichSet) {

        var numberOfIcons = document.querySelector(container + " #graph-content #grid");
     
        if (numberOfIcons.childElementCount > 0) {
            while (numberOfIcons.hasChildNodes()) {   
                numberOfIcons.removeChild(numberOfIcons.firstChild);
            }
        }

        for (var i = 0; i < 50; i++) {
            var currentIndex = data.data[whichSet][i];
            var div = document.createElement("div");
            div.classList.add("icon");
            switch(currentIndex) {
                case 0:
                    div.classList.add("icon-tree");
                    break;
                case 1:
                    div.classList.add("icon-house");
                    break;
                case 2:
                    div.classList.add("icon-car");
                    break;
                default:
                    div.classList.add("");
            }

            var gridContainer = document.querySelector(container + " #graph-content #grid").appendChild(div);
            
            // setTimeout(function(){ 
                
            // }, i*1);
        }
    }

    function defaultSetting (whichOne) {
        populateGrid (whichOne);
        document.querySelector(container + " #graph-content #nav-" + whichOne).classList.add("selected");
    }

    defaultSetting (data.defaultindex);
    console.groupEnd("graph-debug");

}

window.onload = function() {
    initParkingGraph ({
        container: "#graph-parking-LA",
        defaultindex: 0,
        data: ParkingGraphData
    });

    // initParkingGraph ({
    //     container: "#graph-parking-London",
    //     defaultindex: 1,
    //     data: ParkingGraphData
    // });
};