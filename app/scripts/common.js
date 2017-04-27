/**
 * 프로젝트에서 사용하는 common.js 
 */

/**
 * 옴니추어 관련
 * page가 시작될 때 호출되거나, WebView를 호출할때 호출된다.
 * Hybrid페이지와 WebView페이지에 해당하는 문구를 한번에 정리함. 
 * @param {String} pageCode 화면ID
 * @param {String} isWebViewPage webView페이지일경우 true
 */
function omnitureHybrid(pageCode, isWebViewPage) {
	var code = pageCode;
	var omniName = "";
	
	WNLog('omnitureHybrid', pageCode);
	
	// CM: Common & Main
	if("HL003" === code){omniName = "CM:로그인:서비스이용동의";
	}else if("HL003_BTN_SERVICE" === code){omniName = "CM:로그인:서비스이용동의:서비스이용약관";		// HL004
	}else if("HL003_BTN_PUSH" === code){omniName = "CM:로그인:서비스이용동의:알림이용안내";			// HL005
	}else if("HL006" === code){omniName = "CM:로그인:서비스이용동의:휴대폰번호확인";

	// MY : My Account
	}else if("HJ023" === code){omniName = "MY:결제예정조회";
	}else if("HJ023_BTN_PAY" === code){omniName = "MY:결제예정조회:선결제하기";
	}else if("HJ027" === code){omniName = "MY:결제예정상세정보";
	}else if("HJ025" === code){omniName = "MY:결제예정금액이없는결제예정조회";
	}else if("HJ004" === code){omniName = "MY:이용대금명세서";
	}else if("HJ008" === code){omniName = "MY:이용대금명세서상세정보";
	}else if("HJ007" === code){omniName = "MY:할부철회항변권기간이익상실안내";
	}else if("HJ004_BTN_PAY" === code){omniName = "MY:이용대금명세서:선결제하기";
	}else if("HJ033" === code){omniName = "MY:내포인트캐시백";
	}else if("HJ009" === code){omniName = "MY:기타포인트마일리지";
	}else if("HJ013" === code){omniName = "MY:세이브서비스포인트";
	}else if("HJ015" === code){omniName = "MY:WTRAVEL실적";
	}else if("HJ017" === code){omniName = "MY:R적립금";	
	}else if("HJ018" === code){omniName = "MY:DIRECT캐시백";
	}else if("HJ019" === code){omniName = "MY:오픈마일리지";
	}else if("HJ016" === code){omniName = "MY:S포인트";	
	}else if("HJ020" === code){omniName = "MY:T포인트";	
	}else if("HJ021" === code){omniName = "MY:I포인트";	
	}else if("HJ022" === code){omniName = "MY:결제전환포인트";
	}else if("HJ026" === code){omniName = "MY:잔여한도";
	}else if("HJ026_BTN_LC" === code){omniName = "MY:잔여한도:한도변경하기";
	}else if("HJ026_BTN_CALL" === code){omniName = "MY:잔여한도:변경문의";	
	
	// MB : My Benifits
	}else if("HB009" === code){omniName = "MB:카드혜택요약";
	}else if("HB010" === code){omniName = "MB:바우처모음";
	}else if("HB011" === code){omniName = "MB:바우처상세";
	}else if("HB012" === code){omniName = "MB:스타골드프렌드십";
	}else if("HB021" === code){omniName = "MB:지역변경";
	}else if("HB013" === code){omniName = "MB:M포인트";
	}else if("HB013_BTN_TRF" === code){omniName = "MB:M포인트:가족카드M포인트양도";
	}else if("HB013_BTN_ADD" === code){omniName = "MB:M포인트:세이브오토가족합산신청";
	}else if("HB016" === code){omniName = "MB:보유X캐시백";
	}else if("HB028" === code){omniName = "MB:X캐시백사용";
	}else if("HB028_BTN_PAY" === code){omniName = "MB:X캐시백사용:결제금액차감신청";
	}else if("HB028_BTN_ACC" === code){omniName = "MB:X캐시백사용:계좌입금신청";
	}else if("HB005" === code){omniName = "MB:존재하지않은장소";
	}else if("HB006" === code){omniName = "MB:잘못된주소";
	}else if("HB007" === code){omniName = "MB:잘못된전화번호";
	}else if("HB008" === code){omniName = "MB:기타";

	// AC : AppCard
	}else if("HL010" === code){omniName = "AC:앱카드등록:이용동의";
	}else if("HL010_BTN_APC" === code){omniName = "AC:앱카드등록:앱카드이용약관";					// HL019
	}else if("HL010_BTN_APCI" === code){omniName = "AC:앱카드등록:앱카드개인정보수집이용동의";				// HL028
	}else if("HL010_BTN_API" === code){omniName = "AC:앱카드등록:ARS인증개인정보수집이용동의";				// HL020
	}else if("HL010_BTN_PIC" === code){omniName = "AC:앱카드등록:개인정보제공위탁";					// HL027
	}else if("HL010_BTN_IDI" === code){omniName = "AC:앱카드등록:고유식별정보처리";					// HL021
	}else if("HL010_BTN_COM" === code){omniName = "AC:앱카드등록:통신사이용약관";					// HL022
	}else if("HL010_BTN_KCP" === code){omniName = "AC:앱카드등록:한국사이버결제이용약관";				// HL026
	}else if("HA010" === code){omniName = "AC:PC결제현대카드세이브신청";
	}else if("HA010_BTN_HV" === code){omniName = "AC:PC결제현대카드세이브신청:전문보기";
	}else if("HA012" === code){omniName = "AC:PC결제ARS인증서비스동의";
	}else if("HA012_BTN_ACI" === code){omniName = "AC:PC결제앱카드개인정보이용동의";
	}else if("HA012_BTN_PIC" === code){omniName = "AC:PC결제개인정보제공위탁";
	}else if("HA012_BTN_IDI" === code){omniName = "AC:PC결제고유식별정보처리";
	}else if("HA012_BTN_COM" === code){omniName = "AC:PC결제통신사이용약관";
	}else if("HA012_BTN_KCP" === code){omniName = "AC:PC결제한국사이버결제이용약관";
	}else if("HA018" === code){omniName = "AC:PC결제ARS인증";
	}else if("HA032" === code){omniName = "AC:모바일결제현대카드세이브신청";
	}else if("HA032_BTN_HV" === code){omniName = "AC:모바일결제현대카드세이브신청:전문보기";
	}else if("HA033" === code){omniName = "AC:모바일결제ARS인증서비스동의";
	}else if("HA033_BTN_ACI" === code){omniName = "AC:모바일결제앱카드개인정보이용동의";
	}else if("HA033_BTN_PIC" === code){omniName = "AC:모바일결제개인정보제공위탁";
	}else if("HA033_BTN_IDI" === code){omniName = "AC:모바일결제고유식별정보처리";
	}else if("HA033_BTN_COM" === code){omniName = "AC:모바일결제통신사이용약관";
	}else if("HA033_BTN_KCP" === code){omniName = "AC:모바일결제한국사이버결제이용약관";	
	}else if("HA034" === code){omniName = "AC:모바일결제ARS인증";
	
	// SM : SettingMenu
	}else if("HS001" === code){omniName = "SM:설정관리";
	}else if("HS011" === code){omniName = "SM:설정관리:알림설정";
	}else if("HS014" === code){omniName = "SM:알림이용안내";
	}else if("HS015" === code){omniName = "SM:휴대폰번호확인";
	}else if("HS016" === code){omniName = "SM:버전정보";
	}else if("HS016_BTN_ACI" === code){omniName = "SM:버전정보:앱카드이용약관";
	}else if("HS016_BTN_LOB" === code){omniName = "SM:위치기반서비스이용약관";			// HS027
	}else if("HS016_BTN_ONS" === code){omniName = "SM:버전정보:온라인서비스회원약관";
	}else if("HS016_BTN_PIP" === code){omniName = "SM:버전정보:개인정보처리방침";		// HS036
	}else if("HS016_BTN_PIH" === code){omniName = "SM:버전정보:개인정보취급방침";		// HS037
	}else if("HS017" === code){omniName = "SM:이용안내";
	}else if("HS017_BTN_SCM" === code){omniName = "SM:스마트금융거래10계명";			// HS038	
	}else if("HS018" === code){omniName = "SM:앱이용안내정보";
	}else if("HS019" === code){omniName = "SM:앱카드FAQ";
	}else if("HS023" === code){omniName = "SM:공지사항";
	}else if("HS024" === code){omniName = "SM:상세";
	}else if("HS025" === code){omniName = "SM:댓글쓰기";
	}else if("HS052" === code){omniName = "SM:댓글보기";
	}else if("HS040" === code){omniName = "SM:앱잠금번호설정";
	
	// SM : SideMenu
	}else if("SM007" === code){omniName = "SM:카드도난분실신고";
	}else if("SM008_BTN_MR" === code){omniName = "SM:카드도난분실신고:모바일신고";
	}else if("SM009" === code){omniName = "SM:고객센터";
	}else if("SM010" === code){omniName = "SM:ARS안내";	
	}else if("SM011_BTN_SC" === code){omniName = "SM:고객센터:SMS문자상담";
	}else if("SM012_BTN_EC" === code){omniName = "SM:고객센터:이메일상담";
	}

	if(omniName == ""){
		console.log("정의 되지 않은 코드 : 리턴!!");
		return "";
	}

	if(isWebViewPage) {
		return omniName;
	}

    ExOmniture(omniName); // Native 함수 호출
}

// 앞에 0을 채운다.
function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
};

// outback extend
$.extend( $.outback, {
	omniture: function(state) {
		ExOmniture(state);	
	},
	getPhoneNumber: function() {
		return getPhoneNumber();
	},
	doCustomCall: function(phoneNo, pageCode) {
		doCustomCall(phoneNo);
		if(pageCode) {
			omnitureHybrid(pageCode, false);
		}
	},
	setRegistPhoneNumberIOS: function(result, callback) {
		var funcName = "CB_EXGPDI";
		window[funcName] = callback;
		ExSetRegistPhoneNumberIOS(funcName, result);
	},
	toastMsg: function(msg, duration) {
		ExToastMsg(msg, duration || 1);
	},
	// 외부 webView으로 연결시 사용.
	moveToExWeb: function(param) {
		var loginInfo = $.outback.getLoginInfo();
		if(loginInfo) {
			param.ssoToken = loginInfo.ssoToken;
		}

		var queryParam = $.extend({}, $.queryParameters(param.url), $.queryParameters(mobileWebParam));
		var qmarkIndex = param.url.indexOf('?');
		if(qmarkIndex > -1) {
			param.url = param.url.slice(0, qmarkIndex);
		}
		
		if(wnIf.device == DT_ANDROID) {
			param.isNoMobile = 'N';
		}
		
		param.url += '?' + $.param(queryParam);

		param.url = encodeURIComponent(param.url);
		param.omni = omnitureHybrid(param.pageCode, true);
		
		WNMoveToNativePage('HDCMobileWebViewController', $.param(param), 'NEW_SCR', 'SLIDE_LEFT', 'DEFALUT');
	},
	getLoginInfo: function() {
		var loginInfo;
		loginInfo = $.outback.getVariable('loginInfo');

		if(!loginInfo) {
			return false;
		}
		
		loginInfo = JSON.parse(loginInfo);
		return loginInfo;
	},
	getPushAgmList: function() {
		var loginInfo = $.outback.getLoginInfo();
		var push_info = 'N',
			push_benefit = 'N',
			push_m_special = 'N';
		
		if(loginInfo) {
			var pushAgmList = loginInfo.pushAgmList;
			for( var i=0;i<pushAgmList.length;i++ ) {
				if(pushAgmList[i].SVC_HD_NUM === '1000000002') {
					//필수 고지/기타 알림
					push_info = pushAgmList[i].AGRM;
				}
				else if(pushAgmList[i].SVC_HD_NUM === '1000000001') {
					//추천 혜택 알림
					push_benefit = pushAgmList[i].AGRM;
				}
				else if(pushAgmList[i].SVC_HD_NUM === '1000000004') {
					//50% M포인트 스페셜 알림
					push_m_special = pushAgmList[i].AGRM; 
				}
			}
		}
		return {
			push_info : push_info,
			push_benefit : push_benefit,
			push_m_special : push_m_special
		};
	},
	setPushAgmList: function(push_info, push_benefit, push_m_special) {
		var loginInfo = $.outback.getLoginInfo();
		var pushAgmList = loginInfo.pushAgmList;
		for( var i=0;i<pushAgmList.length;i++ ) {
			if(pushAgmList[i].SVC_HD_NUM === '1000000002') {
				//필수 고지/기타 알림
				pushAgmList[i].AGRM = push_info;
			}
			else if(pushAgmList[i].SVC_HD_NUM === '1000000001') {
				//추천 혜택 알림
				pushAgmList[i].AGRM = push_benefit;
			}
			else if(pushAgmList[i].SVC_HD_NUM === '1000000004') {
				//50% M포인트 스페셜 알림
				pushAgmList[i].AGRM = push_m_special; 
			}
		}

		$.outback.setVariable('loginInfo', JSON.stringify(loginInfo));
	},
	// 기기 휴대폰 번호와 회원정보의 휴대폰 번호가 같은 지 확인한다.
	isDevicePhoneNumberEqualToLoginPhoneNumber: function() {
		if($.outback.getPhoneNumber() === $.outback.getLoginInfo().mobno) {
			return true;
		}
		return false;
	},
	joinCompleted: function() {
		ExJoinCompleted();
	},
	isAppCardRegistered: function() {
		return ExIsAppCardRegistered();
	},
	getAppVersion: function() {
		return ExGetAppVersion();
	},
	alert: function(obj, callback) {
		var funcName = "CB_EXSA";
		window[funcName] = callback || function(){};
		ExShowAlert(funcName, obj.title || '', obj.message);
	},
	confirm: function(obj, callback) {
		var funcName = "CB_EXSC";
		window[funcName] = callback;
		ExShowConfirm(funcName, obj.title || '', obj.message, obj.buttonTitle || '확인');
	}
});

//basePage에 omniture관련 코드 추가
$.widget("outback.basePage", $.outback.basePage, {
	options: {
		pageCode: ''
	},
	_create: function() {
		$.outback.loading('show');
		$('body').append('<link rel="stylesheet" href="../styles/animate.css">');
		
		var o = this.options;
		// MUST : basePage의 _create()를 호출한다.
		this._super();

		if(o.pageCode) {
			this._delay(function() {
				omnitureHybrid(o.pageCode, false);
			}, 1000);
		}
	},
	onHandlingNetworkError: function(callerServerName, trCode, errCode, errMessage, tagId) {
		var self = this;
		
		$.outback.alert({
			message: errMessage
		}, function() {
			self.onHistoryBackPage();
		});
	}
});

// popup에 omniture관련 코드 추가
$.widget("outback.popup", $.outback.popup, {
	options: {
		pageCode: ''
	},
	open: function() {
		var o = this.options;
		this._super();
		
		if(o.pageCode) {
			this._delay(function() {
				omnitureHybrid(o.pageCode, false);
			}, 100);
		}
	}
});


// var mobileWebDomain = "";
// var mobileWebParam = "?forcedAgent=MOBILE&from=APP";

// /**
//  * 통신할 서버 지정.
//  */
// var domain = "";
// if (WNGetVariable("IS_DEV") === "Y") {
// 	domain = "https://tmapp2.hyundaicard.com:444/";		// 개발계
// 	mobileWebDomain = "https://re-www.hyundaicard.com/";
// }
// else {
// 	domain = "https://accountapp.hyundaicard.com:8444/"; 	// 운영계
// 	mobileWebDomain = "https://www.hyundaicard.com/";
// }
// var servAddr = "";

// /**
//  * iOS와 Android 서버 구분
//  */
// if (navigator.appVersion.indexOf("Android") > -1 ) {
// 	WNLog("common.js", "navigator.appVersion.indexOf : Android");
// 	servAddr = domain + "rest/api/hyundaicard/person/android/";
// } else {
// 	WNLog("common.js", "navigator.appVersion : " + navigator.appVersion);
// 	servAddr = domain + "rest/api/hyundaicard/person/iphone/";
// }

