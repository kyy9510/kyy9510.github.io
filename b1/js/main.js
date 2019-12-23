$(document).ready(function(){
	var intv=setInterval(function(){
		nextAni();
	},3000);
	var wd=parseInt($(".banWrap").width());
	function nextAni(){
		$(".ban").not(":animated").animate({
			"margin-left":"-"+wd+"px"
		},800,function(){
			$(".ban li").eq(0).appendTo($(".ban"));
			$(".ban").css("margin-left","0px");
			$(".ban li").addClass("on");
			$(".ban li").not(":first-child").removeClass("on");
		})
	};
	
	function preAni(){
		$(".ban li").eq(2).prependTo($(".ban"));
		$(".ban").css("margin-left","-"+wd+"px");
		$(".ban").not(":animated").animate({
			"margin-left":"0px"
		},800,function(){
			$(".ban li").addClass("on");
			$(".ban li").not(":first-child").removeClass("on");
		});
	};
	
	$(".btn.left").click(function(){
		clearInterval(intv);
		preAni();
		intv=setInterval(function(){
			nextAni();
		},3000);
	});
	
	$(".btn.right").click(function(){
		clearInterval(intv);
		nextAni();
		intv=setInterval(function(){
			nextAni();
		},3000);
	});
	
	$(".popTit").click(function(){
		$("#pop").slideUp();
	});
	
	
	
	
	
	
	
	
	
	
});