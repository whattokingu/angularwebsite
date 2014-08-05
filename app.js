(function(){

	var app = angular.module('website',[]);
	app.controller('PanelController',function(){
		this.tab=0;

		this.selectTab=function(setTab){
			this.tab=setTab;

		};
		this.isSet=function(isSet){
			return this.tab===isSet;
		}

		this.images=[
		{
			image:"images/004-full.jpg",
			description: "My travel buddy in Korea for 7 weeks."
		},
		{	
			image:"images/003-full.jpg",
			description: "CheongYeCheon stream in Seoul."
		},

		{
			image:"images/001-full.jpg",
			description: "Peak hour in the city."
		},
		{
			image:"images/002-full.jpg",
			description: "Peak hour in the city."
		}


		];

		
		this.entries=[
		{
			title: "My time in Korea",
			page: "helllo",
			date:"5.08.2014"

		},

		];

	});


})();