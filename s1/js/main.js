$(document).ready(function(){
	var duration=300;
	
	$(".imgBox2").on("mouseover",function(){
		$(".rStore2").stop().animate({
			bottom:"0px"
		},duration)
		
	});
	
	$(".imgBox2").on("mouseout",function(){
		$(".rStore2").stop().animate({
			bottom:"-80px"
		},duration)
		
	});
	
});

