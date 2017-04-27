
(function( $ ) {

$.widget('outback.page', $.outback.basePage, {
  _create: function() {
    // MUST : basePage의 _create()를 호출한다.
    this._super();
    
    this.setEvent();
  },
  onInitPage: function() {
    // deviceready 때
  },
  onHistoryBackPage: function() {
    $.outback.confirm({
      message: '진행 중인 결제를 중단합니다.\n중단하시려면 [확인]버튼을 누르세요.',
      buttonTitle: '확인'
    }, function(result) {
      if(result === 'YES') {
        $.outback.historyBack();
      }
    });
  },
  /**
   * 화면 이벤트 설정
   */
  setEvent: function() {
    this._on({
      'vclick #btnOK': 'onBtnOK_Click'
    });

    $.outback.loading('hide');
  },
  onBtnOK_Click: function(e) {
    
  $.outback.popupOpen('#popupTelecom', {
    modal : false,
      beforeopened: function() {
        $(this).on('vclick', '.ui-content button', function(e) {
          var text = $(e.target).text();
          $.outback.popupClose('#popupTelecom');
          
          if(text === 'SKT' || text === 'SK알뜰폰') {
            $.outback.moveToExWeb({
              url: mobileWebDomain + 'appcardapp/terms/HL022_2.html',
              pageCode: pageCode
            });
          }
          else if(text === 'KT' || text === 'KT알뜰폰') {
            $.outback.moveToExWeb({
              url: mobileWebDomain + 'appcardapp/terms/HL022_1.html',
              pageCode: pageCode
            });
          }
          else if(text === 'LG U+' || text === 'LG알뜰폰') {
            $.outback.moveToExWeb({
              url: mobileWebDomain + 'appcardapp/terms/HL022_3.html',
              pageCode: pageCode
            });
          }

          return false;
        });
      },
      closed: function() {
        $(this).off('vclick', '.ui-content button');
      }
    });

    return false;
  }
});

})( jQuery );
