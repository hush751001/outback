(function($) {

// outback extend
$.extend( $.outback, {
  toastMsg: function(msg, duration) {

  },
  alert: function(obj, callback) {
  },
  confirm: function(obj, callback) {
  }
});

//basePage에 omniture관련 코드 추가
$.widget('outback.basePage', $.outback.basePage, {
  options: {
    pageCode: ''
  },
  _create: function() {
    $.outback.loading('show');
    $('body').append('<link rel="stylesheet" href="/styles/animate.css">');

    var o = this.options;
    // MUST : basePage의 _create()를 호출한다.
    this._super();

    if(o.pageCode) {
      this._delay(function() {
        //omnitureHybrid(o.pageCode, false);
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
$.widget('outback.popup', $.outback.popup, {
  options: {
    pageCode: ''
  },
  open: function() {
    var o = this.options;
    this._super();

    if(o.pageCode) {
      this._delay(function() {
        //omnitureHybrid(o.pageCode, false);
      }, 100);
    }
  }
});

})( jQuery );
