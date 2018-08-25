

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
    // var whichSection = data.location;

    // if (!alreadyAnimated) {

    //     TweenMax.fromTo([".hero",".dot-la",".dot-london",".dot-mumbai"],1,{
    //         width: "100%", 
    //         height: "100%"
    //     },{
    //         delay:1,
    //         width: "300%", 
    //         height: "300%", 
    //         left: heroCoordinates[whichSection].left, 
    //         top: heroCoordinates[whichSection].top, 
    //         ease:Power3.easeInOut,
    //         onComplete: initHeroAnimation
    //     });


    //     TweenMax.fromTo([".dot-la",".dot-london",".dot-mumbai"],1,{alpha: 0},{delay:1.75,alpha:1});
        
    // }
    // else {
    //     TweenMax.to([".hero",".dot-la",".dot-london",".dot-mumbai"],1,{
    //         left: heroCoordinates[whichSection].left, 
    //         top: heroCoordinates[whichSection].top,
    //         ease:Power3.easeInOut
    //     });


    //     TweenMax.fromTo([".dot-la",".dot-london",".dot-mumbai"],1,{alpha: 0},{delay:1,alpha:1});
        
    // }
    

}

function initHeroAnimation () {
    alreadyAnimated = true;
}