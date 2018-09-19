

// Global Variables

var createjs, DesktopAdobeAn;
var desktopCanvas, desktopStage, exportDesktopRoot, Desktop_anim_container, desktop_dom_overlay, DesktopfnStartAnimation;

function createHeroDesktopAnimation (cjs, an, heroImg) {
	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	(lib.worldmap = function() {
		this.initialize(img.worldmap);
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
	
		// Layer_1
		this.instance = new lib.worldmap();
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.mapBG, new cjs.Rectangle(0,0,4640,2731), null);

	(lib.mumbaidot = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#15C2C2").s().p("AgVAVQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJg");
		this.shape.setTransform(3,3);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.mumbaidot, new cjs.Rectangle(0,0,6,6), null);
	
	
	(lib.londondot0 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0099FF").s().p("AgVAVQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJg");
		this.shape.setTransform(3,3);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.londondot0, new cjs.Rectangle(0,0,6,6), null);
	
	
	(lib.world = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_299 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(287));
	
		// mumbai_0
		this.mumbai_0 = new lib.mumbaidot();
		this.mumbai_0.name = "mumbai_0";
		this.mumbai_0.parent = this;
		this.mumbai_0.setTransform(3241.7,1556.3,1,1,0,0,0,3,3);
		this.mumbai_0.alpha = 0;
		this.mumbai_0._off = true;
		this.mumbai_0.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0).wait(240).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(67));
	
		// mumbai_0
		this.mumbai_0_1 = new lib.mumbaidot();
		this.mumbai_0_1.name = "mumbai_0_1";
		this.mumbai_0_1.parent = this;
		this.mumbai_0_1.setTransform(3265.3,1575.1,1,1,0,0,0,3,3);
		this.mumbai_0_1.alpha = 0;
		this.mumbai_0_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_1).wait(284).to({_off:false},0).to({alpha:1},7).wait(295));
	
		// mumbai_0
		this.mumbai_0_2 = new lib.mumbaidot();
		this.mumbai_0_2.name = "mumbai_0_2";
		this.mumbai_0_2.parent = this;
		this.mumbai_0_2.setTransform(3255.4,1533.9,1,1,0,0,0,3,3);
		this.mumbai_0_2.alpha = 0;
		this.mumbai_0_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_2).wait(270).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(37));
	
		// mumbai_0
		this.mumbai_0_3 = new lib.mumbaidot();
		this.mumbai_0_3.name = "mumbai_0_3";
		this.mumbai_0_3.parent = this;
		this.mumbai_0_3.setTransform(3247.7,1599.1,1,1,0,0,0,3,3);
		this.mumbai_0_3.alpha = 0;
		this.mumbai_0_3._off = true;
		this.mumbai_0_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_3.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_3).wait(252).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(55));
	
		// mumbai_0
		this.mumbai_0_4 = new lib.mumbaidot();
		this.mumbai_0_4.name = "mumbai_0_4";
		this.mumbai_0_4.parent = this;
		this.mumbai_0_4.setTransform(3271.7,1585.6,1,1,0,0,0,3,3);
		this.mumbai_0_4.alpha = 0;
		this.mumbai_0_4._off = true;
		this.mumbai_0_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_4.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_4).wait(260).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(47));
	
		// mumbai_0
		this.mumbai_0_5 = new lib.mumbaidot();
		this.mumbai_0_5.name = "mumbai_0_5";
		this.mumbai_0_5.parent = this;
		this.mumbai_0_5.setTransform(3267.4,1552.4,1,1,0,0,0,3,3);
		this.mumbai_0_5.alpha = 0;
		this.mumbai_0_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_5).wait(270).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(37));
	
		// mumbai_0
		this.mumbai_0_6 = new lib.mumbaidot();
		this.mumbai_0_6.name = "mumbai_0_6";
		this.mumbai_0_6.parent = this;
		this.mumbai_0_6.setTransform(3218.3,1516.4,1,1,0,0,0,3,3);
		this.mumbai_0_6.alpha = 0;
		this.mumbai_0_6._off = true;
		this.mumbai_0_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_6.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_6).wait(272).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(35));
	
		// mumbai_0
		this.mumbai_0_7 = new lib.mumbaidot();
		this.mumbai_0_7.name = "mumbai_0_7";
		this.mumbai_0_7.parent = this;
		this.mumbai_0_7.setTransform(3228.5,1520.5,1,1,0,0,0,3,3);
		this.mumbai_0_7.alpha = 0;
		this.mumbai_0_7._off = true;
		this.mumbai_0_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_7.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_7).wait(248).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(59));
	
		// mumbai_0
		this.mumbai_0_8 = new lib.mumbaidot();
		this.mumbai_0_8.name = "mumbai_0_8";
		this.mumbai_0_8.parent = this;
		this.mumbai_0_8.setTransform(3234.5,1500.9,1,1,0,0,0,3,3);
		this.mumbai_0_8.alpha = 0;
		this.mumbai_0_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_8).wait(253).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(54));
	
		// mumbai_0
		this.mumbai_0_9 = new lib.mumbaidot();
		this.mumbai_0_9.name = "mumbai_0_9";
		this.mumbai_0_9.parent = this;
		this.mumbai_0_9.setTransform(3247.7,1533.9,1,1,0,0,0,3,3);
		this.mumbai_0_9.alpha = 0;
		this.mumbai_0_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_9).wait(274).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(33));
	
		// mumbai_0
		this.mumbai_0_10 = new lib.mumbaidot();
		this.mumbai_0_10.name = "mumbai_0_10";
		this.mumbai_0_10.parent = this;
		this.mumbai_0_10.setTransform(3227.3,1532.3,1,1,0,0,0,3,3);
		this.mumbai_0_10.alpha = 0;
		this.mumbai_0_10._off = true;
		this.mumbai_0_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_10.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_10).wait(256).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(51));
	
		// mumbai_0
		this.mumbai_0_11 = new lib.mumbaidot();
		this.mumbai_0_11.name = "mumbai_0_11";
		this.mumbai_0_11.parent = this;
		this.mumbai_0_11.setTransform(3224.3,1541.8,1,1,0,0,0,3,3);
		this.mumbai_0_11.alpha = 0;
		this.mumbai_0_11._off = true;
		this.mumbai_0_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_11.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_11).wait(249).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(58));
	
		// mumbai_0
		this.mumbai_0_12 = new lib.mumbaidot();
		this.mumbai_0_12.name = "mumbai_0_12";
		this.mumbai_0_12.parent = this;
		this.mumbai_0_12.setTransform(3256.8,1518.6,1,1,0,0,0,3,3);
		this.mumbai_0_12.alpha = 0;
		this.mumbai_0_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_12).wait(268).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(39));
	
		// mumbai_0
		this.mumbai_0_13 = new lib.mumbaidot();
		this.mumbai_0_13.name = "mumbai_0_13";
		this.mumbai_0_13.parent = this;
		this.mumbai_0_13.setTransform(3229.7,1558.7,1,1,0,0,0,3,3);
		this.mumbai_0_13.alpha = 0;
		this.mumbai_0_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_13).wait(280).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(27));
	
		// mumbai_0
		this.mumbai_0_14 = new lib.mumbaidot();
		this.mumbai_0_14.name = "mumbai_0_14";
		this.mumbai_0_14.parent = this;
		this.mumbai_0_14.setTransform(3243.4,1576.3,1,1,0,0,0,3,3);
		this.mumbai_0_14.alpha = 0;
		this.mumbai_0_14._off = true;
		this.mumbai_0_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_14.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_14).wait(251).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(56));
	
		// mumbai_0
		this.mumbai_0_15 = new lib.mumbaidot();
		this.mumbai_0_15.name = "mumbai_0_15";
		this.mumbai_0_15.parent = this;
		this.mumbai_0_15.setTransform(3250.8,1572.1,1,1,0,0,0,3,3);
		this.mumbai_0_15.alpha = 0;
		this.mumbai_0_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_15).wait(274).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(33));
	
		// mumbai_0
		this.mumbai_0_16 = new lib.mumbaidot();
		this.mumbai_0_16.name = "mumbai_0_16";
		this.mumbai_0_16.parent = this;
		this.mumbai_0_16.setTransform(3255.4,1603.9,1,1,0,0,0,3,3);
		this.mumbai_0_16.alpha = 0;
		this.mumbai_0_16._off = true;
		this.mumbai_0_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_16.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_16).wait(253).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(54));
	
		// mumbai_0
		this.mumbai_0_17 = new lib.mumbaidot();
		this.mumbai_0_17.name = "mumbai_0_17";
		this.mumbai_0_17.parent = this;
		this.mumbai_0_17.setTransform(3215.7,1518.4,1,1,0,0,0,3,3);
		this.mumbai_0_17.alpha = 0;
		this.mumbai_0_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_17).wait(248).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(59));
	
		// mumbai_0
		this.mumbai_0_18 = new lib.mumbaidot();
		this.mumbai_0_18.name = "mumbai_0_18";
		this.mumbai_0_18.parent = this;
		this.mumbai_0_18.setTransform(3255.4,1617.1,1,1,0,0,0,3,3);
		this.mumbai_0_18.alpha = 0;
		this.mumbai_0_18._off = true;
		this.mumbai_0_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_18.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_18).wait(277).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(30));
	
		// mumbai_0
		this.mumbai_0_19 = new lib.mumbaidot();
		this.mumbai_0_19.name = "mumbai_0_19";
		this.mumbai_0_19.parent = this;
		this.mumbai_0_19.setTransform(3241.7,1545.2,1,1,0,0,0,3,3);
		this.mumbai_0_19.alpha = 0;
		this.mumbai_0_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_19).wait(257).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(50));
	
		// mumbai_0
		this.mumbai_0_20 = new lib.mumbaidot();
		this.mumbai_0_20.name = "mumbai_0_20";
		this.mumbai_0_20.parent = this;
		this.mumbai_0_20.setTransform(3249.4,1591.6,1,1,0,0,0,3,3);
		this.mumbai_0_20.alpha = 0;
		this.mumbai_0_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_20).wait(263).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(44));
	
		// mumbai_0
		this.mumbai_0_21 = new lib.mumbaidot();
		this.mumbai_0_21.name = "mumbai_0_21";
		this.mumbai_0_21.parent = this;
		this.mumbai_0_21.setTransform(3256.8,1578.1,1,1,0,0,0,3,3);
		this.mumbai_0_21.alpha = 0;
		this.mumbai_0_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_21).wait(267).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(40));
	
		// mumbai_0
		this.mumbai_0_22 = new lib.mumbaidot();
		this.mumbai_0_22.name = "mumbai_0_22";
		this.mumbai_0_22.parent = this;
		this.mumbai_0_22.setTransform(3234.5,1546.4,1,1,0,0,0,3,3);
		this.mumbai_0_22.alpha = 0;
		this.mumbai_0_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_22).wait(250).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(57));
	
		// mumbai_0
		this.mumbai_0_23 = new lib.londondot0();
		this.mumbai_0_23.name = "mumbai_0_23";
		this.mumbai_0_23.parent = this;
		this.mumbai_0_23.setTransform(3234.5,1546.4,1,1,0,0,0,3,3);
		this.mumbai_0_23.alpha = 0;
		this.mumbai_0_23._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_23).wait(278).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(29));
	
		// mumbai_0
		this.mumbai_0_24 = new lib.mumbaidot();
		this.mumbai_0_24.name = "mumbai_0_24";
		this.mumbai_0_24.parent = this;
		this.mumbai_0_24.setTransform(3246.2,1524.6,1,1,0,0,0,3,3);
		this.mumbai_0_24.alpha = 0;
		this.mumbai_0_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_24).wait(263).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(44));
	
		// mumbai_0
		this.mumbai_0_25 = new lib.mumbaidot();
		this.mumbai_0_25.name = "mumbai_0_25";
		this.mumbai_0_25.parent = this;
		this.mumbai_0_25.setTransform(3259.3,1569.1,1,1,0,0,0,3,3);
		this.mumbai_0_25.alpha = 0;
		this.mumbai_0_25._off = true;
		this.mumbai_0_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_25.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_25).wait(274).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(33));
	
		// mumbai_0
		this.mumbai_0_26 = new lib.mumbaidot();
		this.mumbai_0_26.name = "mumbai_0_26";
		this.mumbai_0_26.parent = this;
		this.mumbai_0_26.setTransform(3259.3,1591.6,1,1,0,0,0,3,3);
		this.mumbai_0_26.alpha = 0;
		this.mumbai_0_26._off = true;
		this.mumbai_0_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_26.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_26).wait(253).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(54));
	
		// mumbai_0
		this.mumbai_0_27 = new lib.mumbaidot();
		this.mumbai_0_27.name = "mumbai_0_27";
		this.mumbai_0_27.parent = this;
		this.mumbai_0_27.setTransform(3261.4,1545.2,1,1,0,0,0,3,3);
		this.mumbai_0_27.alpha = 0;
		this.mumbai_0_27._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_27).wait(268).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(39));
	
		// mumbai_0
		this.mumbai_0_28 = new lib.mumbaidot();
		this.mumbai_0_28.name = "mumbai_0_28";
		this.mumbai_0_28.parent = this;
		this.mumbai_0_28.setTransform(3225.8,1552.4,1,1,0,0,0,3,3);
		this.mumbai_0_28.alpha = 0;
		this.mumbai_0_28._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_28).wait(282).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(25));
	
		// mumbai_0
		this.mumbai_0_29 = new lib.mumbaidot();
		this.mumbai_0_29.name = "mumbai_0_29";
		this.mumbai_0_29.parent = this;
		this.mumbai_0_29.setTransform(3237.8,1562.5,1,1,0,0,0,3,3);
		this.mumbai_0_29.alpha = 0;
		this.mumbai_0_29._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_29).wait(257).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(50));
	
		// mumbai_0
		this.mumbai_0_30 = new lib.mumbaidot();
		this.mumbai_0_30.name = "mumbai_0_30";
		this.mumbai_0_30.parent = this;
		this.mumbai_0_30.setTransform(3234.5,1552.7,1,1,0,0,0,3,3);
		this.mumbai_0_30.alpha = 0;
		this.mumbai_0_30._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_30).wait(254).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(53));
	
		// mumbai_0
		this.mumbai_0_31 = new lib.mumbaidot();
		this.mumbai_0_31.name = "mumbai_0_31";
		this.mumbai_0_31.parent = this;
		this.mumbai_0_31.setTransform(3249.4,1550.3,1,1,0,0,0,3,3);
		this.mumbai_0_31.alpha = 0;
		this.mumbai_0_31._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_31).wait(242).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(65));
	
		// mumbai_0
		this.mumbai_0_32 = new lib.mumbaidot();
		this.mumbai_0_32.name = "mumbai_0_32";
		this.mumbai_0_32.parent = this;
		this.mumbai_0_32.setTransform(3241.7,1538.3,1,1,0,0,0,3,3);
		this.mumbai_0_32.alpha = 0;
		this.mumbai_0_32._off = true;
		this.mumbai_0_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_32.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_32).wait(245).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(62));
	
		// mumbai_0
		this.mumbai_0_33 = new lib.mumbaidot();
		this.mumbai_0_33.name = "mumbai_0_33";
		this.mumbai_0_33.parent = this;
		this.mumbai_0_33.setTransform(3218.3,1510.4,1,1,0,0,0,3,3);
		this.mumbai_0_33.alpha = 0;
		this.mumbai_0_33._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_33).wait(247).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(60));
	
		// mumbai_0
		this.mumbai_0_34 = new lib.mumbaidot();
		this.mumbai_0_34.name = "mumbai_0_34";
		this.mumbai_0_34.parent = this;
		this.mumbai_0_34.setTransform(3241.7,1512.4,1,1,0,0,0,3,3);
		this.mumbai_0_34.alpha = 0;
		this.mumbai_0_34._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_34).wait(252).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(55));
	
		// mumbai_0
		this.mumbai_0_35 = new lib.mumbaidot();
		this.mumbai_0_35.name = "mumbai_0_35";
		this.mumbai_0_35.parent = this;
		this.mumbai_0_35.setTransform(3215.7,1500.9,1,1,0,0,0,3,3);
		this.mumbai_0_35.alpha = 0;
		this.mumbai_0_35._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_35).wait(255).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(52));
	
		// mumbai_0
		this.mumbai_0_36 = new lib.mumbaidot();
		this.mumbai_0_36.name = "mumbai_0_36";
		this.mumbai_0_36.parent = this;
		this.mumbai_0_36.setTransform(3250.8,1582.3,1,1,0,0,0,3,3);
		this.mumbai_0_36.alpha = 0;
		this.mumbai_0_36._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_36).wait(255).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(52));
	
		// mumbai_0
		this.mumbai_0_37 = new lib.mumbaidot();
		this.mumbai_0_37.name = "mumbai_0_37";
		this.mumbai_0_37.parent = this;
		this.mumbai_0_37.setTransform(3261.4,1612.1,1,1,0,0,0,3,3);
		this.mumbai_0_37.alpha = 0;
		this.mumbai_0_37._off = true;
		this.mumbai_0_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_37.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_37).wait(258).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(49));
	
		// mumbai_0
		this.mumbai_0_38 = new lib.mumbaidot();
		this.mumbai_0_38.name = "mumbai_0_38";
		this.mumbai_0_38.parent = this;
		this.mumbai_0_38.setTransform(3243.4,1585.6,1,1,0,0,0,3,3);
		this.mumbai_0_38.alpha = 0;
		this.mumbai_0_38._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_38).wait(261).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(46));
	
		// mumbai_0
		this.mumbai_0_39 = new lib.mumbaidot();
		this.mumbai_0_39.name = "mumbai_0_39";
		this.mumbai_0_39.parent = this;
		this.mumbai_0_39.setTransform(3255.4,1562.3,1,1,0,0,0,3,3);
		this.mumbai_0_39.alpha = 0;
		this.mumbai_0_39._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_39).wait(263).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(44));
	
		// mumbai_0
		this.mumbai_0_40 = new lib.mumbaidot();
		this.mumbai_0_40.name = "mumbai_0_40";
		this.mumbai_0_40.parent = this;
		this.mumbai_0_40.setTransform(3259.3,1556.3,1,1,0,0,0,3,3);
		this.mumbai_0_40.alpha = 0;
		this.mumbai_0_40._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_40).wait(265).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(42));
	
		// mumbai_0
		this.mumbai_0_41 = new lib.mumbaidot();
		this.mumbai_0_41.name = "mumbai_0_41";
		this.mumbai_0_41.parent = this;
		this.mumbai_0_41.setTransform(3241.7,1568.2,1,1,0,0,0,3,3);
		this.mumbai_0_41.alpha = 0;
		this.mumbai_0_41._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_41).wait(266).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(41));
	
		// mumbai_0
		this.mumbai_0_42 = new lib.mumbaidot();
		this.mumbai_0_42.name = "mumbai_0_42";
		this.mumbai_0_42.parent = this;
		this.mumbai_0_42.setTransform(3265.7,1535.8,1,1,0,0,0,3,3);
		this.mumbai_0_42.alpha = 0;
		this.mumbai_0_42._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_42).wait(272).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(35));
	
		// mumbai_0
		this.mumbai_0_43 = new lib.mumbaidot();
		this.mumbai_0_43.name = "mumbai_0_43";
		this.mumbai_0_43.parent = this;
		this.mumbai_0_43.setTransform(3250.8,1551.2,1,1,0,0,0,3,3);
		this.mumbai_0_43.alpha = 0;
		this.mumbai_0_43._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_43).wait(274).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(33));
	
		// mumbai_0
		this.mumbai_0_44 = new lib.mumbaidot();
		this.mumbai_0_44.name = "mumbai_0_44";
		this.mumbai_0_44.parent = this;
		this.mumbai_0_44.setTransform(3220.1,1526.3,1,1,0,0,0,3,3);
		this.mumbai_0_44.alpha = 0;
		this.mumbai_0_44._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_44).wait(265).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(42));
	
		// mumbai_0
		this.mumbai_0_45 = new lib.mumbaidot();
		this.mumbai_0_45.name = "mumbai_0_45";
		this.mumbai_0_45.parent = this;
		this.mumbai_0_45.setTransform(3237.8,1520.3,1,1,0,0,0,3,3);
		this.mumbai_0_45.alpha = 0;
		this.mumbai_0_45._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_45).wait(261).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(46));
	
		// mumbai_0
		this.mumbai_0_46 = new lib.mumbaidot();
		this.mumbai_0_46.name = "mumbai_0_46";
		this.mumbai_0_46.parent = this;
		this.mumbai_0_46.setTransform(3235.7,1527.9,1,1,0,0,0,3,3);
		this.mumbai_0_46.alpha = 0;
		this.mumbai_0_46._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_46).wait(256).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(51));
	
		// mumbai_0
		this.mumbai_0_47 = new lib.mumbaidot();
		this.mumbai_0_47.name = "mumbai_0_47";
		this.mumbai_0_47.parent = this;
		this.mumbai_0_47.setTransform(3228.5,1510.4,1,1,0,0,0,3,3);
		this.mumbai_0_47.alpha = 0;
		this.mumbai_0_47._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_47).wait(253).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(54));
	
		// mumbai_0
		this.mumbai_0_48 = new lib.mumbaidot();
		this.mumbai_0_48.name = "mumbai_0_48";
		this.mumbai_0_48.parent = this;
		this.mumbai_0_48.setTransform(3229.7,1558.7,1,1,0,0,0,3,3);
		this.mumbai_0_48.alpha = 0;
		this.mumbai_0_48._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_48).wait(249).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(58));
	
		// mumbai_0
		this.mumbai_0_49 = new lib.mumbaidot();
		this.mumbai_0_49.name = "mumbai_0_49";
		this.mumbai_0_49.parent = this;
		this.mumbai_0_49.setTransform(3262.8,1527.9,1,1,0,0,0,3,3);
		this.mumbai_0_49.alpha = 0;
		this.mumbai_0_49._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_49).wait(246).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(61));
	
		// mumbai_0
		this.mumbai_0_50 = new lib.mumbaidot();
		this.mumbai_0_50.name = "mumbai_0_50";
		this.mumbai_0_50.parent = this;
		this.mumbai_0_50.setTransform(3231.8,1569.1,1,1,0,0,0,3,3);
		this.mumbai_0_50.alpha = 0;
		this.mumbai_0_50._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_50).wait(269).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(38));
	
		// mumbai_0
		this.mumbai_0_51 = new lib.mumbaidot();
		this.mumbai_0_51.name = "mumbai_0_51";
		this.mumbai_0_51.parent = this;
		this.mumbai_0_51.setTransform(3234.5,1538.3,1,1,0,0,0,3,3);
		this.mumbai_0_51.alpha = 0;
		this.mumbai_0_51._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_51).wait(261).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(46));
	
		// mumbai_0
		this.mumbai_0_52 = new lib.mumbaidot();
		this.mumbai_0_52.name = "mumbai_0_52";
		this.mumbai_0_52.parent = this;
		this.mumbai_0_52.setTransform(3249.4,1532.3,1,1,0,0,0,3,3);
		this.mumbai_0_52.alpha = 0;
		this.mumbai_0_52._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_52).wait(255).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(52));
	
		// mumbai_0
		this.mumbai_0_53 = new lib.mumbaidot();
		this.mumbai_0_53.name = "mumbai_0_53";
		this.mumbai_0_53.parent = this;
		this.mumbai_0_53.setTransform(3259.3,1547.8,1,1,0,0,0,3,3);
		this.mumbai_0_53._off = true;
		this.mumbai_0_53.filters = [new cjs.ColorFilter(0, 0, 0, 1, 21, 194, 194, 0)];
		this.mumbai_0_53.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_53).wait(250).to({_off:false},0).wait(7).to({_off:true},272).wait(57));
	
		// mumbai_0
		this.mumbai_0_54 = new lib.mumbaidot();
		this.mumbai_0_54.name = "mumbai_0_54";
		this.mumbai_0_54.parent = this;
		this.mumbai_0_54.setTransform(3250.8,1541.8,1,1,0,0,0,3,3);
		this.mumbai_0_54.alpha = 0;
		this.mumbai_0_54._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_54).wait(246).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(61));
	
		// mumbai_0
		this.mumbai_0_55 = new lib.mumbaidot();
		this.mumbai_0_55.name = "mumbai_0_55";
		this.mumbai_0_55.parent = this;
		this.mumbai_0_55.setTransform(3247.7,1563.1,1,1,0,0,0,3,3);
		this.mumbai_0_55.alpha = 0;
		this.mumbai_0_55._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_55).wait(263).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(44));
	
		// mumbai_0
		this.mumbai_0_56 = new lib.mumbaidot();
		this.mumbai_0_56.name = "mumbai_0_56";
		this.mumbai_0_56.parent = this;
		this.mumbai_0_56.setTransform(3235.7,1579.6,1,1,0,0,0,3,3);
		this.mumbai_0_56.alpha = 0;
		this.mumbai_0_56._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_56).wait(266).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(41));
	
		// mumbai_0
		this.mumbai_0_57 = new lib.mumbaidot();
		this.mumbai_0_57.name = "mumbai_0_57";
		this.mumbai_0_57.parent = this;
		this.mumbai_0_57.setTransform(3233.3,1568.2,1,1,0,0,0,3,3);
		this.mumbai_0_57.alpha = 0;
		this.mumbai_0_57._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.mumbai_0_57).wait(249).to({_off:false},0).to({alpha:1},7).to({_off:true},272).wait(58));
	
		// la_0
		this.la_0 = new lib.londondot0();
		this.la_0.name = "la_0";
		this.la_0.parent = this;
		this.la_0.setTransform(520.6,1176.4,1,1,0,0,0,3,3);
		this.la_0.alpha = 0;
		this.la_0._off = true;
		this.la_0.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0).wait(45).to({_off:false},0).to({alpha:1},3).to({_off:true},452).wait(86));
	
		// la_0
		this.la_0_1 = new lib.londondot0();
		this.la_0_1.name = "la_0_1";
		this.la_0_1.parent = this;
		this.la_0_1.setTransform(554.2,1170.4,1,1,0,0,0,3,3);
		this.la_0_1.alpha = 0;
		this.la_0_1._off = true;
		this.la_0_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_1.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_1).wait(46).to({_off:false},0).to({alpha:1},3).to({_off:true},451).wait(86));
	
		// la_0
		this.la_0_2 = new lib.londondot0();
		this.la_0_2.name = "la_0_2";
		this.la_0_2.parent = this;
		this.la_0_2.setTransform(523.5,1202.3,1,1,0,0,0,3,3);
		this.la_0_2.alpha = 0;
		this.la_0_2._off = true;
		this.la_0_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_2.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_2).wait(49).to({_off:false},0).to({alpha:1},3).to({_off:true},448).wait(86));
	
		// la_0
		this.la_0_3 = new lib.londondot0();
		this.la_0_3.name = "la_0_3";
		this.la_0_3.parent = this;
		this.la_0_3.setTransform(565.6,1193.2,1,1,0,0,0,3,3);
		this.la_0_3.alpha = 0;
		this.la_0_3._off = true;
		this.la_0_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_3.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_3).wait(49).to({_off:false},0).to({alpha:1},3).to({_off:true},448).wait(86));
	
		// la_0
		this.la_0_4 = new lib.londondot0();
		this.la_0_4.name = "la_0_4";
		this.la_0_4.parent = this;
		this.la_0_4.setTransform(636.6,1226.7,1,1,0,0,0,3,3);
		this.la_0_4.alpha = 0;
		this.la_0_4._off = true;
		this.la_0_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_4.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_4).wait(76).to({_off:false},0).to({alpha:1},3).to({_off:true},421).wait(86));
	
		// la_0
		this.la_0_5 = new lib.londondot0();
		this.la_0_5.name = "la_0_5";
		this.la_0_5.parent = this;
		this.la_0_5.setTransform(605.9,1296.7,1,1,0,0,0,3,3);
		this.la_0_5.alpha = 0;
		this.la_0_5._off = true;
		this.la_0_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_5.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_5).wait(61).to({_off:false},0).to({alpha:1},3).to({_off:true},436).wait(86));
	
		// la_0
		this.la_0_6 = new lib.londondot0();
		this.la_0_6.name = "la_0_6";
		this.la_0_6.parent = this;
		this.la_0_6.setTransform(621.6,1275.9,1,1,0,0,0,3,3);
		this.la_0_6.alpha = 0;
		this.la_0_6._off = true;
		this.la_0_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_6.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_6).wait(53).to({_off:false},0).to({alpha:1},3).to({_off:true},444).wait(86));
	
		// la_0
		this.la_0_7 = new lib.londondot0();
		this.la_0_7.name = "la_0_7";
		this.la_0_7.parent = this;
		this.la_0_7.setTransform(584.3,1302.7,1,1,0,0,0,3,3);
		this.la_0_7.alpha = 0;
		this.la_0_7._off = true;
		this.la_0_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_7.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_7).wait(66).to({_off:false},0).to({alpha:1},3).to({_off:true},431).wait(86));
	
		// la_0
		this.la_0_8 = new lib.londondot0();
		this.la_0_8.name = "la_0_8";
		this.la_0_8.parent = this;
		this.la_0_8.setTransform(601.2,1275.9,1,1,0,0,0,3,3);
		this.la_0_8.alpha = 0;
		this.la_0_8._off = true;
		this.la_0_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_8.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_8).wait(58).to({_off:false},0).to({alpha:1},3).to({_off:true},439).wait(86));
	
		// la_0
		this.la_0_9 = new lib.londondot0();
		this.la_0_9.name = "la_0_9";
		this.la_0_9.parent = this;
		this.la_0_9.setTransform(577.6,1268.3,1,1,0,0,0,3,3);
		this.la_0_9.alpha = 0;
		this.la_0_9._off = true;
		this.la_0_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_9.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_9).wait(69).to({_off:false},0).to({alpha:1},3).to({_off:true},428).wait(86));
	
		// la_0
		this.la_0_10 = new lib.londondot0();
		this.la_0_10.name = "la_0_10";
		this.la_0_10.parent = this;
		this.la_0_10.setTransform(588.6,1283.1,1,1,0,0,0,3,3);
		this.la_0_10.alpha = 0;
		this.la_0_10._off = true;
		this.la_0_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_10.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_10).wait(56).to({_off:false},0).to({alpha:1},3).to({_off:true},441).wait(86));
	
		// la_0
		this.la_0_11 = new lib.londondot0();
		this.la_0_11.name = "la_0_11";
		this.la_0_11.parent = this;
		this.la_0_11.setTransform(577.6,1294.2,1,1,0,0,0,3,3);
		this.la_0_11.alpha = 0;
		this.la_0_11._off = true;
		this.la_0_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_11.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_11).wait(72).to({_off:false},0).to({alpha:1},3).to({_off:true},425).wait(86));
	
		// la_0
		this.la_0_12 = new lib.londondot0();
		this.la_0_12.name = "la_0_12";
		this.la_0_12.parent = this;
		this.la_0_12.setTransform(577.6,1283.1,1,1,0,0,0,3,3);
		this.la_0_12.alpha = 0;
		this.la_0_12._off = true;
		this.la_0_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_12.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_12).wait(47).to({_off:false},0).to({alpha:1},3).to({_off:true},450).wait(86));
	
		// la_0
		this.la_0_13 = new lib.londondot0();
		this.la_0_13.name = "la_0_13";
		this.la_0_13.parent = this;
		this.la_0_13.setTransform(573.5,1257.9,1,1,0,0,0,3,3);
		this.la_0_13.alpha = 0;
		this.la_0_13._off = true;
		this.la_0_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_13.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_13).wait(63).to({_off:false},0).to({alpha:1},3).to({_off:true},434).wait(86));
	
		// la_0
		this.la_0_14 = new lib.londondot0();
		this.la_0_14.name = "la_0_14";
		this.la_0_14.parent = this;
		this.la_0_14.setTransform(546.6,1257.9,1,1,0,0,0,3,3);
		this.la_0_14.alpha = 0;
		this.la_0_14._off = true;
		this.la_0_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_14.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_14).wait(71).to({_off:false},0).to({alpha:1},3).to({_off:true},426).wait(86));
	
		// la_0
		this.la_0_15 = new lib.londondot0();
		this.la_0_15.name = "la_0_15";
		this.la_0_15.parent = this;
		this.la_0_15.setTransform(535.5,1253.6,1,1,0,0,0,3,3);
		this.la_0_15.alpha = 0;
		this.la_0_15._off = true;
		this.la_0_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_15.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_15).wait(55).to({_off:false},0).to({alpha:1},3).to({_off:true},442).wait(86));
	
		// la_0
		this.la_0_16 = new lib.londondot0();
		this.la_0_16.name = "la_0_16";
		this.la_0_16.parent = this;
		this.la_0_16.setTransform(535.5,1243.5,1,1,0,0,0,3,3);
		this.la_0_16.alpha = 0;
		this.la_0_16._off = true;
		this.la_0_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_16.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_16).wait(53).to({_off:false},0).to({alpha:1},3).to({_off:true},444).wait(86));
	
		// la_0
		this.la_0_17 = new lib.londondot0();
		this.la_0_17.name = "la_0_17";
		this.la_0_17.parent = this;
		this.la_0_17.setTransform(529.5,1223.2,1,1,0,0,0,3,3);
		this.la_0_17.alpha = 0;
		this.la_0_17._off = true;
		this.la_0_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_17.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_17).wait(67).to({_off:false},0).to({alpha:1},3).to({_off:true},430).wait(86));
	
		// la_0
		this.la_0_18 = new lib.londondot0();
		this.la_0_18.name = "la_0_18";
		this.la_0_18.parent = this;
		this.la_0_18.setTransform(535.5,1202.3,1,1,0,0,0,3,3);
		this.la_0_18.alpha = 0;
		this.la_0_18._off = true;
		this.la_0_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_18.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_18).wait(74).to({_off:false},0).to({alpha:1},3).to({_off:true},423).wait(86));
	
		// la_0
		this.la_0_19 = new lib.londondot0();
		this.la_0_19.name = "la_0_19";
		this.la_0_19.parent = this;
		this.la_0_19.setTransform(569.1,1271.7,1,1,0,0,0,3,3);
		this.la_0_19.alpha = 0;
		this.la_0_19._off = true;
		this.la_0_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_19.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_19).wait(68).to({_off:false},0).to({alpha:1},3).to({_off:true},429).wait(86));
	
		// la_0
		this.la_0_20 = new lib.londondot0();
		this.la_0_20.name = "la_0_20";
		this.la_0_20.parent = this;
		this.la_0_20.setTransform(611.9,1199.2,1,1,0,0,0,3,3);
		this.la_0_20.alpha = 0;
		this.la_0_20._off = true;
		this.la_0_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_20.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_20).wait(50).to({_off:false},0).to({alpha:1},3).to({_off:true},447).wait(86));
	
		// la_0
		this.la_0_21 = new lib.londondot0();
		this.la_0_21.name = "la_0_21";
		this.la_0_21.parent = this;
		this.la_0_21.setTransform(598.4,1255.3,1,1,0,0,0,3,3);
		this.la_0_21.alpha = 0;
		this.la_0_21._off = true;
		this.la_0_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_21.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_21).wait(47).to({_off:false},0).to({alpha:1},3).to({_off:true},450).wait(86));
	
		// la_0
		this.la_0_22 = new lib.londondot0();
		this.la_0_22.name = "la_0_22";
		this.la_0_22.parent = this;
		this.la_0_22.setTransform(563.1,1263.9,1,1,0,0,0,3,3);
		this.la_0_22.alpha = 0;
		this.la_0_22._off = true;
		this.la_0_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_22.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_22).wait(71).to({_off:false},0).to({alpha:1},3).to({_off:true},426).wait(86));
	
		// la_0
		this.la_0_23 = new lib.londondot0();
		this.la_0_23.name = "la_0_23";
		this.la_0_23.parent = this;
		this.la_0_23.setTransform(571.6,1243.5,1,1,0,0,0,3,3);
		this.la_0_23.alpha = 0;
		this.la_0_23._off = true;
		this.la_0_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_23.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_23).wait(57).to({_off:false},0).to({alpha:1},3).to({_off:true},440).wait(86));
	
		// la_0
		this.la_0_24 = new lib.londondot0();
		this.la_0_24.name = "la_0_24";
		this.la_0_24.parent = this;
		this.la_0_24.setTransform(554.2,1253.6,1,1,0,0,0,3,3);
		this.la_0_24.alpha = 0;
		this.la_0_24._off = true;
		this.la_0_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_24.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_24).wait(58).to({_off:false},0).to({alpha:1},3).to({_off:true},439).wait(86));
	
		// la_0
		this.la_0_25 = new lib.londondot0();
		this.la_0_25.name = "la_0_25";
		this.la_0_25.parent = this;
		this.la_0_25.setTransform(543.8,1205.2,1,1,0,0,0,3,3);
		this.la_0_25.alpha = 0;
		this.la_0_25._off = true;
		this.la_0_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_25.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_25).wait(60).to({_off:false},0).to({alpha:1},3).to({_off:true},437).wait(86));
	
		// la_0
		this.la_0_26 = new lib.londondot0();
		this.la_0_26.name = "la_0_26";
		this.la_0_26.parent = this;
		this.la_0_26.setTransform(537.8,1189.7,1,1,0,0,0,3,3);
		this.la_0_26.alpha = 0;
		this.la_0_26._off = true;
		this.la_0_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_26.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_26).wait(62).to({_off:false},0).to({alpha:1},3).to({_off:true},435).wait(86));
	
		// la_0
		this.la_0_27 = new lib.londondot0();
		this.la_0_27.name = "la_0_27";
		this.la_0_27.parent = this;
		this.la_0_27.setTransform(554.2,1199.2,1,1,0,0,0,3,3);
		this.la_0_27.alpha = 0;
		this.la_0_27._off = true;
		this.la_0_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_27.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_27).wait(65).to({_off:false},0).to({alpha:1},3).to({_off:true},432).wait(86));
	
		// la_0
		this.la_0_28 = new lib.londondot0();
		this.la_0_28.name = "la_0_28";
		this.la_0_28.parent = this;
		this.la_0_28.setTransform(529.5,1211.2,1,1,0,0,0,3,3);
		this.la_0_28.alpha = 0;
		this.la_0_28._off = true;
		this.la_0_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_28.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_28).wait(67).to({_off:false},0).to({alpha:1},3).to({_off:true},430).wait(86));
	
		// la_0
		this.la_0_29 = new lib.londondot0();
		this.la_0_29.name = "la_0_29";
		this.la_0_29.parent = this;
		this.la_0_29.setTransform(535.5,1231.3,1,1,0,0,0,3,3);
		this.la_0_29.alpha = 0;
		this.la_0_29._off = true;
		this.la_0_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_29.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_29).wait(52).to({_off:false},0).to({alpha:1},3).to({_off:true},445).wait(86));
	
		// la_0
		this.la_0_30 = new lib.londondot0();
		this.la_0_30.name = "la_0_30";
		this.la_0_30.parent = this;
		this.la_0_30.setTransform(543.8,1217.2,1,1,0,0,0,3,3);
		this.la_0_30.alpha = 0;
		this.la_0_30._off = true;
		this.la_0_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_30.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_30).wait(56).to({_off:false},0).to({alpha:1},3).to({_off:true},441).wait(86));
	
		// la_0
		this.la_0_31 = new lib.londondot0();
		this.la_0_31.name = "la_0_31";
		this.la_0_31.parent = this;
		this.la_0_31.setTransform(584.3,1225.3,1,1,0,0,0,3,3);
		this.la_0_31.alpha = 0;
		this.la_0_31._off = true;
		this.la_0_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_31.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_31).wait(70).to({_off:false},0).to({alpha:1},3).to({_off:true},427).wait(86));
	
		// la_0
		this.la_0_32 = new lib.londondot0();
		this.la_0_32.name = "la_0_32";
		this.la_0_32.parent = this;
		this.la_0_32.setTransform(590.3,1202.3,1,1,0,0,0,3,3);
		this.la_0_32.alpha = 0;
		this.la_0_32._off = true;
		this.la_0_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_32.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_32).wait(47).to({_off:false},0).to({alpha:1},3).to({_off:true},450).wait(86));
	
		// la_0
		this.la_0_33 = new lib.londondot0();
		this.la_0_33.name = "la_0_33";
		this.la_0_33.parent = this;
		this.la_0_33.setTransform(609.6,1223.2,1,1,0,0,0,3,3);
		this.la_0_33.alpha = 0;
		this.la_0_33._off = true;
		this.la_0_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_33.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_33).wait(63).to({_off:false},0).to({alpha:1},3).to({_off:true},434).wait(86));
	
		// la_0
		this.la_0_34 = new lib.londondot0();
		this.la_0_34.name = "la_0_34";
		this.la_0_34.parent = this;
		this.la_0_34.setTransform(615.6,1244.7,1,1,0,0,0,3,3);
		this.la_0_34.alpha = 0;
		this.la_0_34._off = true;
		this.la_0_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_34.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_34).wait(65).to({_off:false},0).to({alpha:1},3).to({_off:true},432).wait(86));
	
		// la_0
		this.la_0_35 = new lib.londondot0();
		this.la_0_35.name = "la_0_35";
		this.la_0_35.parent = this;
		this.la_0_35.setTransform(587.4,1269.9,1,1,0,0,0,3,3);
		this.la_0_35.alpha = 0;
		this.la_0_35._off = true;
		this.la_0_35.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_35.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_35).wait(58).to({_off:false},0).to({alpha:1},3).to({_off:true},439).wait(86));
	
		// la_0
		this.la_0_36 = new lib.londondot0();
		this.la_0_36.name = "la_0_36";
		this.la_0_36.parent = this;
		this.la_0_36.setTransform(587.4,1244.7,1,1,0,0,0,3,3);
		this.la_0_36.alpha = 0;
		this.la_0_36._off = true;
		this.la_0_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_36.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_36).wait(72).to({_off:false},0).to({alpha:1},3).to({_off:true},425).wait(86));
	
		// la_0
		this.la_0_37 = new lib.londondot0();
		this.la_0_37.name = "la_0_37";
		this.la_0_37.parent = this;
		this.la_0_37.setTransform(546.6,1250.7,1,1,0,0,0,3,3);
		this.la_0_37.alpha = 0;
		this.la_0_37._off = true;
		this.la_0_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_37.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_37).wait(54).to({_off:false},0).to({alpha:1},3).to({_off:true},443).wait(86));
	
		// la_0
		this.la_0_38 = new lib.londondot0();
		this.la_0_38.name = "la_0_38";
		this.la_0_38.parent = this;
		this.la_0_38.setTransform(565.6,1250.7,1,1,0,0,0,3,3);
		this.la_0_38.alpha = 0;
		this.la_0_38._off = true;
		this.la_0_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_38.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_38).wait(49).to({_off:false},0).to({alpha:1},3).to({_off:true},448).wait(86));
	
		// la_0
		this.la_0_39 = new lib.londondot0();
		this.la_0_39.name = "la_0_39";
		this.la_0_39.parent = this;
		this.la_0_39.setTransform(565.6,1213.3,1,1,0,0,0,3,3);
		this.la_0_39.alpha = 0;
		this.la_0_39._off = true;
		this.la_0_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_39.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_39).wait(66).to({_off:false},0).to({alpha:1},3).to({_off:true},431).wait(86));
	
		// la_0
		this.la_0_40 = new lib.londondot0();
		this.la_0_40.name = "la_0_40";
		this.la_0_40.parent = this;
		this.la_0_40.setTransform(554.2,1219.3,1,1,0,0,0,3,3);
		this.la_0_40.alpha = 0;
		this.la_0_40._off = true;
		this.la_0_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_40.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_40).wait(68).to({_off:false},0).to({alpha:1},3).to({_off:true},429).wait(86));
	
		// la_0
		this.la_0_41 = new lib.londondot0();
		this.la_0_41.name = "la_0_41";
		this.la_0_41.parent = this;
		this.la_0_41.setTransform(563.1,1226.7,1,1,0,0,0,3,3);
		this.la_0_41.alpha = 0;
		this.la_0_41._off = true;
		this.la_0_41.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_41.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_41).wait(70).to({_off:false},0).to({alpha:1},3).to({_off:true},427).wait(86));
	
		// la_0
		this.la_0_42 = new lib.londondot0();
		this.la_0_42.name = "la_0_42";
		this.la_0_42.parent = this;
		this.la_0_42.setTransform(563.1,1238.7,1,1,0,0,0,3,3);
		this.la_0_42.alpha = 0;
		this.la_0_42._off = true;
		this.la_0_42.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_42.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_42).wait(51).to({_off:false},0).to({alpha:1},3).to({_off:true},446).wait(86));
	
		// la_0
		this.la_0_43 = new lib.londondot0();
		this.la_0_43.name = "la_0_43";
		this.la_0_43.parent = this;
		this.la_0_43.setTransform(543.8,1226.7,1,1,0,0,0,3,3);
		this.la_0_43.alpha = 0;
		this.la_0_43._off = true;
		this.la_0_43.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_43.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_43).wait(53).to({_off:false},0).to({alpha:1},3).to({_off:true},444).wait(86));
	
		// la_0
		this.la_0_44 = new lib.londondot0();
		this.la_0_44.name = "la_0_44";
		this.la_0_44.parent = this;
		this.la_0_44.setTransform(543.8,1238.7,1,1,0,0,0,3,3);
		this.la_0_44.alpha = 0;
		this.la_0_44._off = true;
		this.la_0_44.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_44.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_44).wait(59).to({_off:false},0).to({alpha:1},3).to({_off:true},438).wait(86));
	
		// la_0
		this.la_0_45 = new lib.londondot0();
		this.la_0_45.name = "la_0_45";
		this.la_0_45.parent = this;
		this.la_0_45.setTransform(554.2,1232.7,1,1,0,0,0,3,3);
		this.la_0_45.alpha = 0;
		this.la_0_45._off = true;
		this.la_0_45.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_45.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_45).wait(62).to({_off:false},0).to({alpha:1},3).to({_off:true},435).wait(86));
	
		// la_0
		this.la_0_46 = new lib.londondot0();
		this.la_0_46.name = "la_0_46";
		this.la_0_46.parent = this;
		this.la_0_46.setTransform(554.2,1244.7,1,1,0,0,0,3,3);
		this.la_0_46.alpha = 0;
		this.la_0_46._off = true;
		this.la_0_46.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 36, 102, 0)];
		this.la_0_46.cache(-2,-2,10,10);
	
		this.timeline.addTween(cjs.Tween.get(this.la_0_46).wait(68).to({_off:false},0).to({alpha:1},3).to({_off:true},429).wait(86));
	
		// london_0
		this.london_0 = new lib.londondot0();
		this.london_0.name = "london_0";
		this.london_0.parent = this;
		this.london_0.setTransform(2177,989.5,1,1,0,0,0,3,3);
		this.london_0.alpha = 0;
		this.london_0._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_0).wait(149).to({_off:false},0).to({alpha:1},4).to({_off:true},347).wait(86));
	
		// london_1
		this.london_1 = new lib.londondot0();
		this.london_1.name = "london_1";
		this.london_1.parent = this;
		this.london_1.setTransform(2180.5,978.2,1,1,0,0,0,3,3);
		this.london_1.alpha = 0;
		this.london_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_1).wait(150).to({_off:false},0).to({alpha:1},4).to({_off:true},346).wait(86));
	
		// london_2
		this.london_2 = new lib.londondot0();
		this.london_2.name = "london_2";
		this.london_2.parent = this;
		this.london_2.setTransform(2171,976.5,1,1,0,0,0,3,3);
		this.london_2.alpha = 0;
		this.london_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_2).wait(151).to({_off:false},0).to({alpha:1},4).to({_off:true},345).wait(86));
	
		// london_3
		this.london_3 = new lib.londondot0();
		this.london_3.name = "london_3";
		this.london_3.parent = this;
		this.london_3.setTransform(2159,976.5,1,1,0,0,0,3,3);
		this.london_3.alpha = 0;
		this.london_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_3).wait(153).to({_off:false},0).to({alpha:1},4).to({_off:true},343).wait(86));
	
		// london_4
		this.london_4 = new lib.londondot0();
		this.london_4.name = "london_4";
		this.london_4.parent = this;
		this.london_4.setTransform(2165,987,1,1,0,0,0,3,3);
		this.london_4.alpha = 0;
		this.london_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_4).wait(154).to({_off:false},0).to({alpha:1},4).to({_off:true},342).wait(86));
	
		// london_5
		this.london_5 = new lib.londondot0();
		this.london_5.name = "london_5";
		this.london_5.parent = this;
		this.london_5.setTransform(2155,997.2,1,1,0,0,0,3,3);
		this.london_5.alpha = 0;
		this.london_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_5).wait(156).to({_off:false},0).to({alpha:1},4).to({_off:true},340).wait(86));
	
		// london_6
		this.london_6 = new lib.londondot0();
		this.london_6.name = "london_6";
		this.london_6.parent = this;
		this.london_6.setTransform(2195,985.2,1,1,0,0,0,3,3);
		this.london_6.alpha = 0;
		this.london_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_6).wait(155).to({_off:false},0).to({alpha:1},4).to({_off:true},341).wait(86));
	
		// london_7
		this.london_7 = new lib.londondot0();
		this.london_7.name = "london_7";
		this.london_7.parent = this;
		this.london_7.setTransform(2193.5,1000.2,1,1,0,0,0,3,3);
		this.london_7.alpha = 0;
		this.london_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_7).wait(156).to({_off:false},0).to({alpha:1},4).to({_off:true},340).wait(86));
	
		// london_8
		this.london_8 = new lib.londondot0();
		this.london_8.name = "london_8";
		this.london_8.parent = this;
		this.london_8.setTransform(2182,1000.2,1,1,0,0,0,3,3);
		this.london_8.alpha = 0;
		this.london_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_8).wait(159).to({_off:false},0).to({alpha:1},4).to({_off:true},337).wait(86));
	
		// london_9
		this.london_9 = new lib.londondot0();
		this.london_9.name = "london_9";
		this.london_9.parent = this;
		this.london_9.setTransform(2182,1008,1,1,0,0,0,3,3);
		this.london_9.alpha = 0;
		this.london_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_9).wait(160).to({_off:false},0).to({alpha:1},4).to({_off:true},336).wait(86));
	
		// london_10
		this.london_10 = new lib.londondot0();
		this.london_10.name = "london_10";
		this.london_10.parent = this;
		this.london_10.setTransform(2161.8,1008,1,1,0,0,0,3,3);
		this.london_10.alpha = 0;
		this.london_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_10).wait(161).to({_off:false},0).to({alpha:1},4).to({_off:true},335).wait(86));
	
		// london_11
		this.london_11 = new lib.londondot0();
		this.london_11.name = "london_11";
		this.london_11.parent = this;
		this.london_11.setTransform(2149,927.4,1,1,0,0,0,3,3);
		this.london_11.alpha = 0;
		this.london_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_11).wait(163).to({_off:false},0).to({alpha:1},4).to({_off:true},333).wait(86));
	
		// london_12
		this.london_12 = new lib.londondot0();
		this.london_12.name = "london_12";
		this.london_12.parent = this;
		this.london_12.setTransform(2159,953.4,1,1,0,0,0,3,3);
		this.london_12.alpha = 0;
		this.london_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_12).wait(165).to({_off:false},0).to({alpha:1},4).to({_off:true},331).wait(86));
	
		// london_13
		this.london_13 = new lib.londondot0();
		this.london_13.name = "london_13";
		this.london_13.parent = this;
		this.london_13.setTransform(2172.8,950.2,1,1,0,0,0,3,3);
		this.london_13.alpha = 0;
		this.london_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_13).wait(168).to({_off:false},0).to({alpha:1},4).to({_off:true},328).wait(86));
	
		// london_14
		this.london_14 = new lib.londondot0();
		this.london_14.name = "london_14";
		this.london_14.parent = this;
		this.london_14.setTransform(2159,965.4,1,1,0,0,0,3,3);
		this.london_14.alpha = 0;
		this.london_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_14).wait(171).to({_off:false},0).to({alpha:1},4).to({_off:true},325).wait(86));
	
		// london_15
		this.london_15 = new lib.londondot0();
		this.london_15.name = "london_15";
		this.london_15.parent = this;
		this.london_15.setTransform(2146.5,965.4,1,1,0,0,0,3,3);
		this.london_15.alpha = 0;
		this.london_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_15).wait(173).to({_off:false},0).to({alpha:1},4).to({_off:true},323).wait(86));
	
		// london_16
		this.london_16 = new lib.londondot0();
		this.london_16.name = "london_16";
		this.london_16.parent = this;
		this.london_16.setTransform(2176,959.4,1,1,0,0,0,3,3);
		this.london_16.alpha = 0;
		this.london_16._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_16).wait(177).to({_off:false},0).to({alpha:1},4).to({_off:true},319).wait(86));
	
		// london_17
		this.london_17 = new lib.londondot0();
		this.london_17.name = "london_17";
		this.london_17.parent = this;
		this.london_17.setTransform(2167.8,959.4,1,1,0,0,0,3,3);
		this.london_17.alpha = 0;
		this.london_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_17).wait(181).to({_off:false},0).to({alpha:1},4).to({_off:true},315).wait(86));
	
		// london_18
		this.london_18 = new lib.londondot0();
		this.london_18.name = "london_18";
		this.london_18.parent = this;
		this.london_18.setTransform(2171,966.7,1,1,0,0,0,3,3);
		this.london_18.alpha = 0;
		this.london_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_18).wait(183).to({_off:false},0).to({alpha:1},4).to({_off:true},313).wait(86));
	
		// london_19
		this.london_19 = new lib.londondot0();
		this.london_19.name = "london_19";
		this.london_19.parent = this;
		this.london_19.setTransform(2180.5,969,1,1,0,0,0,3,3);
		this.london_19.alpha = 0;
		this.london_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_19).wait(185).to({_off:false},0).to({alpha:1},4).to({_off:true},311).wait(86));
	
		// london_20
		this.london_20 = new lib.londondot0();
		this.london_20.name = "london_20";
		this.london_20.parent = this;
		this.london_20.setTransform(2199.5,978.2,1,1,0,0,0,3,3);
		this.london_20.alpha = 0;
		this.london_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_20).wait(189).to({_off:false},0).to({alpha:1},4).to({_off:true},307).wait(86));
	
		// london_21
		this.london_21 = new lib.londondot0();
		this.london_21.name = "london_21";
		this.london_21.parent = this;
		this.london_21.setTransform(2189,978.2,1,1,0,0,0,3,3);
		this.london_21.alpha = 0;
		this.london_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_21).wait(192).to({_off:false},0).to({alpha:1},4).to({_off:true},304).wait(86));
	
		// london_22
		this.london_22 = new lib.londondot0();
		this.london_22.name = "london_22";
		this.london_22.parent = this;
		this.london_22.setTransform(2188,991.2,1,1,0,0,0,3,3);
		this.london_22.alpha = 0;
		this.london_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_22).wait(195).to({_off:false},0).to({alpha:1},4).to({_off:true},301).wait(86));
	
		// london_23
		this.london_23 = new lib.londondot0();
		this.london_23.name = "london_23";
		this.london_23.parent = this;
		this.london_23.setTransform(2171,1000.2,1,1,0,0,0,3,3);
		this.london_23.alpha = 0;
		this.london_23._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_23).wait(198).to({_off:false},0).to({alpha:1},4).to({_off:true},298).wait(86));
	
		// london_24
		this.london_24 = new lib.londondot0();
		this.london_24.name = "london_24";
		this.london_24.parent = this;
		this.london_24.setTransform(2161.8,941.4,1,1,0,0,0,3,3);
		this.london_24.alpha = 0;
		this.london_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_24).wait(200).to({_off:false},0).to({alpha:1},4).to({_off:true},296).wait(86));
	
		// london_25
		this.london_25 = new lib.londondot0();
		this.london_25.name = "london_25";
		this.london_25.parent = this;
		this.london_25.setTransform(2149,981,1,1,0,0,0,3,3);
		this.london_25.alpha = 0;
		this.london_25._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.london_25).wait(201).to({_off:false},0).to({alpha:1},4).to({_off:true},295).wait(86));
	
		// Layer_1
		this.instance = new lib.mapBG();
		this.instance.parent = this;
		this.instance.setTransform(2320,1365.5,1,1,0,0,0,2320,1365.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},500).wait(86));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,4640,2731);
	
	
	// stage content:
	(lib.introanimationv1desktop = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:

		this.frame_300 = function() {
			//this.stop();
			//console.log("frame 300");
			window.initIntroHeroCopy();
		}

		this.timeline.addTween(cjs.Tween.get(this).wait(300).call(this.frame_300).wait(1));


		this.frame_359 = function() {
			this.stop();
			
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));
	
		// Layer_1
		this.instance = new lib.world();
		this.instance.parent = this;
		this.instance.setTransform(720.4,126.3,0.158,0.158,0,0,0,2160.2,691.2);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:2159.8,regY:691.4,scaleX:0.94,scaleY:0.94,x:1818,y:-347.1},39,cjs.Ease.quadInOut).to({x:1714},60).to({x:658,y:-27.1},45,cjs.Ease.quadInOut).to({x:570},50).to({regX:2159.9,regY:691.5,scaleX:0.75,scaleY:0.75,x:-12.3,y:-406.6},40,cjs.Ease.quadInOut).to({x:-156.3},60).to({regX:2160.2,scaleX:0.41,scaleY:0.41,x:715,y:-43.1},60,cjs.Ease.quadInOut).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(1098.2,246.8,735.1,432.7);

	
	lib.properties = {
		id: '2BC59284BC11499B8F52D1D6B9E2D635',
		width: 1440,
		height: 460,
		fps: 60,
		color: "#000000",
		opacity: 1.00,
		manifest: [{
			src: heroImg , 
			id:"worldmap"
		}
		],
		preloads: []
	};
	
	(lib.Stage = function(desktopCanvas) {
		createjs.Stage.call(this, desktopCanvas);
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
	an.compositions['1BC59284BC11499B8F52D1D6B9E2D635'] = {
		getStage: function() { return exportDesktopRoot.getStage(); },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	an.getComposition = function(id) {return an.compositions[id];}
} // end of createHeroDesktopAnimation

	function initDesktopIntro() {
		desktopCanvas = document.getElementById("desktop-hp-canvas");
		Desktop_anim_container = document.getElementById("hero-animation_container");
		desktop_dom_overlay = document.getElementById("desktop_dom_overlay");
		var comp=DesktopAdobeAn.getComposition("1BC59284BC11499B8F52D1D6B9E2D635");
		var lib=comp.getLibrary();
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", function(evt){desktophandleFileLoad(evt,comp)});
		loader.addEventListener("complete", function(evt){desktophandleComplete(evt,comp)});
		var lib=comp.getLibrary();
		loader.loadManifest(lib.properties.manifest);
	} // end of initDesktopIntro


	function desktophandleFileLoad(evt, comp) {
		var images=comp.getImages();	
		if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
	} // end of  desktophandleFileLoad


	function desktophandleComplete(evt,comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for(i=0; i<ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		exportDesktopRoot = new lib.introanimationv1desktop();
		desktopStage = new lib.Stage(desktopCanvas);	
		//Registers the "tick" event listener.
		DesktopfnStartAnimation = function() {
			desktopStage.addChild(exportDesktopRoot);
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", desktopStage);
		}	    
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {		
			var lastW, lastH, lastS=1;		
			window.addEventListener('resize', resizeCanvas);		
			resizeCanvas();		
			function resizeCanvas() {			
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
				desktopCanvas.width = w*pRatio*sRatio;			
				desktopCanvas.height = h*pRatio*sRatio;
				desktopCanvas.style.width = desktop_dom_overlay.style.width = Desktop_anim_container.style.width =  w*sRatio+'px';				
				desktopCanvas.style.height = Desktop_anim_container.style.height = desktop_dom_overlay.style.height = h*sRatio+'px';
				desktopStage.scaleX = pRatio*sRatio;			
				desktopStage.scaleY = pRatio*sRatio;			
				lastW = iw; lastH = ih; lastS = sRatio;            
				desktopStage.tickOnUpdate = false;            
				desktopStage.update();            
				desktopStage.tickOnUpdate = true;		
			}
		}
		makeResponsive(true,'both',false,1);	
		DesktopAdobeAn.compositionLoaded(lib.properties.id);
		DesktopfnStartAnimation();
	} // end of desktophandleComplete



function initIntroHeroCopy() {
	var introContent = document.querySelector("#hero-animation_container .introCopy");
	introContent.style.display = "block";
}



if (window.innerWidth < 768) {
	document.getElementById("hero-animation_container").style.display = "none";
}
else {
	var heroImgLoc = window.top.document.getElementById("hero-animation_container").dataset.heroImg;
	createHeroDesktopAnimation (createjs = createjs||{}, DesktopAdobeAn = DesktopAdobeAn||{},heroImgLoc);
	initDesktopIntro();
}




// var heroImgLoc = window.top.document.getElementById("hero-animation_container").dataset.heroImg;
// 	createHeroDesktopAnimation (createjs = createjs||{}, DesktopAdobeAn = DesktopAdobeAn||{},heroImgLoc);
// 	initDesktopIntro();

