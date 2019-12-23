$(document).ready(function () {
	var intv = setInterval(function () {
		nextAni();
	}, 3000);

	var s_wd = parseInt($('.slider').width());

	function nextAni() {
		$(".slider .main").not(":animated").animate({
			"margin-left": "-" + s_wd + "px"
		}, 800, function () {
			$(".slider .main li").eq(0).appendTo($(".slider .main"));
			$(".slider .main").css("margin-left", "0px");
		})
	};

	function prevAni() {
		$(".slider .main li").eq(2).prependTo($(".slider .main"));
		$(".slider .main").css("margin-left", "-" + s_wd + "px");
		$(".slider .main").not(":animated").animate({
			"margin-left": "0px"
		}, 800)
	};

	$(".btnFrame .left").click(function () {
		clearInterval(intv);
		prevAni();
		intv = setInterval(function () {
			nextAni();
		}, 3000)
	});

	$(".btnFrame .right").click(function () {
		clearInterval(intv);
		nextAni();
		intv = setInterval(function () {
			nextAni();
		}, 3000)
	});

	var $f_btn_l = $("#con_slide .btn.left");
	var $f_btn_r = $("#con_slide .btn.right");

	var $con_main = $("#con_slide .main");
	var f_wd = parseInt($($con_main).width());

	function fes_rAni() {
		$(".imgFrame").stop().animate({
			"margin-left": "-" + f_wd + "px"
		}, 600, function () {
			$(".imgFrame li").eq(0).appendTo($(".imgFrame"));
			$(".imgFrame").css("margin-left", "0px")
			$("#fes_date li").removeClass("on");
			
		})
		

	};
	
	
	
	
	
	function fes_lAni() {
		$(".imgFrame li").eq(9).prependTo($(".imgFrame"));
		$(".imgFrame").css("margin-left","-"+f_wd+"px");
		$(".imgFrame").stop().animate({
			"margin-left":"0px"
		})
	};




	$($f_btn_l).click(function () {
		fes_lAni();
		/*var but = parseInt($(this).attr("data-val")) * f_wd;
		$("#fes_date li").removeClass("on");
		$("#fes_date li",this).addClass("on");*/
		return false;

	});
	$($f_btn_r).click(function () {
		fes_rAni();
		return false;

	});

	//var wd=parseInt($("#visual").width()); //200

	$("#fes_date li").on("click", function () {
		var but = parseInt($(this).attr("data-val")) * f_wd;
		$("#fes_date li").removeClass("on");
		$(this).addClass("on");
		
		$(".imgFrame").stop().animate({
			"margin-left": "-" + but + "px"
		});

	});
	
	
		$("#black,#big").hide();
			$(".sub_gal a").on("click",function(){
				$("#black").fadeIn("fast");
				$("#big").show().html("<img src='"+$(this).attr('href')+"'>");
				return false;
				
				//html내부 내용을 변경하거나 가져올 수 있다.
			});
			$("#black,#big").on("click",function(){
				$("#black,#big").fadeOut();
			});








});
