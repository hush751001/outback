
(function( $ ) {

$.widget('outback.page', $.outback.basePage, {
  _create: function() {
    // MUST : basePage의 _create()를 호출한다.
    this._super();
    
    $.outback.loading('hide');
  }
});

})( jQuery );
