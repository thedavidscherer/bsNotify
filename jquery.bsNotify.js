(function ( $ ) {

    $.fn.bsNotify = function(options) {

        var settings = $.extend({
            type: 'error',
            code: '',
            message: '',
            prepend: true, 
            attachTo: this,
            dismissable: true,
            typeClasses: {
                success: 'alert-success',
                info: 'alert-info',
                warning: 'alert-warning',
                error: 'alert-danger'
            }
        }, options);

        notice = $('<div/>').addClass('alert ' + settings.typeClasses[settings.type]);

        if(settings.dismissable) {

            notice.addClass('alert-dismissable');
        
            $('<button/>').addClass('close')
                .attr({
                    type: 'button',
                    'aria-hidden': true,
                    'data-dismiss': 'alert'
                })
                .html('&times;')
                .appendTo(notice);

        }

        $('<strong/>').html(settings.code).appendTo(notice);

        notice.append('&nbsp;&mdash;&nbsp;').append(settings.message);

        if(settings.prepend) {
            notice.prependTo(settings.attachTo);
        } else {
            notice.appendTo(settings.attachTo);
        }

        return this;

    };

}( jQuery ));