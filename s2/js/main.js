$(document).ready(function(){
	$(".toggle").click(function(){
		$("#collap").animate({
			"left":"0px"
		},1000);
	});
	$(".close").click(function(){
		$("#collap").animate({
			"left":"-110%"
		},1000);
	});
	
	var intv=setInterval(function(){
		nextAni();
	},2700);
	
	var wd=parseInt($(".art_gallery li").width());

	function nextAni(){
		$(".art_gallery").animate({
			"margin-left":"-"+wd+"px"
		},600,function(){
			$(".art_gallery li").eq(0).appendTo($(".art_gallery"));
			$(".art_gallery").css("margin-left","0px")
		})
	};
	
	function prevAni(){
		$(".art_gallery li").eq(9).prependTo($(".art_gallery"));
		$(".art_gallery").css("margin-left","-"+wd+"px");
		$(".art_gallery").animate({
			"margin-left":"0px"
		},600)
	};
	
	$(".art_gal .btnBox li.right").click(function(){
		clearInterval(intv);
		nextAni();
		intv=setInterval(function(){
			nextAni();
		},3000);
	});
	
	$(".art_gal .btnBox li.left").click(function(){
		clearInterval(intv);
		prevAni();
		intv=setInterval(function(){
			nextAni();
		},2700);
	});
	
	$(".art_gallery li").hover(function(){
		stop();
		$(this).css("opacity","0.7");
	},function(){
		intv=setInterval(function(){
			nextAni();
		},2700);
		$(this).css("opacity","1");
	});
	
	function stop(){
		clearInterval(intv);
	}
	
		$("#black,#big").hide();
			$(".art_gallery li a").on("click",function(){
				$("#black").fadeIn("fast");
				$("#big").show().html("<img src='"+$(this).attr('href')+"'>");
				return false;
				
				//html내부 내용을 변경하거나 가져올 수 있다.
			});
			$("#black,#big").on("click",function(){
				$("#black,#big").fadeOut();
			});
	
	
	
	
	
	
});