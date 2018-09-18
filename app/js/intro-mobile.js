



var createjs, MobileAdobeAn;
var mCanvas, mobileStage, MexportRoot, m_anim_container, Mobile_Mobile_dom_overlay_container, mobilefnStartAnimation;


function createHeroMobileAnimation (cjs, an, heroImg) {
	var p; // shortcut to reference prototypes
	var lib={};
	var ss={};
	var mImg={};
	var smallDotMaxSize = 5;
	lib.ssMetadata = [];


(lib.mobileMap = function() {
	this.initialize(mImg.mobileMap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4640,2731);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mapBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.instance = new lib.mobileMap();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mapBG, new cjs.Rectangle(0,0,4640,2731), null);


(lib.dotpulsingmumbai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15C2C2").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsingmumbai, new cjs.Rectangle(0,0,smallDotMaxSize,smallDotMaxSize), null);


(lib.dotpulsinglondon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsinglondon, new cjs.Rectangle(0,0,smallDotMaxSize,smallDotMaxSize), null);


(lib.dotpulsingla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgkAlQgPgPgBgWQABgVAPgPQAPgPAVgBQAWABAPAPQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(5.3,5.3);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotpulsingla, new cjs.Rectangle(0,0,smallDotMaxSize,smallDotMaxSize), null);


(lib.mumbaidot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.looped) this.looped = 1;    
		if (this.looped++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));
	this.instance = new lib.dotpulsingmumbai();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:smallDotMaxSize,scaleY:smallDotMaxSize,x:1.7,y:1.7},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,smallDotMaxSize,smallDotMaxSize);


(lib.londondot0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.london) this.london = 1;    
		if (this.london++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));
	this.instance = new lib.dotpulsinglondon();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:smallDotMaxSize,scaleY:smallDotMaxSize,x:2.1,y:2.1},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,smallDotMaxSize,smallDotMaxSize);


(lib.ladot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		if (!this.london) this.london = 1;    
		if (this.london++ > 100) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));
	this.instance = new lib.dotpulsingla();
	this.instance.parent = this;
	this.instance.setTransform(3,3,1,1,0,0,0,5.2,5.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5,scaleX:smallDotMaxSize,scaleY:smallDotMaxSize,x:1.8,y:1.8},59).to({regX:5.2,regY:5.2,scaleX:1,scaleY:1,x:3,y:3},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,smallDotMaxSize,smallDotMaxSize);


(lib.world = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
		window.initMobileIntroCopy();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// dot_mumbai
	this.dot_mumbai = new lib.mumbaidot();
	this.dot_mumbai.name = "dot_mumbai";
	this.dot_mumbai.parent = this;
	this.dot_mumbai.setTransform(3242,1546.9,1,1,0,0,0,3,3);
	this.dot_mumbai._off = true;
	this.timeline.addTween(cjs.Tween.get(this.dot_mumbai).wait(240).to({_off:false},0).wait(60));

	// dot_london
	this.dot_london = new lib.londondot0();
	this.dot_london.name = "dot_london";
	this.dot_london.parent = this;
	this.dot_london.setTransform(2174,991.2);
	this.dot_london._off = true;
	this.timeline.addTween(cjs.Tween.get(this.dot_london).wait(140).to({_off:false},0).wait(160));

	// dot_la
	this.dot_la = new lib.ladot();
	this.dot_la.name = "dot_la";
	this.dot_la.parent = this;
	this.dot_la.setTransform(554.2,1218.7,1,1,0,0,0,3,3);
	this.dot_la._off = true;
	this.timeline.addTween(cjs.Tween.get(this.dot_la).wait(59).to({_off:false},0).wait(241));

	// graphics
	// this.instance = new lib.mapBG();
	// this.instance.parent = this;
	// this.instance.setTransform(2320,1365.5,1,1,0,0,0,2320,1365.5);
	// this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	this.instance = new lib.mapBG();
	this.instance.parent = this;
	this.instance.setTransform(1,-8,3.338,3.338);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4640,2731);


// mobileStage content:
(lib.introanimationv3mobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// Layer_1
	this.instance = new lib.world();
	this.instance.parent = this;
	this.instance.setTransform(340.4,111.3,0.158,0.158,0,0,0,2160.2,691.2);


	// TIME LINE ANIMATION ----------------------------------------------------
	// version 1
	// this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},45).to({x:310,y:-27.1},51,cjs.Ease.quadInOut).to({x:142},60).wait(1).to({regX:2320,regY:1365.5,x:291.4,y:607.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:288.3,y:604.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:283.7,y:601.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:277.7,y:596.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:270.1,y:590.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:260.7,y:582.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:249.7,y:574},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:236.8,y:563.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:222,y:551.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:205.2,y:538.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:186.4,y:523.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:165.6,y:506.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:142.8,y:488.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:118.1,y:469},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:91.6,y:447.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:63.6,y:425.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:34.2,y:402},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:3.8,y:377.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-27.2,y:353.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-58.4,y:328.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-89.5,y:303.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-119.9,y:279.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-149.5,y:255.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-177.8,y:232.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-204.6,y:211.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-229.8,y:191.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-253.2,y:172.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-274.8,y:155.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-294.5,y:139.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-312.3,y:125.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-328.3,y:112.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-342.5,y:101.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-355,y:91.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-365.9,y:82.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-375.2,y:75.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-383.1,y:69.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-389.5,y:64},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-394.6,y:59.9},0).wait(1).to({regX:2159.8,regY:691.4,scaleX:0.75,scaleY:0.75,x:-518.8,y:-449.6},0).wait(1).to({regX:2320,regY:1365.5,x:-403,y:56.8},0).wait(1).to({x:-407.6},0).wait(1).to({x:-412.1,y:56.7},0).wait(1).to({x:-416.5},0).wait(1).to({x:-420.9,y:56.6},0).wait(1).to({x:-425.1},0).wait(1).to({x:-429.3,y:56.5},0).wait(1).to({x:-433.5},0).wait(1).to({x:-437.5},0).wait(1).to({x:-441.6,y:56.4},0).wait(1).to({x:-445.5},0).wait(1).to({x:-449.4,y:56.3},0).wait(1).to({x:-453.2},0).wait(1).to({x:-456.9},0).wait(1).to({x:-460.6,y:56.2},0).wait(1).to({x:-464.2},0).wait(1).to({x:-467.7,y:56.1},0).wait(1).to({x:-471.2},0).wait(1).to({x:-474.6},0).wait(1).to({x:-477.9,y:56},0).wait(1).to({x:-481.2},0).wait(1).to({x:-484.4,y:55.9},0).wait(1).to({x:-487.5},0).wait(1).to({x:-490.6},0).wait(1).to({x:-493.6,y:55.8},0).wait(1).to({x:-496.5},0).wait(1).to({x:-499.4},0).wait(1).to({x:-502.2,y:55.7},0).wait(1).to({x:-505},0).wait(1).to({x:-507.7},0).wait(1).to({x:-510.3},0).wait(1).to({x:-512.8,y:55.6},0).wait(1).to({x:-515.3},0).wait(1).to({x:-517.7},0).wait(1).to({regX:2159.9,regY:691.5,x:-640.3,y:-450.6},0).to({regX:2160.1,scaleX:0.14,scaleY:0.14,x:246.3,y:102.4},25,cjs.Ease.quadInOut).wait(1));


	// version 2
	// this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},45).to({x:310,y:-27.1},30,cjs.Ease.quadInOut).to({x:142},60).wait(1).to({regX:2320,regY:1365.5,scaleX:0.94,scaleY:0.94,x:290.7,y:606.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:286.1,y:603},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:279.2,y:597.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:269.8,y:590},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:257.7,y:580.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:242.8,y:568.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:225,y:554.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:204.1,y:537.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:179.9,y:518.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:152.6,y:496.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:122.2,y:472.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:89,y:445.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:53.3,y:417.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:15.7,y:387.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-23.2,y:356.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-62.5,y:324.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-101.3,y:293.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-139.1,y:263.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-175.1,y:235},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-208.8,y:208.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-239.8,y:183.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-268,y:160.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-293.2,y:140.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-315.5,y:123},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-335,y:107.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-351.6,y:94.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-365.6,y:83},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-377.1,y:73.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-386.4,y:66.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-393.4,y:60.8},0).wait(1).to({regX:2159.8,regY:691.4,scaleX:0.75,scaleY:0.75,x:-518.8,y:-449.6},0).wait(1).to({regX:2320,regY:1365.5,x:-401.1,y:56.8},0).wait(1).to({x:-403.8},0).wait(1).to({x:-406.4},0).wait(1).to({x:-409.1},0).wait(1).to({x:-411.7,y:56.7},0).wait(1).to({x:-414.3},0).wait(1).to({x:-416.8},0).wait(1).to({x:-419.4,y:56.6},0).wait(1).to({x:-421.9},0).wait(1).to({x:-424.4},0).wait(1).to({x:-426.8},0).wait(1).to({x:-429.3,y:56.5},0).wait(1).to({x:-431.7},0).wait(1).to({x:-434.2},0).wait(1).to({x:-436.5},0).wait(1).to({x:-438.9},0).wait(1).to({x:-441.2,y:56.4},0).wait(1).to({x:-443.5},0).wait(1).to({x:-445.8},0).wait(1).to({x:-448.1},0).wait(1).to({x:-450.3,y:56.3},0).wait(1).to({x:-452.5},0).wait(1).to({x:-454.7},0).wait(1).to({x:-456.9},0).wait(1).to({x:-459.1,y:56.2},0).wait(1).to({x:-461.2},0).wait(1).to({x:-463.3},0).wait(1).to({x:-465.4},0).wait(1).to({x:-467.4,y:56.1},0).wait(1).to({x:-469.4},0).wait(1).to({x:-471.5},0).wait(1).to({x:-473.4},0).wait(1).to({x:-475.4,y:56},0).wait(1).to({x:-477.4},0).wait(1).to({x:-479.3},0).wait(1).to({x:-481.2},0).wait(1).to({x:-483.1},0).wait(1).to({x:-484.9,y:55.9},0).wait(1).to({x:-486.8},0).wait(1).to({x:-488.6},0).wait(1).to({x:-490.3},0).wait(1).to({x:-492.1},0).wait(1).to({x:-493.9,y:55.8},0).wait(1).to({x:-495.6},0).wait(1).to({x:-497.3},0).wait(1).to({x:-498.9},0).wait(1).to({x:-500.6},0).wait(1).to({x:-502.2,y:55.7},0).wait(1).to({x:-503.9},0).wait(1).to({x:-505.4},0).wait(1).to({x:-507},0).wait(1).to({x:-508.6},0).wait(1).to({x:-510.1},0).wait(1).to({x:-511.6},0).wait(1).to({x:-513,y:55.6},0).wait(1).to({x:-514.5},0).wait(1).to({x:-515.9},0).wait(1).to({x:-517.3},0).wait(1).to({x:-518.7},0).wait(1).to({regX:2159.9,regY:691.5,x:-640.3,y:-450.6},0).to({regX:2160.1,scaleX:0.14,scaleY:0.14,x:246.3,y:102.4},29,cjs.Ease.quadInOut).wait(1));


	// version 3
	// this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},45).to({x:310,y:-27.1},30,cjs.Ease.quadInOut).to({x:142},60).wait(1).to({regX:2320,regY:1365.5,scaleX:0.94,scaleY:0.94,x:290.7,y:606.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:286.1,y:603},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:279.2,y:597.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:269.8,y:590},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:257.7,y:580.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:242.8,y:568.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:225,y:554.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:204.1,y:537.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:179.9,y:518.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:152.6,y:496.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:122.2,y:472.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:89,y:445.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:53.3,y:417.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:15.7,y:387.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-23.2,y:356.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-62.5,y:324.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-101.3,y:293.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-139.1,y:263.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-175.1,y:235},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-208.8,y:208.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-239.8,y:183.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-268,y:160.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-293.2,y:140.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-315.5,y:123},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-335,y:107.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-351.6,y:94.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-365.6,y:83},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-377.1,y:73.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-386.4,y:66.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-393.4,y:60.8},0).wait(1).to({regX:2159.8,regY:691.4,scaleX:0.75,scaleY:0.75,x:-518.8,y:-449.6},0).wait(1).to({regX:2320,regY:1365.5,x:-401.1,y:56.8},0).wait(1).to({x:-403.8},0).wait(1).to({x:-406.4},0).wait(1).to({x:-409.1},0).wait(1).to({x:-411.7,y:56.7},0).wait(1).to({x:-414.3},0).wait(1).to({x:-416.8},0).wait(1).to({x:-419.4,y:56.6},0).wait(1).to({x:-421.9},0).wait(1).to({x:-424.4},0).wait(1).to({x:-426.8},0).wait(1).to({x:-429.3,y:56.5},0).wait(1).to({x:-431.7},0).wait(1).to({x:-434.2},0).wait(1).to({x:-436.5},0).wait(1).to({x:-438.9},0).wait(1).to({x:-441.2,y:56.4},0).wait(1).to({x:-443.5},0).wait(1).to({x:-445.8},0).wait(1).to({x:-448.1},0).wait(1).to({x:-450.3,y:56.3},0).wait(1).to({x:-452.5},0).wait(1).to({x:-454.7},0).wait(1).to({x:-456.9},0).wait(1).to({x:-459.1,y:56.2},0).wait(1).to({x:-461.2},0).wait(1).to({x:-463.3},0).wait(1).to({x:-465.4},0).wait(1).to({x:-467.4,y:56.1},0).wait(1).to({x:-469.4},0).wait(1).to({x:-471.5},0).wait(1).to({x:-473.4},0).wait(1).to({x:-475.4,y:56},0).wait(1).to({x:-477.4},0).wait(1).to({x:-479.3},0).wait(1).to({x:-481.2},0).wait(1).to({x:-483.1},0).wait(1).to({x:-484.9,y:55.9},0).wait(1).to({x:-486.8},0).wait(1).to({x:-488.6},0).wait(1).to({x:-490.3},0).wait(1).to({x:-492.1},0).wait(1).to({x:-493.9,y:55.8},0).wait(1).to({x:-495.6},0).wait(1).to({x:-497.3},0).wait(1).to({x:-498.9},0).wait(1).to({x:-500.6},0).wait(1).to({x:-502.2,y:55.7},0).wait(1).to({x:-503.9},0).wait(1).to({x:-505.4},0).wait(1).to({x:-507},0).wait(1).to({x:-508.6},0).wait(1).to({x:-510.1},0).wait(1).to({x:-511.6},0).wait(1).to({x:-513,y:55.6},0).wait(1).to({x:-514.5},0).wait(1).to({x:-515.9},0).wait(1).to({x:-517.3},0).wait(1).to({x:-518.7},0).wait(1).to({regX:2159.9,regY:691.5,x:-640.3,y:-450.6},0).to({regX:2160.7,regY:691.9,scaleX:0.11,scaleY:0.11,x:245.3,y:115.4},29,cjs.Ease.quadInOut).wait(1));


	// version 4
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},45).to({x:310,y:-27.1},30,cjs.Ease.quadInOut).to({x:142},60).wait(1).to({regX:2324,regY:1358.7,scaleX:0.94,scaleY:0.94,x:294.5,y:600.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:289.8,y:596.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:283,y:591.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:273.5,y:583.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:261.5,y:574},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:246.6,y:562.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:228.7,y:548},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:207.7,y:531.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:183.6,y:512.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:156.2,y:490.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:125.8,y:466.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:92.5,y:439.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:56.8,y:411.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:19.1,y:381.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.7,y:350.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-59.1,y:319.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-98,y:288.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-135.9,y:258.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-171.9,y:229.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-205.6,y:202.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-236.7,y:178},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-264.9,y:155.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-290.1,y:135.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-312.4,y:117.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-331.9,y:102.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-348.5,y:89},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-362.5,y:77.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-374.1,y:68.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-383.4,y:61.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-390.4,y:55.7},0).wait(1).to({regX:2159.8,regY:691.4,scaleX:0.75,scaleY:0.75,x:-518.8,y:-449.6},0).wait(1).to({regX:2324,regY:1358.7,x:-398.1,y:51.7},0).wait(1).to({x:-400.8},0).wait(1).to({x:-403.4},0).wait(1).to({x:-406,y:51.6},0).wait(1).to({x:-408.7},0).wait(1).to({x:-411.3},0).wait(1).to({x:-413.8},0).wait(1).to({x:-416.4,y:51.5},0).wait(1).to({x:-418.9},0).wait(1).to({x:-421.4},0).wait(1).to({x:-423.8},0).wait(1).to({x:-426.3,y:51.4},0).wait(1).to({x:-428.7},0).wait(1).to({x:-431.2},0).wait(1).to({x:-433.5,y:51.3},0).wait(1).to({x:-435.9},0).wait(1).to({x:-438.2},0).wait(1).to({x:-440.5},0).wait(1).to({x:-442.8},0).wait(1).to({x:-445.1},0).wait(1).to({x:-447.3,y:51.2},0).wait(1).to({x:-449.5},0).wait(1).to({x:-451.7},0).wait(1).to({x:-453.9},0).wait(1).to({x:-456.1,y:51.1},0).wait(1).to({x:-458.2},0).wait(1).to({x:-460.3},0).wait(1).to({x:-462.4},0).wait(1).to({x:-464.4,y:51},0).wait(1).to({x:-466.4},0).wait(1).to({x:-468.5},0).wait(1).to({x:-470.4},0).wait(1).to({x:-472.4,y:50.9},0).wait(1).to({x:-474.4},0).wait(1).to({x:-476.3},0).wait(1).to({x:-478.2},0).wait(1).to({x:-480.1},0).wait(1).to({x:-481.9,y:50.8},0).wait(1).to({x:-483.8},0).wait(1).to({x:-485.6},0).wait(1).to({x:-487.3},0).wait(1).to({x:-489.1},0).wait(1).to({x:-490.9,y:50.7},0).wait(1).to({x:-492.6},0).wait(1).to({x:-494.3},0).wait(1).to({x:-495.9},0).wait(1).to({x:-497.6},0).wait(1).to({x:-499.2,y:50.6},0).wait(1).to({x:-500.9},0).wait(1).to({x:-502.4},0).wait(1).to({x:-504},0).wait(1).to({x:-505.5},0).wait(1).to({x:-507,y:50.5},0).wait(1).to({x:-508.5},0).wait(1).to({x:-510},0).wait(1).to({x:-511.5},0).wait(1).to({x:-512.9},0).wait(1).to({x:-514.3},0).wait(1).to({x:-515.7},0).wait(1).to({regX:2159.9,regY:691.5,x:-640.3,y:-450.6},0).to({regX:2160.7,regY:691.9,scaleX:0.11,scaleY:0.11,x:245.3,y:115.4},29,cjs.Ease.quadInOut).wait(1));

	// END OF TIMELINE ANIMATION -----------------------------------------------

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.2,191.8,735.1,432.7);
// library properties:
lib.properties = {
	id: 'mobile-animation-stage',
	width: 414,
	height: 380,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src: heroImg, 
		id:"mobileMap"}
	],
	preloads: []
};



(lib.Stage = function(mCanvas) {
	createjs.Stage.call(this, mCanvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['mobile-animation-stage'] = {
	getStage: function() { return MexportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return mImg; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


}



function initMobileIntroAnimation() {
	mCanvas = document.getElementById("mobile-hp-canvas");
	m_anim_container = document.getElementById("mobile-hp-animation");
	Mobile_dom_overlay_container = document.getElementById("mobile-dom_overlay_container");
	var comp=MobileAdobeAn.getComposition("mobile-animation-stage");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){MhandleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){MhandleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}


function MhandleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function MhandleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "mobileStage" after it is created in token create_mobileStage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	MexportRoot = new lib.introanimationv3mobile();
	mobileStage = new lib.Stage(mCanvas);	
	//Registers the "tick" event listener.
	mobilefnStartAnimation = function() {
		mobileStage.addChild(MexportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", mobileStage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function MmakeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeMCanvas);		
		resizeMCanvas();		
		function resizeMCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			mCanvas.width = w*pRatio*sRatio;			
			mCanvas.height = h*pRatio*sRatio;
			mCanvas.style.width = Mobile_dom_overlay_container.style.width = m_anim_container.style.width =  w*sRatio+'px';				
			mCanvas.style.height = m_anim_container.style.height = Mobile_dom_overlay_container.style.height = h*sRatio+'px';
			mobileStage.scaleX = pRatio*sRatio;			
			mobileStage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			mobileStage.tickOnUpdate = false;            
			mobileStage.update();            
			mobileStage.tickOnUpdate = true;		
		}
	}
	MmakeResponsive(false,'both',false,1);	
	MobileAdobeAn.compositionLoaded(lib.properties.id);
	mobilefnStartAnimation();
}


function initMobileIntroCopy() {
	var introContent = document.querySelector("#mobile-hp-animation .mobile-introCopy");
	introContent.style.display = "block";
}



// if (window.innerWidth < 768) {
// 	document.querySelector("#mobile-hp-animation").style.display = "block";
// 	var heroImgLoc = document.querySelector("#mobile-hp-animation").dataset.heroImg;
// 	createHeroMobileAnimation (createjs = createjs||{}, MobileAdobeAn = MobileAdobeAn||{},heroImgLoc);
// 	initMobileIntroAnimation();
// }
// else {
// 	document.querySelector("#mobile-hp-animation").style.display = "none";
// }

var heroImgLoc = document.querySelector("#mobile-hp-animation").dataset.heroImg;




function load() {
	createHeroMobileAnimation (createjs = createjs||{}, MobileAdobeAn = MobileAdobeAn||{},heroImgLoc);
	initMobileIntroAnimation();
}

window.onload = load;