/*
 * Bootstrap Alerts v1.0.1, jQuery plugin
 *
 * Copyright(c) 2015, Javier Prieto
 * http://jprieton.github.io/bootstrap-alerts/
 * 
 * A jQuery plugin for displaying Bootstrap alerts.
 * Licensed under the MIT License
 */
(function ($) {
    $.fn.bootstrapAlert = function (options) {

        var settings = $.extend({
            type: null,
            dismissible: true,
            title: '',
            message: '',
            clear: true
        }, options);

        if (settings.type.lenght === 0) {
            console.log('bootstrapAlert: type is empty');
            return false;
        }

        if (settings.message.lenght === 0) {
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

        if (settings.title.length > 0) {
            var title = $('<h4>').html(settings.title);
            $(title).appendTo(div);
        }

        $(div).append(settings.message);

        if (settings.clear) {
            $(this).empty();
        }

        $(div).appendTo(this);

        return this;
    };
})(jQuery);
