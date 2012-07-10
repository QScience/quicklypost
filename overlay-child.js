(function ($) {

  // Adjust the overlay dimensions.
  Drupal.behaviors.quicklypost = {
    
    attach: function (context) {
      $('#overlay', context).each(function() {
       // var $test = $(this).find('.node-type-test');
        
      //  if ($test.length){
          // adjust the overlay
          $(this).css({
            'width'     : '450px',
            'min-width' : '450px'
          });
            
      //  }  
      }).addClass('quicklypost-adjusted');
    }
    
  };

})(jQuery);