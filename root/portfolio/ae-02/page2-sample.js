(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
//lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 626,
	height: 877,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/page2-sample_atlas_.jpg", id:"page2-sample_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"page2-sample_atlas_", frames: [[628,0,575,273],[577,1375,405,244],[1205,0,575,273],[984,1375,405,244],[1154,1100,575,273],[1221,1621,405,244],[0,1154,575,273],[628,275,575,273],[1391,1375,405,244],[1205,275,575,273],[0,1429,405,244],[628,550,575,273],[1628,1621,405,244],[1205,550,575,273],[0,1675,405,244],[628,825,575,273],[407,1867,405,244],[1205,825,575,273],[814,1867,405,244],[0,879,575,273],[407,1621,405,244],[577,1100,575,273],[814,1621,405,244],[0,0,626,877]]}
];


(lib.frame0 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frame0jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frame1 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.frame1jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frame10 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.frame10jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.frame11 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.frame2 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.frame2jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.frame3 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.frame3jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.frame4 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.frame4jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.frame5 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.frame5jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.frame6 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.frame6jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.frame7 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.frame7jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.frame8 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.frame8jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.frame9 = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.frame9jpgcopy = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Pagebase = function() {
	this.spriteSheet = ss["page2-sample_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.testeanimatepag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.frame0();

	this.instance_1 = new lib.frame1();

	this.instance_2 = new lib.frame2();

	this.instance_3 = new lib.frame3();

	this.instance_4 = new lib.frame4();

	this.instance_5 = new lib.frame5();

	this.instance_6 = new lib.frame6();

	this.instance_7 = new lib.frame7();

	this.instance_8 = new lib.frame8();

	this.instance_9 = new lib.frame9();

	this.instance_10 = new lib.frame10();

	this.instance_11 = new lib.frame11();
	this.instance_11.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(37));

	// Layer 5
	this.instance_12 = new lib.frame0jpgcopy();
	this.instance_12.setTransform(43,290);

	this.instance_13 = new lib.frame1jpgcopy();
	this.instance_13.setTransform(43,290);

	this.instance_14 = new lib.frame2jpgcopy();
	this.instance_14.setTransform(43,290);

	this.instance_15 = new lib.frame3jpgcopy();
	this.instance_15.setTransform(43,290);

	this.instance_16 = new lib.frame4jpgcopy();
	this.instance_16.setTransform(43,290);

	this.instance_17 = new lib.frame5jpgcopy();
	this.instance_17.setTransform(43,290);

	this.instance_18 = new lib.frame6jpgcopy();
	this.instance_18.setTransform(43,290);

	this.instance_19 = new lib.frame7jpgcopy();
	this.instance_19.setTransform(43,290);

	this.instance_20 = new lib.frame8jpgcopy();
	this.instance_20.setTransform(43,290);

	this.instance_21 = new lib.frame9jpgcopy();
	this.instance_21.setTransform(43,290);

	this.instance_22 = new lib.frame10jpgcopy();
	this.instance_22.setTransform(43,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},23).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},14).to({state:[{t:this.instance_20}]},2).wait(2));

	// Layer 1
	this.instance_23 = new lib.Pagebase();

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(313,438.5,626,877);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});

var lib, images, createjs, ss;