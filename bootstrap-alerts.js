(function ($) {
    $.fn.bootstrapAlert = function (options) {

        var settings = $.extend({
            type: '',
            dismissible: true,
            title: '',
            message: '',
            clear: true
        }, options);

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