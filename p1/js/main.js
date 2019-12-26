$(document).ready(function () {

	
	$(".toggle").click(function () {
		$("#collap").animate({
			"right":"0px"
		},800)
			return false;
	});
	$(".c_close").click(function () {
		$("#collap").animate({
			"right":"-110%"
		},800)
			return false;
	});

	
	//토글메뉴 클릭시 넘어가기 
	$("#pnb .menu1").click(function () { 
		$("#collap").animate({
			"right":"-110%"
		},800);
		$("html,body").animate({
			scrollTop: "0"
		}, 600);
	});
	$("#pnb .menu2").click(function () {
		$("#collap").animate({
			"right":"-110%"
		},800);
		$("html,body").animate({
			scrollTop: $("#page2").offset().top
		}, 600);
	});
	$("#pnb .menu3").click(function () {
		$("#collap").animate({
			"right":"-110%"
		},800);
		$("html,body").animate({
			scrollTop: $("#page3").offset().top
		}, 600);
	});
	$("#pnb .menu4").click(function () {
		$("#collap").animate({
			"right":"-110%"
		},800);
		$("html,body").animate({
			scrollTop: $("#page4").offset().top
		}, 600);
	});



	//페럴럭스 스크롤링
	var wh = $(".page").height();
	var wd = $(".page").width();
	$(".page").each(function (index) {
		$(this).attr("data-val", index * wh);
	});



	$(".page").on("mousewheel DOMMouseScroll", function (e) {
		var secPos = parseInt($(this).attr("data-val"));
		if (e.originalEvent.wheelDelta >= 0) {
			$("html,body").stop().animate({
				scrollTop: secPos - wh
			});
			return false;
		} else if (e.originalEvent.wheelDelta < 0) {
			$("html,body").stop().animate({
				scrollTop: secPos + wh
			});
			return false;
		}
	});


	
	//사이드 메뉴 
	$("html,body").animate({
		scrollTop: "0"
	});
	//제일 상단페이지부터 시작하게 실행 , 초기값은 0

	$("#gnb li a").eq(0).addClass("select");


	$("#gnb li a.menu1, a.menu_btn1,a.logo").on("click", function () {
		$("html,body").animate({
			scrollTop: "0"
		}, 600);
		
		return false;
	});
	$("#gnb li a.menu2, a.menu_btn2").on("click", function () {
		$("html,body").animate({
			scrollTop: $("#page2").offset().top
		}, 600);
		
		return false;
	});
	$("#gnb li a.menu3, a.menu_btn3").on("click", function () {
		$("html,body").animate({
			scrollTop: $("#page3").offset().top
		}, 600);
		
		return false;
	});
	$("#gnb li a.menu4, a.menu_btn4").on("click", function () {
		$("html,body").animate({
			scrollTop: $("#page4").offset().top
		}, 600);
		
		return false;
	});




	$(".pop").mouseenter(function () {
		$(".page").off("mousewheel DOMMouseScroll");
		$(".scroll").fadeIn(300);
	});

	$(".container").mouseenter(function () {
		$(".page").off("mousewheel DOMMouseScroll");
		$(".scroll").fadeOut();
	});

	$(".pop").mouseleave(function () {
		$(".page").on("mousewheel DOMMouseScroll", function (e) {
			var secPos = parseInt($(this).attr("data-val"));
			if (e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({
					scrollTop: secPos - wh
				});
				return false;
			} else if (e.originalEvent.wheelDelta < 0) {
				$("html,body").stop().animate({
					scrollTop: secPos + wh
				});
				return false;
			}

		});

	});
	$(".container").mouseleave(function () {
		$(".page").on("mousewheel DOMMouseScroll", function (e) {
			var secPos = parseInt($(this).attr("data-val"));
			if (e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({
					scrollTop: secPos - wh
				});
				return false;
			} else if (e.originalEvent.wheelDelta < 0) {
				$("html,body").stop().animate({
					scrollTop: secPos + wh
				});
				return false;
			}

		});

	});





	//텍스트타이핑 효과
	//초성중성종성을 나누는 함수 
	String.prototype.toKorChars = function () {
		var cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
			cJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
			cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
			cho, jung, jong;
		var str = this,
			cnt = str.length,
			chars = [],
			cCode;
		for (var i = 0; i < cnt; i++) {
			cCode = str.charCodeAt(i);
			if (cCode == 32) {
				chars.push(" ");
				continue;
			} // 한글이 아닌 경우 
			if (cCode < 0xAC00 || cCode > 0xD7A3) {
				chars.push(str.charAt(i));
				continue;
			}
			cCode = str.charCodeAt(i) - 0xAC00;
			jong = cCode % 28; // 종성 
			jung = ((cCode - jong) / 28) % 21 // 중성 
			cho = (((cCode - jong) / 28) - jung) / 21 // 초성 
			//기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
			// chars.push(cCho[cho], cJung[jung]); 
			// if (cJong[jong] !== '') { 
			// chars.push(cJong[jong]); 
			// } // 이부분을 원하는 방향으로 바꿈. 
			// 테스트라는 문장이 
			// ㅌ,ㅔ,ㅅ,-,ㅌ,- 형식으로 저장되던 코드를 
			// ㅌ,테,ㅅ,스,ㅌ,트 형식으로 저장되도록함 (타이핑효과를 위해서) 
			chars.push(cCho[cho]);
			chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28)));
			if (cJong[jong] !== '') {
				chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28) + jong));
			}
		}
		return chars;
	} //타이핑할 문장 
	var result = "안녕하세요. 신입 웹퍼블리셔 / 웹디자이너 강예은입니다.";
	var typeing1 = [];
	result = result.split(''); // 한글자씩자름 //각글자 초성,중성,종성으로 나눠서 배열로 저장함. 
	for (var i = 0; i < result.length; i++) {
		typeing1[i] = result[i].toKorChars();
	} //출력할 엘리먼트요소 가져옴 -result클래스에 출력 
	var resultDiv = document.getElementsByClassName("result")[0];
	var text = "";
	var i = 0;
	var j = 0;
	var text = ''; //총글자수 
	var imax = typeing1.length; //setInterval을 이용해 반복적으로 출력 
	var inter = setInterval(typi, 80);

	function typi() { //글자수만큼 반복후 종료 
		if (i <= imax - 1) { //각 글자가 초성 중성 종성 순서대로 추가되도록 
			var jmax = typeing1[i].length;
			resultDiv.innerHTML = text + typeing1[i][j];
			j++;
			if (j == jmax) {
				text += typeing1[i][j - 1]; //초성중성종성 순서대로 출력된 후 글자는 저장 ( 다음 글자와 이어붙이기 위해서 ) 
				i++;
				j = 0;
			}
		} else {
			clearInterval(inter);
		}
	}



	//그래프 
	$("#page2").mouseenter(function () {
		$(".gr_ht").delay(400).animate({
			width: "90%"
		}, 1000)
		$(".gr_cs").delay(800).animate({
			width: "80%"
		}, 1000)
		$(".gr_ps").delay(1200).animate({
			width: "75%"
		}, 1000)
		$(".gr_li").delay(1600).animate({
			width: "70%"
		}, 1000)
		$(".gr_ja").delay(2000).animate({
			width: "65%"
		}, 1000)
		$(".gr_jq").delay(2400).animate({
			width: "50%"
		}, 1000)
		return false;
	});


	
	
});
