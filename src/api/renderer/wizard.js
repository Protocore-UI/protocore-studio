(function() {
  'use strict';

  var $next = $('.next');
  var $previous = $('.previous');
  var hasAgreedToLicense = false;

  $('#appWizard').bootstrapWizard({
    onNext: function(tab, navigation, index) {

      /**
       * Check 'hasAgreedToLicense' value.
       * If its false disabled next tab/page show (return false)
       * else go to next tag/page.
       */
      if(!hasAgreedToLicense) {
        return false;
      } else {
        $previous.find('button').removeClass('disabled');
      }

    },
    onTabShow: function(tab, navigation, index) {

      /**
       * Check if the user is on license agreement tab/page.
       */
      if(index === 0) {

        /**
         * Add disable class by default to next and previous buttons.
         */
        $next.find('button').addClass('disabled');
        $previous.find('button').addClass('disabled');

        /**
         * Bind the change event to check if the user agree on the license terms.
         * If 'yes' then set 'hasAgreedToLicense' flag to 'true' else set it to 'false'.
         */
        $('input[name=agreement]').change(function(){
          if($(this).is(":checked")) {
              var hasAgreed = Number($(this).val());

              if(!hasAgreed) {
                $next.find('button').addClass('disabled');
                hasAgreedToLicense = false;
              } else {
                $next.find('button').removeClass('disabled');
                hasAgreedToLicense = true;
              }
          }
        });
      }

    }
  });

})();
