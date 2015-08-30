function randColor(){
	for(var i=0;i<$(".cell").length;i++){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		$(".cell").eq(i).css("background-color","rgba("+r+","+g+","+b+",0.7)");
	}
}

$(window).resize(function(){
	var grid = new Screen;
	grid.init();
});


var Screen = function(){
	self = this;

	this.avgWidth = 340;
	this.height = .4;

	this.widthScreen = null;
	this.number = null;

	this.init = function(){
		self.widthScreen = $(window).width();
		self.number = Math.round(self.widthScreen/self.avgWidth);

		$(".cell").width(Math.floor(self.widthScreen/self.number));
		$(".cell").height(Math.floor(self.widthScreen/self.number*self.height));
	};
}