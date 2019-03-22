(function ($) {

    $.fn.autoHeight = function () {
        $('.auto-height').each(function () {
            let elemWidth = $(this).width();
            $(this).css('height', elemWidth + 'px');
        });
    };

})(jQuery);