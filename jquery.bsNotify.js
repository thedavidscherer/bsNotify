(function ( $ ) {

    $.fn.notify = function(options) {

        var settings = $.extend({
            type: 'error',
            code: '',
            message: '',
            prepend: true, 
            attachTo: this
        }, options);

        var alertClass;

        switch(settings.type) {
            case 'success': 
                alertClass = 'alert-success';
                break;
            case 'info': 
                alertClass = 'alert-info';
                break;
            case 'warning': 
                alertClass = 'alert-warning';
                break;
            default:
            case 'error':
                alertClass = 'alert-danger';
                break;
        }

        notice = $('<div/>').addClass('alert ' + alertClass + ' alert-dismissable');
        
        $('<button/>').addClass('close')
            .data('dismiss', 'alert')
            .attr({
                type: 'button',
                'aria-hidden': true,
                'data-dismiss': 'alert',
            })
            .html('&times;').appendTo(notice);

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