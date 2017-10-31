/*
 * Bootstrap Alerts v1.2.2, jQuery plugin
 *
 * Copyright(c) 2015, Javier Prieto
 * http://jprieton.github.io/bootstrap-alerts/
 * 
 * A jQuery plugin for displaying Bootstrap alerts.
 * Licensed under the MIT License
 */
(function ($) {
  'use strict';

  $.fn.bootstrapAlert = function (options) {

    var settings = $.extend({
      type: 'info',
      dismissible: true,
      heading: '',
      message: '',
      clear: true
    }, options);

    if (settings.type.length === 0) {
      console.log('bootstrapAlert: type is empty');
      return false;
    }
    
    if (settings.message.length === 0) {
      console.log('bootstrapAlert: message is empty');
      return false;
    }

    var div = $('<div class="alert alert-' + settings.type + '" role="alert">');

    if (settings.dismissible) {
      $(div).addClass('alert-dismissible');
      var button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close">');
      var span = $('<span aria-hidden="true">').html('&times;');
      $(span).appendTo(button);
      $(button).appendTo(div);
    }

    if (settings.heading.length > 0) {
      var heading = $('<h4 class="alert-heading">').html(settings.heading);
      $(heading).appendTo(div);
    }

    $(div).append(settings.message);

    if (settings.clear) {
      $(this).empty();
    }

    $(div).appendTo(this);

    return this;
  };
})(jQuery);
