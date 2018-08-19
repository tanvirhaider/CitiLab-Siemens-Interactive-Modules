

var alreadyAnimated = false;

var heroCoordinates = {
    "la": {
        top: "-70%",
        left: "0%"
    },
    "london": {
        top: "-30%",
        left: "-100%"
    },
    "mumbai": {
        top: "-160%",
        left: "-190%"
    }
}


function initHero (data) {
    var whichSection = data.location;

    if (!alreadyAnimated) {

        TweenMax.fromTo(".hero",1,{
            width: "100%", 
            height: "100%"
        },{
            width: "300%", 
            height: "300%", 
            left: heroCoordinates[whichSection].left, 
            top: heroCoordinates[whichSection].top, 
            onComplete: initHeroAnimation
        });
        
    }
    else {
        TweenMax.to(".hero",1,{
            left: heroCoordinates[whichSection].left, 
            top: heroCoordinates[whichSection].top
        });
        
    }
    

}

function initHeroAnimation () {
    alreadyAnimated = true;
}