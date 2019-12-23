$(document).ready(function () {
	var wd = parseInt($(".imgWrap").width());
	var aniWid = wd * -1;

	var intv = setInterval(function () {
		leftAni();
	}, 3000);

	$(".dr_btn .pre").click(function () {
		clearInterval(intv);
		rightAni();
		intv = setInterval(function () {
			leftAni();
		}, 3000);
	});
	$(".dr_btn .next").click(function () {
		clearInterval(intv);

		leftAni();
		intv = setInterval(function () {
			leftAni();
		}, 3000);
	});

	function rightAni() {
		$(".imgWrap li").eq(1).prependTo(".imgWrap");
		$(".imgWrap").css("margin-left", aniWid);
		$(".imgWrap li").animate({
			"margin-left": "0px"
		}, 400);
	};

	function leftAni() {
		$(".imgWrap").animate({
			"margin-left": aniWid
		}, 400, function () {
			$(".imgWrap li").eq(0).appendTo(".imgWrap");
			$(".imgWrap").css("margin-left", "0px");
		});
	};

	var wd = parseInt($(".imgWrap").width());

	$(".slide_btn li").click(function () {
		//btn_box의 li들을 클릭
		var idx = $(this).index();
		//내 자신(li)의 (순서=index)0,1,2,3,4를 idx라는 변수명으로 저장하라 
		// = : 앞에 있는 변수명을 뒤에 있는 선택자에 적용
		$(".imgWrap").not(":animated").animate({
			"margin-left": wd * idx * -1 + "px"
		}, 600);
		//
		$(".slide_btn li").removeClass("on");
		$(this).addClass("on");



	});
	

	
	
});
