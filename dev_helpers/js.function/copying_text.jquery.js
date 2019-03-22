(function ($) {

    /* Функция для копирования текста из одного элемента в другой*/
    $.fn.copyingText = function (where) {
        let copyElem = $(this).clone();
        let copyText = $(copyElem).text();
        $(where).text(copyText);
    };

})(jQuery);