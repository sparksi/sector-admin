/**
 * @file
 * Adds target _blank to certain contextual linsk
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.targetBlackToContextualLinks = {
    attach: function (context) {
      $(document).on('click', '.js-media-library-item .contextual button', function () {
        var contextualLinks = $('.js-media-library-item .contextual a');
        contextualLinks.each(function(e) {
          $(this).attr('target', '_blank');
        });
      });
    }
  };
})(jQuery, Drupal);
